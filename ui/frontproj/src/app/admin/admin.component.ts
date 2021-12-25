import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:SharedService) { } 

  EmployeeList:any=[];
  WorkList:any=[];
  AdminOk:boolean=true;
  showAdmin:boolean=true;
  ModalTitle!:string;
  ActivateRegister:boolean=false;
  wrk:any;
  ymes!:string;
  ComplexList:any=[];
  monthly:boolean=false;
  ngOnInit(): void {
    this.ymes = formatDate(new Date(), 'hh:mm:hh', 'en').toString();
    this.refreshWorkList();
    this.refreshEmpList();
    
    //this.checkValidity();
    
    
    
  }

  monthlyReport()
  {
    let myDate:string = formatDate(new Date(), 'yyyy-MM-dd', 'en').toString();
    for(let i=0;i<this.EmployeeList.length;i++)
    {
      let EId:string=this.EmployeeList[i].EmployeeId.toString();
      let FName:string=this.EmployeeList[i].FirstName.toString();
      let LName:string=this.EmployeeList[i].LastName.toString();
      var FirstEntry:string="No",LastExit:string="No",LastEntry:string="No",TotalStay:number=0,FirstDate:string="No",LastDate:string="No";
      for(let j=0;j<this.WorkList.length;j++){
        //if(!=)continue;
        //if(this.WorkList[j].Date.toString().slice(5,7).localeCompare(myDate.slice(5,7))==0){}
        //else continue;
        if(this.WorkList[j].EmployeeId.toString()==EId){
          if(FirstEntry=="No"){
            FirstEntry=this.WorkList[j].Time.toString();
            FirstDate=this.WorkList[j].Date.toString();
          }
          if(this.WorkList[j].Type.toString()=="1")LastEntry=this.WorkList[j].Time.toString();
          if(this.WorkList[j].Type.toString()=="0"){
            LastExit=this.WorkList[j].Time.toString();
            LastDate=this.WorkList[j].Date.toString();
            var hr1=LastEntry.slice(0,2);
            var hr1n=Number(hr1);
            var mn1=LastEntry.slice(3,5);
            var mn1n=Number(mn1);
            var hr2=LastExit.slice(0,2);
            var hr2n=Number(hr2);
            var mn2=LastExit.slice(3,5);
            var mn2n=Number(mn2);
            var cur:number=60*(hr2n-hr1n)+(mn2n-mn1n);
            TotalStay=TotalStay+cur;
          }
        }
      }
      var val={EmployeeId:EId,FirstName:FName,LastName:LName,FirstDate:FirstDate,EntryTime:FirstEntry,LastDate:LastDate,ExitTime:LastExit,TotalTime:TotalStay};
      this.ComplexList.push(val);
    }
  }
  monthlyClick()
  {
    this.monthly=!this.monthly;
  }
  registerClick()
  {
    this.wrk={
      FirstName:"",
      LastName:"",
      Designation:"",
      Address:"",
      PhoneNumber:"",
      Email:"",
      Pin:""

    }
    this.ModalTitle="Add New Member";
    this.ActivateRegister=!this.ActivateRegister;
  }

  editClick(item:any){
    
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateRegister=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      
      this.EmployeeList=data;
      let x = this.WorkList.length;
      this.ymes = formatDate(new Date(), 'hh:mm:hh', 'en').toString();
      this.monthlyReport();
    if(this.EmployeeList[0].EmployeeId.toString()==this.WorkList[x-1].EmployeeId.toString() && 
    this.EmployeeList[0].Pin.toString()==this.WorkList[x-1].Pin.toString() &&
    this.WorkList[x-1].Time.toString() == this.ymes.toString()){
      this.AdminOk=true;
      //alert("yo");
    }
    else{
      this.AdminOk=false;
      //alert("noshit");
    }
      //this.monthlyReport();
    });
    
  }
  refreshWorkList(){
    this.service.getWorkList().subscribe(data=>{
      this.WorkList=data;
      
      
    });
    
  }

}
