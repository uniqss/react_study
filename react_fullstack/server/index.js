const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);



db.sequelize.sync().then(()=>{

    const port = 3001;
    app.listen(port, ()=>{
        console.log("Server running on port", port);
    });
});


