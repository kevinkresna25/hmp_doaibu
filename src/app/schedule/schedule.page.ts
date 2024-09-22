import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  
  schedules = [
    {
      event_date: '2024-09-04',
      event_name: 'The International 2024',
      team_game: 'Dota 2 Team',
    },
    {
      event_date: '2024-09-05',
      event_name: 'VCT Ascension 2024',
      team_game: 'Valorant Team',
    },
    {
      event_date: '2024-09-10',
      event_name: 'MSC 2024',
      team_game: 'Mobile Legend Team',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
