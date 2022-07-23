import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user/User';
import { UserService } from 'app/service/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  test : Date = new Date();
  focus;
  focus1;
  isLoggedin:boolean ; 
    credentials = {
      username: '',
      password: ''
    };
    stringObject: any;
    submitted : boolean =false ; 

  constructor(private fb:FormBuilder, private loginService: UserService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
      });
      }
      login(){
        this.submitted =true ;
        const u= new User() ; 
        u.username=this.credentials.username;
        u.password=this.credentials.password;
        if(this.credentials.username=='' || this.credentials.password =='')
        {
          alert('add username and password');  
        }
        else {
          this.loginService.SignIn(u).subscribe(
            data => {   
              console.log("token", data);
              console.log(data['token']);
              localStorage.setItem('isLoggedin', 'true');
              localStorage.setItem('token',data['token'] );
          //    this.router.navigateByUrl('/general/home') ;

            },
            error => {
              localStorage.setItem('isLoggedin','false');
  
              alert('Please verify your email or your password');  
              console.log(error) ; 
            });
      }

    }

}
