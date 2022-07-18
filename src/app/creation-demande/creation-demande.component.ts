import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeServiceService } from '../service/demande-service.service';


@Component({
  selector: 'app-creation-demande',
  templateUrl: './creation-demande.component.html',
  styleUrls: ['./creation-demande.component.css']
})
export class CreationDemandeComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private demandeService : DemandeServiceService , private router: Router) { }

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

    console.log(this.radio);
    
    if(this.radio == 2 ){ 
      this.adddemande.value['dateCeation'] = new Date() ;
    this.adddemande.value['statut'] = 'E';

   
    this.demandeService.saveDemandeC(this.adddemande.value).subscribe((data) => {
      console.log(data);
    });
    this.adddemande.reset();
    this.router.navigate(['/demande']);
  }

  if(this.radio == 1 ){ 
    this.adddemande.value['dateCeation'] = new Date() ;
  this.adddemande.value['statut'] = 'E';

 
  this.demandeService.saveDemandeCh(this.adddemande.value).subscribe((data) => {
    console.log(data);
  });
  this.adddemande.reset();
  this.router.navigate(['/demande']);
}
   
  }

}
