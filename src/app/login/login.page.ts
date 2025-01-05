import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  fullname = "";

  constructor(private projectService: ProjectService, private router: Router) {
    this.fullname = localStorage.getItem("app_fullname") || "";
    this.username = localStorage.getItem("app_username") || "";
  }

  ngOnInit() {}

  login() {
    if (this.username.trim() === "" || this.password.trim() === "") {
      alert("Please enter a valid username and password.");
      return;
    }

    this.projectService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Login successful");
          this.fullname = response.fullname; 

          localStorage.setItem("app_username", this.username);
          localStorage.setItem("app_fullname", this.fullname);

          this.router.navigate(['/home']);
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert("Login failed. Please check your internet connection.");
      }
    );
  }

  logout() {
    this.username = "";
    this.password = "";
    this.fullname = "";

    localStorage.removeItem("app_username");
    localStorage.removeItem("app_fullname");

    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
