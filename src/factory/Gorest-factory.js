const faker = require('faker');
const { example } = require('yargs');
const user_genders = ['female', 'male', 'other']
const status = ['active', 'inactive']
// const random_String = 

const user = () => {
    return {
        name:`${faker.name.firstName()} ${faker.name.lastName()}`,
        gender: faker.random.arrayElement(user_genders),
        email: `${faker.random.alphaNumeric(6)}@example.com`,
        status: faker.random.arrayElement(status)
    }
}

module.exports  = {
    user
} 