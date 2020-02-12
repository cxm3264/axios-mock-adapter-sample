import mock from 'mockjs';
// mock data arrs
let users = []
for (let i = 0; i < 9; i++) {
  users.push({
    id: mock.Random.guid(), //mock guid
    name: mock.Random.name(), //mock user name
    email: mock.Random.email() //mock email
  })
}

export { 
  users 
}