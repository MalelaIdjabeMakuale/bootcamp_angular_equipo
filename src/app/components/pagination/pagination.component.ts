import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
  
    if (this.currentPage < 10) {
      this.currentPage++;
    }
  }

}
