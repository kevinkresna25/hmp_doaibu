import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  games = [
    {
      image: "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
      name: "Valorant",
      description: "Valorant is a tactical first-person shooter from Riot Games.",
      team_achievement: {
        "TEAM A": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2024" },
          { name: "Juara 3", year: "2022" },
        ],
        "TEAM B": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2022" },
          { name: "Juara 4", year: "2022" },
        ],
        "TEAM C": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2024" },
          { name: "Juara 3", year: "2022" },
          { name: "Juara 4", year: "2022" },
          { name: "Juara 5", year: "2022" },
        ]
      },
      team_members: {
        "TEAM A": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM B": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM C": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
      }
    },
    {
      image: "https://i.pinimg.com/originals/b5/ad/de/b5adde334737bed0c3f28b38f6f84d13.jpg",
      name: "Dota 2",
      description: "Dota 2 is a MOBA from Valve.",
      team_achievement: {
        "TEAM D": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2023" },
        ],
        "TEAM E": [
          { name: "Juara 1", year: "2023" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2022" },
        ],
        "TEAM F": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2024" },
          { name: "Juara 3", year: "2022" },
        ]
      },
      team_members: {
        "TEAM D": [
          { name: "Andi", role: "SafeLaner", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "MidLaner", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Soft Support", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM E": [
          { name: "Andi", role: "Hard Support", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Offlaner", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM F": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
      }
    },
    {
      image: "https://mmc.tirto.id/image/otf/640x0/2018/03/23/ilustrasi-mobile-legends--istimewa_ratio-16x9.jpg",
      name: "Mobile Legends",
      description: "Mobile Legends is a MOBA from Moonton.",
      team_achievement: {
        "TEAM G": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2023" },
        ],
        "TEAM H": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2022" },
        ],
        "TEAM I": [
          { name: "Juara 1", year: "2024" },
          { name: "Juara 2", year: "2023" },
          { name: "Juara 3", year: "2022" },
        ]
      },
      team_members: {
        "TEAM G": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM H": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
        "TEAM I": [
          { name: "Andi", role: "Duelist", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Budi", role: "Controller", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"},
          { name: "Bella", role: "Sentinel", image: "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"}
        ],
      }
    }
  ]

  constructor() { }
}
