import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ]
})
export class AppComponent implements OnInit {
  activeTab = 'accounts';
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['id', 'accountNumber', 'type', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadAccounts(): void {
    this.http.get<any[]>('/api/accounts').subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  editAccount(account: any): void {
    alert(`Edit account with ID: ${account.id}`);
  }

  deleteAccount(account: any): void {
    if (confirm(`Delete account ID ${account.id}?`)) {
      this.http.delete(`/api/accounts/${account.id}`).subscribe(() => this.loadAccounts());
    }
  }
}
