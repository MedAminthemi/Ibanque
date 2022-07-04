import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeServiceService {

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
}
