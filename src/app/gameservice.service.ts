import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  // Data lokal untuk games tetap ada
  games = [
    {
      image: "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
      name: "Valorant",
      description: "Valorant is a tactical first-person shooter from Riot Games.",
      team_achievement: {
        "TEAM A": "Juara 1 Season 2024",
        "TEAM B": "Juara 1 Season 2023",
        "TEAM C": "Juara 1 Season 2022",
      }
    },
    {
      image: "https://i.pinimg.com/originals/b5/ad/de/b5adde334737bed0c3f28b38f6f84d13.jpg",
      name: "Dota 2",
      description: "Dota 2 is a MOBA from Valve.",
      team_achievement: {
        "TEAM D": "Juara 1 Season 2021",
        "TEAM E": "Juara 1 Season 2020",
        "TEAM F": "Juara 1 Season 2018",
      }
    },
    {
      image: "https://mmc.tirto.id/image/otf/640x0/2018/03/23/ilustrasi-mobile-legends--istimewa_ratio-16x9.jpg",
      name: "Mobile Legends",
      description: "Mobile Legends is a MOBA from Moonton.",
      team_achievement: {
        "TEAM G": "Juara 1 Season 2017",
        "TEAM H": "Juara 1 Season 2016",
        "TEAM I": "Juara 1 Season 2015",
      }
    }
  ];

  constructor() {}
}
