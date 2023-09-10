import { cartItem } from "./cartitem";

export class Cart{
    items : cartItem[] = [];

    get totalPrice():number {
        let totalPrice = 0;
        this.items.forEach(item => {
            console.log("sandeep>>>>>",item);
            // totalPrice += item.price;
        });
        return totalPrice;
    }
}