import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'user-login',component:UserLoginComponent},
  {path:'user-home', component:UserHomeComponent},

  { path: '',   redirectTo: '/user-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
