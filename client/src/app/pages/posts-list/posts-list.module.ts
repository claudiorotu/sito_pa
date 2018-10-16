import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { PostsListRoutingModule } from './posts-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PostsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PostsListComponent
  ]
})
export class PostsListModule { }
