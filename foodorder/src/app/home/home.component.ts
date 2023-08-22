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
  constructor(private fs : FoodService,private router : ActivatedRoute){ }
  
  ngOnInit(){
    this.foods = this.fs.getall();
  }
}
