import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anoAtual: number = new Date().getFullYear();
  marca: string = 'MinhaMarca';

  // Links rápidos
  linksRapidos = [
    { nome: 'Início', url: '#' },
    { nome: 'Sobre', url: '#' },
    { nome: 'Serviços', url: '#' },
    { nome: 'Contato', url: '#' }
  ];

  // Redes sociais
  redesSociais = [
    { icone: 'bi-facebook', url: 'https://facebook.com' },
    { icone: 'bi-instagram', url: 'https://instagram.com' },
    { icone: 'bi-linkedin', url: 'https://linkedin.com' },
    { icone: 'bi-whatsapp', url: 'https://wa.me/5511999999999' }
  ];

  // Contatos
  contatos = [
    { icone: 'bi-telephone', valor: '(11) 99999-9999' },
    { icone: 'bi-envelope', valor: 'contato@minhamarca.com' },
    { icone: 'bi-geo-alt', valor: 'Rua Exemplo, 123 - São Paulo' }
  ];
}
