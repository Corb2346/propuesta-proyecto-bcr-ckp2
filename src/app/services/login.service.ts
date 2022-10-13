import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setSession(){
    localStorage.setItem('username', 'brayan2346');
    localStorage.setItem('password', 'brayan123');
    console.log("datos almacenados");
  }

  getUserData(){
     return localStorage.getItem('username').toLocaleLowerCase();
  }

  getPasswordData(){
    return localStorage.getItem('password').toLocaleLowerCase();
  }
}
