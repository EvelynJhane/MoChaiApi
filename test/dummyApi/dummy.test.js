const {expect} = require('chai')
const DummyApi = require('../dummyApi/Dummy-api')
const guard = require('../../utils/guard')
    
describe('HR Api tests', async function () {
    let api;

    before(() => {
        api = new DummyApi()
    })

    it('Get all employees', async function () {
        const response = await guard(async () => api.getEmployees())
    });
  });

