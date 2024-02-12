import { Component } from '@angular/core';
import { environment } from '../environments/environment';

/**
 * The root component of the Angular application.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * The title of the application.
   */
  title = '¿Cuánto pesa?';
  version = environment.appVersion;
}
