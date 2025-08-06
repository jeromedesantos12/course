// function yang ada keyword async otomatis jadi promise
const hallo = async () => {
  throw `Mir geht es nicht gut`; // throw -> otomatis jadi reject
  // return `Wie geht es dir?`; // output apapun -> otomatis jadi resolve
};

hallo()
  .then((res) => console.log(`Antworten: ${res}`)) // menjalankan return (resolve)
  .catch((err) => console.log(`Fehler: ${err}`)); // menjalankan throw (reject)
