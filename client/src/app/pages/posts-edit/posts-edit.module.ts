import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsEditComponent } from './posts-edit.component';
import { PostsEditRoutingModule } from './posts-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PostsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PostsEditComponent
  ]
})
export class PostsEditModule { }
