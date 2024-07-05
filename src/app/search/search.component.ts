import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  constructor(private router: Router) {}

  search(): void {
    this.searchEvent.emit(this.searchTerm);
    this.router.navigate(['/current-weather', this.searchTerm]);
  }
}
