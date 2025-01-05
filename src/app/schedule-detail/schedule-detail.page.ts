import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {
  scheduleId: string | null = null;
  selectedSchedule: any = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit() {
    this.scheduleId = this.route.snapshot.paramMap.get('schedule_id');
    if (this.scheduleId) {
      this.loadScheduleDetail(parseInt(this.scheduleId, 10));
    } else {
      console.error('Schedule ID is missing');
    }
  }

  loadScheduleDetail(scheduleId: number) {
    const memberId = parseInt(localStorage.getItem('app_member_id') || '0', 10);

    if (!memberId) {
      alert('You must be logged in to view schedule details.');
      return;
    }

    this.projectService.getScheduleDetail(scheduleId, memberId).subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          this.selectedSchedule = response.data;
        } else {
          console.warn('Schedule not found:', response.message);
        }
      },
      error: (error) => {
        console.error('Error loading schedule detail:', error);
      },
    });
  }

  toggleNotification(event: any) {
    const isNotified = event.detail.checked;
    const memberId = parseInt(localStorage.getItem('app_member_id') || '0', 10);

    if (!memberId) {
      alert('You must be logged in to set notifications.');
      return;
    }

    this.projectService.updateNotification(this.selectedSchedule.schedule_id, memberId).subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          this.selectedSchedule.notified = isNotified;
          console.log('Notification status updated successfully.');
        } else {
          console.warn('Failed to update notification status:', response.message);
        }
      },
      error: (error) => {
        console.error('Error updating notification status:', error);
      },
    });
  }

  goBack() {
    this.location.back();
  }
}
