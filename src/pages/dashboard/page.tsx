import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-8 py-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Reporte de Expediciones</h2>
            <p className="text-sm text-slate-500 mt-1">Visualización de datos en tiempo real</p>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <div className="bg-white rounded-xl shadow-sm h-full">
            <iframe
              title="Reporte expediciones"
              src="https://app.powerbi.com/view?r=eyJrIjoiN2FiZjFjYjAtNDNhNi00NTE0LTkxYWEtY2I3YTkwNmI2YTk0IiwidCI6IjQ4NmM5OGQ2LTczMzUtNGJjMS04ZTQzLTRiMjVmNDE3ZGI0NCIsImMiOjR9"
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