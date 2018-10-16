import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { MenuListRoutingModule } from './menu-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MenuListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MenuListComponent
  ]
})
export class MenuListModule { }
