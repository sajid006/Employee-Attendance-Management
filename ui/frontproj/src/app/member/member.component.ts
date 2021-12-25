
import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Output() memberEvent = new EventEmitter<boolean>();
  currentDoor:string="";
  workList:any=[];
  ngOnInit(): void {
   
    this.memberEvent.emit(true);
    
    this.refreshWorkList();
    
  }
  refreshWorkList(){
    this.service.getWorkList().subscribe(data=>{
      this.workList=data;
      var x=this.workList.length;
      this.currentDoor = this.workList[x-1].DoorNo.toString();
    });
    
  }

}
