import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForumService } from 'app/service/forum.service';
@Component({
  selector: 'app-creation-forum',
  templateUrl: './creation-forum.component.html',
  styleUrls: ['./creation-forum.component.css']
})
export class CreationForumComponent implements OnInit {

  alert: boolean = false;
  submitted = false ;
  constructor(
    private formBuilder: FormBuilder,
    private ForumService : ForumService ,
     private router: Router) { }


  addforum = this.formBuilder.group({   
    sujet: ['', [Validators.required , Validators.minLength(10)]]
    }); 
    radio=1 ;

  ngOnInit(): void {
  }

  
  collectForum() {
  
    
    if(this.addforum.valid){ 
      this.addforum.value['dateCeation'] = new Date() ;
      this.addforum.value['derniereMaj'] = new Date() ;
    //this.addforum.value['statut'] = 'E';

    this.ForumService.saveourupdate(this.addforum.value).subscribe((data) => {
      console.log(data);
    });
    this.addforum.reset({});
    this.alert = true;
  

  alert('forum enregistré avec succès') ;
  this.router.navigate(['/listForums']);
 
  //this.ngOnInit() ; 
}

  else{
    alert("verify your form entries");
}

}
   


}

