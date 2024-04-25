import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/User';
import { Router } from '@angular/router';


const setTokenInLocalStorage = (token: string) => {
    localStorage.setItem('token', token);
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private authService: AuthService, private router: Router) {}

    emailId: string = '';
    password: string = '';

    onLogin() {

        const user: User = {
            email: this.emailId,
            password: this.password
        }

        this.authService.loginUser(user).subscribe((response: any) => {
            if(response.success) {
                setTokenInLocalStorage(response.accessToken);
                this.router.navigateByUrl('/tasks');
            }
            else {
                alert(response);
            }
        });
    }
}
