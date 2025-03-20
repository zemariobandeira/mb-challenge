import { RegisterData } from "./RegisterData.js";

export class CompanyAccount extends RegisterData {
  validate(data) {
    return Boolean('cnpj' in data &&
      'email' in data &&
      'company_name' in data &&
      'birth_date' in data &&
      'phone_number' in data &&
      'password' in data)
  }

  register(data) {
    console.table(data)
    return true
  }

  constructor() {
    super()
  }
}