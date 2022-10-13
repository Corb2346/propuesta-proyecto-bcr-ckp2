import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu/mainmenu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'mainmenu',
    component:MainmenuComponent
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
