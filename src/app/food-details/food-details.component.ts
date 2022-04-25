import { Component, OnInit, Input } from '@angular/core';
import {Food} from '../recipe-list/item'
import {FOOD} from '../recipe-list/foodList'
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router'
import {Location} from '@angular/common'

import {DetailsService} from '../details.service'

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  constructor( 
      private activatedRoute: ActivatedRoute,
      private location: Location,
      private detailsService: DetailsService,
      private router: Router
  ) {
    router.events.subscribe((e: any) => {
      console.log(e instanceof NavigationEnd)
      if(e instanceof NavigationEnd){
        console.log(e)
      }
    })
   }


  @Input() Food: Food = {id: 0, name: 'null', photo: 'no photo'} as Food;

   drink : any = [];

  ngOnInit(): void {
    this.getDish();
    this.getDrink();
    
  }

  getDrink(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.detailsService.getDrink(id)
    .subscribe((e: any) => {
      this.drink = e;
      //console.log( this.drink["drinks"][0] )
      console.log( e )
    })
  }

  getDish(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.detailsService.getDish(id)
    //     .subscribe(dish => this.Food = dish)
    this.Food = {id: id, name: 'name should go here', photo: 'thimbnail link should go here'} as Food;
  }

}
