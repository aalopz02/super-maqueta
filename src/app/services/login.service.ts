import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class LoginService {
    address = "http://192.168.1.2:5000/login";

    constructor(private http: HttpClient) { }

    get(user :string , password : string) : Observable<any>{
        return this.http.get(this.address + "/" + user + "/" + password);
    }

}