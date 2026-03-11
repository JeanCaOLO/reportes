import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      label: 'Expediciones',
      icon: 'ri-truck-line'
    },
    {
      path: '/crossdocking',
      label: 'Crossdocking',
      icon: 'ri-dashboard-line'
    },
    {
      path: '/auditorias',
      label: 'Auditorias',
      icon: 'ri-file-search-line'
    },
    {
      path: '/conteos',
      label: 'Ciclicos',
      icon: 'ri-numbers-line'
    },
    {
      path: '/alertas-picking',
      label: 'Alertas Picking',
      icon: 'ri-alarm-warning-line'
    },
    {
      path: '/diferencia-tiendas',
      label: 'Diferencia Tiendas EPA',
      icon: 'ri-store-2-line'
    }
  ];

  return (
    <div
      className={`${
        isCollapsed ? 'w-16' : 'w-64'
      } bg-gray-900 text-white flex flex-col transition-all duration-300`}
    >
      {/* Header con botón hamburguesa */}
      <div className="p-4 flex items-center justify-between border-b border-gray-700">
        {!isCollapsed && <h2 className="text-xl font-bold">Reportes</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
          aria-label={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
        >
          <i className={`${isCollapsed ? 'ri-menu-unfold-line' : 'ri-menu-fold-line'} text-xl`}></i>
        </button>
      </div>

      {/* Menú de navegación */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-teal-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  {!isCollapsed && (
                    <span className="whitespace-nowrap font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
