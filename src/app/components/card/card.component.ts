import { Component } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PaginatorModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //  const isSearchTouched:boolean=false;
   constructor(){
   }
   onDateSelected(event:Event){}
   
  }
  

