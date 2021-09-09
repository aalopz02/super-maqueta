import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LogInForm: FormGroup;
  error: string | undefined;

  constructor(private formB: FormBuilder, private router: Router, private userLoginService: LoginService) { 
    this.LogInForm = this.formB.group({
    userID: [''],
    password: ['']
    });
  }

  ngOnInit(): void {
  }

  /**
   * Listener del form, llama al servicio para comparar contraseñas y redirigir acorde a como se seleccionó
   * @param formData 
   */
  onSubmit(formData: any){
    
    this.userLoginService.get(formData.userID, formData.password).subscribe((resp: any) => {
      const answer = resp;

      if (answer == -1){
        this.error = 'Usuario no existe';
        return;
      } else if (answer == 0){
        this.error = 'Clave mal';
        return;
      }
      this.router.navigateByUrl('home');
    });
  }
}
