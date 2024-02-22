import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { User } from 'src/app/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.css'],
})
export class UserUpsertComponent implements OnInit {
  userForm!: FormGroup;
  userExistsError: boolean = false;
  userId: number = 0;
  userAddedSuccessfully: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      this.userId = +params['id'];
      if (this.userId) {
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(userId: number): void {
    this.userService.getUserById(userId).subscribe(
      (user) => {
        this.userForm.patchValue(user);
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: User = {
        id: this.userForm.value.id,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone,
        address: this.userForm.value.address,
      };

      if (this.userId) {
        this.userService.updateUser(userData).subscribe(
          (updatedUser) => {
            alert('User updated successfully:');
            this.router.navigate(['/user-list']);
          },
          (error) => {
            console.error('Error updating user:', error);
          }
        );
      } else {
        this.userService.userExists(userData.email).subscribe((exists) => {
          if (exists) {
            this.userExistsError = true;
          } else {
            this.userExistsError = false;
            this.userService.addUser(userData).subscribe(
              (response) => {
                this.userAddedSuccessfully = true;

                console.log('User added successfully:', response);

                this.router.navigate(['/user-list']);
              },
              (error) => {
                console.error('Error adding user:', error);
              }
            );
          }
        });
      }
    }
  }
}
