import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apply-team-new',
  templateUrl: './apply-team-new.page.html',
  styleUrls: ['./apply-team-new.page.scss'],
})
export class ApplyTeamNewPage implements OnInit {
  member_id: number = 0;
  games: any[] = [];
  teams: any[] = [];
  selectedGame: number | null = null;
  selectedTeam: number | null = null;
  description: string = '';

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.member_id = parseInt(localStorage.getItem('app_member_id') || '0', 10);
    this.loadGames();
  }

  loadGames() {
    this.projectService.getGames().subscribe((response: any) => {
      if (response.result === 'success') {
        this.games = response.data;
        if (this.games.length > 0) {
          this.selectedGame = this.games[0].game_id;
          this.loadTeams();
        }
      } else {
        alert('Failed to load games.');
      }
    });
  }

  loadTeams() {
    if (!this.selectedGame) return;
    this.projectService.getTeams(this.selectedGame).subscribe((response: any) => {
      if (response.result === 'success') {
        this.teams = response.teams;
        this.selectedTeam = this.teams.length > 0 ? this.teams[0].team_id : null;
      } else {
        this.teams = [];
        this.selectedTeam = null;
      }
    });
  }

  applyTeam() {
    if (!this.selectedTeam || !this.description.trim()) {
      alert('Please fill all fields before submitting.');
      return;
    }

    this.projectService
      .applyTeam(this.member_id, this.selectedTeam, this.description)
      .subscribe((response: any) => {
        if (response.result === 'success') {
          alert('Request submitted successfully!');
          this.router.navigate(['/apply']);
        } else {
          alert('Failed to submit request.');
        }
      });
  }

  goBack() {
    this.location.back();
  }
}
