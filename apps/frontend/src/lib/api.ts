/** @format */
import { Transaction } from "../../types";
import { API_URL } from "./constants";

export const getTransactions = async (
	id?: string | number
): Promise<Transaction[]> => {
	const basePath = API_URL;
	const res = await fetch(`${basePath}/transactions/${id ?? ""}`);

	if (res.status === 404) {
		throw Error("Not Found");
	}

	return await res.json();
};
