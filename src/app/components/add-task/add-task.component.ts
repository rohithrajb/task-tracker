import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
	@Output()
	onAddTask: EventEmitter<Task> = new EventEmitter();

	text: string = '';
	day = new Date();
	reminder: boolean = false;

	showAddTask?: boolean;
	subscription: Subscription;

	constructor(private uiService: UiService) {
		this.subscription = this.uiService
			.onToggle()
			.subscribe((value) => (this.showAddTask = value));
	}

	setDate(date: Date) {
		this.day = date;
	}

	onSubmit() {
		if (!this.text) {
			alert('Please enter a task!');
			return;
		}

		const newTask = {
			text: this.text,
			day: this.day,
			reminder: this.reminder,
		};

		this.onAddTask.emit(newTask);

		this.text = '';
		this.reminder = false;
	}
}
