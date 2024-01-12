import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="flex justify-between items-center h-16 px-4 bg-white dark:bg-gray-800 shadow-md">
      <Link className="text-2xl font-semibold text-gray-900 dark:text-gray-200" to="#">
        Projojo
      </Link>
      <div className="flex items-center gap-4">
        <Link className="text-lg text-gray-600 dark:text-gray-400 hover:underline" to="admin">
          Admin Dashboard
        </Link>
        <Link to="/login">
        <Button className="mr-2" variant="outline">
          Login
        </Button>
        </Link>
        <Link to="/register">
        <Button>Register</Button>
        </Link>
      </div>
    </header>
  )
}
