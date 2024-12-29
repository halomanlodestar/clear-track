import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Transaction } from "@cleartrack/shared/types";
import { API_URL } from "./constants";
import { redirect } from "@tanstack/react-router";

class TransactionApi {
  constructor(private client: AxiosInstance) {}

  public async get(id?: string | number): Promise<Transaction[]> {
    const res = await this.client.get(`/transactions/${id ?? ""}`);

    if (res.status === 404) {
      throw Error("Not Found");
    }

    return res.data;
  }

  public async create(
    transaction: Omit<Transaction, "id">,
  ): Promise<Transaction> {
    const res = await this.client.post("/transactions", transaction);

    if (res.status === 401) {
      throw Error("Unauthorized");
    }

    return res.data;
  }

  public async cancel(id: string | number): Promise<void> {
    const res = await axios.delete(`${API_URL}/transactions/${id}`);

    if (res.status === 404) {
      throw Error("Not Found");
    }

    if (res.status === 401) {
      throw Error("Unauthorized");
    }
  }

  public async accept(id: string | number): Promise<void> {
    const res = await axios.post(`${API_URL}/transactions/${id}/accept`);

    if (res.status === 404) {
      throw Error("Not Found");
    }

    if (res.status === 401) {
      throw Error("Unauthorized");
    }
  }

  public async reject(id: string | number): Promise<void> {
    const res = await axios.post(`${API_URL}/transactions/${id}/reject`);

    if (res.status === 404) {
      throw Error("Not Found");
    }

    if (res.status === 401) {
      throw Error("Unauthorized");
    }
  }
}

class UserApi {
  constructor(private client: AxiosInstance) {}
}

class Api {
  private static readonly basePath = API_URL;
  private readonly client;
  public readonly transactions;
  public readonly users;

  constructor() {
    this.client = axios.create({
      baseURL: Api.basePath,
    });

    this.transactions = new TransactionApi(this.client);
    this.users = new UserApi(this.client);
  }

  async secureResponse(request: Promise<AxiosResponse>) {
    let res = await request;

    if (res.status === 401) {
      const refresh = await this.client.post("/refresh");

      if (refresh.status === 401) {
        // redirect("/transactions/$id");
      }

      res = await request;
    }

    return res;
  }
}

export default new Api();
