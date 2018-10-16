import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesEditComponent } from './categories-edit.component';
import { CategoriesEditRoutingModule } from './categories-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CategoriesEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CategoriesEditComponent
  ]
})
export class CategoriesEditModule { }
