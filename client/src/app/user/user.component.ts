import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(public sharedService : SharedService) { }

  ngOnInit() {
  }

  hover(img){
    let userActivity = {userEvent : 'hover',image: img};
    this.sharedService.userActivityList.push(userActivity);
  }

  onClick(img){
    let userActivity = {userEvent : 'click',image: img};
    this.sharedService.userActivityList.push(userActivity);
    this.sharedService.postCall(userActivity).subscribe(result => {
      console.log(result);
});
  }
}
