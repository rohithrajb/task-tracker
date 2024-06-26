import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	title: string = 'Task Tracker';
	showAddTask?: boolean;
	subscription: Subscription;

	constructor(private uiService: UiService, protected authService: AuthService, private router: Router) {
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.showAddTask = value));
	}

	toggleAddTask() {
		this.uiService.toggleAddTask();
	}

	hasRoute(route: string) {
        return this.router.url === route;
    }

    onLogOut() {
        this.authService.logOutUser();
        this.router.navigateByUrl('login');
    }
}
