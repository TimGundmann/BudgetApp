import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BudgetRoutingModule,
    HttpClientModule
  ],
  declarations: [
    BudgetComponent,
    CategoryComponent
  ]
})
export class BudgetModule { }
