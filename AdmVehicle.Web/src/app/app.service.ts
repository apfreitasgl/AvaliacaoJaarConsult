import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Veiculo } from './modelos/veiculo';


@Injectable({ providedIn: 'root' })

export class VeiculoService {

  constructor(private http: HttpClient) { }


  consultarDadosVeiculo(codFipe: string, ano: number = 0): Observable<Veiculo> {
    return this.http.post<Veiculo>(environment.apiUrlV1 + `Vehicle/VehicleDetailsInFipeTableAsync?codeFipe=${codFipe}&yearVehicle=${ano}`, null);
  }
  inserirVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(environment.apiUrlV1 + 'Vehicle', veiculo);
  }
  consultarPelaPlaca(placa: string): Observable<Veiculo> {
    return this.http.get<Veiculo>(environment.apiUrlV1 + `Vehicle/consultarPelaPlaca?placa=${placa}`);
  }
  atualizarVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(environment.apiUrlV1 + 'Vehicle/', veiculo);
  }
  excluirVeiculo(id: number): Observable<any> {
    return this.http.delete<any>(environment.apiUrlV1 + `Vehicle/?id=${id}`);
  }
} 
