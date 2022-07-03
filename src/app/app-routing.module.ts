import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes = [
  {component:DemandeComponent , path:"demande"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
