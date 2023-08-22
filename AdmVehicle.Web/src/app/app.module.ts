import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormVeiculoComponent } from './componentes/form-veiculo.component/form-veiculo.component';
import { FormConsultaPorPlacaComponent } from './componentes/form-consulta-por-placa.component/form-consulta-por-placa.component';
import { FormConsultaFipeComponent } from './componentes/form-consulta-fipe/form-consulta-fipe.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormVeiculoComponent,
    FormConsultaPorPlacaComponent,
    FormConsultaFipeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
