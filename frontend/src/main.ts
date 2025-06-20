import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import 'zone.js'; // important for Angular change detection

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(err => console.error(err));
