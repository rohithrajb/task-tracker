import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const getTokenFromLocalStorage = () => {
	return localStorage.getItem('token');
};

const secureHttpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		authorization: `Bearer ${getTokenFromLocalStorage()}`,
	}),
};

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	private apiUrl = 'https://task-tracker-api-y1zg.onrender.com/tasks';

	constructor(private http: HttpClient) {}

	getTasks(): Observable<Task[]> {
		return this.http.get<Task[]>(this.apiUrl, secureHttpOptions);
	}

	deleteTask(task: Task): Observable<Task> {
		const url = `${this.apiUrl}/${task._id}`;
		return this.http.delete<Task>(url, secureHttpOptions);
	}

	updateTaskReminder(task: Task): Observable<Task> {
		const url = `${this.apiUrl}/${task._id}`;
		return this.http.put<Task>(url, task, secureHttpOptions);
	}

	addTask(task: Task): Observable<Task> {
		return this.http.post<Task>(this.apiUrl, task, secureHttpOptions);
	}
}
