import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
    <div class="flex flex-col min-h-screen">
      <mat-toolbar color="primary" class="!bg-blue-600 text-white shadow-md">
        <span class="text-lg font-semibold">Ghentra</span>
        <span class="flex-grow"></span>
        <a routerLink="/accounts" mat-icon-button><mat-icon>account_circle</mat-icon></a>
      </mat-toolbar>

      <div class="flex flex-1">
        <!-- Sidebar -->
        <aside class="w-64 bg-white shadow p-4 hidden md:block">
          <ul class="space-y-4">
            <li><a class="text-blue-700 hover:underline cursor-pointer" routerLink="/">Dashboard</a></li>
            <li><a class="text-gray-700 hover:underline cursor-pointer" routerLink="/accounts">Accounts</a></li>
          </ul>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
          <h2 class="text-2xl font-bold mb-4">Welcome to Ghentra</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white rounded-xl shadow p-4">
              <div class="text-sm text-gray-500">Ghost #1</div>
              <div class="text-lg font-semibold">Farming</div>
              <div class="text-green-600 font-bold mt-2">$1,250</div>
            </div>
            <div class="bg-white rounded-xl shadow p-4">
              <div class="text-sm text-gray-500">Ghost #2</div>
              <div class="text-lg font-semibold">Trading</div>
              <div class="text-green-600 font-bold mt-2">$940</div>
            </div>
            <div class="bg-white rounded-xl shadow p-4">
              <div class="text-sm text-gray-500">Ghost #3</div>
              <div class="text-lg font-semibold">Idle</div>
              <div class="text-green-600 font-bold mt-2">$300</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `
})
export class DashboardComponent {}
