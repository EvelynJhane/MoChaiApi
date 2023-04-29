const { expect } = require('chai'); 
const UsersApi = require('../../src/Gorest-api');
const guard = require('../../utils/guard')

describe("Gorest updating user api tests", function () {
  let api;

  before(() => {
    api = new UsersApi()
    api.authenticate();

  })

  it("Update user information", async function () {
    const body = {

      "name": "Leslie Jacobs",
      "email": "day.Gidlaoon@hotmail.com",
      "gender": "male",
      "status": "active"
    }
    const userCreated = await api.createUser(body);
    const id = userCreated.id;
    const updatedUserBody = {
    "name": "Beverly Mango",
    "email": "memamimo@example.com",
    "gender": "female",
    "status": "inactive"
    }
    const updatedUserResponse = await api.updateUserByID(id,updatedUserBody);
    expect(updatedUserResponse).to.deep.equal(userCreated);

  });

})
