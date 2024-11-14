function findByName(people, name) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
  return null; // Якщо людини з таким ім'ям не знайдено
}

module.exports = findByName;
