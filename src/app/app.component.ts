import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
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
  x=signal(10);
  y=signal(10);
  z=computed(()=>this.x()+this.y())

  showValue(){
    console.log(this.z());
    this.x.set(100)
    console.log(this.z());
  }
  updateX(){
    this.x.set(200)
  }
  }
