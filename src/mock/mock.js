import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
import { users } from './data/users'

export default {
  start () {
    // This sets the mock adapter on the default instanc
    let mock = new mockAdapter(axios); 
    // Mock any GET request to /users
    // arguments for reply are (status, data, headers)
    mock.onGet('/users').reply(200, {
      users: users
    })
  }
}

