import { TestBed } from '@angular/core/testing';
import { MovimentacoesService } from './movimentacoes';

describe('MovimentacoesService', () => {
  let service: MovimentacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
