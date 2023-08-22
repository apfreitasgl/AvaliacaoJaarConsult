import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { VeiculoService } from 'src/app/app.service';
import { Veiculo } from 'src/app/modelos/veiculo';

@Component({
  selector: 'app-form-consulta-por-placa',
  templateUrl: './form-consulta-por-placa.component.html',
  styleUrls: ['./form-consulta-por-placa.component.scss']
})
export class FormConsultaPorPlacaComponent {
  @Input() veiculos: Array<Veiculo> = [];

  constructor(private veiculoService: VeiculoService, private route: Router) {

  }
  consultarPelaPlaca(placa: string) {
    this.route.navigate(['/placa', placa]);
  }
}
