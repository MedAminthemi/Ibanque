
  import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from 'app/service/compte.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private compteService : CompteService , private router: Router) { }
  addcompte = this.formBuilder.group({   
    cinUser: ['', [Validators.required]],
    numCompte: ['', [Validators.required]],
 
    }); 

   
    submitted = false ;
    radio=1 ;
  ngOnInit(): void {

  }



gererCompte() {
  
    console.log("ikram") ; 
    if(this.radio == 1 ){ 
     // this.addcompte.value['numCompte'] = 'N' ;
     // this.addcompte.value['cinUser'] = 'C';
  
   console.log('data'+JSON.stringify(this.addcompte.value)) ; 
   
    this.compteService.save_epargne(this.addcompte.value).subscribe((data) => {
      console.log(data);
     // this.addcompte.reset();
     // this.router.navigate(['/compte']);
  
    });
  
  
  }
  
  if(this.radio == 2 ){ 
   // this.addcompte.value['numCompte'] = 'N' ;
 // this.addcompte.value['numCompte'] = 'C';
 
 
  this.compteService.save_courant(this.addcompte.value).subscribe((data) => {
    console.log(data);
   // this.addcompte.reset();
    //this.router.navigate(['/compte']);
  
  });
} }
   
  }

