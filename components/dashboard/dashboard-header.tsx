interface DashboardHeaderProps {
  firstName: string;
  activePath: string;
}

export default function DashboardHeader({
  firstName,
  activePath,
}: DashboardHeaderProps) {
  return (
    <div>
      <h1
        className="font-display text-4xl font-bold"
        style={{ fontFamily: "var(--cp-font-display)" }}
      >
        Welcome back, {firstName}
      </h1>

      <p className="mt-2 text-zinc-400">
        Current Path: {activePath}
      </p>
    </div>
  );
}