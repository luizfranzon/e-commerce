import { Bell, Search } from "lucide-react";

export function Dashboard() {

  function formatGreetingByDayTime(): string {
    const currentHourTime = new Date().getHours();

    if (currentHourTime < 12) {
      return 'Bom dia'
    }

    if (currentHourTime < 18) {
      return 'Boa tarde'
    }

    return 'Boa noite'
  }

  return (
    <main>
      <header className="flex items-center justify-between">
        <h1 className="font-mono text-3xl font-bold flex items-center">{formatGreetingByDayTime()}, Luiz!</h1>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>
              <button className="bg-[#f6f6f6] p-3 rounded-lg cursor-pointer hover:bg-[#00210d] text-[##00210d] hover:text-white transition-all">
                <Search />
              </button>
            </li>
            <li>
              <button className="bg-[#f6f6f6] p-3 rounded-lg cursor-pointer hover:bg-[#00210d] text-[##00210d] hover:text-white transition-all">
                <Bell />
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="grid grid-cols-2 mt-6 gap-4">
        <div className="bg-[#f6f6f6] rounded-md border-2 border-black/10 p-4">
          Lista dos ultimos pedidos
        </div>
        <div className="bg-[#f6f6f6] rounded-md border-2 border-black/10 p-4">
          Gráfico de vendas
        </div>
      </div>
    </main>
  )
}