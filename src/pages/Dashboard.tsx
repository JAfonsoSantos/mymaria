import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MessageCircle, Brain, Users, Settings, LogOut, Smartphone } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [memoryEnabled, setMemoryEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">MyMaria</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/settings">
                <Settings className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <LogOut className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-foreground">Hi, I'm Maria 👋</h1>
            <Badge variant="secondary">Beta</Badge>
          </div>
          <p className="text-muted-foreground">
            Welcome to your personal assistant dashboard. I'm here to help you stay organized.
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Status */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                Account Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Active - Beta User</span>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                You're part of our early access program. Thank you for helping us improve!
              </p>
            </CardContent>
          </Card>

          {/* Connected Services */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                Connected Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">WhatsApp</span>
                  </div>
                  <Badge variant="outline" className="text-xs">Coming soon</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4" disabled>
                Connect WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Memory Status */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Label htmlFor="memory-toggle" className="text-sm">
                  Enable memory
                </Label>
                <Switch
                  id="memory-toggle"
                  checked={memoryEnabled}
                  onCheckedChange={setMemoryEnabled}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                {memoryEnabled 
                  ? "Maria will remember your preferences and context." 
                  : "Maria won't store any personal information."}
              </p>
            </CardContent>
          </Card>

          {/* Invite Friends */}
          <Card className="sm:col-span-2 lg:col-span-3">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                Invite Friends
              </CardTitle>
              <CardDescription>
                Know someone who would love Maria? Invite them to join the beta!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button disabled className="w-full sm:w-auto">
                Invite a friend (coming soon)
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;