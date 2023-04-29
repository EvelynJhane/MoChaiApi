const request = require('request-promise')
const baseURL = 'https://api.github.com'

class GitHubApi {
    constructor() {
        this.request = request.defaults(
            {
                headers: {
                    'Content-Type': "application/json",
                    'User-Agent': "Test"
                },
                json: true
            }
        )
    }
    getUserName(userName){
        const path = `${baseURL}/users/${userName}`

        return this.request.get(
            {
                url: path
            }
        )
    }
    updateUserData(jsonBody){
        const path = `${baseURL}/${userName}`

        return this.request.put(
            {
                url: path,
                body: jsonBody
            }
        )
    }
}

module.exports = GitHubApi;


