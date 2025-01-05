import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  achievements: any[] = [];
  filteredAchievements: any[] = [];
  gameImage: string | null = null;
  years: string[] = ['All'];
  selectedYear: string = 'All';

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit() {
    const gameId = this.route.snapshot.params['game_id'];
    if (gameId) {
      this.loadAchievements(parseInt(gameId, 10));
    }

    const currentYear = new Date().getFullYear();
    for (let year = 2015; year <= currentYear; year++) {
      this.years.push(year.toString());
    }
  }

  loadAchievements(gameId: number) {
    this.projectService.getAchievements(gameId).subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          this.gameImage = response.game.image;

          this.achievements = response.team_achievement.map((ach: any) => ({
            team_name: ach.team_name,
            achievement: ach.achievement,
            year: ach.year.slice(0, 4),
          }));

          this.filteredAchievements = this.achievements;
        }
      },
      error: () => console.error('Failed to load achievements'),
    });
  }

  filterAchievements() {
    this.filteredAchievements =
      this.selectedYear === 'All'
        ? this.achievements
        : this.achievements.filter((ach) => ach.year === this.selectedYear);
  }

  goBack() {
    this.location.back();
  }
}
