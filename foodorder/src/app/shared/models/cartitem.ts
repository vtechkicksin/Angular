import { Foods } from "./food";

export class cartItem {
    
    constructor(food:Foods){  
        this.food = food;
        this.price;
    }
    food : Foods;
    quantity : number = 1;
    get price() : Number {
        return this.food.price * this.quantity;
    }
}