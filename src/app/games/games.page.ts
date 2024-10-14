import { Component, OnInit } from '@angular/core';
import { GameserviceService } from '../gameservice.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  games: any[] = []

  constructor(private gameservice: GameserviceService) { }

  ngOnInit() {
    this.games = this.gameservice.games
  }

}
