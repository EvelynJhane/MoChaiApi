const { expect } = require('chai'); 
const UsersApi = require('../../src/Gorest-api')
const guard = require('../../utils/guard')

describe("Gorest get user api tests", function () {
  let api;

  before(() => {
    api = new UsersApi()
    api.authenticate();
    })

  it("Get user by ID", async function () {
    const body = {
        "id": 12367,
        "name": "Leslie Jacobs",
        "email": "hay.Gidlaoon@hotmail.com",
        "gender": "male",
        "status": "active"
      }
    const userCreated = await api.createUser(body);
    const id = userCreated.id;
    await api.getUserByID(id);
  });
  
});
