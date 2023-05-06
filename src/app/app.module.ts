import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterComponent } from './counter/components/counter/counter.component';
import { counterModule } from './counter/counter.module';
import { HeroComponent } from './heroes/components/hero/hero.component';
import { ListComponent } from './heroes/components/list/list.component';
import { HeroesModule } from './heroes/components/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    counterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
