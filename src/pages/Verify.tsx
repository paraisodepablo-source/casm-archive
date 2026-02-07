import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motionMed, motionSlow } from "@/lib/motion";

interface CredentialResult {
  fullName: string;
  credentialId: string;
  status: "ACTIVE" | "LAPSED" | "REVOKED";
  level: string;
  awardedDate: string;
  validThrough?: string;
}

const Verify = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("any");
  const [level, setLevel] = useState("any");
  const [searchResult, setSearchResult] = useState<CredentialResult | null | "not-found">(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    setHasSearched(true);
    setIsSearching(false);
    
    if (searchQuery.toLowerCase().includes("smith") || searchQuery.toUpperCase().includes("CASM-000")) {
      setSearchResult({
        fullName: "Dr. James A. Smith",
        credentialId: "CASM-000123",
        status: "ACTIVE",
        level: "Level II",
        awardedDate: "2025-06-15",
        validThrough: "2027-06-15",
      });
    } else {
      setSearchResult("not-found");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section">
        <div className="container-narrow">
          {/* Editorial header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={motionSlow}
            className="mb-12"
          >
            <p className="eyebrow mb-5">PUBLIC REGISTRY</p>
            <h1 className="mb-6">Verify a credential</h1>
            <p className="text-muted-foreground text-lg" style={{ maxWidth: '48ch' }}>
              Search by name or Credential ID. Registry status is the authoritative record.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...motionSlow, delay: 0.08 }}
            className="bg-white border border-foreground/12 p-8 max-w-[580px]"
          >
            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <label className="block label-institutional mb-2">
                  Name or Credential ID
                </label>
                <Input
                  type="text"
                  placeholder="Name or Credential ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-background border-foreground/12 rounded-none h-11 placeholder:text-foreground/30"
                />
                <p className="font-mono text-[11px] text-muted-foreground tracking-wider mt-1.5">
                  Credential ID format: CASM-000123
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block label-institutional mb-2">Level</label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger className="bg-background border-foreground/12 rounded-none h-11">
                      <SelectValue placeholder="Any level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-foreground/12 rounded-none">
                      <SelectItem value="any">Any level</SelectItem>
                      <SelectItem value="I">Level I</SelectItem>
                      <SelectItem value="II">Level II</SelectItem>
                      <SelectItem value="III">Level III</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block label-institutional mb-2">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="bg-background border-foreground/12 rounded-none h-11">
                      <SelectValue placeholder="Any status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-foreground/12 rounded-none">
                      <SelectItem value="any">Any status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="lapsed">Lapsed</SelectItem>
                      <SelectItem value="revoked">Revoked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11"
                disabled={isSearching || !searchQuery.trim()}
              >
                {isSearching ? "Searching…" : "Search"}
              </Button>
            </form>
          </motion.div>

          {/* Results */}
          <AnimatePresence mode="wait">
            {hasSearched && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={motionMed}
                className="mt-8 max-w-[580px]"
              >
                {searchResult === "not-found" ? (
                  <div className="border border-foreground/12 p-8">
                    <p className="text-muted-foreground text-sm">No matching credential found.</p>
                    <p className="text-muted-foreground text-sm mt-1">Check spelling or try the Credential ID format.</p>
                  </div>
                ) : searchResult ? (
                  <div className="border border-foreground/12 p-8 space-y-5">
                    <div>
                      <p className="label-institutional mb-2">REGISTRY RECORD</p>
                      <p className="font-serif text-2xl">{searchResult.fullName}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm border-t border-foreground/8 pt-5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Credential ID</span>
                        <span className="font-mono text-xs tracking-wider">{searchResult.credentialId}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Status</span>
                        <span className={`status-badge ${searchResult.status === "ACTIVE" ? "status-badge-active" : ""}`}>
                          {searchResult.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Highest level</span>
                        <span className="text-sm">{searchResult.level}</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <span className="text-muted-foreground">Awarded</span>
                        <span className="font-mono text-xs tracking-wider">{searchResult.awardedDate}</span>
                      </div>
                      {searchResult.validThrough && (
                        <div className="flex justify-between items-baseline">
                          <span className="text-muted-foreground">Valid through</span>
                          <span className="font-mono text-xs tracking-wider">{searchResult.validThrough}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="font-mono text-[10px] text-muted-foreground tracking-wider pt-3 border-t border-foreground/8">
                      This registry reflects credential standing as of the timestamp shown.
                    </p>
                  </div>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-8 font-mono text-[11px] text-muted-foreground tracking-wider max-w-[580px]">
            Registry status is the authoritative record.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verify;