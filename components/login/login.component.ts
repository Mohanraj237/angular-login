import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm =new FormGroup({
    Email: new FormControl('',[Validators.required, Validators.email]),
    Password: new FormControl('',[Validators.required]),
  });
  

  constructor(
    private authService: AuthenticationService, 
    private router :Router,
    private toast: HotToastService,
    ) { }

  ngOnInit(): void {
  }

  get Email(){
    return this.loginForm.get('Email');
  }
  get Password(){
    return this.loginForm.get('Password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const{Email, Password}=this.loginForm.value;
    this.authService.login(Email, Password).pipe(
      this.toast.observe({
        success: 'Logged in Successfully',
        loading: 'Logging in',
        error: ({message})=>`There was an error: ${message}`
      })
    )
    
    .subscribe(()=> {
      this.router.navigate(['/home']);
    });
  }


}
