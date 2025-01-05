import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teams: any[] = [];
  gameInfo: { name: string; banner_game: string } = { name: '', banner_game: '' };
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit() {
    const gameId = Number(this.route.snapshot.paramMap.get('game_id'));
    if (gameId) {
      this.loadTeams(gameId);
    } else {
      console.error('Game ID is missing');
    }
  }

  loadTeams(gameId: number) {
    this.loading = true;
    this.projectService.getTeams(gameId).subscribe({
      next: ({ result, game, teams, message }: any) => {
        this.loading = false;
        if (result === 'success') {
          this.gameInfo = game || this.gameInfo;
          this.teams = teams || [];
        } else {
          console.warn('Failed to load teams:', message);
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading teams:', err);
      },
    });
  }

  goBack() {
    this.location.back();
  }
}
