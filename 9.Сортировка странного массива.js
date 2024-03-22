/*
Дан массив юзеров и их зарплат в следующем формате:
[
  'user1', 300, 'user2', 500,
  'user3', 600, 'user4', 200,
]
Отсортируйте массив по возрастанию зарплаты.
*/
let users = ['user1', 300, 'user2', 500,'user3', 600, 'user4', 200,]
let userSalary = {}

// Преобразуем массив в объект
for (let i = 0; i < users.length; i+=2) {
  userSalary[users[i]] = users[i + 1]
}

// Создаем массив ключей (имен пользователей)
const sortedUsers = Object.keys(userSalary).sort((a, b) => userSalary[a] - userSalary[b])

// Создаем отсортированный массив юзеров и их зарплат
let sortedUserSalaries = sortedUsers.reduce((acc, user) => {
  acc.push(user, userSalary[user])
  return acc
}, [])

console.log(sortedUserSalaries)