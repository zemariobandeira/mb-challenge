const Validate = {
  COMMON: {
    Email: (str) => {
      const strArr = str.split('@')
      if (strArr.length !== 2)
        return 'Email inválido'

      const providerCheck = strArr[1].split('.')
      if (providerCheck.length === 1)
        return 'Email inválido'

      return true
    },
    Date: (str) => {
      const strArr = str.split('/')
      if (strArr.length !== 3)
        return 'Data inválida'

      const isInvalidDay = strArr[0].length !== 2
        || isNaN(strArr[0])
        || Number(strArr[0]) > 31
        || Number(strArr[0]) <= 0

      if (isInvalidDay)
        return 'O dia informado não é válido'

      const isInvalidMonth = strArr[1].length !== 2
        || isNaN(strArr[1])
        || Number(strArr[1]) > 12
        || Number(strArr[1]) <= 0

      if (isInvalidMonth)
        return 'O mês informado não é válido'

      const isInvalidYear = strArr[2].length !== 4
        || isNaN(strArr[2])
        || Number(strArr[2]) > new Date().getFullYear()
        || Number(strArr[1]) <= 1500

      if (isInvalidYear)
        return 'O ano informado não é válido'

      return true
    },
  },
  BRL: {
    CPF: (str) => {
      try {
        const [numbers, verifyDigits] = str.split('-')
        const [first, middle, last] = numbers.split('.')

        const isInvalidDigits = verifyDigits.last !== 2
        if (isInvalidDigits)
          return 'Formato inválido'

        const isInvalidNumbers = first.length !== 3
          || middle.length !== 3
          || last.length !== 3

        if (isInvalidNumbers)
          return 'Formato inválido'

        return true
      } catch (e) {
        return 'Formato inválido'
      }
    },
    CNPJ: (str) => {
      try {
        const [numbers, verifyDigits] = str.split('-')
        const [block1, block2, block3WithBranch] = numbers.split('.')

        if (!block3WithBranch.includes('/'))
          return 'Formato inválido'

        const [block3, branch] = block3WithBranch.split('/')

        const isInvalidFormat =
          block1.length !== 2 ||
          block2.length !== 3 ||
          block3.length !== 3 ||
          branch.length !== 4 ||
          verifyDigits.length !== 2

        if (isInvalidFormat)
          return 'Formato inválido'

        return true
      } catch (e) {
        return 'Formato inválido'
      }
    },
    Phone: (str) => {
      try {
        const cleaned = str.replace(/[^\d]/g, '')

        if (cleaned.length < 8 || cleaned.length > 11)
          return 'Número inválido'

        if (cleaned.length === 8) {
          // Telefone fixo sem DDD
          return /^[2-9][0-9]{7}$/.test(cleaned) ? true : 'Número de telefone inválido'
        }

        if (cleaned.length === 9) {
          // Celular sem DDD
          return /^9[0-9]{8}$/.test(cleaned) ? true : 'Número de celular inválido'
        }

        if (cleaned.length === 10) {
          // Telefone fixo com DDD
          return /^[1-9]{2}[2-9][0-9]{7}$/.test(cleaned) ? true : 'Número de telefone inválido'
        }

        if (cleaned.length === 11) {
          // Celular com DDD
          return /^[1-9]{2}9[0-9]{8}$/.test(cleaned) ? true : 'Número de celular inválido'
        }

        return 'Número inválido'
      } catch (e) {
        return 'Formato inválido'
      }
    }
  }
}

export default Validate