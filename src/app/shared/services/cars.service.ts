import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly API = 'http://localhost:3001'


  getCars(): Promise<any> {
    return this.http.get(`${this.API}/carros`).toPromise();
  }


  addCar(carro) {
    return this.http.post(`${this.API}/carros`, carro).toPromise();
  }


  getMarcas(): Promise<any> {
    return this.http.get(`${this.API}/marcas`).toPromise();
  }



}
