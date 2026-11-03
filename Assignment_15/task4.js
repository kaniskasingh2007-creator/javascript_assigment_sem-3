function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {id: 1, name: 'Asha'},
        {id: 2, name: 'Rohan'},
        {id: 3, name: 'Meera'}
      ]);
    }, 100);
  });
}
async function displayUsers() {
  const users = await getUsers();
  users.forEach(user => console.log(user.name));
}
displayUsers();