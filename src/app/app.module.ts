import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective
  ],
  imports: [
    BrowserModule,
     FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNqkj75J1qiP1uXDoYhgD9lqxdzcuuZfs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
