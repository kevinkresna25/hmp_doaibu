import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards = [
    {
      title: 'What We Play',
      icon: 'game-controller-outline',
      link: '/games'
    },
    {
      title: 'Who We Are',
      icon: 'people-outline',
      link: '/about'
    },
    {
      title: 'Our Schedule',
      icon: 'calendar-outline',
      link: '/schedule'
    }
  ];
  
  constructor(private router: Router) {}
   ngOnInit() {
    const username = localStorage.getItem("app_username");
    if (!username) {
      this.router.navigate(['/login']);
    }
  }
}
