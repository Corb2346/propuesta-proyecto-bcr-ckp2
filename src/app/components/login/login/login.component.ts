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
  diplayLoginIncorrect: boolean = false;

  

  constructor( private router:Router,public loginService:LoginService) { }

  ngOnInit(): void {
    this.setData();
    this.reactiveForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      passWord: new FormControl('',[Validators.required])
   });
  }

  onSubmit(userName:string,passWord:string){
    this.userName = userName;
    this.passWord = passWord;
    console.log("username",this.userName, "password", this.passWord);

    let usernameRecover = this.loginService.getUserData()
    
    let passwordRecoverd = this.loginService.getPasswordData();
    console.log("dato traido del localstorage", typeof(usernameRecover),passwordRecoverd);

    if(usernameRecover == this.userName && passwordRecoverd == this.passWord){
        this.router.navigate(['mainmenu'])
    } else {
      console.log("usuario o contraseña incorrecta");
      this.diplayLoginIncorrect = !this.diplayLoginIncorrect;
      console.log(this.diplayLoginIncorrect);
      
    }
  }

  setData(){
    console.log("data almacenada");
    this.loginService.setSession();
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
