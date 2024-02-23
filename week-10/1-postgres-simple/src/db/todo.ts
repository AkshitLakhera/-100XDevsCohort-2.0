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
        await client.connect();
        const insertQuery = `INSERT INTO todos (userId,title,description,done) VALUES ($1,$2,$3,false) `;
        const value    = [userId,title,description];
        // Execute the query  and get the inserted row
        const result = await client.query(insertQuery,value);
        // Return todos
        return {
            id :result.rows[0].id,
            userId,
            title,
            description,
            done:false
        };
    }catch (error) {
        console.error("Error creating todo:", error);
        throw error; // Re-throw the error for handling
      } finally {
        await client.end();
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

}