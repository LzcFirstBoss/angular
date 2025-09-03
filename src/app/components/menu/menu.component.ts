import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // ===== STATE / VARIÁVEIS =====
  titulo = 'MinhaMarca';
  corMenu = '#111';            // cor inicial do navbar (property binding)
  corDigitada = '';            // input controlado por [(ngModel)]
  itemSelecionado = '';        // mostra último item clicado
  menuAbertoMobile = false;    // alterna o menu em telas pequenas sem depender só do checkbox

  // ===== FUNÇÕES =====
  mudarCorMenu() {
    this.corMenu = this.corDigitada?.trim() || '#111';
  }

  selecionarItem(nome: string) {
    this.itemSelecionado = nome;
    // aqui você poderia fazer navegação pelo Router futuramente
  }

  // Alterna o menu mobile (ex.: para usar em vez do checkbox)
  toggleMobile() {
    this.menuAbertoMobile = !this.menuAbertoMobile;
  }
}
