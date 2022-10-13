import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  public userName: string ='';
  public passWord: string ='';

  constructor( private router:Router,public loginService:LoginService) { }

  ngOnInit(): void {
    this.setData();
    this.reactiveForm = new FormGroup({
      userName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      passWord: new FormControl('',[Validators.required,Validators.minLength(5)])
   });
  }

  getData(){
    console.log("username",this.userName, "password", this.passWord);
    this.router.navigate(['mainmenu'])
  }

  setData(){
    console.log("data almacenada");
    this.loginService.setSession();
  }

  onSubmit(){
    console.log(this.reactiveForm);
    
  }

  get user()
  {
    return this.reactiveForm.get('userName')
  }

  get password()
  {
    return this.reactiveForm.get('passWord')
  }

}
