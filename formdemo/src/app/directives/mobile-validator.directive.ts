import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {mobieAsyncValidator, mobieValidator} from "../validator/validators";

@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobieValidator, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
