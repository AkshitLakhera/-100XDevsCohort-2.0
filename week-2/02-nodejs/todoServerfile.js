// You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
// - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
// - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)
// Each todo has a title and a description. The title is a string and the description is a string.
// Each todo should also get an unique autogenerated id every time it is created
// The expected API endpoints are defined below,
// 1.GET /todos - Retrieve all todo items
//   Description: Returns a list of all todo items.
//   Response: 200 OK with an array of todo items in JSON format.
//   Example: GET http://localhost:3000/todos
// 2.GET /todos/:id - Retrieve a specific todo item by ID
//   Description: Returns a specific todo item identified by its ID.
//   Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
//   Example: GET http://localhost:3000/todos/123
// 3. POST /todos - Create a new todo item
//   Description: Creates a new todo item.
//   Request Body: JSON object representing the todo item.
//   Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
//   Example: POST http://localhost:3000/todos
//   Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
// 4. PUT /todos/:id - Update an existing todo item by ID
//   Description: Updates an existing todo item identified by its ID.
//   Request Body: JSON object representing the updated todo item.
//   Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
//   Example: PUT http://localhost:3000/todos/123
//   Request Body: { "title": "Buy groceries", "completed": true }
// 5. DELETE /todos/:id - Delete a todo item by ID
//   Description: Deletes a todo item identified by its ID.
//   Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
//   Example: DELETE http://localhost:3000/todos/123
//   - For any other route not defined in the server return 404
// Testing the server - run `npm run test-todoServer` command in terminal
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");
const app = express();
app.use(bodyParser.json());
const todos = [];
app.get('/todos',(req,res)=>{
    fs.readFile('todo.json','utf-8',(err,data) => {
        if (err) {
            console.log('cannot able to retrive the data')
        }else {
            res.json(JSON.parse(data));
        }
    })
})
app.get('/todos/:id',(req,res) => {
    const id = req.params.id;
   fs.readFile('todo.json','utf-8',(err,data) => {
   if (err) throw err 
else {
    const todos = JSON.parse(data);
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))
    if (todoIndex === -1) {
        res.status(404).send();
    }else{
        res.status(200).json(todos[todoIndex])
    }
}  })
})
// 3. POST /todos - Create a new todo item
//   Description: Creates a new todo item.
//   Request Body: JSON object representing the todo item.
//   Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
//   Example: POST http://localhost:3000/todos
//   Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
app.post('/todos',(req,res) => {
    const newTodo = {
        id : Math.floor(Math.random() * 100000),
        title : req.body.title,
        completed: req.body.completed,
        description:req.body.description    
    }
    fs.readFile('todo.json' ,(err,data) =>{
        if(err) throw err;
        const todos = JSON.parse(data)
        todos.push(newTodo)
        fs.writeFile('todo.json',JSON.stringify(todos) ,(err) =>{
            if (err) throw err
            res.status(200).json(newTodo);
        })
    })

})
// app.post('/todos', async (req, res) => {
//     const newTodo = {
//         id: Math.floor(Math.random() * 100000),
//         title: req.body.title,
//         completed: req.body.completed,
//         description: req.body.description
//     };

//     try {
//         const data = await fs.promises.readFile('todo.json', 'utf-8');
//         const todos = JSON.parse(data);
//         todos.push(newTodo);
//         await fs.promises.writeFile('todo.json', JSON.stringify(todos));
//         res.status(201).json({ id: newTodo.id });
//     } catch (err) {
//         console.error('Error:', err);
//         res.status(500).send('Internal Server Error');
//     }
// });
// 4. PUT /todos/:id - Update an existing todo item by ID
//   Description: Updates an existing todo item identified by its ID.
//   Request Body: JSON object representing the updated todo item.
//   Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
//   Example: PUT http://localhost:3000/todos/123
app.put('/todos/:id', (req,res) => {
fs.readFile('todo.json','utf-8',(err,data)=> {
    if (err) throw err;
    const todos= JSON.parse(data);
    const todoIndex = todos.findIndex((t)=> t.id === parseInt(req.params.id));
    if (todoIndex === -1) throw err;
    else{
        const updatedTodo = {
            title : req.body.title,
            completed :req.body.completed,
            description: req.body.description
        }
        todos[todoIndex] = updatedTodo;
        fs.writeFile('todo.json',JSON.stringify(todos),(err)=>{
            if (err) throw err 
            res.status(200).json(updatedTodo);
        })
    }
   

})
})
// 5. DELETE /todos/:id - Delete a todo item by ID
//   Description: Deletes a todo item identified by its ID.
//   Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
//   Example: DELETE http://localhost:3000/todos/123
//   - For any other route not defined in the server return 404
// Testing the server - run `npm run test-todoServer` command in terminal
app.delete('/todos/:id', (req,res) => {
    fs.readFile('todo.json','utf-8',(err,data) =>{
        if(err) throw err;
        const todos = JSON.parse(data);
        const todoIndex = todos.findIndex((t) => t.id === parseInt(req.params.id))
        if (todoIndex === -1 ) {
            res.status(404).send();
        } 
        else {
             todos.splice(todoIndex,1)

            fs.writeFile('todo.json',JSON.stringify(todos),(err) =>{
                if (err) throw err 
                res.status(200).send();
            })
        }

    })
})
app.use((req,res ,next) => {
   res.status(404).send();
} )
app.listen(3000,()=> {
    console.log("Server is hosted on localhost 3000")
})