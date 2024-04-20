import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialDatepickerComponent } from './components/material-datepicker/material-datepicker.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const appRoutes: Routes = [
	{
		path: '',
		component: TasksComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ButtonComponent,
		TasksComponent,
		TaskItemComponent,
		AddTaskComponent,
		AboutComponent,
		FooterComponent,
		MaterialDatepickerComponent,
  LoginComponent,
  SignUpComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		MatDatepickerModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatNativeDateModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
