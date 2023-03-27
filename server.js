const app = require('./app');
const { db } = require('./database/config');

const port = process.env.PORT || 8002;

db.authenticate()
  .then(() => console.log('todo re piola masho'))
  .catch((err) => console.log(err));

db.sync()
  .then(() =>
    console.log('Toi re conectado masho')
  )
  .catch((err) =>
    console.log(
      'No me sincronicé, me fui a la puta'
    )
  );

app.listen(port, () => {
  console.log(`Wenas, el puerto es: ${port}`);
});
