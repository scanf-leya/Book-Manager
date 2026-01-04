export interface Model {
  id: number;
  name: string;
  author: string;
  image: string;
  status: "Lido" | "Quero ler" | "Lendo";
  coment: string;
  point: number;
}

export const models: Model[] = [
  {
    id: 1,
    name: "v0-1.5-sm",
    author: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    status: "Lido",
    coment: "",
    point: 3.5,
  },
  {
    id: 2,
    name: "v0-1.5-sm",
    author: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    status: "Lido",
    coment: "",
    point: 3.5,
  },
  {
    id: 3,
    name: "v0-1.5-sm",
    author: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    status: "Lido",
    coment: "",
    point: 3.5,
  },
  {
    id: 4,
    name: "v0-1.5-sm",
    author: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    status: "Lido",
    coment: "",
    point: 3.5,
  },
  {
    id: 5,
    name: "v0-1.5-sm",
    author: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    status: "Lido",
    coment: "",
    point: 3.5,
  },
];
