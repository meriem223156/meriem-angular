import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../user-meriem-hamouda.service';

@Component({
  selector: 'app-user-form-meriem-hamouda',
  templateUrl: './user-form-meriem-hamouda.component.html',
  styleUrls: ['./user-form-meriem-hamouda.component.css']
})
export class UserFormMeriemHamoudaComponent {

  addUserForm!: FormGroup;

  user: Users = {
    id: 0,
    name: '',
    email: '',
    role: '',
    status: 'ACTIVE',
    created_at: Date.now()
  };

  roles: string[] = ['ADMIN', 'USER', 'MANAGER'];
  statuses: string[] = ['ACTIVE', 'INACTIVE'];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      role: new FormControl(this.user.role, Validators.required),
      status: new FormControl(this.user.status)
    });
  }

  /* getters (comme ton suggestion form) */
  get name() { return this.addUserForm.get('name'); }
  get email() { return this.addUserForm.get('email'); }
  get role() { return this.addUserForm.get('role'); }
  get status() { return this.addUserForm.get('status'); }

  submitUser() {
    if (this.addUserForm.invalid) {
      return;
    }

    this.userService.addUser(this.addUserForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/users');
      }
    );
  }
}
