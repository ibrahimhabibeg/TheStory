const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
const corsConfig = require("./config/cors.config");
app.use(cors(corsConfig));

const db = require("./models");
db.sequelize.sync({alter:true});

require("./routes/auth.routes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});