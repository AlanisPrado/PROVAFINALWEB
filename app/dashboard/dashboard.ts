import { Component, OnInit } from '@angular/core';
import { MovimentacoesService } from '../services/movimentacoes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  movimentacoes: any[] = [];
  saldo = 0;

  constructor(private movService: MovimentacoesService) {}

  ngOnInit() {
    this.atualizarMovimentacoes();
  }

  atualizarMovimentacoes() {
    this.movService.getAll().subscribe((dados: any[]) => {
      // Formata a data de cada movimentação
      this.movimentacoes = dados.map(mov => ({
        ...mov,
        dataFormatada: new Date(mov.data).toLocaleDateString('pt-BR') // dd/MM/yyyy
      }));

      // Calcula saldo
      const receitas = dados
        .filter(x => x.tipo === 'receita')
        .reduce((sum, x) => sum + x.valor, 0);

      const despesas = dados
        .filter(x => x.tipo === 'despesa')
        .reduce((sum, x) => sum + x.valor, 0);

      this.saldo = receitas - despesas;
    });
  }
}
