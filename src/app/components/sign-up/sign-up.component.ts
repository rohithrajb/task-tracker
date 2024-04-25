import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    name: string = '';
    email: string = '';
    password: string = '';
    // rePassword: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    onSignUp() {

        const user: User = {
            name: this.name,
            email: this.email,
            password: this.password
        }

        this.authService.signUpUser(user).subscribe((response: any) => {
            if(response.success) {
                alert('Account created');
                this.router.navigateByUrl('login');
            }
            else {
                alert(response);
            }
        });
    }

}
