import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  Logar() {
    this.app.login = false;
  }
}
