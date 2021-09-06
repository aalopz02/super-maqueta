import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })


  export class DevicesServices {
    address = "http://localhost:5000/";

    constructor(private http: HttpClient) { }

    getAll(){
      return this.http.get(this.address + "home");
    }

    patch(devId :string, devState : number){
      return this.http.patch(this.address + "home/" + devId + "/" + devState.toString(), {});
    }

    setAll(devState : number){
      return this.http.patch(this.address + "allDevs/" + devState.toString(), {});
    }

  }