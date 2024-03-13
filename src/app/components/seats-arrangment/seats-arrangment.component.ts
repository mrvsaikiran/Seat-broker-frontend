import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seats-arrangment',
  standalone: true,
  imports: [NgFor,NgClass,NgStyle],
  templateUrl: './seats-arrangment.component.html',
  styleUrl: './seats-arrangment.component.css'
})
export class SeatsArrangmentComponent {

  rowCount:number=12;
  columnCount:number=20;
  columnArray:number[]=Array.from({ length: this.columnCount }, (_, index) => index + 1);;
  rowArray:number[]=Array.from({ length: this.rowCount }, (_, index) => index + 1);

  SelectSeat(row:number,col:number){
    console.log("row:",row,"col:",col);
  }
  isAvailabe(row:number,col:number){
    return col%2==0
  }
}
