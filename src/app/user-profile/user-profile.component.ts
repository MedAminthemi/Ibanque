import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user/User';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  role: string;
  submitted:boolean=false;
  result:any;
  Myuser: User ; 

 
  id : any; 

  constructor(private loginservice: UserService, private formBuilder:FormBuilder) { 

  }
  myProfile= this.formBuilder.group({
    id:[],
    email:  ['' ],
    role :[''],
    username: [''],
        });
roles: any ; 
  ngOnInit() {
  this.id= localStorage.getItem('username') ; 

  this.loginservice.getOneUser(this.id).subscribe(
  data => {  
      console.log("my user profil", data);
      this.Myuser=data;
      this.myProfile.setValue({
        id: this.Myuser.id,
        email:this.Myuser.email,
        username:this.Myuser.username,
        role:this.Myuser.roles[0].name
      });
      

    }); 
          
  }
Update()
{

  this.loginservice.updateProfile(this.myProfile.value).subscribe((res)=>{
    alert('Update profile is done');
  });
  


}
}

