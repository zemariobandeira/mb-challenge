const service = {
  apiURL: '',
  init: function (baseURL) {
    if (!this.apiURL.length)
      this.apiURL = baseURL;
    
    return this;
  },
  get: async function (endpoint) {
    try {
      const response = await fetch(this.apiURL + endpoint, { method: 'GET' });

      if (!response.ok)
        throw new Error('Houve um erro na requisição');

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error.message
        ? error.message
        : 'Erro desconhecido'
    }
  },
  post: async function (endpoint, body) {
    try {
      const response = await fetch(this.apiURL + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok)
        throw new Error('Houve um erro na requisição');

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error.message
        ? error.message
        : 'Erro desconhecido'
    }
  }
}

export default service