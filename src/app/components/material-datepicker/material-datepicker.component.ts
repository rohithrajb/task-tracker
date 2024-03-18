import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-material-datepicker',
	templateUrl: './material-datepicker.component.html',
	styleUrls: ['./material-datepicker.component.css'],
})
export class MaterialDatepickerComponent {

	date = new Date;

	@Output()
	dateChangeEvent = new EventEmitter();

	onDateChange(value: Date) {
		this.dateChangeEvent.emit(value);
	}
}
