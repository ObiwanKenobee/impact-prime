import { useState } from "react";
import { X, Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const categories = ["Water / Health", "Carbon / Restoration", "Education", "Energy / Infrastructure", "Carbon / Agriculture", "Health / Infrastructure"];
const regions = ["Kenya, East Africa", "Kenya, Coast", "Kenya, Western", "Kenya, Northern", "Kenya, Rift Valley", "Kenya, Central"];

interface Props {
  open: boolean;
  onClose: () => void;
}

const SubmitProjectForm = ({ open, onClose }: Props) => {
  const [form, setForm] = useState({
    projectName: "",
    category: "",
    region: "",
    claimedOutcome: "",
    description: "",
    dataSourceUrl: "",
  });
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.projectName || !form.category || !form.region || !form.claimedOutcome) {
      toast({ title: "Missing fields", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Project Submitted", description: `"${form.projectName}" has been submitted for verification.` });
      setForm({ projectName: "", category: "", region: "", claimedOutcome: "", description: "", dataSourceUrl: "" });
      setSubmitting(false);
      onClose();
    }, 1200);
  };

  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg w-full max-w-lg mx-4 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Submit Impact Project</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Project Name *</label>
            <Input value={form.projectName} onChange={(e) => update("projectName", e.target.value)} placeholder="e.g. Nairobi Clean Water Initiative" className="bg-secondary border-border font-mono text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Category *</label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full rounded-md bg-secondary border border-border text-foreground text-sm font-mono px-3 py-2"
              >
                <option value="">Select...</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Region *</label>
              <select
                value={form.region}
                onChange={(e) => update("region", e.target.value)}
                className="w-full rounded-md bg-secondary border border-border text-foreground text-sm font-mono px-3 py-2"
              >
                <option value="">Select...</option>
                {regions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Claimed Outcome *</label>
            <Input value={form.claimedOutcome} onChange={(e) => update("claimedOutcome", e.target.value)} placeholder="e.g. 50,000 households served" className="bg-secondary border-border font-mono text-sm" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="Brief project description..."
              rows={3}
              className="w-full rounded-md bg-secondary border border-border text-foreground text-sm font-mono px-3 py-2 resize-none"
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Data Source URL</label>
            <Input value={form.dataSourceUrl} onChange={(e) => update("dataSourceUrl", e.target.value)} placeholder="https://..." className="bg-secondary border-border font-mono text-sm" />
          </div>
          <Button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
            <Send className="h-4 w-4 mr-2" />
            {submitting ? "Submitting..." : "Submit for Verification"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectForm;
