import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TheoryComponent } from './components/theory/theory.component';

export const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'theory', component: TheoryComponent},
];
