import Debug "mo:core/Debug";
import CompanyLib "../lib/company";
import CompanyTypes "../types/company";

mixin () {
  public query func getCompanyInfo() : async CompanyTypes.CompanyInfo {
    Debug.todo();
  };
};
