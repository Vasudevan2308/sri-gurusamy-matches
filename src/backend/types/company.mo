import Common "common";

module {
  public type CompanyInfo = {
    name : Text;
    tagline : Text;
    address : Text;
    phones : [Text];
    email : Text;
    foundingYear : Nat;
    description : Text;
  };
};
