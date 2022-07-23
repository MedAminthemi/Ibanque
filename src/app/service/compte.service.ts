import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
class Compte

  {numCompte:any;
  
   argent:any;

    typeCompte:any;
}
   

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient) { }

  get_courants()
{
    return this.http.get('http://localhost:8080/api/v2/allcourants');
  }
  get_epargnes(){
    return this.http.get('http://localhost:8080/api/v2/allepargnes');
  }
  get_epargne(){
    return this.http.get('http://localhost:8080/api/v2/Epargne/{id}');
  }
  get_courant(){
    return this.http.get('http://localhost:8080/api/v2/Courant/{id}');
  }
  save_courant(a:any){
    return this.http.get('http://localhost:8080/api/v2/Courant');
  }
  save_epargne(a:any){
    return this.http.get('http://localhost:8080/api/v2/Epargne');
  }
  crediter_courant(){
    return this.http.get('http://localhost:8080/api/v2/versement/{id}/{montant}');
  }
  crediter_epargne(){
  return this.http.get('http://localhost:8080/api/v2/versement/{id}/{montant}');
}
debiter_courant(){
  return this.http.get('http://localhost:8080/api/v2/virement/{id}/{montant}');
}
debiter_epargne(){
  return this.http.get('http://localhost:8080/api/v2/virement/{id}/{montant}');

  }
  
}

