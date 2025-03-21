const service = {
  apiURL: '',
  init: function (baseURL) {
    if (!this.apiURL.length)
      this.apiURL = baseURL;
    
    return this;
  },
  request: async function (endpoint, options) {
    try {
      const response = await fetch(this.apiURL + endpoint, options);
      const data = await response.json();

      if (!response.ok) {
        return { message: data.message || 'Erro desconhecido' };
      }

      return data;
    } catch (error) {
      console.error(error);
      return { message: 'Erro ao conectar ao servidor' };
    }
  },
  get: function (endpoint) {
    return this.request(endpoint, { method: 'GET' });
  },
  post: function (endpoint, body) {
    return this.request(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}

export default service