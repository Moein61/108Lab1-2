import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempCalculatorComponent } from './temp-calculator/temp-calculator.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'Converter', component: TempCalculatorComponent},
  {path: 'Login' , component: UserLoginComponent},
  {path: 'User/list', component: UserListComponent },
  {path: 'User/new', component: UserRegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
