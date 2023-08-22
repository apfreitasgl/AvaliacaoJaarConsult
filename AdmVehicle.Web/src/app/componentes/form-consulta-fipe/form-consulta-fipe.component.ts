import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { VeiculoService } from 'src/app/app.service';
import { Veiculo } from 'src/app/modelos/veiculo';


@Component({
  selector: 'app-form-consulta-fipe',
  templateUrl: './form-consulta-fipe.component.html',
  styleUrls: ['./form-consulta-fipe.component.scss']
})
export class FormConsultaFipeComponent {
  formConsulta: FormGroup;
  @Input() veiculos: Array<Veiculo> = [];


  constructor(private fb: FormBuilder, private veiculoService: VeiculoService, private router: Router) {
    this.formConsulta = this.fb.group({
      codFipe: ['', Validators.required],
      ano: []
    });
  }
  
  consultar() {
    let codFipe = this.formConsulta.get('codFipe')?.value;
    let ano: number = this.formConsulta.get('ano')?.value;
    ano = ano ? ano : 0;
    this.veiculoService.consultarDadosVeiculo(codFipe, ano).pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(
      (data: Array<Veiculo> | any) => {
        
        this.veiculos = data;
        if(this.veiculos.length <= 0){
          alert('Veiculo não localizado');
        }
      }
    );
  }
}
