import { Component } from '@angular/core';
import { AppUtilityService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {
  
  allStudents: [ 
    { rollno: 1, name: 'Sachin' }, 
    { rollno: 2, name: 'Sehwag' }, 
    { rollno: 3, name: 'Kapil' }, 
    { rollno: 4, name: 'Prasad' },
    { rollno: 5, name: 'Azhar' },
    { rollno: 6, name: 'Laxman' },
    { rollno: 7, name: 'Dravid' },
    { rollno: 8, name: 'Kumble' }
  ];

  constructor(private appUtilityService: AppUtilityService) {}

  async viewStudentDetail(event: Event, targetEl: string) {
    try {
      const selectedStudent = await this.appUtilityService.eventDelegationHandler(event, this.allStudents, targetEl);
      if (!selectedStudent)
        return;
      // write your code here
    } catch (err) {
      console.error(err);
    }
  }

}
