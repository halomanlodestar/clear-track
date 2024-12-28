/** @format */

export interface Transaction {
  id: string;
  sender: string;
  recipient: string;
  amount: number;
  createdAt: string;
}

export interface MeUser {
  name: string;
  email: string;
  image: string;
}
