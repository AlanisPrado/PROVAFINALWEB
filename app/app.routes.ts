import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Receitas } from './receitas/receitas';
import { Despesas} from './despesas/despesas';

export const routes: Routes = [
  
  { path: 'dashboard', component: Dashboard },
  { path: 'receitas', component: Receitas},
  { path: 'despesas', component: Despesas }
];
