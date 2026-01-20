import { Link } from "react-router-dom";

// shadcn components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm">
        {/* Header */}
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Register
          </CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" />
          </div>

          {/* Button */}
          <Button className="w-full bg-orange-500 hover:bg-orange-600">
            Create Account
          </Button>

          {/* Link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
