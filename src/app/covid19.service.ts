import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Covid19Service {

  constructor(private service : HttpClient) {

   }

   getCovid19ServiceReport(){

    return this.service.get("https://corona.lmao.ninja/v3/covid-19/countries");
   }
}
