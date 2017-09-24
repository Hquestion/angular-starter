import {Injectable} from '@angular/core';
import {Hero} from '../klass/Hero';
import heros from '../mock/mock-heros';

@Injectable()

export class HeroService {
    getHeros(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(heros);
            }, 200);
        });
    }
    getHeroById(id): Promise<Hero> {
        return new Promise(resolve => {
            this.getHeros().then(heros => {
                const hero = heros.find(item => {
                    return item.id === id;
                });
                resolve(hero);
            });
        });
    }
}
