import {Component, OnInit} from '@angular/core';
import {HeroService} from '../service/hero.service';


class Hero {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    constructor(private heroService: HeroService) {}
    public title = 'heros';
    public heros: Hero[];
    public selectHero: Hero;
    clickHero (hero: Hero): void {
        this.selectHero = hero;
    }
    getHeros(): void {
        this.heros = this.heroService.getHeros();
    }
    ngOnInit() {
        this.getHeros();
    }
}
