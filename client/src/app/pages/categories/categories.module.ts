import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
