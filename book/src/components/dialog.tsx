import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "@phosphor-icons/react";
import { SelectStatus } from "./select";
import { Ratings } from "./ratings";
import { Textarea } from "./ui/textarea";

export function DialogAddBook() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon size={32}/>
            Adicionar Livro
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Adicionar Livro</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title-1">Titulo *</Label>
              <Input
                id="title-1"
                name="title"
                placeholder="Digite o título do livro"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="athor-1">Autor *</Label>
              <Input
                id="athor-1"
                name="athor"
                placeholder="Digite o nome do autor"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="url-1">URL da imagen</Label>
              <Input
                id="url-1"
                name="url"
                placeholder="URL da capa do (opcional)"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="action-1">Selecione ou arraste o livro</Label>
              <Input id="action-1" name="action" type="file" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status-1">Status</Label>
              <SelectStatus />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status-1">Avaliação</Label>
              <div className="flex items-center gap-1">
                <Ratings defaultRating={0} />
                <Button className="bg-white text-gray-400">Limpar</Button>
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status-1">Comentário</Label>
              <Textarea placeholder="Suas anotações sobre o livro (opcional)" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondry">Cancel</Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
