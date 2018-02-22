import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ValidateUrl } from './validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formBuilder:FormGroup;
  constructor(fb:FormBuilder) {
    this.formBuilder = fb.group({
      name:['',Validators.required],
      contact:fb.group({
        email:[],
        phone:[]
      }),
      websiteUrl: ['', [Validators.required, ValidateUrl]],
      topics:fb.array([])
    })
   }

  ngOnInit() {
  }

  form = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]),
    password:new FormControl()
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('passsword');
  }

  get name(){
    return this.formBuilder.get('name');
  }

  get websiteUrl(){
    return this.formBuilder.get('websiteUrl');
  }


}
