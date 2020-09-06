import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Trackercovid19Service {

  constructor(private http:HttpClient) { 

  }

  public covid19reports(){
   return this.http.get("https://disease.sh/v3/covid-19/nyt/states?lastdays=30");
  }
}
