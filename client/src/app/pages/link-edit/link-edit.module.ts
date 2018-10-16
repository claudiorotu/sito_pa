import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkEditComponent } from './link-edit.component';
import { LinkEditRoutingModule } from './link-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LinkEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LinkEditComponent
  ]
})
export class LinkEditModule { }
