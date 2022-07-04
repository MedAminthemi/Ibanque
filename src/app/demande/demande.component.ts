import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DemandeServiceService } from '../service/demande-service.service';

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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['reference', 'libelle', 'statut', 'dateCeation'];
  ngAfterViewInit() {
    this.demandesCreationCompte.paginator = this.paginator;
  }
  ngOnInit(): void {
   
    
    this.demandeService.getAlldemandesCredit().subscribe((data) => {
        this.demandesCredits = data;
    
      }); 

      this.demandeService.getAlldemandesCreationCompte().subscribe((data) => {
        this.demandesCreationCompte = data;
      });
      this.demandeService.getAllChequier().subscribe((data) => {
        this.demandeChequier = data;
      });

}

}

