import { OnInit, Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

	constructor(private taskService: TaskService) {}

	ngOnInit(): void {
		this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
	}

	deleteTask(task: Task) {
        this.taskService
			.deleteTask(task)
			.subscribe(
				() => (this.tasks = this.tasks.filter((t) => t._id !== task._id))
			);
	}
    
	toggleReminder(task: Task) {
		task.reminder = !task.reminder;
		this.taskService.updateTaskReminder(task).subscribe();
	}

	// what that stuff inside the subscribe function does is 'we get back a task, and we are adding that task at the end of the array using push method
    // so if we remove everything inside the subscribe method, addtask works fine but it won't be updated instantly in the tasks
	addTask(task: Task) {
		this.taskService
			.addTask(task)
			.subscribe((task) => this.tasks.push(task));
	}
}
