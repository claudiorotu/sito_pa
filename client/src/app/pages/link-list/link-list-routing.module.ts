import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListComponent } from './link-list.component';

const routes: Routes = [
  {
    path: '',
    component: LinkListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkListRoutingModule { }
