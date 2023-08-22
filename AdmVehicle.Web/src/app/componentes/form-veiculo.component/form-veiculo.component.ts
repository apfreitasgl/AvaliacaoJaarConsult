import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { VeiculoService } from 'src/app/app.service';
import { Veiculo } from 'src/app/modelos/veiculo';


@Component({
  selector: 'app-form-veiculo',
  templateUrl: './form-veiculo.component.html',
  styleUrls: ['./form-veiculo.component.scss']
})
export class FormVeiculoComponent implements OnInit {
  habilitaEdicao: boolean = false;
  acao: string = '';
  form: FormGroup = this.fb.group({
    ano: ['', Validators.required],
    id: ['', Validators.required],
    valor: ['', Validators.required],
    marca: ['', Validators.required],
    modelo: ['', Validators.required],
    anoModelo: ['', Validators.required],
    combustivel: ['', Validators.required],
    codigoFipe: ['', Validators.required],
    mesReferencia: ['', Validators.required],
    tipoVeiculo: ['', Validators.required],
    siglaCombustivel: ['', Validators.required],
    dataConsulta: ['', Validators.required],
    placa: ['', Validators.required],
  });

  @Input() veiculos: Array<Veiculo> = [];

  constructor(private fb: FormBuilder, private veiculoService: VeiculoService, private activatedRoute: ActivatedRoute, private route: Router) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametros => {
      let placa = parametros['placa'];
      if (placa) {
        this.consultarPelaPlaca(placa);
      }
    }
    );
  }
  consultarPelaPlaca(placa: string) {
    this.veiculoService.consultarPelaPlaca(placa).pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(
      (data: Array<Veiculo> | any) => {
        this.veiculos.push(data);
        this.habilitaEdicao = true;
      }
    );
  }
  registrarAcao(acao: string) {
    this.acao = acao;
  }
  submeter() {
    let veiculo = this.form.getRawValue() as Veiculo;
    if (this.habilitaEdicao) {
      if (this.acao == 'excluir') {
        this.veiculoService.excluirVeiculo(veiculo.id).pipe(
          debounceTime(1000),
          distinctUntilChanged()
        ).subscribe((data: string | any | undefined) => {
          debugger
          alert('Veiculo excluído com sucesso!');
          this.route.navigateByUrl("/");
        }
        );
      } else {
        this.veiculoService.atualizarVeiculo(veiculo).pipe(
          debounceTime(1000),
          distinctUntilChanged()
        ).subscribe(
          (data: any) => {
            alert('Veiculo alterado com sucesso!');
            this.route.navigateByUrl("/");
          }
        );
      }

    } else {
      this.veiculoService.inserirVeiculo(veiculo).pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(
        (data: any) => {
          debugger
          alert('Veiculo inserido com sucesso!');
          let indice = this.veiculos.indexOf(veiculo)+1;
          this.veiculos.splice(indice, 1);
          if (this.veiculos.length == 0)
            this.route.navigateByUrl("/");
        }
      );
    }
  }
}
