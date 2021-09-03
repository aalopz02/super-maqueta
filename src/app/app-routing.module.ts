import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjeComponent } from './eje/eje.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'eje', component: EjeComponent},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
