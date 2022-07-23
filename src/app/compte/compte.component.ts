import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from 'app/service/compte.service';
class Compte

  {numCompte:any;
  
   argent:any;

    typeCompte:any;
}
   
   
  
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor( private compteService : CompteService , private router: Router) { }
  courants:any=[]
    ngOnInit(): void {
      this.compteService.get_courant().subscribe((data) => {
        console.log(data);
        this.courants = data;
  }

  
    ); 
    


    
  }

}
