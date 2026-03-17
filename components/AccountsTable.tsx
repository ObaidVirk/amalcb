const accounts = [
  { id: 'ACC-00123', customer: 'Amal Hassan', type: 'Current', balance: '$24,880.00', currency: 'USD', status: 'Active', opened: '2022-03-14' },
  { id: 'ACC-00124', customer: 'Sara Al-Rashid', type: 'Savings', balance: '$8,450.50', currency: 'USD', status: 'Active', opened: '2023-01-20' },
  { id: 'ACC-00125', customer: 'Mohammed Yusuf', type: 'Business', balance: '$142,300.00', currency: 'USD', status: 'Active', opened: '2021-11-08' },
  { id: 'ACC-00126', customer: 'Fatima Al-Zahra', type: 'Savings', balance: '$3,200.00', currency: 'USD', status: 'Frozen', opened: '2022-07-30' },
  { id: 'ACC-00127', customer: 'Khalid Mansoor', type: 'Current', balance: '$15,670.20', currency: 'USD', status: 'Active', opened: '2023-06-15' },
  { id: 'ACC-00128', customer: 'Layla Nour', type: 'Investment', balance: '$96,500.00', currency: 'USD', status: 'Active', opened: '2020-09-22' },
];

const statusColor: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Frozen: 'bg-blue-100 text-blue-700',
  Closed: 'bg-gray-100 text-gray-600',
};

const typeColor: Record<string, string> = {
  Current: 'bg-blue-50 text-blue-700',
  Savings: 'bg-green-50 text-green-700',
  Business: 'bg-purple-50 text-purple-700',
  Investment: 'bg-orange-50 text-orange-700',
};

export default function AccountsTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div>
          <h3 className="font-semibold text-gray-900">Accounts Management</h3>
          <p className="text-sm text-gray-500">Total: 61,483 accounts</p>
        </div>
        <button className="text-sm bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
          + New Account
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {['Account ID', 'Customer', 'Type', 'Balance', 'Currency', 'Status', 'Opened', 'Actions'].map((col) => (
                <th key={col} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {accounts.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 text-gray-400 font-mono text-xs">{a.id}</td>
                <td className="px-5 py-3 font-medium text-gray-900">{a.customer}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColor[a.type]}`}>{a.type}</span>
                </td>
                <td className="px-5 py-3 font-semibold text-gray-900">{a.balance}</td>
                <td className="px-5 py-3 text-gray-500">{a.currency}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColor[a.status]}`}>{a.status}</span>
                </td>
                <td className="px-5 py-3 text-gray-500">{a.opened}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <button className="text-xs text-blue-600 hover:underline">View</button>
                    <button className="text-xs text-red-500 hover:underline">Freeze</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between items-center">
        <span>Showing 6 of 61,483 accounts</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Prev</button>
          <button className="px-3 py-1 rounded border border-red-600 bg-red-600 text-white">1</button>
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
