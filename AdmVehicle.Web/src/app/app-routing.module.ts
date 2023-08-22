import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConsultaPorPlacaComponent } from './componentes/form-consulta-por-placa.component/form-consulta-por-placa.component';
import { FormVeiculoComponent } from './componentes/form-veiculo.component/form-veiculo.component';
import { FormConsultaFipeComponent } from './componentes/form-consulta-fipe/form-consulta-fipe.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'placa', component: FormConsultaPorPlacaComponent },
  { path: 'fipe', component: FormConsultaFipeComponent },
  { path: 'placa/:placa', component: FormVeiculoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
