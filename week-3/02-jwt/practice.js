import jwt from 'jsonwebtoken';
import * as z from 'zod';

// Defining  zod schema for login
const loginschema = z.object( {
    username : z.string().email(),
    password : z.string().min(6)
})

// Example login route
app.post('/login', async (req, res) => {
    try {
      // Validate input using Zod
      const validatedData = await loginSchema.parseAsync(req.body);
  
      // Authenticate user (simulated here)
      const user = { id: 1, username: validatedData.username };
  
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, 'your-secret-key');
  
      res.json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  