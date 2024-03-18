namespace ProductModels{
  namespace server{
    type Product = {
      id: string,
      title: string,
      price: number,
      imageUrl: string,
    }
  }

  namespace client{
    type CartProduct = {
      id: string,
      title: string,
      price: number,
      imageUrl: string,
      quantity: number,
    }
  }
}