
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private service:SharedService) {

   
   }
  EmployeeList:any=[];
  
  
  title = 'frontproj';
  ModalTitle!:string;
  ActivateLogin:boolean=false;
  ActivateRegister:boolean=false;
  showLog:boolean=true;
  showReg:boolean=true;
  showAdmin:boolean=false;
  showMember:boolean=false;
  RegText:string="Register";
  emp:any;
  wrk:any;
  
 
  ngOnInit(): void {
    
    this.refreshEmpList();
    
  }
  
  

  adminIsOn(newItem: boolean)
  {
    this.showReg=true;
    this.showLog=false;
    this.ActivateLogin=false;
    this.ActivateRegister=false;
    this.showMember=false;
    
    if(newItem==true)
    {
      this.showReg=true;
      this.showLog=false;
      this.ActivateLogin=false;
      this.ActivateRegister=false;
      this.showMember=false;
    }
  }
  memberIsOn(newItem: boolean)
  {
    if(newItem==true)
    {
      this.showReg=false;
      this.showLog=true;
      this.ActivateLogin=false;
      this.ActivateRegister=false;
      this.showAdmin=false;
    }
  }

  loginClick(){
    this.emp={
      EmployeeId:0,
      Pin:""
    }
    this.ModalTitle="Login";
    this.ActivateLogin=!this.ActivateLogin;
    this.service.ActivateLogin=!this.service.ActivateLogin;
    this.ActivateRegister=false;

  }
  registerClick()
  {
    this.wrk={
      EmployeeId:"",
      FirstName:"",
      LastName:"",
      Designation:"",
      Address:"",
      PhoneNumber:"",
      Email:"",
      Pin:""

    }
    this.ModalTitle="Register";
    this.ActivateRegister=!this.ActivateRegister;
    this.service.ActivateRegister=!this.service.ActivateRegister;
    this.ActivateLogin=false;
  }
 
  closeClick(){
    this.ActivateLogin=false;
    this.ActivateRegister=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.showLog=this.service.showLog;
      this.showReg=this.service.showReg;
      this.showAdmin=this.service.showAdmin;
      this.showMember=this.service.showMember;
      this.ActivateRegister=this.service.ActivateRegister;
      this.ActivateLogin=this.service.ActivateLogin;
      if(this.EmployeeList.length.toString()=="0"){
        this.RegText="Register as Admin";
        this.showReg=true;
        this.showLog=false;
      }
      else{
        this.RegText="Add Member";
        this.showReg=false;
        this.showLog=true;
      }
    });
    
  }
 
  
  
}
