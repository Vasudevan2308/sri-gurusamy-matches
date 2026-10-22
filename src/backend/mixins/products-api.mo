import Debug "mo:core/Debug";
import List "mo:core/List";
import ProductsLib "../lib/products";
import ProductTypes "../types/products";

mixin (products : List.List<ProductTypes.Product>) {
  public query func getProducts() : async [ProductTypes.Product] {
    Debug.todo();
  };

  public query func getProduct(id : Nat) : async ?ProductTypes.Product {
    Debug.todo();
  };
};
