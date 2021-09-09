import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DevicesServices } from '../services/devices.service';
import { timer } from 'rxjs'
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: any;
  cameraInit = false;
  imageSrc = "http://localhost:8080/pato.jpeg";
  btnText = "Tomar Foto";
  buttonLights = [{name:'cocina',class:'posCocina'},
                  {name:'sala',class:'posSala'},
                  {name:'comedor',class:'posComedor'},
                  {name:'c1',class:'posCuarto1'},
                  {name:'c2',class:'posCuarto2'}];
  buttonDoors = [{name:'pd',class:'posPuertaPrincipal'},
                  {name:'pt',class:'posPuertaTrasera'},
                  {name:'pc1',class:'posPCuarto1'},
                  {name:'pc2',class:'posPCuarto2'}];

  constructor(private router: Router, private devicesServices: DevicesServices, private cameraService : CameraService) { }

  ngOnInit(): void {
    this.observableTimer();
  }

  apagarTodo(){
    this.devicesServices.setAll(0).subscribe((resp: any) => {
      const answer = resp;
    });
    this.getAllDevs();
  }

  encenderTodo(){
    this.devicesServices.setAll(1).subscribe((resp: any) => {
      const answer = resp;
    });
    this.getAllDevs();
  }

  toggleImg(){
    if (this.cameraInit){
      this.cameraInit = !this.cameraInit;
      this.imageSrc = "http://localhost:8080/pato.jpeg";
      this.btnText = "Tomar Foto";
    } else {
      this.cameraService.get().subscribe((resp:any) => {
        this.imageSrc="data:image/png;base64," + resp;
      });
      this.btnText = "Tomar otra";
    }
    
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
