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
  userName = signal('khushi')
  count = signal(0)
  displayHeading=true;
  constructor(){
    effect(()=>{
      // console.log(this.userName());
      if(this.count()==2){
        this.displayHeading=true
        setTimeout(()=>{
          this.displayHeading=false
        },2000)
      }else{
        this.displayHeading=false
      }
    })
  }
  toggleValue(){
    // this.displayHeading=!this.displayHeading;
    this.count.set(this.count()+1)
  }
  }
