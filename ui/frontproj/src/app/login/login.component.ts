import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() emp:any;
  EmployeeId!:any;
  Cur!:any;
  Pin!:string;
  AdminOk:boolean=false;
  EmployeeList:any=[];
  WorkList:any=[];
  adminLink:string="";
  currentDoor:any=1;
  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.Pin=this.emp.Pin;
    this.refreshEmpList();
    this.refreshWorkList();
  }
  GotIt()
  {
  
    for(let i=0;i<this.EmployeeList.length;i++){
      if(this.EmployeeList[i].Pin.toString()==this.Pin && this.EmployeeList[i].EmployeeId.toString()==this.EmployeeId.toString())return true;
  
    }
    if(this.EmployeeList[0].Pin.toString()==this.Pin && this.EmployeeList[0].EmployeeId.toString()==this.EmployeeId.toString())return true;
    return false;
    
  }
  getMyStatus()
  {
    for(let i=this.WorkList.length-1;i>=0;i--){
      if(this.WorkList[i].EmployeeId.toString()==this.EmployeeId.toString()){
        if(this.WorkList[i].Type.toString()=="1")return true;
        else return false; 
      }
  
    }
    return false;
  }
  seconddoor(){
    let myTime = formatDate(new Date(), 'hh:mm:hh', 'en');
    let myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    if(this.GotIt())
    {
      
      if(this.getMyStatus())
      {
        var val = {DoorNo:2,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:0,Pin:this.Pin};
        this.service.currentDoor=2;
        this.service.addWork(val).subscribe(res=>{
          alert(res.toString());
        });
        
      }
      else
      {
        var val = {DoorNo:2,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:1,Pin:this.Pin};
        this.service.currentDoor=2;
        this.service.addWork(val).subscribe(res=>{
          alert(res.toString());
        });
        
      }
      
    }
    else alert("Failed")
    
  }

  firstdoor(){
    let myTime = formatDate(new Date(), 'hh:mm:hh', 'en');
    let myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    if(this.GotIt())
    {
      
      if(this.getMyStatus())
      {
        var val = {DoorNo:1,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:0,Pin:this.Pin};
        this.service.currentDoor=1;
        this.service.addWork(val).subscribe(res=>{
          this.service.currentDoor=1;
          alert(res.toString());
        });
        
      }
      else
      {
        var val = {DoorNo:1,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:1,Pin:this.Pin};
        this.service.currentDoor=1;
        this.service.addWork(val).subscribe(res=>{
          this.service.currentDoor=1;
          alert(res.toString());
        });
        
      }
      
    }
    else alert("Failed")
    
  }

  thirddoor(){
    let myTime = formatDate(new Date(), 'hh:mm:hh', 'en');
    let myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    if(this.GotIt())
    {
      
      if(this.getMyStatus())
      {
        var val = {DoorNo:3,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:0,Pin:this.Pin};
        this.service.currentDoor=1;
        this.service.addWork(val).subscribe(res=>{
          alert(res.toString());
        });
        
      }
      else
      {
        var val = {DoorNo:3,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:1,Pin:this.Pin};
        this.service.currentDoor=3;
        this.service.addWork(val).subscribe(res=>{
          alert(res.toString());
        });
        
      }
      
    }
    else alert("Failed")
    
  }
  goToAdmin(){
    //this.refreshEmpList();
    let myTime = formatDate(new Date(), 'hh:mm:hh', 'en');
    let myDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    if(this.EmployeeList[0].Pin.toString()==this.Pin.toString() && this.EmployeeList[0].EmployeeId.toString()==this.EmployeeId.toString()){
      if(this.getMyStatus())
      {
        var val = {DoorNo:0,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:0,Pin:this.Pin};
        this.service.currentDoor=1;
        this.service.addWork(val).subscribe(res=>{
         
        });
        
      }
      else
      {
        var val = {DoorNo:0,EmployeeId:this.EmployeeId,Date:myDate,Time:myTime,Type:1,Pin:this.Pin};
        this.service.currentDoor=1;
        this.service.addWork(val).subscribe(res=>{
          
        });
        
      }
      let x = this.WorkList.length;
    
      
    }
    else{
    
      alert("ID or Pin doesn't Match");
    } 
    

  }
refreshEmpList(){
  this.service.getEmpList().subscribe(data=>{
    this.EmployeeList=data;
  
  });
}
refreshWorkList(){
  this.service.getWorkList().subscribe(data=>{
    this.WorkList=data;
    
  });
  
}
}
