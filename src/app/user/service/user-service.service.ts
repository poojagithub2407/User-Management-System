import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private url = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: number): Observable<User> {
    const userUrl = `${this.url}/${id}`;
    return this.http.get<User>(userUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.url}/${userId}`;
    return this.http.delete(deleteUrl);
  }
  updateUser(user: User): Observable<User> {
    const updateUrl = `${this.url}/${user.id}`;
    return this.http.put<User>(updateUrl, user);
  }

  userExists(email: string): Observable<boolean> {
    return this.getUsers().pipe(
      map((users: any[]) =>
        users.some((user: { email: string }) => user.email === email)
      )
    );
  }
}
