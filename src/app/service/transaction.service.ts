import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Transaction {
  reference : any;
  dateTransaction :any;
  montantDebite:any;
  montantCredite:any;
  motif:any;
  typeUser:any;
  typeTransac:any;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  constructor(private http : HttpClient) { }

  getAllTransaction(){
    return this.http.get('http://localhost:8080/api/v1/allTransaction');
  }
  saveTransaction(t:any){
    return this.http.post('http://localhost:8080/api/v1/Transaction',t);
}


 // deleteTransaction(t:Transaction){
   // return this.http.delete('http://localhost:8080/api/v1//deleteTransaction',t);
 // }
}
