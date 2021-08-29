import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { DevicesServices } from '../services/devices.service';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-eje',
  templateUrl: './eje.component.html',
  styleUrls: ['./eje.component.css']
})
export class EjeComponent implements OnInit {

  constructor(private userLoginService: LoginService, private deviceService: DevicesServices, private picService : CameraService) { }

  ngOnInit(): void {
    this.ejelogin();
    this.getAllDevs();
    this.setState();
    this.getAllDevs();
    this.takePic();
  }

  takePic(){
    this.picService.get().subscribe((resp: any) => {
      const answer = resp;
      console.log(answer);
    });
  }

  getAllDevs(){
    this.deviceService.getAll().subscribe((resp: any) => {
      const answer = resp;
      console.log(answer);
    });
  }

  setState(){
    this.deviceService.patch("c1",1).subscribe((resp: any) => {
      const answer = resp;
      console.log(answer);
    });
  }

  ejelogin(){
    this.userLoginService.get("aalopz", "clave1123").subscribe((resp: any) => {
      const answer = resp;
      console.log("clave mala: ");
      console.log(answer);
    });
    this.userLoginService.get("aalopzaaaa", "clave1").subscribe((resp: any) => {
      const answer = resp;
      console.log("user malo: ");
      console.log(answer);
    });
    this.userLoginService.get("aalopz", "clave1").subscribe((resp: any) => {
      const answer = resp;
      console.log("todo bien: ");
      console.log(answer);
    });
  }
}
