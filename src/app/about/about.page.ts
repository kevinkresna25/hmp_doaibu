import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  likeCounter = 0;

  about = {
    image: 'https://i.pinimg.com/564x/fd/59/3b/fd593bb86c943e615cc0b6aef61d35fa.jpg',
    title: 'Doa Ibu',
    description: `Doa Ibu is a competitive e-sports team known for their relentless drive 
                  and tactical prowess across multiple gaming titles, especially in Valorant, 
                  Dota 2, and Mobile Legends. With a roster of skilled players and a reputation 
                  for teamwork and strategic excellence, Doa Ibu has earned top placements 
                  in regional and international tournaments. Their commitment to innovation 
                  and growth continues to make them a formidable force in the e-sports arena.`
  };

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.likeCounter++;
  }

}
