import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEditComponent } from './menu-edit.component';
import { MenuEditRoutingModule } from './menu-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MenuEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MenuEditComponent
  ]
})
export class MenuEditModule { }
