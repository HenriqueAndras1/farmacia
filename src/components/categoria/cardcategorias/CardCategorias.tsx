import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-red-800 text-white font-bold text-2xl">
        Categoria
      </header>

      <div className="p-4 text-2xl bg-slate-200 h-full">
      <p><strong>Nome:</strong> {categoria.nome}</p>
      <p> <strong>Descrição:</strong>{categoria.descricao}</p>
      </div>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-red-400 hover:bg-red-800 
    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-green-400 hover:bg-green-700 w-full 
		flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
