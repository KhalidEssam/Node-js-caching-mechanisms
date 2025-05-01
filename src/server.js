require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;

// start background job
require('./jobs/writeBackSync');

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
