import { Link } from "react-router-dom"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "./navbar"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger, 
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function AdminDashboard() {

  type User = {
    name: string;
    email: string;
    status: [string];
  }

  const [users, setUsers] = useState<User[]>([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("/api/person", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        setUsers(data);
      } catch(error){
        console.error("Failed to get users:", error);
      }
    };
    getUsers();
  }, []); 

  const createUser = async () => {
    try {
      const response = await fetch('/api/person/createUnverified', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullname,
          email: email,
          status: [],
        }),
      });
      
      const data = await response.json();
      console.log('User created:', data);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <div className="">
          <Navbar />

    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-zinc-100/40 lg:block dark:bg-zinc-800/40">
        
        <div className="flex h-full max-h-screen flex-col gap-2">
          
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <IconPackage2 className="h-6 w-6" />
              <span className="">Admin Dashboard</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-900  transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50"
                to="#"
              >
                <IconUsers className="h-4 w-4" />
                Users
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40">
          <div className="w-full flex-1">
            <h1 className="font-semibold text-lg">User Management</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Avatar</TableHead>
                  <TableHead className="max-w-[150px]">Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) =>(
                  <TableRow key={index}>
                    <Avatar className="w-[80px] h-9">
                      <AvatarImage alt="User1" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>U{index+1}</AvatarFallback>
                    </Avatar>
                    <TableCell>
                      <span className="font-medium">{user.name}</span>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.status.map((status) => (
                        <Badge className="px-2 py-1 mx-1 rounded-full bg-green-500 text-white">{status}</Badge>
                      ))}
                    </TableCell>
                    <TableCell>
                    <Button size="icon" variant="ghost">
                      <FileEditIcon className="w-4 h-4" />
                      <span className="sr-only">Change Status</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <IconTrash className="w-4 h-4" />
                      <span className="sr-only">Delete User</span>
                    </Button>
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Dialog>
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
              id="email"
              value={email}
              className="col-span-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={createUser}>Send email</Button>
        </DialogFooter>
      </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  </div>
  )
}

function IconPackage2(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
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
  )
}

function IconTrash(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function IconUsers(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
