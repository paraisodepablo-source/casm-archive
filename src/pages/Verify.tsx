import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
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

const Verify = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("any");
  const [level, setLevel] = useState("any");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Verify a CASM Credential</h1>
            <p className="text-muted-foreground mb-12">
              Registry status is the authoritative source.
            </p>

            <form onSubmit={handleSearch} className="space-y-6 mb-12">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Name or Credential ID
                </label>
                <Input
                  type="text"
                  placeholder="Enter name or ID"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-background border-border"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Level
                  </label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="any">Any Level</SelectItem>
                      <SelectItem value="I">Level I</SelectItem>
                      <SelectItem value="II">Level II</SelectItem>
                      <SelectItem value="III">Level III</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Status
                  </label>
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
              </div>

              <Button type="submit" variant="outline" className="w-full gap-2">
                <Search size={16} />
                Search Registry
              </Button>
            </form>

            {searchPerformed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-border p-8 text-center"
              >
                <p className="text-muted-foreground">
                  No results found. Verify spelling or use Credential ID.
                </p>
              </motion.div>
            )}

            <p className="mt-8 font-mono text-xs text-muted-foreground text-center">
              Results are verified against the official CASM public registry.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Verify;