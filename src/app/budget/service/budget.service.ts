import { Budget } from './../domain/budget';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpClient: HttpClient) { }

  public make(file): Observable<Budget> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post('http://192.168.1.100:9999/budget/make', formData);
  }

}
