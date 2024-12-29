declare global {
  namespace Express {
    interface Request {
      user?: { id: number; name: string; email: string }; // Extend this to match your structure
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      DATABASE_URL: string;
    }
  }
}

export interface TransactionT {
  id: string;
  sender: string;
  recipient: string;
  amount: number;
  createdAt: string;
}
//
// export interface MeUser {
//   name: string;
//   email: string;
//   image: string;
// }
