import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CredentialResult {
  fullName: string;
  credentialId: string;
  status: "ACTIVE" | "LAPSED" | "REVOKED";
  level: string;
  awardedDate: string;
  validThrough?: string;
}

export function VerifySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("any");
  const [searchResult, setSearchResult] = useState<CredentialResult | null | "not-found">(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    
    // Demo: Show result for specific queries
    if (searchQuery.toLowerCase().includes("smith") || searchQuery.toUpperCase().includes("CASM-000")) {
      setSearchResult({
        fullName: "Dr. James A. Smith",
        credentialId: "CASM-000123",
        status: "ACTIVE",
        level: "Level II",
        awardedDate: "2025-06-15",
        validThrough: "2027-06-15",
      });
    } else if (searchQuery.trim()) {
      setSearchResult("not-found");
    } else {
      setSearchResult(null);
      setHasSearched(false);
    }
  };

  return (
    <div className="bg-card border border-border p-6 space-y-6">
      <div>
        <p className="label-institutional mb-2">PUBLIC REGISTRY</p>
        <h3 className="text-lg font-sans font-medium">Verify a credential</h3>
      </div>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="space-y-1">
          <Input
            type="text"
            placeholder="Name or Credential ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-background border-border rounded-none"
          />
          <p className="font-mono text-[10px] text-muted-foreground tracking-wide">
            Credential ID format: CASM-000123
          </p>
        </div>
        
        <div>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="bg-background border-border rounded-none">
              <SelectValue placeholder="Any status" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border rounded-none">
              <SelectItem value="any">Any status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="lapsed">Lapsed</SelectItem>
              <SelectItem value="revoked">Revoked</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex justify-end">
          <Button type="submit" variant="outline" size="sm" className="font-mono text-xs">
            Search
          </Button>
        </div>
      </form>
      
      {hasSearched && searchResult === "not-found" && (
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            No results found. Verify spelling or search by Credential ID.
          </p>
        </div>
      )}
      
      {hasSearched && searchResult && searchResult !== "not-found" && (
        <div className="pt-4 border-t border-border space-y-3">
          <p className="font-serif text-lg">{searchResult.fullName}</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credential ID</span>
              <span className="font-mono">{searchResult.credentialId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Status</span>
              <span className={`status-badge ${searchResult.status === "ACTIVE" ? "status-badge-active" : ""}`}>
                {searchResult.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Level</span>
              <span>{searchResult.level}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Awarded</span>
              <span className="font-mono text-xs">{searchResult.awardedDate}</span>
            </div>
            {searchResult.validThrough && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Valid through</span>
                <span className="font-mono text-xs">{searchResult.validThrough}</span>
              </div>
            )}
          </div>
          <p className="font-mono text-[9px] text-muted-foreground pt-2">
            This registry reflects credential standing as of the timestamp shown.
          </p>
        </div>
      )}
      
      <p className="font-mono text-[10px] text-muted-foreground tracking-wide pt-2 border-t border-border">
        Registry status is the authoritative source.
      </p>
    </div>
  );
}