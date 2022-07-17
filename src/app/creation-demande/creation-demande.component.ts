import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';


@Component({
  selector: 'app-creation-demande',
  templateUrl: './creation-demande.component.html',
  styleUrls: ['./creation-demande.component.css']
})
export class CreationDemandeComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  adddemande = this.formBuilder.group({   
    description: ['', [Validators.required]]
    }); 
    submitted = false ;
  ngOnInit(): void {
  }

  collectDemande() {

    
      alert("aaa"+this.adddemande.valid);
   
  }

}
