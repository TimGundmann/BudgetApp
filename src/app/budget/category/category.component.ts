import { Category, Month } from './../domain/budget';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[gun-category]',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {

  @Input() category: Category = {};

  fillMonths(category: Category): Month[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => {
      if (category.months) {
        const month = category.months.find(cm => cm.month === m);
        if (month) {
          return month;
        }
      }
      return {month: m};
    });
  }

}
