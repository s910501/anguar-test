import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { Teacher, teachers } from '../data-model';

@Injectable()
export class TeacherService {

  delayMs = 1000;

  // Fake server get; assume nothing can go wrong
  getTeachers(): Observable<Teacher[]> {
    return of(teachers).delay(this.delayMs); // simulate latency with delay
  }

  // Fake server update; assume nothing can go wrong
  updateTeacher(hero: Teacher): Observable<Teacher>  {
    const oldTeacher = teachers.find(h => h.id === hero.id);
    const newTeacher = Object.assign(oldTeacher, hero); // Demo: mutate cached teacher
    return of(newTeacher).delay(this.delayMs); // simulate latency with delay
  }
}