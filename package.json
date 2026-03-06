
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('reporte1');

  const reports = {
    reporte1: {
      title: 'Reporte de Expediciones',
      url: 'https://app.powerbi.com/view?r=eyJrIjoiN2FiZjFjYjAtNDNhNi00NTE0LTkxYWEtY2I3YTkwNmI2YTk0IiwidCI6IjQ4NmM5OGQ2LTczMzUtNGJjMS04ZTQzLTRiMjVmNDE3ZGI0NCIsImMiOjR9',
      description: 'Análisis y seguimiento de expediciones'
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Barra de navegación lateral */}
      <aside className="w-72 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <img 
            src="https://public.readdy.ai/ai/img_res/8e440a13-e300-4687-a3d6-78bf5a4aacba.png" 
            alt="Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Reportes
          </h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('reporte1')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 whitespace-nowrap cursor-pointer ${
                  activeTab === 'reporte1'
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className={`ri-truck-line text-lg w-5 h-5 flex items-center justify-center ${
                  activeTab === 'reporte1' ? 'text-white' : 'text-teal-500'
                }`}></i>
                <span className="text-sm font-medium">Reporte de Expediciones</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Panel central */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header del panel */}
        <header className="bg-white shadow-sm px-8 py-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {reports[activeTab as keyof typeof reports].title}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {reports[activeTab as keyof typeof reports].description}
            </p>
          </div>
        </header>

        {/* Área del iframe */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="bg-white rounded-lg shadow-md h-full">
            <iframe
              key={activeTab}
              src={reports[activeTab as keyof typeof reports].url}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allowFullScreen
              title={reports[activeTab as keyof typeof reports].title}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
