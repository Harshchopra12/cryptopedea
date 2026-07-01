interface OptionButtonProps {
  option: string;

  selected: boolean;

  onSelect: () => void;
}

export default function OptionButton({
  option,
  selected,
  onSelect,
}: OptionButtonProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-lg border p-4 text-left transition ${
        selected
          ? "border-yellow-400 bg-yellow-400/20"
          : "border-zinc-700 bg-zinc-900 hover:border-yellow-400 hover:bg-zinc-800"
      }`}
    >
      {option}
    </button>
  );
}