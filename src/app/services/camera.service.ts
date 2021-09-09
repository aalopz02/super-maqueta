import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


  export class CameraService {
    address = "http://localhost:5000/";

    constructor(private http: HttpClient) { }

    get(){
        return this.http.get(this.address + "camera");
    }

  }