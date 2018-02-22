import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class SiblingComponent implements OnInit {

  @Input()
  parentMessage:string="";

 @Output()
 messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  
  handler(value:any){
   this.messageEvent.emit(value);
  }

}
