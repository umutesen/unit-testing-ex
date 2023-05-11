import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Account {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-account-list',
  template: `
    <h1>Account List</h1>
    {{accounts | json}}
  `,
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Account[]>('/api/accounts').subscribe(
      (accounts) => {
        this.accounts = accounts;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}