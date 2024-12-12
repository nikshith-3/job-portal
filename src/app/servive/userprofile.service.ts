import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from './userprofile';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private apiUrl = 'https://your-api-url.com/api/user-profile';

  constructor(private http: HttpClient) {}

  getUserProfile(userId: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${userId}`);
  }

  updateUserProfile(userProfile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/${userProfile.id}`, userProfile);
  }

}
