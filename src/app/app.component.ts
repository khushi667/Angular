import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 users=["khushi","prachi","om","riya","priya"];
 students=[
  { name:'khushi',age:21,email:'khushi@gmail.com'},
  { name:'prachi',age:17,email:'prachi@gmail.com'},
  { name:'om',age:12,email:'om@gmail.com'},
  { name:'riya',age:21,email:'riya@gmail.com'},
 ]
getName(name:string){
  console.log(name)
}
  }
