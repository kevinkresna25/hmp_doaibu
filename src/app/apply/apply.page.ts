import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.page.html',
  styleUrls: ['./apply.page.scss'],
})
export class ApplyPage implements OnInit {
  member_id: number = 0;
  proposals: any[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.initializeData();
  }

  ionViewWillEnter() {
    this.getProposals();
  }

  initializeData() {
    const storedMemberId = localStorage.getItem('app_member_id');
    this.member_id = storedMemberId ? parseInt(storedMemberId, 10) : 0;
    this.getProposals();
  }

  getProposals() {
    if (this.member_id) {
      this.projectService.getProposals(this.member_id).subscribe({
        next: (response: any) => {
          if (response.result === 'success') {
            this.proposals = response.proposals;
          } else {
            console.warn('Failed to load proposals:', response.message);
          }
        },
        error: (err) => console.error('Error loading proposals:', err),
      });
    }
  }

  navigateToApplyTeamNew() {
    this.router.navigate(['/apply-team-new']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
