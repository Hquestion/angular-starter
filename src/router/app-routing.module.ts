import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeroComponent} from '../app/hero.component';
import {DashboardComponent} from '../app/dashboard.component';
import {HeroDetailComponent} from '../app/hero-detail.component';

const cfg = [{
    path: 'heros',
    component: HeroComponent
}, {
    path: '',
    component: DashboardComponent
}, {
    path: 'hero-detail/:id',
    component: HeroDetailComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(cfg)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
