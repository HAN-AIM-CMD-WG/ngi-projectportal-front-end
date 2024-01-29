/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSelector } from "react-redux";

export function Project() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const email = useSelector((state: any) => state.auth.email);

  const createProject = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/project/create/${email}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectName,
          description: description,
        }),
      });

      const data = await response.json();
      console.log("Project created:", data);
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create a New Project</CardTitle>
        <CardDescription>Fill out the form below to start a new project.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="projectName">Project Name</Label>
          <Input
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          onClick={createProject}
        >
          Create Project
        </Button>
      </CardFooter>
    </Card>
  );
}