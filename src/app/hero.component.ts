import {Component, OnInit} from '@angular/core';
import {HeroService} from '../service/hero.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


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
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
    providers: [HeroService]
})

export class HeroComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router
    ) {}
    public title = 'heros';
    public heros: Hero[];
    public selectHero: Hero;
    clickHero (hero: Hero): void {
        this.router.navigate([`hero-detail/${hero.id}`]);
    }
    getHeros(): void {
        this.heroService.getHeros().then(data => this.heros = data);
    }
    ngOnInit() {
        this.getHeros();
    }
}
