import app from "#app";

app.get('/', (req, res) => {
  res.send('testing')
})



app.use((err, req, next) => {
  console.error(err.stack)

  const statusCode = err.statusCode || 500;

  res.status(statusCode).send({
    message: err.message || 'something went wrong'
  })
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
