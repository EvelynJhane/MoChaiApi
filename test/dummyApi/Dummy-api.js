const request = require('request-promise')

const baseURL = 'http://dummy.restapiexample.com'
const prefix = 'api/v1   '

class DummyApi {
    constructor() {
        this.request = request.defaults(
            {
                headers: {
                    'Content-Type': "application/json"
                },
                json: true
            }

        )
    }

    getEmployees(){
        const path =  `${baseURL}/${prefix}/employees`;

        return this.request.get(
            {
                url: path
            }
        )
     }


}

module.exports = DummyApi;





