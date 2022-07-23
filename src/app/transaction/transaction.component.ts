import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'app/service/transaction.service';
class Transaction {
  reference : any;
  dateTransaction :any;
  montantDebite:any;
  montantCredite:any;
  motif:any;
  typeUser:any;
  typeTransac:any;

}


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private transactionService : TransactionService) { }
  transaction : Transaction;
  transactions : any= [];

  ngOnInit(): void {

    this.transactionService.getAllTransaction().subscribe((data) => {
      console.log(data);
      this.transactions = data;
  
    });
  
  }

}
