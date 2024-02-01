import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

export function AddUser() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => {
    setDialogOpen(false);
    setFullname("");
    setEmail("");
    setErrorMessage("");
    setShowAlert(false);
  };

  const checkEmail = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };
  const createUser = async () => {
    setShowAlert(false);
    try {
      if (checkEmail(email)) {
        const response = await fetch("/api/person/createUnverified", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullname,
            email: email,
            status: [],
          }),
        });

        const data = await response.json();
        console.log("User created:", data);
        closeDialog();
      } else {
        setErrorMessage("Please enter a valid email address.");
        setShowAlert(true);
      }
    } catch (error) {
      setErrorMessage(
        "Failed to create user because emailaddress already exists in the database."
      );
      setShowAlert(true);
      console.error("Failed to create user:", error);
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger>
        <Button className="ml-auto" size="sm">
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add user</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right">
              Name
            </Label>
            <Input
              id="fullname"
              value={fullname}
              className="col-span-3"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {showAlert && (
            <Alert
              variant="destructive"
              className="mb-4 w-full max-w-md border-none"
            >
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}
        </div>
        <DialogFooter>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button
            type="submit"
            onClick={createUser}
            disabled={!email || !fullname}
          >
            Send email
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
