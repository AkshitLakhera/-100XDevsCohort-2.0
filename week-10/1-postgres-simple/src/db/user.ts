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
        if (res.rows.length === 0) {
            //Insertion failed ; 
            console.log("User creation failed");
            return null
        }
        const newUser = res.rows[0];
        const user = { username: newUser.username, password: newUser.password, name: newUser.name }; // Assuming User class is not defined here
        console.log("user created:", user);
        return user;

}
catch(error) {
    console.error("Error during insertion",error)
} finally {
    if (client) {
        await client.end().catch(err => console.error("Error ending client connection:", err)); // Handle potential error in client.end()
    }
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
           const user =    {
                username: result.rows[0].username,
                password: result.rows[0].password, // Store password securely, not in plain text!
                name: result.rows[0].name,
            }
            return user
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
