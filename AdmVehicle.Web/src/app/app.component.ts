import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from './app.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Veiculo } from './modelos/veiculo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  veiculos: Array<Veiculo> = [];

  constructor(private fb: FormBuilder,  private veiculoService: VeiculoService) {
    this.form = this.fb.group({
      codFipe: ['', Validators.required],
      ano: ['', Validators.required]
    });
  }
  consultar() {
    debugger
    let codFipe = this.form.get('codFipe')?.value;
    let ano = this.form.get('ano')?.value;
    this.veiculoService.consultarDadosveiculo(codFipe, ano).pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(
      (data: Array<Veiculo>|any) => {
        this.veiculos = data ;
      } 
    );
  }
}
