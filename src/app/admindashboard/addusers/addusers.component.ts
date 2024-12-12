import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrl: './addusers.component.css'
})
export class AddusersComponent {
  newUser: User = { 
    id: 0, 
    username: '', 
    password: '', 
    role: 'user', 
    appliedJobIds: [] 
  };

  constructor(private userService: UsersService) { }

  addUser(): void {
    if (this.newUser.username && this.newUser.password) {
    
      this.userService.getUsers().subscribe(users => {
        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
        this.newUser.id = newId;

    
        this.userService.addUser(this.newUser).subscribe(
          () => {
            alert('User added successfully!');
            this.resetForm();
          },
          error => console.error('Error adding user', error)
        );
      });
    } else {
      alert('Please provide username and password.');
    }
  }

  resetForm(): void {
    this.newUser = { 
      id: 0, 
      username: 'any', 
      password: 'any', 
      role: 'user', 
      appliedJobIds: [] 
    };
  }
}
