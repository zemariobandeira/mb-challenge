import { RegisterData } from "./RegisterData.js";

export class PersonalAccount extends RegisterData {
  validate(data) {
    return Boolean('cpf' in data &&
      'email' in data &&
      'name' in data &&
      'birth_date' in data &&
      'phone_number' in data &&
      'password' in data)
  }

  register(data) {
    console.table(data)
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 3000)
    })
  }

  constructor() {
    super()
  }
}