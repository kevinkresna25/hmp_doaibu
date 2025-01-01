import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {

  team_member_id: any
  selected_teams: any
  team_members_data: any

  constructor(private route: ActivatedRoute, private gameservice: GameserviceService) { }

  ngOnInit() {
    this.team_member_id = this.route.snapshot.paramMap.get("team_member_id")

    this.selected_teams = this.gameservice.games.find(game=>
      Object.keys(game.team_members).includes(this.team_member_id)
    )

    if (this.selected_teams) {
      this.team_members_data = this.selected_teams.team_members[this.team_member_id]
    }
  }
}
