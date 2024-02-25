import { client } from "..";
/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        const insertQuery = `INSERT INTO  users ("username","password","name") VALUES ($1,$2,$3)`;
        const values = [username,password,name];
        const res    =  await client.query(insertQuery,values);
        const user = res.rows[0];
        console.log("user created:", user);
        return user;

}
catch(error) {
    console.error("Error during insertion",error)
} 
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
         const getquery = `SELECT * FROM users WHERE userID = $1`;
         const value = [userId];
         const result = await client.query(getquery,value);
         const user = result.rows[0];
         return user
    }catch(error) {
        console.error("Error in fetching data",error)
    }
    
}
