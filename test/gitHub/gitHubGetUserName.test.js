let userName = 'EvelynJane'
const {expect} = require('chai')
const should = require('chai').should();
const GitHubApi = require('../../src/GitHub-api')

  
describe('GitHub Api tests', function () {
    let ghApi;

    before(() => {
      ghApi = new GitHubApi ()
    })

    it('Get a username', async function () {
      const response = await ghApi.getUserName(`${userName}`) 
      expect(response).to.have.property('type', 'User');
      expect(response).to.be.an('object');
      expect(response).to.have.property('id').that.is.a('number');
    });
  })

  

 
  
     
