const {expect} = require(`chai`)

const Api = require(`../src/Dummy-api`)
    
describe.skip(`HR Api tests`, function () {
    let api;

    before(() => {
        api = new Api()
    })

    it(`Get all employees`, async function () {
        const response = await api.getEmployees();
        console.log(response)
    });
  });

  