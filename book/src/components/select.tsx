import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

export function SelectStatus() {
  return (
    <Select>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Todos os estatus" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="quero ler">Quero Ler</SelectItem>
          <SelectItem value="todos os estatus">Todos os estatus</SelectItem>
          <SelectItem value="lendo">Lendo</SelectItem>
          <SelectItem value="lido">Lido</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
