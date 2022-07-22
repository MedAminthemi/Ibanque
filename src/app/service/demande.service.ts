import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
class Demande {
  reference : any;
  dateCeation :any;
  libelle:any;
  statut:any;
  user:any;
}
@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http : HttpClient) { }


  getAlldemandesCredit(){
    return this.http.get('http://localhost:8080/api/v1/alldemandeCredit');
  }

  getAlldemandesCreationCompte(){
    return this.http.get('http://localhost:8080/api/v1/allDemandeCreationCPT');
  }

  getAllChequier(){
    return this.http.get('http://localhost:8080/api/v1/alldemandecheq');
  }
  saveDemandeCC(a:Demande){
    return this.http.post('http://localhost:8080/api/v1/demandeCreationCPT',a);
  }
  saveDemandeC(a:any){
   return this.http.post('http://localhost:8080/api/v1/demandeCredit',a) ;
  }
  saveDemandeCh(a:any){
    return this.http.post('http://localhost:8080/api/v1/demandecheq',a);
  }
}
