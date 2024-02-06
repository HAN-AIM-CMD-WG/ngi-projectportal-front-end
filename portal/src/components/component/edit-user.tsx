import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function EditUser({
  user,
  availableStatus,
}: {
  user: { name: string; email: string; status: [string] };
  availableStatus: { name: string }[];
}) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);

  const closeDialog = () => {
    setName(user.name);
    setEmail(user.email);
    setStatus(user.status);
    setDialogOpen(false);
  };

  const addStatus = (extraStatus: string) => {
    status.push(extraStatus);
    console.log(status);
  };

  const editUser = async () => {
    try {
      const response = await fetch("/api/person", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          status: status,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger>
        <Button size="icon" variant="ghost">
          <FileEditIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Edit User</DialogTitle>
          <Button
            className="bg-white text-gray-400 hover:text-gray-500"
            onClick={closeDialog}
          >
            <Cross1Icon />
          </Button>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fullname">Full name</Label>
            <Input
              id="fullname"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="status">Status</Label>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size="sm" variant="ghost">
                  <span className="text-gray-400">Select status</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent sideOffset={5}>
                {availableStatus.map((availableStatus) => (
                  <DropdownMenuCheckboxItem
                    key={availableStatus.name}
                    value={availableStatus.name}
                    checked={status.includes(availableStatus.name)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        addStatus(availableStatus.name);
                      } else {
                        setStatus(
                          status.filter((s) => s !== availableStatus.name)
                        );
                      }
                    }}
                  >
                    <DropdownMenuLabel>{status.name}</DropdownMenuLabel>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Input
              id="status"
              type="text"
              value={status}
              onChange={(e) => {
                setStatus([e.target.value]);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" onClick={editUser}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function FileEditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}
