import { Component, effect, signal } from '@angular/core';
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
  count=signal(10);
  x=20;
  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }

  updateValue(val:string){
    // this.count.set(this.count()+1)
    // this.x=this.x+1;
    if(val=='inc'){
      this.count.set(this.count()+1)
    }else{
      this.count.set(this.count()-1)
    }
  }
  }
