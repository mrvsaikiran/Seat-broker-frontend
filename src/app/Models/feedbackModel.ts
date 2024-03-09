export class feedbackModel{
    private MovieRating:number;
    private TheatreInfastructureRating:number;
    private TheatreExperienceRating:number;
    private UserFeedback:string;
    constructor(movieRating:number,theatreInstructureRating:number,thatreExperienceRating:number,userfeedback:string){
       this.MovieRating=movieRating;
       this.TheatreExperienceRating=thatreExperienceRating;
       this.TheatreInfastructureRating=theatreInstructureRating;
       this.UserFeedback=userfeedback;
    }
}