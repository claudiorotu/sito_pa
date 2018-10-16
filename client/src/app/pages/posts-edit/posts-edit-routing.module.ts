import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsEditComponent } from './posts-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsEditRoutingModule { }
