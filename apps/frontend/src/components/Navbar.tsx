/** @format */

import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="px-5 md:px-10 lg:px-20 p-5 border-b flex justify-between items-center">
      <nav>
        <Link to="/">Transactions App</Link>
      </nav>
      <nav className={"flex items-center space-x-3"}>
        {isLoggedIn && (
          <Button
            size={"sm"}
            variant={"outline"}
            className={"border border-black"}
          >
            <PlusCircle />
          </Button>
        )}
        {isLoggedIn ? (
          <Avatar>
            <AvatarImage
              src="https://avatars.dicebear.com/api/avataaars/john-doe.svg"
              alt="John Doe"
            />
            <AvatarFallback>{user?.name}</AvatarFallback>
          </Avatar>
        ) : (
          <Link to="/auth/signin">Sign In</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
