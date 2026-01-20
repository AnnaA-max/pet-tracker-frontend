import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pets = [
    {
        id: 1,
        name: "Milo",
        type: "Dog",
        age: "2 years",
        health: "Healthy",
    }, 
    {
        id: 2,
        name: "Simba",
        type: "Cat",
        age: "1 years",
        health: "Needs Checkup",
    },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 text-3xl font-bold text-gray-800>
                        Dashboard
                    </h1>
                    <button className="bg-orange-500 hover:bg-orange-600" >
                        Add Pet
                    </button>
                </div>

                {/* Pet Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    {pets.map((pet) => (
                        <Card key={pet.id}>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    {pet.name}
                                    <Badge 
                                        variant={
                                            pet.health === "Healthy"  
                                                ? "secondary" 
                                                : "destrutive"
                                        }
                                    >
                                            {pet.health}
                                        </Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <p className="text-sm text-gray-600">
                                    Type : <span>{pet.type}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Age: <span>{pet.age}</span>
                                </p>

                                <div className="flex gap-3 pt-4">
                                    <button className="flex gap-3 pt-4">
                                        View
                                    </button>
                                    <button variant="outline" size="sm">
                                        Edit
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

