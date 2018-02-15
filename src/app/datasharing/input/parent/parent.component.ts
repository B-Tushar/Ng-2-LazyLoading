import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage:string = "This is from parent component";
  childMessage:string="";

  constructor() { }
  
  ngOnInit() {
  }
 
  getChildComponentValue(value:any){
   this.childMessage = value;
  }
}
