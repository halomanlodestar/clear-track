import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "./constants";
import { redirect } from "@tanstack/react-router";
import { Transaction } from "@cleartrack/prisma/client";
import { DetailedTransaction } from "@cleartrack/shared/types";

class TransactionApi {
  constructor(
    private client: AxiosInstance,
    private readonly secureResponse: (
      request: Promise<AxiosResponse>,
    ) => Promise<AxiosResponse<any, any>>,
  ) {}

  public async get(id?: string | number): Promise<DetailedTransaction[]> {
    const res = await this.secureResponse(
      this.client.get(`/transactions/${id ?? ""}`),
    );

    if (res.status === 404) {
      throw Error("Not Found");
    }

    return res.data.transactions;
  }

  public async create(
    transaction: Omit<Transaction, "id">,
  ): Promise<Transaction> {
    const res = await this.secureResponse(
      this.client.post("/transactions", transaction),
    );

    return res.data;
  }

  public async cancel(id: string | number): Promise<void> {
    const res = await this.secureResponse(
      this.client.post(`/transactions/${id}`),
    );

    if (res.status === 404) {
      throw Error("Not Found");
    }
  }

  public async accept(id: string | number): Promise<void> {
    const res = await this.secureResponse(
      this.client.post(`/transactions/${id}/accept`),
    );

    if (res.status === 404) {
      throw Error("Not Found");
    }
  }

  public async reject(id: string | number): Promise<void> {
    const res = await this.secureResponse(
      this.client.post(`/transactions/${id}/reject`),
    );

    if (res.status === 404) {
      throw Error("Not Found");
    }
  }
}

class UserApi {
  constructor(
    private client: AxiosInstance,
    private readonly secureResponse: (
      request: Promise<AxiosResponse>,
    ) => Promise<AxiosResponse<any, any>>,
  ) {}
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

    this.transactions = new TransactionApi(this.client, this.secureResponse);
    this.users = new UserApi(this.client, this.secureResponse);
  }

  async secureResponse(request: Promise<AxiosResponse>) {
    let res = await request;

    console.log("Securing Request");

    if (res.status === 401) {
      console.log("Refreshing");
      const refresh = await this.client.post("/refresh");

      if (refresh.status === 401) {
        console.log("Redirecting to Login page");
        redirect({
          to: "/auth/signin",
          throw: true,
        });
      }

      console.log("Refreshed");
      res = await request;
    }

    return res;
  }
}

export default new Api();
