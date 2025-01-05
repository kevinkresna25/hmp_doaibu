import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  games: any[] = [];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.projectService.getGames().subscribe(
      (response: any) => {
        if (response.result === 'success') {
          this.games = response.data;
        } else {
          console.error('Failed to load games');
        }
      },
      (error) => {
        console.error('Error loading games:', error);
      }
    );
  }

  goToTeams(gameId: number) {
    this.router.navigate([`/teams/${gameId}`]);
  }

  goToAchievements(gameId: number) {
    this.router.navigate([`/achievement/${gameId}`]);
  }
}
