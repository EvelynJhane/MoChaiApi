let userName = 'acanthusEve'
const {expect} = require('chai')
const GitHubApi = require('../../src/GitHub-api')

  
describe.skip('GitHub Api CRUD tests', function () {
    let ghApi;
    
        this.beforeAll(() => {
          ghApi = new GitHubApi ()
        })
    describe('GET tests', function () {
      it('Get a username', async function () {
        let userName = 'acanthusEve'
        let response = await ghApi.getUserName(`${userName}`) 
        expect(response).to.be.an('object');
        expect(response).to.have.property('type', 'User');
        expect(response).to.have.property('id').that.is.a('number');
      });
    });
    describe('PUT tests', async function () {
      it('Update Bio', async function () {
          const getUserResponse = await ghApi.getUserName(`${userName}`) 
          const bio = getUserResponse.bio
          const updatedBio = getUserResponse.bio = {bio : 'not null'}
        });
      });
  });
  