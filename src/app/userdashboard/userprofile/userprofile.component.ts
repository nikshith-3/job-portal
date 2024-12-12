import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../../servive/userprofile.service';
import { UserProfile } from '../../servive/userprofile';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent  implements OnInit{
  userProfile: UserProfile | undefined;
  editMode = false;

  constructor(private userProfileService: UserprofileService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const userId = 1; 
    this.userProfileService.getUserProfile(userId).subscribe(
      (profile) => {
        this.userProfile = profile;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  replaceAtSymbol(email: string): string {
    return email.replace('@', '&#64;');
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveUserProfile(): void {
    if (this.userProfile) {
      this.userProfileService.updateUserProfile(this.userProfile).subscribe(
        (updatedProfile) => {
          this.userProfile = updatedProfile;
          this.editMode = false;
        },
        (error) => {
          console.error('Error updating user profile:', error);
        }
      );
    }
  }
}
