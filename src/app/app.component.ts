import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username = '';
  password = '';
  fullname = localStorage.getItem('app_fullname') || '';
  photo_profile = '';
  first_name = '';
  last_name = '';
  confirm_password = '';
  agreeTerms = false;
  isRegisterMode = false;

  usernameError = '';
  confirmPasswordError = '';
  photoProfileError = '';
  usernameSubject = new Subject<string>();

  constructor(private projectService: ProjectService, private router: Router) {
    // Debounce API calls for username validation
    this.usernameSubject.pipe(debounceTime(500)).subscribe((username) => {
      this.checkUsername(username);
    });
  }

  cekTitle(): string {
    return this.isRegisterMode ? 'Register' : 'Login';
  }

  validateUsername() {
    if (this.username.trim().length < 3) {
      this.usernameError = 'Username must be at least 3 characters.';
    } else {
      this.usernameError = '';
      this.usernameSubject.next(this.username); // Trigger API validation
    }
  }

  checkUsername(username: string) {
    this.projectService.checkUsername(username).subscribe({
      next: (response: any) => {
        this.usernameError =
          response.result === 'error' ? response.message : '';
      },
      error: () => {
        this.usernameError = 'Error validating username.';
      },
    });
  }

  validateConfirmPassword() {
    this.confirmPasswordError =
      this.password !== this.confirm_password
        ? 'Passwords do not match.'
        : '';
  }

  validatePhotoProfile() {
    const validUrlPattern =
      /^(https?:\/\/)?([\w\d\-]+\.)+[\w]{2,}(\/[^\s]*)?$/i;
    this.photoProfileError =
      this.photo_profile && !validUrlPattern.test(this.photo_profile)
        ? 'Invalid photo URL.'
        : '';
  }

  login() {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Please enter a valid username and password.');
      return;
    }

    this.projectService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          alert('Login successful');
          this.fullname = response.fullname;
          this.photo_profile = response.avatar || '';

          localStorage.setItem('app_username', this.username);
          localStorage.setItem('app_fullname', this.fullname);
          localStorage.setItem('app_photo_profile', this.photo_profile);
          localStorage.setItem('app_member_id', response.member_id.toString());

          this.router.navigate(['/']);
        } else {
          alert(response.message);
        }
      },
      error: () => {
        alert('Login failed. Please check your internet connection.');
      },
    });
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }

  register() {
    if (
      !this.first_name.trim() ||
      !this.last_name.trim() ||
      !this.username.trim() ||
      !this.password.trim() ||
      !this.confirm_password.trim() ||
      !this.agreeTerms ||
      this.usernameError ||
      this.confirmPasswordError ||
      this.photoProfileError
    ) {
      alert('Please correct all errors before submitting.');
      return;
    }

    this.projectService
      .register(
        this.username,
        this.password,
        this.first_name,
        this.last_name,
        this.photo_profile
      )
      .subscribe({
        next: (response: any) => {
          if (response.result === 'success') {
            alert('Registration successful!');
            this.toggleMode();
          } else {
            alert(response.message);
          }
        },
        error: () => {
          alert('Registration failed. Please check your internet connection.');
        },
      });
  }

  logout() {
    this.username = '';
    this.password = '';
    this.fullname = '';
    this.photo_profile = '';

    ['app_username', 'app_fullname', 'app_photo_profile', 'app_member_id'].forEach((key) =>
      localStorage.removeItem(key)
    );

    this.router.navigate(['/']);
  }
}
