const user = {
  name: `John`,
  email: `john@doe.com`,
};

const { name: nama, email, phone = `0812321321` } = user;
console.log(email); // john@doe.com
// ga perlu panggil user.email lagi -> langsung email

// note!
// name: nama (merubah properti nama menjadi nama)
// phone = `0812321321` (menambah properti phone dengan nilai default)
