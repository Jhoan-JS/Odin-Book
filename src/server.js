require('dotenv').config({ path: `${__dirname}/../.env` });
require('./config/dbConfig');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
