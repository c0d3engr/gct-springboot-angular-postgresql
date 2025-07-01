import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tabs = ['Game 1', 'Game 2', 'Game 3'];
  selected = new FormControl(0);

  displayedColumns: string[] = ['name', 'email', 'zeny', 'notes'];
  dataSource = [
    {name: 'wetch', email: 'wetch@email.com', zeny: 999, notes: 'bcc: 9'},
    {name: 'vetch', email: 'vetch@email.com', zeny: 888, notes: 'bcc: 6'},
    {name: 'sim.one', email: 'sim.one@email.com', zeny: 777, notes: 'bcc: 3'},
  ];

  addTab() {
    const newTab = `Game ${this.tabs.length + 1}`;
    this.tabs.push(newTab);
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    const newIndex = Math.min(index, this.tabs.length - 1);
    this.selected.setValue(newIndex >= 0 ? newIndex : 0);
  }

  get selectedIndex(): number {
    return this.selected.value ?? 0;
  }
}