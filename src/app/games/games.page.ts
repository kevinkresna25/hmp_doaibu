import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games = [
    {
      image: "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
      name: "Valorant",
      description: "Valorant is a tactical first-person shooter from Riot Games."
    },
    {
      image: "https://i.pinimg.com/originals/b5/ad/de/b5adde334737bed0c3f28b38f6f84d13.jpg",
      name: "Dota 2",
      description: "Dota 2 is a MOBA from Valve."
    },
    {
      image: "https://mmc.tirto.id/image/otf/640x0/2018/03/23/ilustrasi-mobile-legends--istimewa_ratio-16x9.jpg",
      name: "Mobile Legends",
      description: "Mobile Legends is a MOBA from Moonton."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
