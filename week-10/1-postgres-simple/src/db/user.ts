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
        await client.connect();  // to get connection
        const insertQuery = `INSERT INTO  users ("username","password","name") VALUES ($1,$2,$3)`;
        const values = [username,password,name];
        const res    =  await client.query(insertQuery,values);
        console.log("insertion success",res)    //output inseted result    
}
catch(error) {
    console.error("Error during insertion",error)
} finally {
    await client.end();
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
         await client.connect()
         const getquery = `SELECT * FROM users WHERE userID = $1`;
         const value = [userId];
         const result = await client.query(getquery,value);
         if ( result.rows.length >0){
            console.log("User Found",{
                username: result.rows[0].username,
                password: result.rows[0].password, // Store password securely, not in plain text!
                name: result.rows[0].name,
            })
         }
         else {
            console.log("No user found with the given userID")
         }
    }catch(error) {
        console.error("Error in fetching data",error)
    } finally {
        await client.end();
    }
    
}
