import { BookOpenIcon } from "@phosphor-icons/react";

export function Header() {
    return (
      <div>
        <div>
          <BookOpenIcon size={32} />
          <span>Minha Biblioteca</span>
        </div>
      </div>
    );
}