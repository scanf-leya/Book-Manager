import { StarIcon } from "@phosphor-icons/react";

type StarProps = {
  percent: number; // 0 → 1
};

export function Star({ percent }: StarProps) {
  return (
    <div className="relative w-6 h-6">
      <StarIcon size={24}  className="text-gray-300" />

      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${percent * 100}%` }}
      >
        <StarIcon size={24} weight="fill" className="text-yellow-400" />
      </div>
    </div>
  );
}
