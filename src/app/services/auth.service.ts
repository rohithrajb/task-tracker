import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5000';

    constructor(private http: HttpClient) { }

    loginUser(user: User) {
        const url = `${this.apiUrl}/users/login`;
        return this.http.post(url, user, httpOptions);
    }

    signUpUser(user: User) {
        const url = `${this.apiUrl}/users/register`;
        return this.http.post(url, user, httpOptions);
    }
}
