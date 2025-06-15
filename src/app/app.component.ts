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

  count=0
  // handleIncrement(){
  //   this.count=this.count+1
  // }
  // handleDecrement(){
  //   this.count=this.count-1
  // }
  // handleReset(){
  //   this.count=0
  // }

  handleCounter(val:string){
    if(val=='minus' && this.count!=0){
       this.count=this.count-1
    }else if(val=='plus'){
       this.count=this.count+1
    }
    else{
      this.count=0
    }
  }
  
  }




 


















  //    handleClickEvent(){
  //   console.log("Function Called!!!")
  //   this.otherFunction()    // we can't call otherFunction() like this coz the function is inside the class so we have to use this keyword
  // }

  // otherFunction(){
  //   console.log("Other Function !!!")
  // }

  // name="Khushi"
  // data:string | number = "Hello"
  // other:any = true

  // updateName(){
  //   this.name="prachi"
  //   this.data=123
  //   this.other='om'
  //   this.other=30
  //   this.other={}
  // }

  //   updateVar(){
  //     let x= 30
  //     console.log(x)
  //     this.sum(20,30)
  //   }

  //   sum(a:number,b:number){
  //     console.log(a+b)

  //   }

  //    // title = 'My Angular App';
  // // name = 'Khushi';
  // // x = 5;
  // // y = 10;
  // // user1 = 'admin';
  // // user2 = 'admin';

 



