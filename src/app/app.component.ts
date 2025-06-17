import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  users=['khushi','prachi','om','riya','priya','ekta','komal','roshni','sanu']

  // users=[]
  }
