import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>("This is default message");
  currentMessage = this.messageSource.asObservable();

  changeMessage(msg:string){
    this.messageSource.next(msg);
  }

}
