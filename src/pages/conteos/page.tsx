import { useNavigate } from 'react-router-dom';

export default function Conteos() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
              <i className="ri-bar-chart-box-line text-xl text-white"></i>
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">Panel BI</h1>
              <p className="text-xs text-slate-500">Reportes</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <button
              onClick={() => navigate('/')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-truck-line text-xl"></i>
              <span className="font-medium text-sm">Expediciones</span>
            </button>
            <button
              onClick={() => navigate('/conteos')}
              className="w-full flex items-center space-x-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-numbers-line text-xl"></i>
              <span className="font-medium text-sm">Inventarios</span>
            </button>
          </div>
        </nav>
      </div>

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