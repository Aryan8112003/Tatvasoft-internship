import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login_angular';
  email: string = '';
  password: string = '';
  onlogin(){
    alert("Login button clicked");
    console.log("email:",this.email);
    console.log("password:",this.password);

  }
}
