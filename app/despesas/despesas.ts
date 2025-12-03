import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovimentacoesService } from '../services/movimentacoes';


@Component({
  selector: 'app-despesas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './despesas.html',
  styleUrls: ['./despesas.css']
})
export class Despesas {

  descricao = '';
  valor: number | null = null;
  data = '';

  constructor(private movService: MovimentacoesService) {}

  salvarDespesa() {
    const nova = {
      descricao: this.descricao,
      valor: this.valor,
      data: this.data,
      tipo: 'despesa'
    };

    this.movService.create(nova).subscribe(() => {
      alert('Despesa cadastrada!');
      this.descricao = '';
      this.valor = null;
      this.data = '';
    });
  }
}
