import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  itens = [
    {nome: "Conferência", link: "#overview"},
    {nome: "Palestras", link: "palestras.html"},
    {nome: "Palestrantes", link: "#speakers"},
    {nome: "Patrocinadores", link: "#sponsors"},
    {nome: "Inscrição", link: "#register"},
    {nome: "Local", link: "#venue"}
  ]
}
