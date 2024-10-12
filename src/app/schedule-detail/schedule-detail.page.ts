import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule_id: any
  selected_schedule: any

  schedule_details = [
    {
      event_date: '2024-09-04',
      event_name: 'The International 2024',
      team_game: 'Dota 2 Team',
      image: "https://ggscore.com/media/tournament/e8240.png",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, 
                    sapien a scelerisque vehicula, massa nisi tristique augue, nec congue arcu turpis a nisl. Vivamus porta, risus sit amet dapibus posuere, 
                    orci nunc tincidunt justo, non dapibus sem justo vel lectus. Nullam quis arcu eget lorem ultrices luctus ac ac odio. Sed dictum, 
                    nisi vel facilisis tristique, velit sapien vulputate arcu, sit amet auctor est ligula non enim. Fusce sed turpis massa. 
                    Vivamus rutrum leo et metus dictum, ut blandit metus tempus. Integer id pharetra orci, non fringilla lacus. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Praesent aliquam nunc et quam volutpat vehicula.`,
      place: "Copenhagen, Denmark (10.00 AM)",
      team: "TEAM A"
    },
    {
      event_date: '2024-09-05',
      event_name: 'VCT Ascension 2024',
      team_game: 'Valorant Team',
      image: "https://api.duniagames.co.id/api/content/upload/file/17397652771725261266.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, 
                    sapien a scelerisque vehicula, massa nisi tristique augue, nec congue arcu turpis a nisl. Vivamus porta, risus sit amet dapibus posuere, 
                    orci nunc tincidunt justo, non dapibus sem justo vel lectus. Nullam quis arcu eget lorem ultrices luctus ac ac odio. Sed dictum, 
                    nisi vel facilisis tristique, velit sapien vulputate arcu, sit amet auctor est ligula non enim. Fusce sed turpis massa. 
                    Vivamus rutrum leo et metus dictum, ut blandit metus tempus. Integer id pharetra orci, non fringilla lacus. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Praesent aliquam nunc et quam volutpat vehicula.`,
      place: "Jakarta, Indonesia (11.00 AM)",
      team: "TEAM B"
    },
    {
      event_date: '2024-09-10',
      event_name: 'MSC 2024',
      team_game: 'Mobile Legend Team',
      image: "https://cdn.oneesports.id/cdn-data/sites/2/2023/12/Mobile-Legends_MSC-2024.jpg",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, 
                    sapien a scelerisque vehicula, massa nisi tristique augue, nec congue arcu turpis a nisl. Vivamus porta, risus sit amet dapibus posuere, 
                    orci nunc tincidunt justo, non dapibus sem justo vel lectus. Nullam quis arcu eget lorem ultrices luctus ac ac odio. Sed dictum, 
                    nisi vel facilisis tristique, velit sapien vulputate arcu, sit amet auctor est ligula non enim. Fusce sed turpis massa. 
                    Vivamus rutrum leo et metus dictum, ut blandit metus tempus. Integer id pharetra orci, non fringilla lacus. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Praesent aliquam nunc et quam volutpat vehicula.`,
      place: "Riyadh, Saudi Arabia (12.00 AM)",
      team: "TEAM C"
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.schedule_id = this.route.snapshot.paramMap.get("schedule_id")
    this.selected_schedule = this.schedule_details.find(schedule_detail=>schedule_detail.event_name == this.schedule_id)
  }

  notify_me(){
    alert("Notification Created")
  }
}
