export class Product {
    id: number;
    product_name: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity:number;


    constructor(id=0,product_name='',description='',price=0,imageUrl='',quantity=0){
        this.id=id
        this.product_name=product_name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
        this.quantity=quantity

    }

}
