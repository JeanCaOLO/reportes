import Sidebar from '../../components/Sidebar';

export default function Conteos() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-8 py-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Reporte de Inventarios</h2>
            <p className="text-sm text-slate-500 mt-1">Visualización de datos en tiempo real</p>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <div className="bg-white rounded-xl shadow-sm h-full">
            <iframe
              title="Conteos"
              width="100%"
              height="100%"
              src="https://app.fabric.microsoft.com/view?r=eyJrIjoiZGNiODAxZmUtYTVkYi00NDUyLTkyZjgtMTJjMTM1YzQwNjM4IiwidCI6ImEzNzkxYmJhLWU1YzAtNDA1OS1iNmE5LTRhNmI5ZDUzNWFjNCIsImMiOjR9"
              frameBorder={0}
              allowFullScreen
              className="rounded-xl w-full h-full"
            />
          </div>
        </main>
      </div>
    </div>
  );
}