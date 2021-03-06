import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { LoadFormComponent } from './load-form/load-form.component';

const routes: Routes = [
  {path: 'form-creator', component: FormCreatorComponent},
  {path: 'load-form', component: LoadFormComponent}
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
