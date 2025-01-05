import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  about: any = null;
  likeCounter = 0;
  hasLiked = false;
  isProcessing = false;
  memberId: number = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.memberId = parseInt(localStorage.getItem('app_member_id') || '0', 10);
    if (!this.memberId) {
      alert('You must be logged in to view this page.');
      return;
    }

    this.loadAboutUs();
  }

  loadAboutUs() {
    this.projectService.getAboutUs().subscribe((response: any) => {
      if (response.result === 'success' && response.data.length > 0) {
        this.about = response.data[0];
        this.loadLikeStatus();
      } else {
        console.warn('No About Us data found');
      }
    });
  }

  loadLikeStatus() {
    if (!this.about) return;

    this.projectService.getLikes(this.about.about_us_id, this.memberId).subscribe((response: any) => {
      if (response.result === 'success') {
        this.likeCounter = response.total_like || 0;
        this.hasLiked = response.num_like === 1;
      } else {
        console.warn('Failed to load like status:', response.message);
      }
    });
  }

  toggleLike() {
    if (this.isProcessing || !this.about) return;

    this.isProcessing = true;
    this.projectService.updateLike(this.about.about_us_id, this.memberId).subscribe((response: any) => {
      if (response.result === 'success') {
        this.hasLiked = response.like === 1;
        this.likeCounter = response.total_like;
      } else {
        alert(response.message);
      }
      this.isProcessing = false;
    });
  }
}
