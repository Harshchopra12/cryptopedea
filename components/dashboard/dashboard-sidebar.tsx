export default function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <h2 className="mb-8 text-xl font-bold">
        CryptoPedea
      </h2>

      <nav className="space-y-4">
        <p>🏠 Dashboard</p>
        <p>📚 Learn</p>
        <p>🏆 Leaderboard</p>
        <p>🎖 Badges</p>
        <p>👤 Profile</p>
      </nav>
    </aside>
  );
}