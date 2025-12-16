import { Component } from '@angular/core';
import { Users } from '../models/users';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-meriem-hamouda.service';

@Component({
  selector: 'app-user-details-meriem-hamouda',
  templateUrl: './user-details-meriem-hamouda.component.html',
  styleUrl: './user-details-meriem-hamouda.component.css'
})
export class UserDetailsMeriemHamoudaComponent {


  id!: number;
  user!: Users;

  
  constructor(private activatedRoute: ActivatedRoute, private usersService: UserService) { }
  
  ngOnInit(): void {
    // 1️⃣ récupérer l'id depuis l'URL
    this.id = this.activatedRoute.snapshot.params['id'];

    // 2️⃣ appeler le service
    this.usersService.getUserById(this.id).subscribe(
      (data: any) => {
        console.log(data);

        // adapter selon la réponse du backend
        this.user = data.user as Users;
      },
      (error) => {
        console.error('Erreur lors du chargement du user', error);
      }
    );
  }

}
