import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  
  schedules: any[] = []

  constructor(private scheduleservice: ScheduleserviceService) {}

  ngOnInit() {
    this.schedules = this.scheduleservice.schedules
  }
}
