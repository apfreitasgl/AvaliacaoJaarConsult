import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Veiculo } from './modelos/veiculo';


@Injectable({ providedIn: 'root' })

export class VeiculoService {

  constructor(private http: HttpClient) { }


  consultarDadosveiculo(codFipe: string, ano: number): Observable<Veiculo> {
    return this.http.post<Veiculo>(environment.apiUrlV1 + `Vehicle/VehicleDetailsInFipeTableAsync?codeFipe=${codFipe}&yearVehicle=${ano}`,null);
  }

  




  // get(id: number): Observable<Food> {
  //   return this.http.get<Food>(environment.apiUrlV1 + `FoodProvider/Get?id=${id}`);
  // }

  // getList(): Observable<Food[]> {
  //   return this.http.get<Food[]>(environment.apiUrlV1 + 'FoodProvider/GetList');
  // }

  // insert(foodForm: Food): Observable<Food> {
  //   return this.http.post<Food>(environment.apiUrlV1 + 'FoodProvider/Insert', foodForm);
  // }

  // Vehicle?codeFipe=weqw&yearVehicle=0

  // update(foodForm: Food): Observable<Food> {
  //   return this.http.put<Food>(environment.apiUrlV1 + 'FoodProvider/Update', foodForm);
  // }

  // delete(id: number): Observable<Food> {
  //   return this.http.delete<Food>(environment.apiUrlV1 + `FoodProvider/Delete?id=${id}`);
  // }
} 
