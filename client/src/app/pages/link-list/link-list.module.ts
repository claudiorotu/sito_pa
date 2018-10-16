import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list.component';
import { LinkListRoutingModule } from './link-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LinkListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LinkListComponent
  ]
})
export class LinkListModule { }
