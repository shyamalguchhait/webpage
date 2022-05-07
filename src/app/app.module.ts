import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ResearchComponent } from './components/research/research.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { ContactComponent } from './components/contact/contact.component';
import { LightboxModule } from 'ngx-lightbox';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResearchComponent,
    LightboxComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
