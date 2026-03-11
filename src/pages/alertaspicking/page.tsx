import Sidebar from '../../components/Sidebar';

export default function AlertasPicking() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Alertas Picking</h1>
          <div className="w-full h-full">
            <iframe
              title="Alertas Picking"
              src="https://app.powerbi.com/view?r=eyJrIjoiYjRlMWNjYWUtZjc5OC00ZjM5LTljY2ItMDQxYzM3NzlkMGU1IiwidCI6ImEzNzkxYmJhLWU1YzAtNDA1OS1iNmE5LTRhNmI5ZDUzNWFjNCIsImMiOjR9"
              frameBorder="0"
              allowFullScreen
              className="w-full rounded-lg"
              style={{ height: 'calc(100vh - 120px)', border: '1px solid #374151' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
