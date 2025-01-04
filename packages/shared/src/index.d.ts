import { Transaction, User } from "@cleartrack/prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: SafeUser; // Extend this to match your structure
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      DATABASE_URL: string;
    }
  }
}

export type SafeUser = Pick<User, "id" | "email" | "name">;

export interface DetailedTransaction extends Transaction {
  sender: SafeUser;
  reciever: SafeUser;
}
//
export interface MeUser {
  name: string;
  email: string;
  image: string;
}
