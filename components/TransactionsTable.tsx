const transactions = [
  { id: 'TXN-78901', from: 'Amal Hassan', to: 'Sara Al-Rashid', amount: '+$1,200.00', type: 'Transfer', status: 'Completed', date: '2026-03-10 14:22' },
  { id: 'TXN-78902', from: 'Mohammed Yusuf', to: 'Al-Rashid Corp', amount: '-$8,500.00', type: 'Payment', status: 'Completed', date: '2026-03-10 12:05' },
  { id: 'TXN-78903', from: 'Khalid Mansoor', to: 'Amal Hassan', amount: '+$350.00', type: 'Transfer', status: 'Pending', date: '2026-03-10 11:48' },
  { id: 'TXN-78904', from: 'Layla Nour', to: 'Utility Co.', amount: '-$220.00', type: 'Bill Pay', status: 'Completed', date: '2026-03-09 09:30' },
  { id: 'TXN-78905', from: 'Fatima Al-Zahra', to: 'ATM Withdrawal', amount: '-$500.00', type: 'Withdrawal', status: 'Failed', date: '2026-03-09 08:15' },
  { id: 'TXN-78906', from: 'System', to: 'Amal Hassan', amount: '+$4,500.00', type: 'Salary', status: 'Completed', date: '2026-03-08 00:01' },
];

const statusColor: Record<string, string> = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Failed: 'bg-red-100 text-red-700',
};

const typeColor: Record<string, string> = {
  Transfer: 'bg-blue-50 text-blue-700',
  Payment: 'bg-purple-50 text-purple-700',
  'Bill Pay': 'bg-orange-50 text-orange-700',
  Withdrawal: 'bg-gray-100 text-gray-600',
  Salary: 'bg-green-50 text-green-700',
};

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div>
          <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
          <p className="text-sm text-gray-500">Last 30 days: 14,320 transactions</p>
        </div>
        <button className="text-sm border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors">
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {['TXN ID', 'From', 'To', 'Amount', 'Type', 'Status', 'Date/Time'].map((col) => (
                <th key={col} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 text-gray-400 font-mono text-xs">{t.id}</td>
                <td className="px-5 py-3 text-gray-700">{t.from}</td>
                <td className="px-5 py-3 text-gray-700">{t.to}</td>
                <td className={`px-5 py-3 font-semibold ${t.amount.startsWith('+') ? 'text-green-600' : t.amount.startsWith('-') ? 'text-red-600' : 'text-gray-900'}`}>
                  {t.amount}
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${typeColor[t.type]}`}>{t.type}</span>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColor[t.status]}`}>{t.status}</span>
                </td>
                <td className="px-5 py-3 text-gray-500 text-xs">{t.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400 flex justify-between items-center">
        <span>Showing 6 of 14,320 transactions</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Prev</button>
          <button className="px-3 py-1 rounded border border-red-600 bg-red-600 text-white">1</button>
          <button className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
