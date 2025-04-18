import express from 'express'
import path from 'path'
import cors from 'cors'

import { PersonalAccount } from './PersonalAccount.js'
import { CompanyAccount } from './CompanyAccount.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve('dist')))

app.post('/registration', async (req, res) => {
  const data = req.body
  
  const accountRegister = data && data.cpf
  ? new PersonalAccount()
  : new CompanyAccount()
  
  const isValid = accountRegister.validate(data)
  
  if (!isValid)
    return res
  .status(400)
  .json({ message: 'Existem campos não preenchidos. Tente novamente.' })
  
  const isRegistered = await accountRegister.register(data);
  
  if (!isRegistered)
    return res
  .status(422)
  .json({ message: 'Houve um erro durante o cadastro' })
  
  return res
  .status(201)
  .json({ message: 'Conta criada com sucesso' })
})

app.use('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})

app.listen(3000, () => {
  console.log(`Listening at http://localhost:${3000}/registration`)
})