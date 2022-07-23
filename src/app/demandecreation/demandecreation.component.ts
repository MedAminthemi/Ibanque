import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from 'app/service/demande.service';

@Component({
  selector: 'app-demandecreation',
  templateUrl: './demandecreation.component.html',
  styleUrls: ['./demandecreation.component.css']
})
export class DemandecreationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private demandeService : DemandeService , private router: Router) { }
  adddemande = this.formBuilder.group({   
    libelle: ['', [Validators.required]],
    dateCeation:[],
    statut:[]
    }); 
    submitted = false ;
    radio=1 ;
  ngOnInit(): void {
  }
  collectDemande() {
  
    
    if(this.radio == 2 ){ 
      this.adddemande.value['dateCeation'] = new Date() ;
    this.adddemande.value['statut'] = 'E';

   
    this.demandeService.saveDemandeC(this.adddemande.value).subscribe((data) => {
      console.log(data);
    });
    this.adddemande.reset();
    this.router.navigate(['/demande-list']);
  } if(this.radio == 1 ){ 
    this.adddemande.value['dateCeation'] = new Date() ;
  this.adddemande.value['statut'] = 'E';

 
  this.demandeService.saveDemandeCh(this.adddemande.value).subscribe((data) => {
    console.log(data);
  });
  this.adddemande.reset();
  this.router.navigate(['/demande-list']);
}
   
  }

}
