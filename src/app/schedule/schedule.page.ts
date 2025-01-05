import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  schedules: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadSchedule();
  }

  loadSchedule() {
    this.projectService.getSchedules().subscribe({
      next: (response: any) => {
        if (response.result === 'success') {
          this.schedules = response.data.map((schedule: any) => ({
            schedule_id: schedule.schedule_id,
            title: schedule.title,
            game_name: schedule.game_name,
            team_name: schedule.team_name,
            location: schedule.location,
            date: this.formatDate(schedule.date),
            shortDescription: this.getShortDescription(schedule.description, 7),
          }));
        } else {
          console.warn('No schedules found');
        }
      },
      error: (err) => {
        console.error('Error loading schedules:', err);
      },
    });
  }

  getShortDescription(text: string, wordLimit: number): string {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + ' ...'
      : text;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }
}
