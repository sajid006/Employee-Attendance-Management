import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";


  constructor(private http:HttpClient) { }

  currentDoor:any=0;
  ActivateLogin:boolean=false;
  ActivateRegister:boolean=false;
  showLog:boolean=true;
  showReg:boolean=true;
  showAdmin:boolean=false;
  showMember:boolean=false;
  AdminOk:boolean=false;
  onToggle(val:boolean)
  {
    return false;
  }
  getWorkList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/work/');
  }

  addWork(val:any){
    return this.http.post(this.APIUrl + '/work/',val);
  }

  updateWork(val:any){
    return this.http.put(this.APIUrl + '/work/',val);
  }

  deleteWork(val:any){
    return this.http.delete(this.APIUrl + '/work/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  
  getAllWorkNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/work/');
  }

  getComplexList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/complex/');
  }

  addComplex(val:any){
    return this.http.post(this.APIUrl + '/complex/',val);
  }

  updateComplex(val:any){
    return this.http.put(this.APIUrl + '/complex/',val);
  }

  deleteComplex(val:any){
    return this.http.delete(this.APIUrl + '/complex/'+val);
  }
  

}