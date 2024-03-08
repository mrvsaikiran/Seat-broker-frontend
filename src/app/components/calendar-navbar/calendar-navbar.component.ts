import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-navbar.component.html',
  styleUrl: './calendar-navbar.component.css'
})
export class CalendarNavbarComponent {
  @Input() today: Date = new Date();
  upcomingDates: DateInfo[] = [];
  selectedIndex = 0;
  @Output() dateSelected = new EventEmitter<number>();
  shouldShowNextButton = true;
  isPreviousDisabled = false;

  constructor() {
    this.generateUpcomingDates();
  }

  generateUpcomingDates() {
    this.upcomingDates = [];
    for (let i = 0; i < 10; i++) {
      const date = new Date(this.today.getTime());
      date.setDate(date.getDate() + i);
      this.upcomingDates.push({
        date: date,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' })
      });
    }

    this.isPreviousDisabled = this.upcomingDates[this.upcomingDates.length - 1].date.getTime() > this.today.getTime();
  }

  selectDate(index: number) {
    this.selectedIndex = index;
    this.dateSelected.emit(index);
  }

  previousWeek() {
    for (let i = 0; i < 7; i++) { // Move back 7 days
      this.today.setDate(this.today.getDate() - 1);
    }
    this.generateUpcomingDates();
  }

  nextWeek() {
    for (let i = 0; i < 7; i++) { // Move forward 7 days
      this.today.setDate(this.today.getDate() + 1);
    }
    this.generateUpcomingDates();
  }
}
interface DateInfo {
  date: Date;
  dayName: string;
  
}