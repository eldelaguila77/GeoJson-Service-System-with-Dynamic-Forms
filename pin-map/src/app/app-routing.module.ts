import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { LoadFormComponent } from './load-form/load-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {path: 'form-creator', component: FormCreatorComponent},
  {path: 'load-form', component: LoadFormComponent},
  { path: 'home', component: HomeComponent}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
