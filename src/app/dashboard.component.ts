import {Component, OnInit} from '@angular/core';
import {Hero} from '../klass/Hero';
import {HeroService} from '../service/hero.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService) {}
    public heros: Hero[];
    ngOnInit() {
        this.heroService.getHeros().then(res => {
            this.heros = res.slice(0, 4);
        });
    }
}
