import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food'
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag:string) : Foods[]{
    if(tag=='All') {
      return this.getall();
    } else {
      return this.getall().filter(food=>food.tags?.includes(tag));
    }
  }
  getAllTag():Tag[]{
    return [
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Hamburger',count:1},
      {name:'Fry',count:1},
      {name:'Soup',count:1},
    ]
  }
  getall():Foods[]{
    return [
      {
        id:1,
        name:'paneer',
        price: 5,
        cookTime:'10-15',
        favorite: true,
        star:4.0,
        tags:['FastFood','pizza','Lunch'],
        imageUrl:'/assets/food-1.jpg',
        origins:['italian','nepali','chinese'],
      },
      {
        id:2,
        name:'Aloo Sabzi',
        price: 9,
        cookTime:'5-15',
        favorite: false,
        star:3.0,
        tags:['sabzi','FastFood','Lunch'],
        imageUrl:'/assets/food-2.jpg',
        origins:['italian','rajasthan','haryana'],
      },
      {
        id:3,
        name:'Chicken',
        price: 2,
        cookTime:'25-35',
        favorite: true,
        star:2.0,
        tags:['SlowFood','roti','bread'],
        imageUrl:'/assets/food-3.jpg',
        origins:['indian','bihar','up'],
      },
      {
        id:4,
        name:'Tandoori',
        price: 2,
        cookTime:'25-35',
        favorite: true,
        star:5.0,
        tags:['SlowFood','roti','bread'],
        imageUrl:'/assets/food-4.jpg',
        origins:['indian','USA','UK'],
      },
      {
        id:5,
        name:'Dosa',
        price: 2,
        cookTime:'25-35',
        favorite: false,
        star:1.0,
        tags:['tortia','FastFood','Lunch'],
        imageUrl:'/assets/food-5.jpg',
        origins:['indian','BLR','Rajnikant'],
      },
      {
        id:6,
        name:'Idli',
        price: 2,
        cookTime:'25-35',
        favorite: true,
        star:5.0,
        tags:['tortia','FastFood','bread'],
        imageUrl:'/assets/food-6.jpg',
        origins:['indian','PAK','AUS'],
      },
      {
        id:7,
        name:'Pongal',
        price: 2,
        cookTime:'25-35',
        favorite: true,
        star:3.0,
        tags:['Hamburger','Fry','bread'],
        imageUrl:'/assets/food-7.jpg',
        origins:['indian','ZOmato','Swiggy'],
      },
      {
        id:8,
        name:'Egg Rice',
        price: 2,
        cookTime:'25-35',
        favorite: false,
        star:5.0,
        tags:['tortia','roti','Pizza'],
        imageUrl:'/assets/food-8.jpg',
        origins:['indian','Soup','panda'],
      },
    ];
  }
  
}
