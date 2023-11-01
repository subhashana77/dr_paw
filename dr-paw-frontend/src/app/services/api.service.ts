import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constent} from "../const/consents";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  registerUser(data: any): Observable<any> {
    return this.httpClient.post(Constent.API_URL + "user/register", data);
  }
}
