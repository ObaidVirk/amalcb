const customers = [
  { id: 'C001', name: 'Amal Hassan', email: 'amal.hassan@email.com', phone: '+971 50 123 4567', type: 'Premium', status: 'Active', joined: '2022-03-14' },
  { id: 'C002', name: 'Sara Al-Rashid', email: 'sara.rashid@email.com', phone: '+971 55 987 6543', type: 'Standard', status: 'Active', joined: '2023-01-20' },
  { id: 'C003', name: 'Mohammed Yusuf', email: 'm.yusuf@email.com', phone: '+971 56 456 7890', type: 'Business', status: 'Active', joined: '2021-11-08' },
  { id: 'C004', name: 'Fatima Al-Zahra', email: 'f.alzahra@email.com', phone: '+971 52 321 9876', type: 'Premium', status: 'Suspended', joined: '2022-07-30' },
  { id: 'C005', name: 'Khalid Mansoor', email: 'k.mansoor@email.com', phone: '+971 54 654 3210', type: 'Standard', status: 'Active', joined: '2023-06-15' },
  { id: 'C006', name: 'Layla Nour', email: 'layla.nour@email.com', phone: '+971 50 111 2222', type: 'Business', status: 'Active', joined: '2020-09-22' },
];

const statusColor: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Suspended: 'bg-red-100 text-red-700',
  Pending: 'bg-yellow-100 text-yellow-700',
};

const typeColor: Record<string, string> = {
  Premium: 'bg-purple-100 text-purple-700',
  Standard: 'bg-gray-100 text-gray-600',
  Business: 'bg-blue-100 text-blue-700',
};

export default function CustomersTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div>
          <h3 className="font-semibold text-gray-900">Customers</h3>
          <p className="text-sm text-gray-500">Total: 48,291 registered customers</p>
        </div>
        <button className="text-sm bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
          + Add Customer
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {['ID', 'Name', 'Email', 'Phone', 'Type', 'Status', 'Joined', 'Actions'].map((col) => (
                <th key={col} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 text-gray-400 font-mono text-xs">{c.id}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xs flex-shrink-0">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-medium text-gray-900">{c.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-gray-500">{c.email}</td>
                <td className="px-5 py-3 text-gray-500">{c.phone}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColor[c.type]}`}>{c.type}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColor[c.status]}`}>{c.status}</span>
                </td>
                <td className="px-5 py-3 text-gray-500">{c.joined}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-blue-600 hover:underline">View</button>
                    <button className="text-xs text-gray-500 hover:underline">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between items-center">
        <span>Showing 6 of 48,291 customers</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Prev</button>
          <button className="px-3 py-1 rounded border border-red-600 bg-red-600 text-white">1</button>
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
