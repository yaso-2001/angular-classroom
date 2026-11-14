import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Table } from './table/table';
import { StudentProfile } from './student-profile/student-profile';

@Component({
  imports: [RouterOutlet, Navbar, Table, StudentProfile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
