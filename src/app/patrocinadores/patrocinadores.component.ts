import { Component } from '@angular/core';

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})
export class PatrocinadoresComponent {

  patrocinadoresGold = [
    "sponsor-gold-01.png", "sponsor-gold-02.png", "sponsor-gold-03.png"
  ]

  patrocinadoresSilver = [
    "sponsor-silver-01.png", "sponsor-silver-02.png", "sponsor-silver-03.png",
    "sponsor-silver-04.png", "sponsor-silver-05.png", "sponsor-silver-06.png"
  ]
}
