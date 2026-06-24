import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const STORAGE_KEY = 'synergy4life.leads.v1'
const statusOptions = ['New Lead', 'Follow-Up', 'Appointment Set', 'Enrolled', 'Closed Won', 'Closed Lost']
const serviceOptions = ['Credit Repair', 'Credit Builder', 'Business Funding', 'Tradelines', 'Consultation']
const blankLead = { name: '', phone: '', email: '', source: '', creditGoal: '', serviceInterest: serviceOptions[0], status: statusOptions[0], nextFollowUpDate: '', notes: '', revenueValue: '' }
const sampleLeads = [
  { id: 'sample-1', name: 'Monica James', phone: '(404) 555-0171', email: 'monica@example.com', source: 'Instagram', creditGoal: 'Raise score 80 points before home purchase', serviceInterest: 'Credit Repair', status: 'New Lead', nextFollowUpDate: today(1), notes: 'Needs mortgage-ready plan and fast onboarding.', revenueValue: 1200, createdAt: today(0) },
  { id: 'sample-2', name: 'Darius Coleman', phone: '(678) 555-0114', email: 'darius@example.com', source: 'Referral', creditGoal: 'Separate business and personal credit', serviceInterest: 'Business Funding', status: 'Appointment Set', nextFollowUpDate: today(2), notes: 'Discovery call booked; ask about LLC docs.', revenueValue: 3500, createdAt: today(-2) },
  { id: 'sample-3', name: 'Keisha Brooks', phone: '(770) 555-0155', email: 'keisha@example.com', source: 'Facebook Ad', creditGoal: 'Remove collections and qualify for auto loan', serviceInterest: 'Credit Builder', status: 'Follow-Up', nextFollowUpDate: today(0), notes: 'Requested text follow-up after 5 PM.', revenueValue: 950, createdAt: today(-4) },
  { id: 'sample-4', name: 'Anthony Reed', phone: '(470) 555-0120', email: 'anthony@example.com', source: 'Web Form', creditGoal: 'Secure funding for salon expansion', serviceInterest: 'Tradelines', status: 'Closed Won', nextFollowUpDate: '', notes: 'Paid in full. Send onboarding checklist.', revenueValue: 2200, createdAt: today(-10) },
  { id: 'sample-5', name: 'Jasmine Patel', phone: '(404) 555-0190', email: 'jasmine@example.com', source: 'TikTok', creditGoal: 'Understand credit report and next steps', serviceInterest: 'Consultation', status: 'Enrolled', nextFollowUpDate: today(5), notes: 'Starter plan active.', revenueValue: 750, createdAt: today(-1) }
]

function today(offset = 0) { const d = new Date(); d.setDate(d.getDate() + offset); return d.toISOString().slice(0, 10) }
function money(n) { return Number(n || 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }) }

function App() {
  const [leads, setLeads] = useState(() => JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || sampleLeads)
  const [view, setView] = useState('dashboard')
  const [editingLead, setEditingLead] = useState(null)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [serviceFilter, setServiceFilter] = useState('All')

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)), [leads])

  const metrics = useMemo(() => {
    const dueToday = today(0)
    return [
      ['Total Leads', leads.length], ['New Leads', leads.filter(l => l.status === 'New Lead').length],
      ['Follow-Ups Due', leads.filter(l => l.nextFollowUpDate && l.nextFollowUpDate <= dueToday && !['Closed Won', 'Closed Lost'].includes(l.status)).length],
      ['Appointment Set', leads.filter(l => l.status === 'Appointment Set').length], ['Enrolled', leads.filter(l => l.status === 'Enrolled').length],
      ['Closed Won Revenue', money(leads.filter(l => l.status === 'Closed Won').reduce((s, l) => s + Number(l.revenueValue || 0), 0))],
      ['Pipeline Value', money(leads.filter(l => !['Closed Won', 'Closed Lost'].includes(l.status)).reduce((s, l) => s + Number(l.revenueValue || 0), 0))]
    ]
  }, [leads])

  const filteredLeads = leads.filter(lead => {
    const haystack = `${lead.name} ${lead.phone} ${lead.email} ${lead.source} ${lead.creditGoal} ${lead.notes}`.toLowerCase()
    return haystack.includes(query.toLowerCase()) && (statusFilter === 'All' || lead.status === statusFilter) && (serviceFilter === 'All' || lead.serviceInterest === serviceFilter)
  })

  function saveLead(form) {
    const normalized = { ...form, revenueValue: Number(form.revenueValue || 0) }
    if (editingLead) setLeads(leads.map(l => l.id === editingLead.id ? { ...editingLead, ...normalized } : l))
    else setLeads([{ ...normalized, id: crypto.randomUUID(), createdAt: today(0) }, ...leads])
    setEditingLead(null); setView('leads')
  }

  function editLead(lead) { setEditingLead(lead); setView('add') }
  function deleteLead(id) { if (confirm('Delete this lead?')) setLeads(leads.filter(l => l.id !== id)) }

  return <div className="min-h-screen bg-slate-50 text-slate-950 safe-bottom">
    <header className="bg-black text-white px-5 pt-8 pb-6 rounded-b-[2rem]">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Synergy4Life</p>
      <h1 className="mt-2 text-3xl font-black leading-tight">Lead Command Center</h1>
      <p className="mt-2 text-sm text-slate-300">Mobile CRM for credit, funding, and enrollment follow-up.</p>
    </header>
    <main className="mx-auto max-w-5xl px-4 py-5">
      {view === 'dashboard' && <Dashboard metrics={metrics} leads={leads} setView={setView} />}
      {view === 'leads' && <LeadList leads={filteredLeads} query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} serviceFilter={serviceFilter} setServiceFilter={setServiceFilter} onEdit={editLead} onDelete={deleteLead} />}
      {view === 'add' && <LeadForm key={editingLead?.id || 'new'} initial={editingLead || blankLead} onSubmit={saveLead} onCancel={() => { setEditingLead(null); setView('leads') }} editing={Boolean(editingLead)} />}
    </main>
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t border-blue-100 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">{[['dashboard','Dashboard','▦'],['leads','Leads','◉'],['add','Add Lead','＋']].map(([id,label,icon]) => <button key={id} onClick={() => { setView(id); if (id === 'add') setEditingLead(null) }} className={`rounded-2xl px-3 py-3 text-xs font-bold ${view === id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}`}><span className="block text-xl">{icon}</span>{label}</button>)}</div>
    </nav>
  </div>
}

function Dashboard({ metrics, leads, setView }) {
  return <section><div className="mb-5 rounded-3xl bg-blue-600 p-5 text-white glass-card"><h2 className="text-2xl font-black">Today's pipeline</h2><p className="mt-1 text-blue-100">Track leads, appointments, enrollments, and revenue in one place.</p><button onClick={() => setView('add')} className="mt-4 rounded-2xl bg-white px-5 py-3 font-bold text-blue-700">Add new lead</button></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{metrics.map(([label, value], i) => <article key={label} className={`rounded-3xl p-4 glass-card ${i === 6 ? 'col-span-2 bg-black text-white' : 'bg-white'}`}><p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p><p className="mt-2 text-2xl font-black">{value}</p></article>)}</div><h3 className="mt-7 mb-3 text-lg font-black">Hot follow-ups</h3><div className="space-y-3">{leads.filter(l => l.nextFollowUpDate).sort((a,b) => a.nextFollowUpDate.localeCompare(b.nextFollowUpDate)).slice(0,3).map(lead => <LeadMini key={lead.id} lead={lead} />)}</div></section>
}
function LeadMini({ lead }) { return <div className="rounded-3xl bg-white p-4 glass-card"><div className="flex items-center justify-between"><p className="font-black">{lead.name}</p><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{lead.status}</span></div><p className="mt-1 text-sm text-slate-500">Next follow-up: {lead.nextFollowUpDate || 'Not set'}</p></div> }
function LeadList(props) { const { leads, query, setQuery, statusFilter, setStatusFilter, serviceFilter, setServiceFilter, onEdit, onDelete } = props; return <section><h2 className="text-2xl font-black">Lead Management</h2><div className="mt-4 grid gap-3 rounded-3xl bg-white p-4 glass-card md:grid-cols-3"><input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Search leads..." value={query} onChange={e => setQuery(e.target.value)} /><Select value={statusFilter} onChange={setStatusFilter} options={['All', ...statusOptions]} /><Select value={serviceFilter} onChange={setServiceFilter} options={['All', ...serviceOptions]} /></div><div className="mt-5 grid gap-4 md:grid-cols-2">{leads.map(lead => <LeadCard key={lead.id} lead={lead} onEdit={onEdit} onDelete={onDelete} />)}{leads.length === 0 && <p className="rounded-3xl bg-white p-6 text-center text-slate-500">No leads match your filters.</p>}</div></section> }
function LeadCard({ lead, onEdit, onDelete }) { return <article className="rounded-3xl bg-white p-5 glass-card"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-black">{lead.name}</h3><p className="text-sm text-slate-500">{lead.phone} · {lead.email}</p></div><span className="shrink-0 rounded-full bg-black px-3 py-1 text-xs font-bold text-white">{lead.status}</span></div><dl className="mt-4 grid grid-cols-2 gap-3 text-sm"><Info label="Source" value={lead.source} /><Info label="Service" value={lead.serviceInterest} /><Info label="Follow-Up" value={lead.nextFollowUpDate || 'Not set'} /><Info label="Value" value={money(lead.revenueValue)} /></dl><p className="mt-4 rounded-2xl bg-blue-50 p-3 text-sm text-slate-700"><b>Goal:</b> {lead.creditGoal || '—'}</p>{lead.notes && <p className="mt-2 text-sm text-slate-500">{lead.notes}</p>}<div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => onEdit(lead)} className="rounded-2xl bg-blue-600 py-3 font-bold text-white">Edit</button><button onClick={() => onDelete(lead.id)} className="rounded-2xl bg-slate-100 py-3 font-bold text-slate-700">Delete</button></div></article> }
function Info({ label, value }) { return <div><dt className="text-xs font-bold uppercase text-slate-400">{label}</dt><dd className="font-bold">{value}</dd></div> }
function Select({ value, onChange, options }) { return <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3" value={value} onChange={e => onChange(e.target.value)}>{options.map(o => <option key={o}>{o}</option>)}</select> }
function LeadForm({ initial, onSubmit, onCancel, editing }) { const [form, setForm] = useState(initial); const set = (field, value) => setForm(f => ({ ...f, [field]: value })); return <form onSubmit={e => { e.preventDefault(); onSubmit(form) }} className="rounded-3xl bg-white p-5 glass-card"><h2 className="text-2xl font-black">{editing ? 'Edit lead' : 'Add new lead'}</h2><div className="mt-5 grid gap-4 md:grid-cols-2"><Field label="Name" value={form.name} onChange={v => set('name', v)} required /><Field label="Phone" value={form.phone} onChange={v => set('phone', v)} /><Field label="Email" type="email" value={form.email} onChange={v => set('email', v)} /><Field label="Lead Source" value={form.source} onChange={v => set('source', v)} /><Field label="Credit Goal" value={form.creditGoal} onChange={v => set('creditGoal', v)} /><label className="grid gap-2 text-sm font-bold text-slate-700">Service Interest<Select value={form.serviceInterest} onChange={v => set('serviceInterest', v)} options={serviceOptions} /></label><label className="grid gap-2 text-sm font-bold text-slate-700">Status<Select value={form.status} onChange={v => set('status', v)} options={statusOptions} /></label><Field label="Next Follow-Up Date" type="date" value={form.nextFollowUpDate} onChange={v => set('nextFollowUpDate', v)} /><Field label="Revenue Value" type="number" value={form.revenueValue} onChange={v => set('revenueValue', v)} /></div><label className="mt-4 grid gap-2 text-sm font-bold text-slate-700">Notes<textarea className="min-h-28 rounded-2xl border border-slate-200 px-4 py-3" value={form.notes} onChange={e => set('notes', e.target.value)} /></label><div className="mt-5 grid grid-cols-2 gap-3"><button className="rounded-2xl bg-blue-600 py-3 font-black text-white">{editing ? 'Save lead' : 'Create lead'}</button><button type="button" onClick={onCancel} className="rounded-2xl bg-black py-3 font-black text-white">Cancel</button></div></form> }
function Field({ label, value, onChange, type = 'text', required = false }) { return <label className="grid gap-2 text-sm font-bold text-slate-700">{label}<input required={required} type={type} className="rounded-2xl border border-slate-200 px-4 py-3" value={value} onChange={e => onChange(e.target.value)} /></label> }

createRoot(document.getElementById('root')).render(<App />)
