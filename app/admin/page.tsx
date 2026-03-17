import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import CustomersTable from '@/components/CustomersTable';
import AccountsTable from '@/components/AccountsTable';
import TransactionsTable from '@/components/TransactionsTable';
import AdminGuard from '@/components/AdminGuard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard — AmalCB.com',
  description: 'AmalCB Admin Console — manage customers, accounts, transactions and content.',
};

const analyticsCards = [
  { label: 'Total Customers', value: '48,291', change: '+1,240', positive: true, icon: '👥', bg: 'bg-blue-50', text: 'text-blue-700' },
  { label: 'Active Accounts', value: '61,483', change: '+890', positive: true, icon: '🏦', bg: 'bg-green-50', text: 'text-green-700' },
  { label: 'Total Assets (USD)', value: '$18.4B', change: '+2.1%', positive: true, icon: '💰', bg: 'bg-purple-50', text: 'text-purple-700' },
  { label: 'Monthly Transactions', value: '1.2M', change: '+8.4%', positive: true, icon: '💳', bg: 'bg-orange-50', text: 'text-orange-700' },
  { label: 'Active Loans', value: '12,540', change: '+340', positive: true, icon: '📋', bg: 'bg-red-50', text: 'text-red-700' },
  { label: 'Failed Transactions', value: '124', change: '-18', positive: true, icon: '⚠️', bg: 'bg-yellow-50', text: 'text-yellow-700' },
  { label: 'New Signups (30d)', value: '3,284', change: '+12.2%', positive: true, icon: '✨', bg: 'bg-teal-50', text: 'text-teal-700' },
  { label: 'Support Tickets', value: '47', change: '-23', positive: true, icon: '🎫', bg: 'bg-indigo-50', text: 'text-indigo-700' },
];

const contentPages = [
  { page: 'Homepage Hero', status: 'Published', updated: '2026-03-10', author: 'Admin' },
  { page: 'Personal Banking', status: 'Published', updated: '2026-03-08', author: 'Editor' },
  { page: 'Loan Rates Banner', status: 'Draft', updated: '2026-03-11', author: 'Admin' },
  { page: 'Digital Banking', status: 'Published', updated: '2026-03-05', author: 'Editor' },
  { page: 'About Page', status: 'Published', updated: '2026-02-28', author: 'Admin' },
];

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader
          title="Admin Dashboard"
          subtitle="Welcome back, Super Admin — here's your banking overview"
        />

        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Analytics Cards */}
          <section id="analytics">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Banking Analytics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {analyticsCards.map((card) => (
                <div key={card.label} className={`${card.bg} rounded-2xl p-5 border border-transparent hover:shadow-md transition-all`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{card.icon}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {card.change}
                    </span>
                  </div>
                  <div className={`text-2xl font-black ${card.text} mb-0.5`}>{card.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{card.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Charts row */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue chart placeholder */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Transaction Volume</h3>
                  <p className="text-sm text-gray-500">Last 12 months</p>
                </div>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option>2026</option>
                  <option>2025</option>
                </select>
              </div>
              <div className="h-40 flex items-end gap-2">
                {[55, 70, 45, 80, 65, 90, 75, 95, 60, 85, 70, 100].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-red-600 to-red-400 rounded-t-sm hover:from-red-700 hover:to-red-500 transition-colors cursor-pointer"
                      style={{ height: `${h}%` }}
                      title={`Month ${i + 1}`}
                    />
                    <span className="text-xs text-gray-400">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Account types donut chart placeholder */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Account Distribution</h3>
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 rounded-full border-[18px] border-red-500" style={{ borderRightColor: '#3B82F6', borderBottomColor: '#10B981', borderLeftColor: '#F59E0B' }} />
              </div>
              <div className="space-y-2">
                {[
                  { type: 'Current', count: '28,450', pct: '46%', color: 'bg-red-500' },
                  { type: 'Savings', count: '18,220', pct: '30%', color: 'bg-blue-500' },
                  { type: 'Business', count: '9,813', pct: '16%', color: 'bg-green-500' },
                  { type: 'Investment', count: '5,000', pct: '8%', color: 'bg-yellow-500' },
                ].map((item) => (
                  <div key={item.type} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-gray-600">{item.type}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-500">{item.count}</span>
                      <span className="font-semibold text-gray-900 w-10 text-right">{item.pct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customers Table */}
          <section id="customers">
            <CustomersTable />
          </section>

          {/* Accounts Table */}
          <section id="accounts">
            <AccountsTable />
          </section>

          {/* Transactions Table */}
          <section id="transactions">
            <TransactionsTable />
          </section>

          {/* Content Management */}
          <section id="content">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div>
                  <h3 className="font-semibold text-gray-900">Content Management</h3>
                  <p className="text-sm text-gray-500">Website pages and banners</p>
                </div>
                <button className="text-sm bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                  + New Page
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      {['Page / Banner', 'Status', 'Last Updated', 'Author', 'Actions'].map((col) => (
                        <th key={col} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {contentPages.map((p) => (
                      <tr key={p.page} className="hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-3 font-medium text-gray-900">{p.page}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${p.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-gray-500">{p.updated}</td>
                        <td className="px-5 py-3 text-gray-500">{p.author}</td>
                        <td className="px-5 py-3">
                          <div className="flex gap-3">
                            <button className="text-xs text-blue-600 hover:underline">Edit</button>
                            <button className="text-xs text-gray-500 hover:underline">Preview</button>
                            <button className="text-xs text-red-500 hover:underline">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Settings */}
          <section id="settings">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-6">System Settings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* General settings */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">General</h4>
                  {[
                    { label: 'Bank Name', value: 'Amal Commercial Bank' },
                    { label: 'Domain', value: 'amalcb.com' },
                    { label: 'Support Email', value: 'support@amalcb.com' },
                    { label: 'Hotline', value: '+971 4 300 0000' },
                  ].map((setting) => (
                    <div key={setting.label} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{setting.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">{setting.value}</span>
                        <button className="text-xs text-red-600 hover:underline">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Toggles */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Features</h4>
                  {[
                    { label: 'Maintenance Mode', on: false },
                    { label: 'New User Registration', on: true },
                    { label: 'Two-Factor Authentication', on: true },
                    { label: 'SMS Notifications', on: true },
                    { label: 'Email Notifications', on: true },
                    { label: 'Digital Wallet', on: true },
                  ].map((toggle) => (
                    <div key={toggle.label} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-600">{toggle.label}</span>
                      <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${toggle.on ? 'bg-red-600' : 'bg-gray-300'}`}>
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${toggle.on ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors">Save Settings</button>
                <button className="border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors">Reset Defaults</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    </AdminGuard>
  );
}
