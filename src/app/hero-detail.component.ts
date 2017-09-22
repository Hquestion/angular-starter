import {Component} from '@angular/core';
import { Hero } from '../klass/Hero';
import {Input} from '@angular/core';

@Component ({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: []
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}
