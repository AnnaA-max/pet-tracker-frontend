import { Link } from "react-router-dom";
// shadcn component
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card , CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Card className="w-full max-w-sm">
                {/* Header */}
                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                        Login
                    </CardTitle>
                </CardHeader>

                {/* Content */}
                <CardContent className="space-y-4">
                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email" 
                            type="email" 
                            placeholder="you@example"/>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            id="password" 
                            type="password" 
                            placeholder="••••••••"/>
                    </div>

                    {/* Button */}
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Login
                    </Button>

                    {/* Link */}
                    <p className="text-sm text-center text-gray-600">
                        Don't have an account? {" "}
                        <Link 
                            to="/register"
                            className="text-orange-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}