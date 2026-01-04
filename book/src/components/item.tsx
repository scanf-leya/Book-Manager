import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Model } from "@/lib/const";
import { Ratings } from "./ratings";
import { TrashIcon } from "@phosphor-icons/react";
import { ButtonEdit } from "./btnEdit";

export function Book({ model }: { model: Model }) {
  return (
    <Item variant="outline" className="w-57.5 h-133.5 ">
      <ItemHeader>
        <Image
          src={model.image}
          alt={model.name}
          width={128}
          height={128}
          className="aspect-square w-full h-65 rounded-sm object-cover"
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{model.name}</ItemTitle>
        <ItemDescription>{model.author}</ItemDescription>
        {model.point != 0 && <Ratings defaultRating={3.5} />}
      </ItemContent>
      <ItemFooter>
        <ButtonEdit />
        <Button variant="danger">
          <TrashIcon size={16} />
          Excluir
        </Button>
      </ItemFooter>
    </Item>
  );
}
