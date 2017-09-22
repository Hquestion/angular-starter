import {Injectable} from '@angular/core';
import {Hero} from '../klass/Hero';
import heros from '../mock/mock-heros';

@Injectable()

export class HeroService {
    getHeros(): Hero[] {
        return heros;
    }
}
