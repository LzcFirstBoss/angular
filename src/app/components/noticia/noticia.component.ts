import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Noticia = {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagem: string;
};

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {
  // Lista de notícias
  noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Notícia 1',
      resumo: 'Resumo rápido sobre a notícia. Um pequeno texto chamativo para atrair o leitor.',
      conteudo: `Este é o conteúdo completo da Notícia 1. Aqui você pode detalhar todos os fatos, contexto e informações adicionais.`,
      imagem: 'https://picsum.photos/seed/noticia1/350/220'
    },
    {
      id: 2,
      titulo: 'Notícia 2',
      resumo: 'Resumo rápido sobre a notícia. Um pequeno texto chamativo para atrair o leitor.',
      conteudo: `Este é o conteúdo completo da Notícia 2. Aqui você pode detalhar todos os fatos, contexto e informações adicionais.`,
      imagem: 'https://picsum.photos/seed/noticia2/350/220'
    },
    {
      id: 3,
      titulo: 'Notícia 3',
      resumo: 'Resumo rápido sobre a notícia. Um pequeno texto chamativo para atrair o leitor.',
      conteudo: `Este é o conteúdo completo da Notícia 3. Aqui você pode detalhar todos os fatos, contexto e informações adicionais.`,
      imagem: 'https://picsum.photos/seed/noticia3/350/220'
    }
  ];

  noticiaAberta: Noticia | null = null;

  abrirNoticia(noticia: Noticia) {
    this.noticiaAberta = noticia;
  }

  fecharModal() {
    this.noticiaAberta = null;
  }
}
