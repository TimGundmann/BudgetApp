import { BudgetModule } from './budget/budget.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GunRoutingModule } from './gun-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GunRoutingModule,
    BudgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
