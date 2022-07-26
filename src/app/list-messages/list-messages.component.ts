import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ListForumsComponent } from 'app/list-forums/list-forums.component';
import { Forum } from 'app/models/user/Forum';
import { ForumService } from 'app/service/forum.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { UserService } from 'app/service/user.service';



@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  @Input() Selectedforum ; 
  @Input() hide ; 
  @Input() view ; 

  addmessage = this.fb.group({   
    text: ['', [Validators.required , Validators.minLength(10)]]
    }); 
  messages : any = [];
  listForums: Object;
  nbrelikes: number;
  messageid : any;
  likes : number;
  liked: boolean;
  alert: boolean;
  msg : Object;
  constructor(private list: ListForumsComponent, private fb:FormBuilder, private userService : UserService,private ForumService: ForumService, private router: Router, private Route : ActivatedRoute ) { }
  ForumId : any = 1; 
  userid : any = 0;
forum : any;

  ngOnInit(): void {
    console.log("selected",this.Selectedforum) ; 
  
    this.ForumService.GetForumbyId(this.Selectedforum.idForum).subscribe(data => {
      this.forum =  data;
      console.log("forum message console !!!", this.forum);
    });
    this.ForumService.GetMessagesByForum(this.Selectedforum.idForum).subscribe(
      data => { 
        console.log('dataa',data) ;
        this.messages =  data;
        console.log(this.messages);
       } ,
       error => console.log(error) 
       ) ; 
  }
  
  GoToListForums(){
  this.hide=false;
  this.view=true ; 

  }

  DeleteMsg(Messageid : any){
    if(confirm('Vous confirmez la suppression de ce message?')) {
    this.ForumService.delete_messages(Messageid).subscribe(data=>{
      this.ngOnInit();
    });
   
  }

  

  }


  Reload(){
    this.router.navigate(["/listForums"],{relativeTo:this.Route});
  }

  collectMessage(){

    var test = this.userService.getOneUser(localStorage.getItem("username")).subscribe( data =>
      {

        console.log("id récupéré ====", data.id);

        this.userid = data.id;

        this.msg = {
          text : this.addmessage.value.text,
          content : this.addmessage.value.text,
          user : {
            id : this.userid,
          },
          forum : {
            idForum : this.Selectedforum.idForum,
          }
    
        }

        this.ForumService.save_message(this.msg).subscribe(data => {

          alert('Votre message est bien ajouté') ;
        });


        }).closed;

   



    
    /*if(this.addforum.valid){ 
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

  }*/
}
@Output()  
selectedmsg: any ; 
text: any ; 
UpdateButton : boolean ; 
Edit(){
  console.log(this.selectedmsg) ;
  this.text= this.selectedmsg.text ; 


}

Update()
{
  var test = this.userService.getOneUser(localStorage.getItem("username")).subscribe( data =>
    {
      this.userid = data.id;

      this.msg = {
        messageid: this.selectedmsg.messageid ,
        text : this.addmessage.value.text,
        content : this.addmessage.value.text,
        user : {
          id : this.userid,
        },
        forum : {
          idForum : this.Selectedforum.idForum,
        }
  
      }


      this.ForumService.save_message(this.msg).subscribe(data => {
        alert('Votre message est bien modifié') ;
        this.UpdateButton=false ; 
        this.ngOnInit() ; 
      });


      }).closed;

 


}

}





