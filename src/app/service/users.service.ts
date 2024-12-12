import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin',appliedJobIds: [2] },
    { id: 2, username: 'user', password: 'user123', role: 'user',appliedJobIds: [1,2] },
    { id: 3, username: 'john_doe', password: 'password123', role: 'user',appliedJobIds: [3] },
    { id: 4, username: 'jane_doe', password: 'securepass', role: 'user',appliedJobIds: [4]  },
    { id: 5, username: 'alice_smith', password: 'alicepass', role: 'user',appliedJobIds: [5]  },
    { id: 6, username: 'bob_jones', password: 'bobbypass', role: 'user' ,appliedJobIds: [6] },
    { id: 7, username: 'charlie_brown', password: 'charliepass', role: 'user' ,appliedJobIds: [7]},
    { id: 8, username: 'david_lee', password: 'davidpass', role: 'user',appliedJobIds: [8] },
    
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }


  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return of(user);
  }
  addUser(user: User): Observable<User[]> {
    if (this.users.some(u => u.username === user.username)) {
      return throwError('Username already exists.');
    }
    this.users.push(user);
    return of(this.users);
  }
  updateUser(updatedUser: User): Observable<User[]> {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      return of(this.users);
    } else {
      return throwError('User not found.');
    }
  }

  deleteUser(id: number): Observable<User[]> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of(this.users);
    } else {
      return throwError('User not found.');
    }
  }
  searchUsers(username: string): Observable<User[]> {
    const result = this.users.filter(user => user.username.toLowerCase().includes(username.toLowerCase()));
    return of(result);
  }
  getUsersWithPagination(page: number, pageSize: number): Observable<User[]> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pagedUsers = this.users.slice(startIndex, endIndex);
    return of(pagedUsers);
  }
    getuserById(userId: number): Observable<User> {
    const user = this.users.find(u => u.id === userId);
    return of(user!);
  }

  updateuser(user: User): Observable<void> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
    return of(undefined);
  }
}