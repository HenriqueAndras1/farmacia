import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-red-900 text-white"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="hover:opacity-75 text-2xl font-bold">
            Farmacia do Povo
          </Link>

          <div className="flex gap-4">
            {/* Link das categorias */}
            <Link to="/categorias" className="hover:opacity-75">
              Categorias
            </Link>

            {/* Link para cadastrar as categorias    */}
            <Link to="/cadastrarcategorias" className="hover:opacity-75">
              Cadastrar Categorias
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
