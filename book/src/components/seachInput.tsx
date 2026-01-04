import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Input } from "./ui/input";



export function SearchInput({...props }: React.ComponentProps<"input">) {
  return (
    <div className="flex w-full gap-2 items-center rounded-2xl bg-gray-100 p-2 h-9">
      <MagnifyingGlassIcon size={24} className="text-gray-400" />
      <Input placeholder="Buscar por título ou autor..." {...props} />
    </div>
  );
}