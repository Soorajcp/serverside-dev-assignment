const express = require('express')
const app = express()
const port = 4000

let tasks = []

app.use(express.json())

app.use((req, res, next) => {
    console.log("Reached")
    next()
})

app.get('/', (req, res) => {
    res.send(tasks)
})

app.post('/', (req, res) => {
    console.log(req.body.task)
    tasks.push(req.body.task)
    res.send("Added successfully")
})

app.put('/:id', (req, res) => {
    const urlId = parseInt(req.params.id);
    const title = req.body.title;

    const targetTodo = todos.find((todo) => todo.id === urlId);

    if (targetTodo) {
        targetTodo.title = title;
        res.status(200).send(targetTodo);
    } else {
        res.status(404).send("Item not found");
    }
});



app.delete('/:idx', (req, res) => {
    let idx = req.params.idx
    tasks.splice(idx,1)
    console.log("deleted successfully")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})