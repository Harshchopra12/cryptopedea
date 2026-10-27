import Button from "@/components/ui/button";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-black p-10 space-y-6">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button loading>
        Loading
      </Button>
    </main>
  );
}