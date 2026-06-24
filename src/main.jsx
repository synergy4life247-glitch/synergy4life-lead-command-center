import React, { useMemo, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const STORAGE_KEY = 'synergy4life-leads-v1';

const statusOptions = ['New Lead', 'Follow-Up', 'Appointment Set', 'Enrolled', 'Closed Won', 'Closed Lost'];
const serviceOptions = ['Credit Repair', 'Credit Builder', 'Business Funding', 'Financial Coaching', 'Debt Strategy', 'Identity Protection'];

const sampleLeads = [
  {
    id: 'sample-1',
    name: 'Alicia Monroe',
    phone: '(404) 555-0128',
    email: 'alicia.monroe@example.com',
    leadSource: 'Instagram DM',
    creditGoal: 'Raise score 80 points for home loan',
    serviceInterest: 'Credit Repair',
    status: 'Follow-Up',
    nextFollowUpDate: '2026-06-26',
    notes: 'Wants an evening call after work. Sent intake checklist.',
    revenueValue: '1497',
  },
  {
    id: 'sample-2',
    name: 'Marcus Bell',
    phone: '(678) 555-0199',
    email: 'marcus.bell@example.com',
    leadSource: 'Referral',
    creditGoal: 'Qualify for business line of credit',
    serviceInterest: 'Business Funding',
    status: 'Appointment Set',
    nextFollowUpDate: '2026-06-24',
    notes: 'Discovery call scheduled. Interested in funding roadmap.',
    revenueValue: '2500',
  },
  {
    id: 'sample-3',
    name: 'Danielle Carter',
    phone: '(770) 555-0175',
    email: 'danielle.carter@example.com',
    leadSource: 'Facebook Ad',
    creditGoal: 'Remove collections and build positive payment history',
    serviceInterest: 'Credit Builder',
    status: 'New Lead',
    nextFollowUpDate: '2026-06-25',
    notes: 'Requested text follow-up first.',
    revenueValue: '997',
  },
];

const blankLead = {
  name: '', phone: '', email: '', leadSource: '', creditGoal: '', serviceInterest: serviceOptions[0],
  status: statusOptions[0], nextFollowUpDate: '', notes: '', revenueValue: '',
};

function loadLeads() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : sampleLeads;
  } catch {
    return sampleLeads;
  }
}

function money(value) {
  return Number(value || 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function Icon({ glyph, className = '' }) {
  return <span aria-hidden="true" className={`inline-flex items-center justify-center ${className}`}>{glyph}</span>;
}

function App() {
  const [leads, setLeads] = useState(loadLeads);
  const [view, setView] = useState('dashboard');
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [editingLead, setEditingLead] = useState(null);

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(leads)), [leads]);

  const filteredLeads = useMemo(() => {
    const search = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesSearch = !search || [lead.name, lead.phone, lead.email, lead.leadSource, lead.creditGoal, lead.notes]
        .some((field) => field.toLowerCase().includes(search));
      const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
      const matchesService = serviceFilter === 'All' || lead.serviceInterest === serviceFilter;
      return matchesSearch && matchesStatus && matchesService;
    });
  }, [leads, query, statusFilter, serviceFilter]);

  const stats = useMemo(() => ({
    total: leads.length,
    won: leads.filter((lead) => lead.status === 'Closed Won').length,
    followUps: leads.filter((lead) => ['New Lead', 'Follow-Up', 'Appointment Set'].includes(lead.status)).length,
    pipeline: leads.reduce((sum, lead) => sum + Number(lead.revenueValue || 0), 0),
  }), [leads]);

  function saveLead(formLead) {
    if (formLead.id) {
      setLeads((current) => current.map((lead) => (lead.id === formLead.id ? formLead : lead)));
    } else {
      setLeads((current) => [{ ...formLead, id: crypto.randomUUID() }, ...current]);
    }
    setEditingLead(null);
    setView('leads');
  }

  function deleteLead(id) {
    setLeads((current) => current.filter((lead) => lead.id !== id));
  }

  return <div className="min-h-screen bg-slate-950 text-slate-950">
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 pb-24 shadow-2xl">
      <Header />
      {view === 'dashboard' && <Dashboard stats={stats} leads={leads} setView={setView} />}
      {view === 'leads' && <LeadList leads={filteredLeads} query={query} setQuery={setQuery} statusFilter={statusFilter} setStatusFilter={setStatusFilter} serviceFilter={serviceFilter} setServiceFilter={setServiceFilter} onEdit={(lead) => { setEditingLead(lead); setView('add'); }} onDelete={deleteLead} />}
      {view === 'add' && <LeadForm initialLead={editingLead || blankLead} onSave={saveLead} onCancel={() => { setEditingLead(null); setView('leads'); }} />}
    </main>
    <BottomNav view={view} setView={(next) => { if (next !== 'add') setEditingLead(null); setView(next); }} />
  </div>;
}

function Header() { return <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-slate-950 px-5 pb-7 pt-6 text-white">
  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-100">Synergy4Life</p>
  <h1 className="mt-2 text-3xl font-black leading-tight">Lead Command Center</h1>
  <p className="mt-2 text-sm text-blue-100">Mobile CRM for tracking credit, funding, and coaching opportunities.</p>
</section>; }

function Dashboard({ stats, leads, setView }) { const upcoming = [...leads].filter((lead) => lead.nextFollowUpDate).sort((a,b) => a.nextFollowUpDate.localeCompare(b.nextFollowUpDate)).slice(0,3); return <section className="space-y-5 px-4 py-5">
  <div className="grid grid-cols-2 gap-3">
    <Stat icon={(props) => <Icon glyph="👥" {...props} />} label="Total Leads" value={stats.total} /> <Stat icon={(props) => <Icon glyph="📅" {...props} />} label="Active Follow-Ups" value={stats.followUps} />
    <Stat icon={(props) => <Icon glyph="💵" {...props} />} label="Pipeline" value={money(stats.pipeline)} /> <Stat icon={(props) => <Icon glyph="📊" {...props} />} label="Closed Won" value={stats.won} />
  </div>
  <button onClick={() => setView('add')} className="w-full rounded-2xl bg-blue-700 px-5 py-4 font-bold text-white shadow-lg shadow-blue-700/25">+ Add New Lead</button>
  <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200"><h2 className="text-lg font-black">Next Follow-Ups</h2><div className="mt-3 space-y-3">{upcoming.map((lead) => <LeadMini key={lead.id} lead={lead} />)}{!upcoming.length && <p className="text-sm text-slate-500">No follow-ups scheduled yet.</p>}</div></div>
</section>; }

function Stat({ icon: IconComponent, label, value }) { return <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200"><IconComponent className="h-5 w-5 text-blue-700" /><p className="mt-3 text-2xl font-black">{value}</p><p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p></div>; }
function LeadMini({ lead }) { return <div className="rounded-2xl bg-slate-100 p-3"><p className="font-bold">{lead.name}</p><p className="text-sm text-slate-600">{lead.nextFollowUpDate} • {lead.status}</p></div>; }

function LeadList(props) { return <section className="space-y-4 px-4 py-5">
  <div className="relative"><Icon glyph="🔎" className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" /><input value={props.query} onChange={(e) => props.setQuery(e.target.value)} placeholder="Search name, phone, email, notes..." className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none focus:border-blue-600" /></div>
  <div className="grid grid-cols-2 gap-3"><Select label="Status" value={props.statusFilter} onChange={props.setStatusFilter} options={['All', ...statusOptions]} /><Select label="Service" value={props.serviceFilter} onChange={props.setServiceFilter} options={['All', ...serviceOptions]} /></div>
  <p className="text-sm font-bold text-slate-600">{props.leads.length} lead{props.leads.length === 1 ? '' : 's'} found</p>
  <div className="space-y-4">{props.leads.map((lead) => <LeadCard key={lead.id} lead={lead} onEdit={props.onEdit} onDelete={props.onDelete} />)}{!props.leads.length && <div className="rounded-3xl bg-white p-6 text-center text-slate-500 shadow-sm">No leads match your search or filters.</div>}</div>
</section>; }

function Select({ label, value, onChange, options }) { return <label className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}<select value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-900 outline-none focus:border-blue-600">{options.map((option) => <option key={option}>{option}</option>)}</select></label>; }

function LeadCard({ lead, onEdit, onDelete }) { return <article className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200"><div className="flex items-start justify-between gap-3"><div><h3 className="text-xl font-black">{lead.name}</h3><p className="text-sm text-slate-600">{lead.phone}</p><p className="text-sm text-slate-600">{lead.email}</p></div><span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-800">{lead.status}</span></div><div className="mt-4 grid grid-cols-2 gap-3 text-sm"><Info label="Service" value={lead.serviceInterest} /><Info label="Source" value={lead.leadSource} /><Info label="Follow-Up" value={lead.nextFollowUpDate || 'Not set'} /><Info label="Value" value={money(lead.revenueValue)} /></div><p className="mt-3 rounded-2xl bg-slate-100 p-3 text-sm text-slate-700"><b>Goal:</b> {lead.creditGoal}</p>{lead.notes && <p className="mt-2 text-sm text-slate-600"><b>Notes:</b> {lead.notes}</p>}<div className="mt-4 flex gap-2"><button onClick={() => onEdit(lead)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-950 py-3 font-bold text-white"><Icon glyph="✏️" className="h-4 w-4" />Edit</button><button onClick={() => onDelete(lead.id)} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-50 py-3 font-bold text-red-700"><Icon glyph="🗑️" className="h-4 w-4" />Delete</button></div></article>; }
function Info({ label, value }) { return <div><p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p><p className="font-bold text-slate-800">{value}</p></div>; }

function LeadForm({ initialLead, onSave, onCancel }) { const [form, setForm] = useState(initialLead); const update = (key, value) => setForm((current) => ({ ...current, [key]: value })); return <form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="space-y-4 px-4 py-5"><h2 className="text-2xl font-black">{form.id ? 'Edit Lead' : 'Add Lead'}</h2><Field label="Name" value={form.name} onChange={(v) => update('name', v)} required /><Field label="Phone" value={form.phone} onChange={(v) => update('phone', v)} required /><Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} /><Field label="Lead Source" value={form.leadSource} onChange={(v) => update('leadSource', v)} /><Field label="Credit Goal" value={form.creditGoal} onChange={(v) => update('creditGoal', v)} /><Select label="Service Interest" value={form.serviceInterest} onChange={(v) => update('serviceInterest', v)} options={serviceOptions} /><Select label="Status" value={form.status} onChange={(v) => update('status', v)} options={statusOptions} /><Field label="Next Follow-Up Date" type="date" value={form.nextFollowUpDate} onChange={(v) => update('nextFollowUpDate', v)} /><Field label="Revenue Value" type="number" value={form.revenueValue} onChange={(v) => update('revenueValue', v)} /><label className="text-xs font-bold uppercase tracking-wide text-slate-500">Notes<textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} rows="4" className="mt-1 w-full rounded-2xl border border-slate-200 bg-white p-3 text-base text-slate-900 outline-none focus:border-blue-600" /></label><div className="flex gap-3"><button type="button" onClick={onCancel} className="flex-1 rounded-2xl border border-slate-300 py-3 font-bold">Cancel</button><button className="flex-1 rounded-2xl bg-blue-700 py-3 font-bold text-white">Save Lead</button></div></form>; }
function Field({ label, value, onChange, type = 'text', required = false }) { return <label className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}<input type={type} value={value} required={required} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full rounded-2xl border border-slate-200 bg-white p-3 text-base text-slate-900 outline-none focus:border-blue-600" /></label>; }

function BottomNav({ view, setView }) { const items = [{ id: 'dashboard', label: 'Dashboard', icon: (props) => <Icon glyph="🏠" {...props} /> }, { id: 'leads', label: 'Leads', icon: (props) => <Icon glyph="👥" {...props} /> }, { id: 'add', label: 'Add Lead', icon: (props) => <Icon glyph="＋" {...props} /> }]; return <nav className="fixed inset-x-0 bottom-0 z-10 mx-auto max-w-md border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur"><div className="grid grid-cols-3 gap-2">{items.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => setView(id)} className={`rounded-2xl px-2 py-2 text-xs font-black ${view === id ? 'bg-blue-700 text-white' : 'text-slate-500'}`}><Icon className="mx-auto mb-1 h-5 w-5" />{label}</button>)}</div></nav>; }

createRoot(document.getElementById('root')).render(<App />);
