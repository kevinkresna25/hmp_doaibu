import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {
  team: any = {};
  team_members: any[] = [];
  team_id: number = 0;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.team_id = parseInt(params['team_id'], 10);

      if (this.team_id) {
        this.fetchTeamDetails(this.team_id);
      } else {
        console.error('Invalid team ID');
      }
    });
  }

  fetchTeamDetails(team_id: number) {
    this.projectService.getTeamMembers(team_id).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          this.team = { name: response.team, banner: response.banner };
          this.team_members = response.data;
        } else {
          console.error('Failed to load team details:', response.message);
          this.router.navigate(['/teams']);
        }
      },
      (error) => {
        console.error('Error fetching team details:', error);
      }
    );
  }

  refreshTeamMembers() {
    this.fetchTeamDetails(this.team_id);
  }

  goBack() {
    this.location.back();
  }
}
