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
   display = true;
    x=20
    toggleDiv=true;

    hide(){
      this.display=false
    }
    show(){
      this.display=true
    }
    toggle(){
      this.display=!this.display
    }
    toggleTwo(){
      this.toggleDiv=!this.toggleDiv;
    }
  }
