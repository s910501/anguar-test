import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {equalValidator, mobieAsyncValidator, mobieValidator} from "../validator/validators";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6 )]],
      mobile: ['', mobieValidator, mobieAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: [''],
      },{validator: equalValidator})
    })
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    console.log('username 的校验结果' + isValid);
    let errors: any = this.formModel.get('username').errors;
    console.log('username 的错误信息' + JSON.stringify(errors));
    console.log(this.formModel.value);
    if(this.formModel.valid){
      console.log('表单校验通过');
    }
  }

  ngOnInit() {
  }

}
