import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function VerifySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log("Search:", { searchQuery, status });
  };

  return (
    <div className="bg-card border border-border p-6">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
        Verify (Registry)
      </p>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Name or Credential ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-background border-border"
          />
        </div>
        
        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="any">Any Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="lapsed">Lapsed</SelectItem>
              <SelectItem value="revoked">Revoked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button type="submit" variant="outline" className="w-full gap-2">
          <Search size={16} />
          Search
        </Button>
      </form>
      
      <p className="mt-4 font-mono text-xs text-muted-foreground">
        Results are verified against the public registry.
      </p>
    </div>
  );
}