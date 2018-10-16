import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule { }
