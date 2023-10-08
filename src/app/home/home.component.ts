import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from 'src/app/shared/models/food'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Foods[] = [];
  constructor(private fs : FoodService,private route : ActivatedRoute){ }
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      if(params['searchItem']) {
        this.foods = this.fs.getall().filter(food=>food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()))
      } else if(params['tag']) {
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      }
      else {
        this.foods = this.fs.getall();
      }
    })
    
  }
}
