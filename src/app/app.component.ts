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
  data: WritableSignal<number | string> =signal(10);
  count :Signal<number> = computed(()=>200)
  updateSignal(){
    this.data.set('hello')
    // this.count.set(20)  // we can't update computed signal 
  }
  }
