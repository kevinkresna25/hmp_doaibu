import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username = '';
  password = '';
  firstName = '';
  lastName = '';

  constructor(private projectService: ProjectService, private router: Router) {}

  register() {
    // Validasi input pengguna
    if (!this.username.trim() || !this.password.trim() || !this.firstName.trim() || !this.lastName.trim()) {
      alert('All fields are required.');
      return;
    }

    // Panggil service untuk mendaftarkan pengguna
    // this.projectService.register(this.username, this.password, this.firstName, this.lastName).subscribe(
    //   (response: any) => {
    //     if (response.result === 'success') {
    //       alert('Registration successful! Please log in.');

    //       // Redirect ke halaman login setelah berhasil
    //       this.router.navigate(['/login']);
    //     } else {
    //       alert(response.message || 'Registration failed.');
    //     }
    //   },
    //   (error) => {
    //     alert('An error occurred. Please try again later.');
    //   }
    // );
  }
}
