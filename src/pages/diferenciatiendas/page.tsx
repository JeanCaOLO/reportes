import Sidebar from '../../components/Sidebar';

export default function DiferenciaTiendas() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-8 py-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Diferencia Tiendas EPA</h2>
            <p className="text-sm text-slate-500 mt-1">Visualización de datos en tiempo real</p>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <div className="bg-white rounded-xl shadow-sm h-full">
            <iframe
              title="Diferencias Tiendas EPA"
              src="https://app.powerbi.com/view?r=eyJrIjoiMTA3MjhmYjEtYzE5Zi00OTMyLWEwMTctMThhYzU5ZWJhYzExIiwidCI6ImEzNzkxYmJhLWU1YzAtNDA1OS1iNmE5LTRhNmI5ZDUzNWFjNCIsImMiOjR9"
              className="w-full h-full rounded-xl"
              frameBorder={0}
              allowFullScreen
            />
          </div>
        </main>
      </div>
    </div>
  );
}
