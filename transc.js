// let users = {
//   members: [
//     {
//       id: 1,
//       name: 'Molecule Man',
//       balance: 5000,
//     },
//     {
//       id: 2,
//       name: 'Molecule Man',
//       balance: 5000,
//     },
//     {
//       id: 3,
//       name: 'Molecule Man',
//       balance: 5000,
//     },
//   ],
// }

let users = [
  { id: 1, name: 'Nithin', balance: 5000 },
  { id: 2, name: 'Shanmugam', balance: 5000 },
  { id: 3, name: 'NiSh', balance: 5000 },
]

let userJson = JSON.stringify(users)
//console.log(userJson)
const findUser = users.find(function (user) {
  user.balance -= 100
  return user.name == 'Nithin'
})
console.log(findUser)
const output = userJson.forEach((users) => {
  if (users.name == 'Nithin') console.log('Yes')
})
console.log(output)
