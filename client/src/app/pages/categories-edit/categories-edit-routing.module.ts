import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesEditComponent } from './categories-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesEditRoutingModule { }
