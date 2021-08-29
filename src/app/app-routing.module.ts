import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjeComponent } from './eje/eje.component';

const routes: Routes = [
  { path: 'eje', component: EjeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
