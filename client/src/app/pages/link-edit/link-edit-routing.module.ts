import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkEditComponent } from './link-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LinkEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkEditRoutingModule { }
