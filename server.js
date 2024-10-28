const app = require('./app');
const PORT = 4000;
const connectDB =require('./src/database/mongoDB')

connectDB()



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});