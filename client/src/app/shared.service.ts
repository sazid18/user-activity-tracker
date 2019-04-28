import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userActivityList = []  ;
  constructor( public http : HttpClient) { }

  
  
  postCall(userActivity){
    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", '*');
      
      return this.http.post('http://localhost:6523/save',userActivity).pipe(map(data => {}));
  
}


}

