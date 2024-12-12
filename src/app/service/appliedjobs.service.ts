import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppliedjobsService {

  
  private apiUrl =  'https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs'

  constructor(private http: HttpClient) { }

  getappliedCounts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/counts');
  }
  // gettotaljobs(){
  //   let totalappliedjobs=this.joblist.reduce((p:any,x:any)=>p+x.price,0);
  //   return totalappliedjobs
  // }
  
  // jobslength(){
  //   return this.joblist.length;
  // }
}
