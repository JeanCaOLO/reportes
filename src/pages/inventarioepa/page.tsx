import Sidebar from '../../components/Sidebar';

export default function InventarioEPA() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Inventario Diario EPA</h1>
          <div className="bg-gray-800 rounded-lg p-6">
            <iframe
              title="Inventario Diario Epa"
              width="100%"
              height="800"
              src="https://app.powerbi.com/view?r=eyJrIjoiYTZlZmU0NWItZjFhMy00NDY3LWE2ZGYtMGIzOTkwYjVkMzI2IiwidCI6ImEzNzkxYmJhLWU1YzAtNDA1OS1iNmE5LTRhNmI5ZDUzNWFjNCIsImMiOjR9"
              frameBorder="0"
              allowFullScreen={true}
              style={{ border: '1px solid #374151', borderRadius: '8px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}