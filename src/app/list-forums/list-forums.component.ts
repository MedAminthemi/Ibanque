import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Forum } from 'app/models/user/Forum';
import { ForumService } from 'app/service/forum.service';
@Component({
  selector: 'app-list-forums',
  templateUrl: './list-forums.component.html',
  styleUrls: ['./list-forums.component.css']
})
export class ListForumsComponent implements OnInit {
  @Output() Selectedforum :Forum ;  
  view:boolean ; 
  @Output()
  hide:boolean =false; 
  listForums : any = [];
  constructor(private fb:FormBuilder, private forumService: ForumService, private router: Router) { }
  
  ngOnInit(): void {
    this.view = false;
    this.hide = false;
    this.forumService.GetAllForums().subscribe(
      data => { 
        console.log('data',data) ;
        this.listForums =  data;
        console.log(this.listForums);
       } ,
       error => console.log(error) 
       ) ; 
  }
 
  Participate(){
    this.hide=true ; 
    this.view=true ; 
  }

  addforum(){
    this.router.navigate(['/create-forum']);
  }

}
