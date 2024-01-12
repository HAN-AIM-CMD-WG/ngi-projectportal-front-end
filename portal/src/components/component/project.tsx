import { Input } from "@/components/ui/input";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function Project() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Project</CardTitle>
        <CardDescription>Fill out the form below to start a new project.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="projectName">Project Name</Label>
          <Input id="projectName" />
        </div>
        {/* <div className="space-y-1">
          <Label htmlFor="projectDescription">Project Description</Label>
          <Input id="projectDescription" />
        </div> */}
      </CardContent>
      <CardFooter>
        <Button type="submit">
          Create Project
        </Button>
      </CardFooter>
    </Card>
  );
}