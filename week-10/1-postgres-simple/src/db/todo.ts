import { Query } from "pg";
import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        const insertQuery = `INSERT INTO todos (userId,title,description,done) VALUES ($1,$2,$3,false)  RETURNING title, description, done, id;`;
        const value    = [userId,title,description];
        // Execute the query  and get the inserted row
        const result = await client.query(insertQuery,value);
        const data = result;
        // Return todos
        return  data.rows[0];
    }catch (error) {
        console.error("Error creating todo:", error);
        throw error; // Re-throw the error for handling
      } 
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
try {
  const updateQuery = `UPDATE todos SET done= true where id = $1 RETURNING *; `
  const response =await client.query(updateQuery,[todoId]);
  return response.rows[0];
}catch (error) {
  console.error("Error creating todo:", error);
  throw error; // Re-throw the error for handling
} 
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
try {
  const showQuery = ` SELECT * FROM todos WHERE  user_Id = $1`
  const response = await client.query(showQuery,[userId]);
  return response.rows
}catch (error) {
  console.error("Error creating todo:", error);
  throw error; // Re-throw the error for handling
}
}