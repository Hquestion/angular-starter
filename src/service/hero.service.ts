import {Injectable} from '@angular/core';
import {Hero} from '../klass/Hero';
import heros from '../mock/mock-heros';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {
    private herosUrl = 'api/heroes';
    constructor(private http: Http) {}
    getHeros(): Promise<Hero[]> {
        return this.http.get(this.herosUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handlerError);
    }
    getHeroById(id): Promise<Hero> {
        return this.http.get(`${this.herosUrl}/${id}`)
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handlerError);
    }
    update(hero: Hero): Promise<any> {
        const url = `${this.herosUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero))
            .toPromise()
            .then(res => hero)
            .catch(this.handlerError);
    }
    handlerError(e): Promise<any> {
        return Promise.reject(e);
    }
}
