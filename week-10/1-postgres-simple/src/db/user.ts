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
    
}
