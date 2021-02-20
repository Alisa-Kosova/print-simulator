import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TheoryComponent } from './components/theory/theory.component';
import { PopupTestComponent } from './components/popup-test/popup-test.component';
import { TestComponent } from './components/test/test.component';

export const ROUTES: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'start', component: PopupTestComponent, outlet: 'popup'},
  {path: 'test', component: TestComponent}
];
