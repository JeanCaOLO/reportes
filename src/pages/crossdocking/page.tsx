import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Crossdocking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { path: '/', label: 'Expediciones', icon: 'ri-truck-line' },
    { path: '/conteos', label: 'Inventarios', icon: 'ri-numbers-line' },
    { path: '/crossdocking', label: 'Crossdocking', icon: 'ri-dashboard-line' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Header con botón toggle */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800">Panel de Control</h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`${isSidebarOpen ? 'ri-menu-fold-line' : 'ri-menu-unfold-line'} text-xl text-gray-600`}></i>
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? 'bg-teal-50 text-teal-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                    {isSidebarOpen && (
                      <span className="font-medium whitespace-nowrap">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Crossdocking</h2>
        </header>

        {/* Contenedor del iframe */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="h-full">
            <iframe
              src="https://readdy.cc/preview/9d1e7278-02f4-4b2b-93a2-ef7dfa812de6/7165194/dashboard-embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', minHeight: '800px' }}
              allowFullScreen
              title="Dashboard Crossdocking"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
