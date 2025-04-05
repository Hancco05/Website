import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'b7cd5b2cdc724c319b7a7a49d73e0eb5';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }
  
  getEstadoTiempo(ciudad: string, codigo: string) {
    const url = '${ urlBase }?q=${ciudad},${ codigo }&appid=${appId}';
    return this.http.get(url);
  }
}
