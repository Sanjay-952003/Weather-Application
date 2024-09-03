import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey="99ec9f181dmsh81af9b8a87cda48p11de77jsn00be96365f82";
  private apiUrl="hhttps://open-weather13.p.rapidapi.com/city";
  constructor(private http:HttpClient) { }

  searchWeatherByCity(city:string):Observable<any>{
    const headers = new HttpHeaders()
     .set("x-rapidapi-key",this.apiKey)
     .set("x-rapidapi-host","open-weather13.p.rapidapi.com");

     const option={headers};

     return this.http.get(`${this.apiUrl}/${city}`,option)
  }
}
