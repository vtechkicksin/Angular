import { cartItem } from "./cartitem";

export class Cart{
    items : cartItem[] = [];

    get totalPrice():Number {
        let totalPrice = 0;
        this.items.forEach((item) => {
            totalPrice += item.price;
        });
        return totalPrice;
    }
}