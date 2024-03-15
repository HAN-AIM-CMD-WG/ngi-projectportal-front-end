import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function UserList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Users</CardTitle>
        <CardDescription>
          Meet the amazing people using our platform.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <Label>User 1</Label>
          <Label>Email: user1@example.com</Label>
          <div className="flex space-x-2">
            <Button variant="outline">Status 1</Button>
            <Button variant="outline">Status 2</Button>
            <Button variant="outline">Status 3</Button>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label>User 2</Label>
          <Label>Email: user2@example.com</Label>
          <div className="flex space-x-2">
            <Button variant="outline">Status 1</Button>
            <Button variant="outline">Status 2</Button>
            <Button variant="outline">Status 3</Button>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label>User 3</Label>
          <Label>Email: user3@example.com</Label>
          <div className="flex space-x-2">
            <Button variant="outline">Status 1</Button>
            <Button variant="outline">Status 2</Button>
            <Button variant="outline">Status 3</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
