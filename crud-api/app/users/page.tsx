async function fetchUsers() {
  try {
    const users = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache:  "no-store",

    });
    return users.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function User() {
    const users = await fetchUsers()
    console.log(users)
  return <div>User</div>;
}
