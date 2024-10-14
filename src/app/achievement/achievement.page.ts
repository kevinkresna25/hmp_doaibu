import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  achievements_id: any
  selected_teams: any
  team_achievements_list: any[] = []
  filtered_achievements: any[] = []
  games: any[] = []

  selected_year: string = "All"
  years: string[] = ["2024", "2023", "2022"]

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService) { }

  ngOnInit() {
    this.games = this.gameservice.games;
    this.achievements_id = this.route.snapshot.paramMap.get("achievement_id")
    this.selected_teams = this.games.find(game => game.name == this.achievements_id)

    if (this.selected_teams && this.selected_teams.team_achievement) {
      this.team_achievements_list = this.get_team_achievements(this.selected_teams);
      this.filtered_achievements = [...this.team_achievements_list]
    }
  }

  get_team_achievements(selected_teams: any) {
    return Object.entries(selected_teams.team_achievement).map(([team_name, achievements]) => {
      return { team_name, achievements }
    })
  }

  filter_achievements() {
    if (this.selected_year == "All") {
      this.filtered_achievements = [...this.team_achievements_list]
    } else {
      this.filtered_achievements = this.team_achievements_list.map(team => {
        const filtered_achievements = team.achievements.filter((achievement: any) => achievement.year == this.selected_year)
        return { ...team, achievements: filtered_achievements }
      }).filter(team => team.achievements.length > 0)
    }
  }
}
