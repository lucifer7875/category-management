import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/custom/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { getNameFromToken, removeToken } from "@/lib/utils";
import { LogOut } from "lucide-react";

/**
 * @memberof module
 * @name UserNav
 * @description The UserNav component renders a user profile menu that includes the user's avatar and options for profile management and logging out
 * @returns {JSX.Element} - The rendered user navigation component with a dropdown options.
 */
export function UserNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * Function will handle logout logic
   */
  const handleLogout = () => {
    removeToken();
    navigate("/auth/sign-in");
  };
  return (
    <DropdownMenu open={open} onOpenChange={() => setOpen(!open)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <Avatar className="h-8 w-8">
            <AvatarFallback className="dark:bg-background">{`${getNameFromToken()
              ?.split(" ")[0]
              .charAt(0)}${getNameFromToken()
              ?.split(" ")[1]
              .charAt(0)}`}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {getNameFromToken()}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
