import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  teams_id: any
  selected_teams: any

  games: any[] = []

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService) { }

  ngOnInit() {
    this.games = this.gameservice.games
    this.teams_id = this.route.snapshot.paramMap.get("teams_id")
    this.selected_teams = this.games.find(game=>game.name == this.teams_id)
  }

  team_members(selected_teams: any){
    return Object.entries(this.selected_teams.team_members).map(([key, value])=>{
      return {key, value}
    })
  }
}
