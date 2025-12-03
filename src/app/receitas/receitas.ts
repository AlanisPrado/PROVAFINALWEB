import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovimentacoesService } from '../services/movimentacoes';

@Component({
  selector: 'app-receitas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './receitas.html',
  styleUrls: ['./receitas.css']
})
export class Receitas {

  descricao = '';
  valor: number | null = null;
  data = '';

  constructor(private movService: MovimentacoesService) {}

  salvarReceita() {
    const nova = {
      descricao: this.descricao,
      valor: this.valor,
      data: this.data,
      tipo: 'receita'
    };

    this.movService.create(nova).subscribe(() => {
      alert('Receita cadastrada!');
      this.descricao = '';
      this.valor = null;
      this.data = '';
    });
  }
}
