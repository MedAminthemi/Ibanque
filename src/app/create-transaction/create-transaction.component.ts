import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'app/service/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private transactionService : TransactionService, private router: Router) { }
  
  addtransaction = this.formBuilder.group({   
    montantDebite: ['', [Validators.required]],
    montantCredite: ['', [Validators.required]],
    dateTransaction:[],
    typeTransac:[],
    motif:[]
    }); 
    submitted = false ;
    radio=1 ;

  ngOnInit(): void {

  }
  collectTransaction() {
  
    
    if(this.radio == 2 ){ 
      this.addtransaction.value['dateTransaction'] = new Date() ;
    this.addtransaction.value[' typeTransac'] = 'Vir';
    this.transactionService.saveTransaction(this.addtransaction.value).subscribe((data) => {
      console.log(data);
    });
    this.addtransaction.reset();
alert("cration transaction OK");
  } 
  
  if(this.radio == 1 ){ 
    this.addtransaction.value['dateTransaction'] = new Date() ;
    this.addtransaction.value['typeTransac'] = 'Vers';
    this.transactionService.saveTransaction(this.addtransaction.value).subscribe((data) => {
    console.log(data);
  });
  this.addtransaction.reset();
  alert("cration transaction OK");

}

if(this.radio == 3 ){ 
  this.addtransaction.value['dateTransaction'] = new Date() ;
  this.addtransaction.value['typeTransac'] = 'Retr';
  this.transactionService.saveTransaction(this.addtransaction.value).subscribe((data) => {
  console.log(data);
});
this.addtransaction.reset();
alert("cration transaction OK");
}
   
  }

}
