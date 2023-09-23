const request = require('supertest'); // This library was specifically designed for testing Node server responses and integrates well with Mocha and Chai. To use SuperTest, we pass the app object from our app into the request function. To make a GET request, we use .get() with the desired route as the argument.
// It is also possible to perform a POST using SuperTest. We chain any desired properties or inputs to the HTTP call, and use .send() to make the request:
// await request(app)
//           .post('/messages')
//           .type('form')
//           .send({author, message});

const app = require('..app');

describe('the homepage', () => {
    it('returns the correct content', async () => {
        const response = await request(app)
        .get('/')
        console.log(response.text);
    });
});
