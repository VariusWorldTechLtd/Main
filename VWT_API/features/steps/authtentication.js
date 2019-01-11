const { After, Before, Given, When, Then } = require('cucumber');
const axios = require('axios');
// const assert = require('assert');
// const http = require('http');
// const app = require('../../app');
// require('dotenv').config();

//let server;

  Before(() => {
    // Write code here that turns the phrase above into concrete actions
    // const port = process.env.PORT || 3000;
    // server = http.createServer(app);
    // server.listen(port, () => console.log(`Sever started on port ${port}`));
  });
  After(() => {
    // console.log("closing server");
    // server.close();
  });

  Given('I haven\'t signed up', () => {
    // Write code here that turns the phrase above into concrete actions
    
  });
  Given('I signed up before', () => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
  });
  Given('my details are {string} {string}, {string}, {string}', (first_name, last_name, email, password) => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';

  });
  When('I sign up', () => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    // const data = { first_name: 'asdfasdf', last_name: 'asdfsd', email: 'sadfsaD@asdfasd.com', password: "pasdf"};
    // axios.post('http://localhost:3000/api/user/signup', data)
    //   .then(response => {
    //     console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  });
  Then('my account is created', () => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
  });
  Then('my account creation is rejected', () => {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
  });

