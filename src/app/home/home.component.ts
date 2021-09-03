import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DevicesServices } from '../services/devices.service';
import { timer } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: any;

  constructor(private router: Router, private devicesServices: DevicesServices) { }

  ngOnInit(): void {
    this.observableTimer();
  }

  camera(){
    console.log("EL PATO!!!!!!!!!!!!")
  }

  observableTimer() {
    const source = timer(1000, 5000);
    const abc = source.subscribe(val => {
      this.devicesServices.getAll().subscribe((resp:any) => {
        this.data=resp;
        console.log(resp);
      });
    });
  }

  verificarEstado(id : string){
    if (this.data["luces"][id] == 1){
      return true;
    } else {
      return false;
    }
  }

  verificarEstadoPuerta(id : string){
    if (this.data["puertas"][id] == 1){
      return true;
    } else {
      return false;
    }
  }

  getAllDevs(){
    this.devicesServices.getAll().subscribe((resp: any) => {
      const answer = resp;
      console.log(answer);
      this.data = answer;
    });
  }

  setState(id : string){
    var newState = 0;
    if (this.data["luces"][id] == 1){
      newState = 0;
    } else {
      newState = 1;
    }
    this.devicesServices.patch(id,newState).subscribe((resp: any) => {
      const answer = resp;
    });
    this.getAllDevs();
  }

}
