import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationDemandeComponent } from './creation-demande/creation-demande.component';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes = [
  {component:DemandeComponent , path:"demande"},
  {component:CreationDemandeComponent , path:"creation-demande"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
