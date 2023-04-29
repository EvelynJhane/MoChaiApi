const { expect } = require('chai'); 
const UsersApi = require('../../src/Gorest-api');
const guard = require('../../utils/guard');
const factory = require('../../src/factory/Gorest-factory');

describe.only("GoRest Users Api CRUD tests", function () {
  let api;
  
    this.beforeAll(() => {
      api = new UsersApi()
      api.authenticate();
    })
  
  
    describe("GoRest Create Users tests", function () {
    
    it("Create new user", async function () {
      const createUserBody1 = factory.user();
      const response1 = await api.createUser(createUserBody1);

      expect(response1).to.be.an('object');
      expect(response1).to.have.property('id').that.is.a('number');
      expect(response1).to.have.property('name', createUserBody1.name).that.is.a('string');
      expect(response1).to.have.property('email', createUserBody1.email).that.is.a('string');
      expect(response1).to.have.property('gender', createUserBody1.gender).that.is.a('string');
      expect(response1).to.have.property('status', createUserBody1.status).that.is.a('string');
      console.log(response1)
    });
  
    it("Create multiple users", async function () {
      const createUserBody1 = factory.user();
      const createUserBody2 = factory.user();
      const createUserBody3 = factory.user();
      const createUserBody4 = factory.user();
      const createMultiUserResp = await api.createUser(createUserBody1, createUserBody2, createUserBody3, createUserBody4);
      
      console.log(createMultiUserResp)
    });
  
    it(`Error returned when creating a new user and status is missing from request body`, async function () {
      const createUserNoStatus = {
        ...factory.user(),
        status: ""
        }
        console.log(createUserNoStatus)
      // const err = await guard(async () => api.createUser(createUserNoStatus));
      //   expect(err).to.be.an.instanceOf(Error);
      //   expect(err.error).to.eql({ "meta": null, 
      //   "data": [{ "field": "status", "message": "can't be blank" }] 
      });
    
      
  describe("GoRest Get User tests", function () {

    it("Get user by ID", async function () {
      const createUser = factory.user();
      const getUserResponse = await api.createUser(createUser);
      const id = getUserResponse.id;
      const getUserByID = await api.getUserByID(id);
      console.log(getUserByID);
      expect(getUserByID).to.deep.equal(getUserResponse);
    });
  })
  
  describe("GoRest Update User tests", function () {

    it("Update user information", async function () {
      const createUser = factory.user();
      const createUserResponse = await api.createUser(createUser);
      const id = createUserResponse.id;
      const updatedUserBody = factory.user();
      const updatedUserResponse = await api.updateUserByID(id,updatedUserBody);
      console.log(updatedUserResponse)
      expect(updatedUserResponse).to.deep.equal(userCreated);
    });

  })

  describe("GoRest Delete User tests", function () {
  
    it("delete user by ID", async function () {
      const createUser = factory.user();
      const createUserResponse = await api.createUser(createUser);
      const id = createUserResponse.id;
      const deleteByIdResponse = await api.deleteUserByID(id);
      // expect(deleteByIdResponse).to.be.an('object');
      console.log(deleteByIdResponse)
    });

    it(`Error returned when deleting an already deleted user`, async function () {
      const createUser = factory.user();
      const createUserResponse = await api.createUser(createUser);
      const id = createUserResponse.id;
      await api.deleteUserByID(id);
      await api.deleteUserByID(id);
      const err = await guard(async () => api.deleteUserByID(id));
      expect(err).to.be.an.instanceOf(Error);
      expect(err.error).to.eql({ "message": "Resource not found" })
    });
  })
})
})