import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  achievements_id: string | null = null;
  selected_teams: any = null;
  years: string[] = ["2024", "2023", "2022"];
  selected_year: string = "All";

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService) { }

  ngOnInit() {
    this.achievements_id = this.route.snapshot.paramMap.get("achievement_id");
    this.selected_teams = this.gameservice.games.find(game => game.name === this.achievements_id);
  }

  // Fungsi untuk memeriksa apakah achievement_list bertipe array
  private isAchievementArray(achievement_list: unknown): achievement_list is { name: string, year: string }[] {
    return Array.isArray(achievement_list) && achievement_list.every(item => 
      typeof item.name === 'string' && typeof item.year === 'string');
  }

  // Getter untuk memfilter achievements berdasarkan tahun yang dipilih
  get filteredAchievements() {
    if (this.selected_teams && this.selected_teams.team_achievement) {
      const achievements = Object.entries(this.selected_teams.team_achievement).map(([team_name, achievement_list]) => {
        
        // Memastikan bahwa achievement_list bertipe array dengan type guard
        if (this.isAchievementArray(achievement_list)) {
          const filtered = this.selected_year === "All"
            ? achievement_list
            : achievement_list.filter(achievement => achievement.year === this.selected_year);

          return { team_name, achievements: filtered };
        }

        // Jika bukan array, kembalikan array kosong untuk tim tersebut
        return { team_name, achievements: [] };
      });

      return achievements.filter(team => team.achievements.length > 0);
    }
    return [];
  }
}
