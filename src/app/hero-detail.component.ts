import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import { Hero } from '../klass/Hero';
import {HeroService} from '../service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component ({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: []
})

export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    @Input() hero: Hero;
    ngOnInit() {
        this.route.paramMap
            .switchMap((param: ParamMap) => this.heroService.getHeroById(param.get('id')))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }
}
