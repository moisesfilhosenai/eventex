import { Component } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent {

  itens = [
    {nome: "Conferência", link:"/", fragment: "overview"},
    {nome: "Palestras", link:"/palestras", fragment: "sup"},
    {nome: "Palestrantes", link:"/", fragment: "speakers"},
    {nome: "Patrocinadores", link:"/", fragment: "sponsors"},
    {nome: "Inscrição", link:"/", fragment: "register"},
    {nome: "Local", link:"/", fragment: "venue"}
  ]
}
