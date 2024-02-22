import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  editUser(userId: number): void {
    this.router.navigate(['/user-upsert', userId]);
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response) => {
        console.log('User deleted successfully:', response);
        alert('User deleted successfully')
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
