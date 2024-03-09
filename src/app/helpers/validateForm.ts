import { FormControl,FormGroup } from "@angular/forms";

export class validateForm{
    static validateAllFormFeilds(fromgroup:FormGroup){
        Object.keys(fromgroup.controls).forEach(inputField=>{
         const control=fromgroup.get(inputField);
         if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true})
         }else if(control instanceof FormGroup){
          this.validateAllFormFeilds(control)
         }
        })
       }
}