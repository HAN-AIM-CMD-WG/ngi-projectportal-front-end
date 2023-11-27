import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "../ui/switch"
import { Project } from "./project"
import { UserList } from "./userlist"
import { useState } from "react"

export function Landing() {
  const [adminMode, setAdminMode] = useState(false);

  return (
    <div key="1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-8 md:mt-8">
          <div className="flex items-center space-x-2">
           <Switch id="admin-mode" checked={adminMode} onCheckedChange={setAdminMode} />
           <Label htmlFor="admin-mode">Admin Mode</Label>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Projojo
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Start creating your projects easily and efficiently.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="default">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container px-4 md:px-6">
          {adminMode ? <UserList /> : <Project />}
        </div>
      </section>
    </div>
  )
}
