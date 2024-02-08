import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CircleLinkComponent } from './components/circle-link/circle-link.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { appReducer } from './store/default/default.reducers';
import { AppEffects } from './store/default/default.effects';
import { CreateComponent } from './components/create/create.component';
import { PlayComponent } from './components/play/play.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const mat = [
  MatCardModule,
  MatIconModule,
  MatSnackBarModule,
  MatGridListModule,
  MatProgressBarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];

const firebaseConfig = {
  apiKey: 'AIzaSyAVuzrtbAeAVZUvF-UYquKwsvt2U3kmvpM',
  authDomain: 'cuanto-pesa.firebaseapp.com',
  projectId: 'cuanto-pesa',
  storageBucket: 'cuanto-pesa.appspot.com',
  messagingSenderId: '293185843496',
  appId: '1:293185843496:web:8cac5b2c1a08b0bec1e01d',
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ButtonLinkComponent,
    CircleLinkComponent,
    CreateComponent,
    PlayComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', appReducer),
    EffectsModule.forRoot([AppEffects]),
    FormsModule,
    ReactiveFormsModule,
    ...mat,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  exports: [...mat],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
