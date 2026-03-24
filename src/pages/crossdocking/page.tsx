import Sidebar from '../../components/Sidebar';

export default function Crossdocking() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-8 py-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dashboard Crossdocking</h2>
            <p className="text-sm text-slate-500 mt-1">Visualización de datos en tiempo real</p>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-8">
          <div className="bg-white rounded-xl shadow-sm h-full">
            <iframe
              src="https://readdy.cc/preview/9d1e7278-02f4-4b2b-93a2-ef7dfa812de6/7633710/dashboard-embed"
              width="100%"
              height="100%"
              frameBorder={0}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', minHeight: '800px' }}
              allowFullScreen
              title="Dashboard Crossdocking"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
