import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountListComponent } from './accounts/account-list.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'accounts', component: AccountListComponent }
];
