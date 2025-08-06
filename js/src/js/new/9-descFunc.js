const user = {
  name: `John`,
  email: `john@doe.com`,
  role: `admin`,
};

const userAndRole = ({ name, role }) => `${name} ${role}`;
console.log(userAndRole(user)); // pastikan object dalam argument memiliki properti yang sama pada parameter
