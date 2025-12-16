import { Component } from '@angular/core';
import { UserService } from '../user-meriem-hamouda.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-user-list-meriem-hamoud',
  templateUrl: './user-list-meriem-hamoud.component.html',
  styleUrl: './user-list-meriem-hamoud.component.css'
})
export class UserListMeriemHamoudComponent {


  users: Users[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data as Users[];
      },
      (error) => {
        console.error('Erreur chargement users', error);
      }
    );
  }

  deleteUser(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          this.users = this.users.filter(u => u.id !== id);
        },
        (error) => {
          console.error('Erreur suppression user', error);
        }
      );
    }
  }
}

