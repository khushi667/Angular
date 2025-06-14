import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-tut';
  name ='Khushi Mishra';
  x = 4;
  y = 4;
  user1 = 'khushi';
  user2 = 'om';
}
