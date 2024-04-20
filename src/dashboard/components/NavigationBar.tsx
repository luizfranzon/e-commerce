import { BookUser, ChevronsRight, NotebookText, Store, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function NavigationBar() {

  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState<boolean>()
  useEffect(() => {
    const isOpen =
      localStorage.getItem("isNavigationMenuOpen") === "true" ? true : false

    setIsNavigationMenuOpen(isOpen)
  }, [])


  function handleToggleNavigationMenuOpenStatus() {
    setIsNavigationMenuOpen(!isNavigationMenuOpen)
    localStorage.setItem("isNavigationMenuOpen", String(!isNavigationMenuOpen))
  }

  return (
    <aside data-isopen={isNavigationMenuOpen} className="bg-[#17171b] w-full border-r-2 border-white/10 max-w-72 h-screen text-white flex flex-col px-8 relative duration-300 transition-all ease-out [&[data-isOpen=true]]:max-w-0 z-0">
      <div className="overflow-hidden">
        <div className="mt-12 px-4">
          <NavLink to={"/"}>
            <h1 className="text-2xl text-[#d2f254] font-bold cursor-pointer font-mono">Dashboard</h1>
          </NavLink>
        </div>
        <ul className="flex flex-col gap-2 mt-12 font-medium">
          <NavLink to={"/pedidos"}>
            <li className="cursor-pointer group text-xl transition-colors text-white/30 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
              <NotebookText className="text-[#585858] transition-colors group-hover:text-white" />
              Pedidos
            </li>
          </NavLink>
          <NavLink to={"/produtos"}>
            <li className="cursor-pointer group text-xl transition-colors text-white/30 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
              <Store className="text-[#585858] transition-colors group-hover:text-white" />
              Produtos
            </li>
          </NavLink>
          <NavLink to={"/clientes"}>
            <li className="cursor-pointer group text-xl transition-colors text-white/30 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
              <BookUser className="text-[#585858] transition-colors group-hover:text-white" />
              Clientes
            </li>
          </NavLink>
          <NavLink to={"/financeiro"}>
            <li className="cursor-pointer group text-xl transition-colors text-white/30 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg flex items-center gap-2">
              <Wallet className="text-[#585858] transition-colors group-hover:text-white" />
              Financeiro
            </li>
          </NavLink>

        </ul>
      </div>
      <button
        data-isopen={isNavigationMenuOpen}
        onClick={() => handleToggleNavigationMenuOpenStatus()}
        className="h-10 w-10 bg-[#17171b] border-2 border-white/10 absolute z-10 top-[calc(50vh)] hover:scale-105 transition-transform [&[data-isOpen=false]]:rotate-180 -right-5 flex items-center justify-center rounded-full"
      >
        <ChevronsRight />
      </button>
    </aside>
  )
}