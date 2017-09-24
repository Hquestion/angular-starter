import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

import {HeroService} from '../service/hero.service';
import {AppRoutingModule} from '../router/app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
