"use client";

import { ItemGroup } from "@/components/ui/item";
import { Header } from "@/components/header";
import { SearchInput } from "@/components/seachInput";
import { SelectStatus } from "@/components/select";
import { useState } from "react";
import { models } from "@/lib/const";
import { Book } from "@/components/item";

export default function Home() {
  const [search, Setsearch] = useState("");
  return (
    <>
      <Header />
      <main className="flex justify-center mt-8">
        <div className="flex flex-col w-249 gap-6">
          <div className="flex gap-4">
            <SearchInput
              value={search}
              onChange={(e) => Setsearch(e.target.value)}
            />
            <SelectStatus />
          </div>
          <div className="w-full h-273 overflow-hidden mb-10">
            <ItemGroup className="grid grid-cols-4 grid-rows-2 gap-4">
              {models.map((model) => (
                <Book model={model} key={model.id} />
              ))}
            </ItemGroup>
          </div>
        </div>
      </main>
    </>
  );
}
