import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuEditComponent } from './menu-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MenuEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuEditRoutingModule { }
