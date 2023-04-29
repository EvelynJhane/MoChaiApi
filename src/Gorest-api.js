const request = require("request-promise")
const baseUrl = 'https://gorest.co.in'
const prefix = '/public/v2'
const token = '66345c20ddaed396d6698af06c1e98c1ba939762c2a5fff95c58733eb9188536'

class UsersApi {
  constructor() {
    this.request = request.defaults(
      {
        headers: {
          'Content-Type': "application/json",
        },
        json: true,
        // followAllRedirects: true
        resolveWithFullResponse: true
      }
    )
  }

  authenticate(apikey = token) {
    this.request = request.defaults(
      {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${apikey}`
        },
        json: true
      }
    )
  }

  // async authenticate1(userCreds) {
  //   const token = await this.getAuthToken(userCreds)

  //   this.request = request.defaults(
  //     {
  //       headers: {
  //         'Content-Type': "application/json",
  //         Authorization: `Bearer ${token}`
  //       },
  //       json: true
  //     }
  //   )
  // }

  //  getAuthtoken(userCreds) {
  //   return this.request.post(
  //     {
  //       url: `${baseUrl}/getToken`,
  //       body: userCreds
        
  //     }
  //   )
  // }

  createUser(jsonBody) {
    const path = `${baseUrl}/${prefix}/users`;

    return this.request.post(
      {
        url: path,
        body: jsonBody
      }
    )
  }

  updateUserByID(id, jsonBody) {
    const path = `${baseUrl}/${prefix}/users/${id}`;

    return this.request.put(
      {
        url: path,
        body: jsonBody
      }
    )
  }

  getUserByID(id) {
    const path = `${baseUrl}/${prefix}/users/${id}`;

    return this.request.get(
      {
        url: path
      
      }
    )
  }

  deleteUserByID(id, resolveWithFullResponse = false) {
    const path = `${baseUrl}/${prefix}/users/${id}`;

    return this.request.delete(
      {
        url: path,
        resolveWithFullResponse: resolveWithFullResponse
      }
    )
  }

}
module.exports = UsersApi;
