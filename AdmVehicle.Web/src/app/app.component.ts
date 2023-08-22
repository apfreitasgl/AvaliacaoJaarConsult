import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from './app.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Veiculo } from './modelos/veiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
   
  }
 
}
