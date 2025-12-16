import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Users } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = '/api/users/';

  constructor(private http: HttpClient) { }

  /** 🔹 Récupérer tous les utilisateurs */
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  /** 🔹 Récupérer un utilisateur par ID */
  getUserById(id: number): Observable<Users> {
    return this.http.get<Users>(this.apiUrl + id);
  }

  /** 🔹 Ajouter un utilisateur */
  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.apiUrl, user);
  }

  /** 🔹 Mettre à jour un utilisateur */
  updateUser(id: number, user: Users): Observable<Users> {
    return this.http.put<Users>(this.apiUrl + id, user);
  }

  /** 🔹 Supprimer un utilisateur */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
}
