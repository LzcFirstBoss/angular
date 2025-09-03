import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  // ======== LISTA DE PRODUTOS ========
  produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição curta do produto, com detalhes importantes.',
      preco: 199.9,
      imagem: 'https://picsum.photos/id/1011/300/200'
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Descrição curta do produto, com detalhes importantes.',
      preco: 299.9,
      imagem: 'https://picsum.photos/id/1012/300/200'
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Descrição curta do produto, com detalhes importantes.',
      preco: 399.9,
      imagem: 'https://picsum.photos/id/1013/300/200'
    }
  ];

  // ======== FUNÇÃO AO CLICAR EM COMPRAR ========
  comprar(produto: any) {
    alert(`Você comprou: ${produto.nome} por R$ ${produto.preco.toFixed(2)}`);
  }
}
