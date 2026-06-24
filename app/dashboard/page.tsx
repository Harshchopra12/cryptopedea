"use client";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import StatCard from "@/components/dashboard/stat-card";
import { useAuth } from "@/providers/auth-provider";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="p-8">
        <h1>Loading dashboard...</h1>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="p-8">
        <h1>User not found</h1>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-black text-white">
      <DashboardSidebar />

      <section className="flex-1 p-8">
        <DashboardHeader
          firstName={user.firstName}
          activePath={user.activePath}
        />

        <div className="mt-8 grid grid-cols-3 gap-4">
          <StatCard
            title="Level"
            value={user.level}
          />

          <StatCard
            title="XP"
            value={user.xp}
          />

          <StatCard
            title="Streak"
            value={user.streak}
          />
        </div>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="text-xl font-semibold">
            Current Module
          </h3>

          <p className="mt-2 text-zinc-400">
            {user.activeModule}
          </p>
        </div>
      </section>
    </main>
  );
}