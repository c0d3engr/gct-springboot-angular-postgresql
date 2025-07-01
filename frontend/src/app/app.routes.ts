import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AdminComponent } from './components/admin/admin.component';
import { DarkToggleComponent } from './components/dark-toggle/dark-toggle.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'theme', component: DarkToggleComponent },
  { path: 'dashboard', component: DashboardComponent },
];
