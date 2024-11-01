import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ActionTypes } from './store/actionTypes';
import { cardsListReducer } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { GetCardsEffect } from './store/effects/card.effects';
import { UserEffects } from './store/effects/user.effects';
import { AddUserReducer, AuthUserReducer } from './store/user.reducers';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    provideState('get cards', cardsListReducer),
    provideState('add user', AddUserReducer),
    provideState('auth', AuthUserReducer),
    provideEffects(GetCardsEffect, UserEffects),
  ],
};
