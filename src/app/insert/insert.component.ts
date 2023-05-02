import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee, ServerData } from '../types/Employees';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class FormsComponent implements OnInit{
  myForm: FormGroup; 
  constructor(public service : DataServiceService) {
    this.myForm = new FormGroup({ 
      firstName: new FormControl(),
      lastName: new FormControl(),
      birthDate: new FormControl(),
      hireDate: new FormControl(),
      gender: new FormControl()
    });

 

   
  }
  submit(): void{
    const employee: Employee = {...this.myForm.value};
    this.service.postData(employee).subscribe();
    this.myForm.reset();
  }
  ngOnInit(): void {
  }

}