import { Component, Input } from '@angular/core';
// import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [RatingModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input('ngModel')
  value:number=0;

}
