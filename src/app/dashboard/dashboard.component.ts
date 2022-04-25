import { Component, OnInit } from '@angular/core';
import { Food } from '../recipe-list/item'
import { DetailsService } from '../details.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  Foods: Food[] = [];

  constructor(private detailsService: DetailsService) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void{
    this.detailsService.getFoodList()
        .subscribe(Foods => this.Foods = Foods.slice(1,5))
  }

}
