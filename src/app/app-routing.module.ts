import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CreateComponent } from './components/create/create.component';
import { PlayComponent } from './components/play/play.component';
import { DetailsComponent } from './components/details/details.component';

/**
 * Defines the routes for navigation within the application.
 */
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'create', component: CreateComponent },
  { path: 'play/:id', component: PlayComponent },
  { path: 'details/:id', component: DetailsComponent },
];

/**
 * The Angular module that handles application routing.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
