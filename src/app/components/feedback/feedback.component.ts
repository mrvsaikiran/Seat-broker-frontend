import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { feedbackModel } from '../../Models/feedbackModel';


@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [RatingModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  @Input('ngModel')
  MovieRating:number=0;
  @Input('ngModel')
  TheatreInfastructureRating:number=0;
  @Input('ngModel')
  TheatreExperienceRating:number=0;
  @Input('ngModel')
  userFeedback:string='';
  
  userfeedbackData:feedbackModel=new feedbackModel(0,0,0,'');

 

  onSubmit(){
   this.userfeedbackData=new feedbackModel(this.MovieRating,this.TheatreInfastructureRating,this.TheatreExperienceRating,this.userFeedback);

  }

  

}
