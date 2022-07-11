import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DemandeServiceService } from '../service/demande-service.service';
class Demande {
  reference : any;
  dateCeation :any;
  libelle:any;
  statut:any;
  user:any;
}

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})

export class DemandeComponent implements OnInit {

  constructor(private demandeService : DemandeServiceService) { }
  demandesCredits : any = [];
  demandesCreationCompte : any = [];
  demandeChequier : any= [];
  demande : Demande ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['reference', 'libelle', 'statut', 'dateCeation'];
  ngAfterViewInit() {
    this.demandesCreationCompte.paginator = this.paginator;
  }
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

