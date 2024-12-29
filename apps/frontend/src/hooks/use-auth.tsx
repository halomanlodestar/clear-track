/** @format */

import { API_URL } from "@/lib/constants";
import { redirect } from "@tanstack/react-router";
import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthError, FetchError } from "@/lib/errors";
import { MeUser } from "../../types";

interface AuthContextData {
  token?: string;
  user?: MeUser;
  isLoggedIn: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [me, setMe] = useState<MeUser | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const a = (await axios.get(`${API_URL}/auth/me`)).data as {
          token: string;
          user: MeUser;
        };
        setToken(a.token);
        setMe(a.user);
        setIsLoggedIn(true);
      } catch (error) {
        setToken(undefined);
      }
    })();
  }, [token]);

  const signIn = async (email: string, password: string) => {
    let res;

    try {
      res = await axios.post(`${API_URL}/auth/signin`, {
        email,
        password,
      });
    } catch (error) {
      throw new FetchError("An Error Occurred");
    }

    if (res.status === 302) {
      throw redirect({
        to: "/",
      });
    }

    throw new AuthError("Invalid Credentials");
  };

  const signUp = async (name: string, email: string, password: string) => {
    let res;

    try {
      res = await axios.post(`${API_URL}/auth/signup`, {
        name,
        email,
        password,
      });
    } catch (error) {
      throw new FetchError("An Error Occurred");
    }

    if (res.status === 302) {
      throw redirect({
        to: "/",
      });
    }

    throw new AuthError("Email is already registered");
  };

  const signOut = async () => {
    let res;

    try {
      res = await axios.post(`${API_URL}/auth/signout`);
    } catch (error) {
      throw new FetchError("An Error Occurred");
    }

    if (res.status === 302) {
      setToken(undefined);
      setIsLoggedIn(false);

      throw redirect({
        to: "/",
      });
    }

    throw new AuthError("You are not signed in");
  };

  return (
    <AuthContext.Provider
      value={{ token, signIn, signUp, signOut, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
