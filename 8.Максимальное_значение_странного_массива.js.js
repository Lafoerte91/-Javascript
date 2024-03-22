/*
Дан массив юзеров и их зарплат в следующем формате:
[
  'user1', 300, 'user2', 500,
  'user3', 600, 'user4', 200,
]
Получите имя юзера с максимальной зарплатой.
*/
let users = ['user1', 300, 'user2', 500,'user3', 600, 'user4', 200]
let result = {}
for (let i = 0;  i< users.length; i+=2) {
  result[users[i]] = users[i + 1]
}
let maxSalary = 0;
let answer = ''
for(let user in result) {
  if(result[user] > maxSalary) {
    maxSalary = result[user]
    answer = user
  }
}

console.log(answer)