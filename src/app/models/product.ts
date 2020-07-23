export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id, name, description = '', price = 0, imageUrl = 'https://static.bmdstatic.com/pk/product/medium/5d43ec7352b3b.jpg'){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
