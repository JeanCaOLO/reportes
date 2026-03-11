import Sidebar from '../../components/Sidebar';

export default function Auditorias() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-white mb-4">Auditorias</h1>
          <div className="w-full h-full">
            <iframe
              title="Auditorias"
              src="https://app.powerbi.com/view?r=eyJrIjoiMGQwZGI3MjgtM2Q1ZC00OGQ3LTg2NDYtMTI5ZGUyMzE3MTdkIiwidCI6ImEzNzkxYmJhLWU1YzAtNDA1OS1iNmE5LTRhNmI5ZDUzNWFjNCIsImMiOjR9"
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
