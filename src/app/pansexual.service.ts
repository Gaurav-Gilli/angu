import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './gay/gay';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class PansexualService {

  private _url:string = "https://dummyjson.com/users"
  
  constructor(private http: HttpClient) { }
  something(){
    return this.http.get(this._url);
  }
}
