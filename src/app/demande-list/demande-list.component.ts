import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'app/service/demande.service';
class Demande {
  reference : any;
  dateCeation :any;
  libelle:any;
  statut:any;
  user:any;
}

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit {
  constructor(private demandeService : DemandeService) { }
  demandesCredits : any = [];
  demandesCreationCompte : any = [];
  demandeChequier : any= [];
  demande : Demande ;
  
  ngOnInit(): void {
   
    
    this.demandeService.getAlldemandesCredit().subscribe((data) => {
        console.log(data);
        this.demandesCredits = data;
    
      }); 

      this.demandeService.getAlldemandesCreationCompte().subscribe((data) => {
        this.demandesCreationCompte = data;
      });
      this.demandeService.getAllChequier().subscribe((data) => {
        this.demandeChequier = data;
      });

}

ValiderDemandeCC(a:Demande){
  a.statut = 'V'
  this.demandeService.saveDemandeCC(a).subscribe((data) => {
    console.log(data);
  });
}


ValiderDemandeC(a:any){

  a.statut="V";
  this.demandeService.saveDemandeC(a).subscribe((data) => {
    console.log(data);
  });


}
ValiderDemandeCh(a:Demande){
  a.statut = 'V'
  this.demandeService.saveDemandeCh(a).subscribe((data) => {
    console.log(data);
  });
}

refuserDemandeC(a:Demande){
  a.statut = 'R'
  this.demandeService.saveDemandeC(a).subscribe((data) => {
    console.log(data);
  });
  
}

refuserDemandeCC(a:Demande){
  a.statut = 'R'
  this.demandeService.saveDemandeCC(a).subscribe((data) => {
    console.log(data);
  });
}
refuserDemandeCh(a:Demande){
  a.statut = 'R'
  this.demandeService.saveDemandeCh(a).subscribe((data) => {
    console.log(data);
  });
}

}
