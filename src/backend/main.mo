import List "mo:core/List";
import ProductTypes "types/products";
import CompanyMixin "mixins/company-api";
import ProductsMixin "mixins/products-api";

actor {
  let products = List.empty<ProductTypes.Product>();

  include CompanyMixin();
  include ProductsMixin(products);
};
