import { Component, OnInit, Input } from '@angular/core';
import {Food} from './item'
import {FOOD} from './foodList'
import {DetailsService} from '../details.service'
import { DefaultUrlSerializer, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import {MessageService} from '../message.service'
import {IngredientService} from '../ingredient.service'
import {MatCardModule} from '@angular/material/card';
import {Drink} from '../types/types'
import {Ingredient} from '../navbar/ingredientType'
import {trigger, transition, style, animate} from '@angular/animations'

@Component({
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ],
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private detailsService: DetailsService,
              private recipeMessage: MessageService,
              private ingredientService: IngredientService,
              private router: Router ) {
                router.events.subscribe((e: any) => {
                  console.log(e instanceof NavigationEnd)
                  if(e instanceof NavigationEnd){
                    console.log('routed to recipe list...')
                    console.log(e)
                    this.router.navigated = false;
                  }
                })
              }
  
  drinks: Drink[] = [];

  renderedDrinks: Map<string, Drink> = new Map<string,Drink>(); 

  /*
   need to add a drinkAdd and drinkRemove function instead
   of just one single getter that queries for the entire list
   of ingredients every time one single ingredient changes....
  */

  // getDrinkList(): void {
  //   this.ingredientService.getDrinksFromIngredients()
  //                         .subscribe(data => {
  //                           let temp_drinks: Drink[] = [];
  //                           var arrdata = JSON.parse(JSON.stringify(data))
  //                           arrdata.map((element: any) => {
  //                             var arr = JSON.parse(JSON.stringify(element))    
  //                             arr["drinks"].map((e: any) => {
  //                               temp_drinks.push( {id: e.idDrink, name: e.strDrink, photo: e.strDrinkThumb} as Drink )
  //                             })
  //                           })
  //                           temp_drinks.map(drink => {
  //                             const index = this.drinks.indexOf(drink,0)
  //                             if(index < 0){
  //                               this.drinks.push(drink as Drink);
  //                             }
  //                           })
  //                           //this.drinks = temp_drinks as Drink[];
  //                           console.log(this.drinks)
  //                           console.log(this.Food)
  //                         })
  // }

  ngOnInit(): void {
    this.renderedDrinks = this.ingredientService.retrievedDrinks
  }

}
