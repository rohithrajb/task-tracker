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
    private apiUrl = 'https://task-tracker-api-y1zg.onrender.com';

    constructor(private http: HttpClient) { }

    loginUser(user: User) {
        const url = `${this.apiUrl}/users/login`;
        return this.http.post(url, user, httpOptions);
    }

    signUpUser(user: User) {
        const url = `${this.apiUrl}/users/register`;
        return this.http.post(url, user, httpOptions);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    logOutUser() {
        localStorage.removeItem('token');
    }
}
