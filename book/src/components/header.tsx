import { BookOpenIcon } from "@phosphor-icons/react";
import { DialogAddBook } from "./dialog";

export function Header() {
  return (
    <div className=" flex justify-center mt-8 ">
      <div className=" flex justify-between items-center  w-249">
        <div className="flex items-center gap-2.5">
          <BookOpenIcon size={32} />
          <span className="text-gray-500">Minha Biblioteca</span>
        </div>
        <div>
          <DialogAddBook />
        </div>
      </div>
    </div>
  );
}
