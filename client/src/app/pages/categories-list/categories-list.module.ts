import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import { CategoriesListRoutingModule } from './categories-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CategoriesListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CategoriesListComponent
  ]
})
export class CategoriesListModule { }
