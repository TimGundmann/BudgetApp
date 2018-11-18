import { Budget } from './domain/budget';
import { BudgetService } from './service/budget.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gun-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budget: Budget = {};

  constructor(private budgetService: BudgetService) { }

  ngOnInit() {
  }

  fileUpload(event) {
    this.budgetService.make(event.srcElement.files[0])
      .subscribe(b => this.budget = b);
  }

}
