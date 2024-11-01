import { Routes } from '@angular/router';
import { CardsListComponent } from './pages/cards-list/cards-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: CardsListComponent,
    title: 'All Cards',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log in',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: ' Sign up',
  },
];
