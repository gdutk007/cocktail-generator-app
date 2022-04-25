import { Injectable } from '@angular/core';
import {Food} from './recipe-list/item'
import {FOOD} from './recipe-list/foodList'
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private messageService: MessageService,
              private https: HttpClient) { }

  private Url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';  // URL to web api

  getFoodList(): Observable<Food[]> {
    this.messageService.add('Fetched the Recipe.')
    return of(FOOD);
  }


  getDish(id: number): Observable<Food>{
    console.log(`DetailsService: fetched hero id=${id}`)
    this.messageService.add(`DetailsService: fetched hero id=${id}`);
    return of( FOOD.find(dish => dish.id === id));
  }

  getDrink(id: number): Observable<any> {
    console.log(id) 
    return this.https.get<any>(this.Url+id)
  }

}
