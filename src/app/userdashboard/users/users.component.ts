import { Component } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  selectedUserId!: number;
cancelDelete() {
throw new Error('Method not implemented.');
}
isDeleteModalVisible: any;
confirmDelete(arg0: number) {
throw new Error('Method not implemented.');
}
viewUserDetails(_t9: User) {
throw new Error('Method not implemented.');
}
  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => this.users = data,
      error => console.error('Error fetching users', error)
    );
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => this.loadUsers(), // Refresh the user list
        error => console.error('Error deleting user', error)
      );
    }
  }
}

