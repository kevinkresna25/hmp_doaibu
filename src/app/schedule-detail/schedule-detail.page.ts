import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule_id: any
  selected_schedule: any

  schedule_details: any[] = []

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.schedule_details = this.scheduleservice.schedules
    this.schedule_id = this.route.snapshot.paramMap.get("schedule_id")
    this.selected_schedule = this.schedule_details.find(schedule_detail=>schedule_detail.event_name == this.schedule_id)
  }

  notify_me(){
    alert("Notification Created")
  }
}
