interface LuluBubbleProps {
  message: string;
}

export default function LuluBubble({
  message,
}: LuluBubbleProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-2xl">
          🦉
        </div>

        <div>
          <h3 className="font-semibold text-white">
            LULU
          </h3>

          <p className="mt-2 text-zinc-300">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}