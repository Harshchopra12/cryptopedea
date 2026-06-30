interface OptionButtonProps {
  option: string;
}

export default function OptionButton({
  option,
}: OptionButtonProps) {
  return (
    <button
      className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-4 text-left transition hover:border-yellow-400 hover:bg-zinc-800"
    >
      {option}
    </button>
  );
}