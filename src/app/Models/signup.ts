export class signupModel{
    private username:string;
    private Password:string;
    private EmailId:string;
    private PhoneNumber:string;
    constructor(username:string,password:string,emailId:string,phoneNumber:string){
        this.username=username;
        this.EmailId=emailId;
        this.Password=password;
        this.PhoneNumber=phoneNumber;
    }
}