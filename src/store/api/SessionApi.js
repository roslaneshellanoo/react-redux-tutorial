class SessionApi {
  static login (credentials) {
    const request = new Request('https://reqres.in/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    })

    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }
}

export default SessionApi
