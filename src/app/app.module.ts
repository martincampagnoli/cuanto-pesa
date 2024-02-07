import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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

const mat = [
  MatCardModule,
  MatIconModule,
  MatSnackBarModule,
  MatGridListModule,
  MatProgressBarModule,
];

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
    ...mat,
  ],
  exports: [...mat],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
