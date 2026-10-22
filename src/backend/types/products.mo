import Common "common";

module {
  public type Product = {
    id : Nat;
    name : Text;
    description : Text;
    specs : [Common.Spec];
    category : Common.ProductCategory;
  };
};
