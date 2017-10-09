import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder,FormArray } from '@angular/forms';
import { states,Address,Teacher,teachers } from '../data-model';

import { TeacherService }           from './teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit,OnChanges {

  constructor(private fb: FormBuilder,private teacherService: TeacherService) {
    this.createForm();
    this.logNameChange();
  }

  ngOnInit() {
  }
  @Input() teacher:Teacher;
  reactive_bulder_heroForm: FormGroup;
  createForm() {
    this.reactive_bulder_heroForm = this.fb.group({
      //name: '初始值', // <--- the FormControl called "name"
      name: ['初始值',Validators.required],
      //address: this.teacher.addresses[0] || new Address()
      secretLairs: this.fb.array([]),
    });
  }
  // 重新填充secretLairs
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.reactive_bulder_heroForm.setControl('secretLairs', addressFormArray);
  }
  get secretLairs(): FormArray {
    return this.reactive_bulder_heroForm.get('secretLairs') as FormArray;
  };
  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  ngOnChanges() {
    // 值恢复pristine也恢复，setValue不会恢复pristine
    // reset 并设置值
    this.reactive_bulder_heroForm.reset({
      name: this.teacher.name,
      address: this.teacher.addresses[0] || new Address()
    });
    this.setAddresses(this.teacher.addresses);
  }
  nameChangeLog: string[] = [];
  logNameChange() {
    const nameControl = this.reactive_bulder_heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }

  // 保存更改
  onSubmit() {
    this.teacher = this.prepareSaveHero();
    this.teacherService.updateTeacher(this.teacher).subscribe(/* error handling */);
    this.ngOnChanges();
  }
  prepareSaveHero(): Teacher {
    const formModel = this.reactive_bulder_heroForm.value;
  
    // deep copy of form model lairs
    // Object.assign() 只是一级属性复制，比浅拷贝多深拷贝了一层而已
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );
  
    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Teacher = {
      id: this.teacher.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy
    };
    return saveHero;
  }
  revert() { this.ngOnChanges(); }
}
