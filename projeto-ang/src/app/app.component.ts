import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   
    listTitles = [{
    trailer: "/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    couver: "/assets/images/guardios-da-galaxia.jpg",
    name: "Gardiões da Galaxia",
    relevance: 98,
    age:12,
    parts: 2,
    categores: ['Épico', 'Filme de Fantasia', 'Viagem no espaço'],


  },{
    
    trailer: "/assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    couver: "/assets/images/guardios-da-galaxia.jpg",
    name: "Gardiões da Galaxia 2",
    relevance: 36,
    age:0,
    parts: 2,
    categores: ['Épico', 'Filme de Fantasia', 'Viagem no espaço'],
  
}];


}



