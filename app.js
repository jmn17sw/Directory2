import express from "express";
const app = express();
export default app;

app.use(express.json())

import employeesRouter from '#db/employeesRouter';
app.use('/employees', employeesRouter)




app.route("/").get((req, res) => {
  res.send("Hello employees!");
});


