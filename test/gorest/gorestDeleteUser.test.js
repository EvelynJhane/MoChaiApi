const { expect } = require('chai'); 
const UsersApi = require('../../src/Gorest-api')
const guard = require('../../utils/guard')

describe("Gorest delete user api tests", function () {
  let api;

  before(() => {
    api = new UsersApi()
    api.authenticate();
    
  })

  it("delete user by ID", async function () {
    const body = {

        "name": "Leslie Jacobs",
        "email": "hay.Gidln@me.com",
        "gender": "male",
        "status": "active"
      }
    const userCreated = await api.createUser(body);
    const id = userCreated.id;
    const deleteByIdResponse = await api.deleteUserByID(id);
    expect(deleteByIdResponse).to.be.an('object');
    await api.getUserByID(id);
    const err = await guard(async () => api.getUserByID(id));
    expect(err).to.be.an.instanceOf(Error);
    expect(err.error).to.eql({ "message": "Resource not found" })
  });

  it(`Error returned when deleting an already deleted user`, async function () {
    const body = {

        "name": "Leslie Jacobs",
        "email": "hay.Gion@me.com",
        "gender": "male",
        "status": "active"
      }
    const userCreated = await api.createUser(body);
    const id = userCreated.id;
    await api.deleteUserByID(id);
    await api.deleteUserByID(id);
    const err = await guard(async () => api.deleteUserByID(id));
    expect(err).to.be.an.instanceOf(Error);
    expect(err.error).to.eql({ "message": "Resource not found" })
  });

})
