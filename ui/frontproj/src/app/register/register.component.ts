

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() wrk:any;
  @Output() onButtonOff: EventEmitter<boolean> = new EventEmitter();
  EmployeeId!:string;
  FirstName!:string;
  LastName!:string;
  Designation!:string;
  Address!:string;
  PhoneNumber!:string;
  Email!:string;
  Pin!:string;
  showMe:boolean=true;

  ngOnInit(): void {
    this.EmployeeId=this.wrk.EmployeeId;
    this.FirstName=this.wrk.FirstName;
    this.LastName=this.wrk.LastName;
    this.Designation=this.wrk.Designation;
    this.Address=this.wrk.Address;
    this.PhoneNumber=this.wrk.PhoneNumber;
    this.Email=this.wrk.Email;
    this.Pin=this.wrk.Pin;
    
  }
  goToAdmin(){
    //this.service.AdminOk=true;
    var val = {EmployeeId:this.EmployeeId,
      FirstName:this.FirstName,
    LastName:this.LastName,
  Designation:this.Designation,
Address:this.Address,
PhoneNumber:this.PhoneNumber,
Email:this.Email,
Pin:this.Pin};
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
    

  }
  

}