import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account.model';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './account-list.component.html',
})
export class AccountListComponent implements OnInit {
  private accountService = inject(AccountService);
  accounts: Account[] = [];
  displayedColumns: string[] = ['name', 'balance'];
  newAccount: Account = { name: '', balance: 0 };

  ngOnInit() {
    this.fetchAccounts();
  }

  fetchAccounts() {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  createAccount() {
    this.accountService.createAccount(this.newAccount).subscribe(() => {
      this.newAccount = { name: '', balance: 0 };
      this.fetchAccounts();
    });
  }
}
