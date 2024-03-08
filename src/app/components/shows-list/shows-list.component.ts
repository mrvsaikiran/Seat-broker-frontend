import { Component } from '@angular/core';
import { CalendarNavbarComponent } from '../calendar-navbar/calendar-navbar.component';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shows-list',
  standalone: true,
  imports: [CalendarNavbarComponent,PaginatorModule,CommonModule],
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.css'
})
export class ShowsListComponent {
   dates:Date[] = [
    new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    new Date(Date.now() - 9 * 60 * 60 * 1000), // 9 hours ago
    new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    new Date(Date.now() - 15 * 60 * 60 * 1000), // 15 hours ago
    new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    new Date(Date.now() - 21 * 60 * 60 * 1000), // 21 hours ago
    new Date(Date.now() - 24 * 60 * 60 * 1000), // 24 hours ago
  ];
  theatreName:string='sai ram';
  rating:number=4
  currentPage: number = 1; 
  cardsPerPage: number = 10; 
  totalCards: number = 100;
  pageCount: number = Math.ceil(this.totalCards/ this.cardsPerPage); 


  generateCardData(): number[] {
    const startCardNumber = (this.currentPage - 1) * this.cardsPerPage + 1;
    const endCardNumber = Math.min(startCardNumber + this.cardsPerPage - 1, this.totalCards);

    // send the http request as strat index as start card num and cardperpage



    return Array.from({ length: endCardNumber - startCardNumber + 1 }, ( _, index) => startCardNumber + index);
  }

  onPageChange(event:PaginatorState) {
    this.currentPage = event.page as number ; 
    const startIndex = this.currentPage * this.cardsPerPage; 
    const endIndex = startIndex + this.cardsPerPage;    
    console.log("current page"+this.currentPage +"s-ind"+startIndex+"e-ind"+endIndex);
    
  }

  isDisabled(date: Date): boolean {
    const now = new Date();
    const diffHours = Math.abs(now.getHours() - date.getHours());
    return diffHours > 3;
    
 }

}
