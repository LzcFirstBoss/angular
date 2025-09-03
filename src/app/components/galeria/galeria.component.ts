import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  // Lista de imagens da galeria
  imagens = [
    { id: 1015, alt: 'Imagem 1' },
    { id: 1025, alt: 'Imagem 2' },
    { id: 1035, alt: 'Imagem 3' },
    { id: 1045, alt: 'Imagem 4' },
    { id: 1055, alt: 'Imagem 5' },
    { id: 1065, alt: 'Imagem 6' }
  ];

  imagemExpandida: string | null = null;

  // Função para expandir imagem ao clicar
  expandirImagem(id: number) {
    this.imagemExpandida = `https://picsum.photos/id/${id}/1200/800`;
  }

  // Fecha o modal
  fecharModal() {
    this.imagemExpandida = null;
  }
}
