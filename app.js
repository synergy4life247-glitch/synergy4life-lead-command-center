const CONVERSATIONS_KEY = 'synergy4life.groupConversations';
const LEADS_KEY = 'synergy4life.leads';
const CLIENTS_KEY = 'synergy4life.clients';

const fields = [
  'platform', 'groupName', 'personName', 'painPoint', 'publicReply', 'ctaUsed',
  'leadTemperature', 'followUpNeeded', 'followUpDate', 'dmSent', 'status', 'notes', 'reference'
];

const clientFields = [
  'fullName', 'phone', 'email', 'currentScore', 'goalScore', 'clientGoal',
  'enrollmentDate', 'initialFee', 'monthlyFee', 'paymentStatus', 'creditMonitoringProvider',
  'lastDisputeSent', 'nextFollowUpDate', 'currentRound', 'assignedTeamMember',
  'mortgageReady', 'realtorClient', 'clientNotes'
];
const clientGoalOptions = ['Home', 'Auto', 'Business Funding', 'Personal Credit'];
const paymentStatusOptions = ['Current', 'Past Due', 'Paid in Full', 'Paused'];

const form = document.querySelector('#conversation-form');
const conversationList = document.querySelector('#conversation-list');
const leadList = document.querySelector('#lead-list');
const conversationCount = document.querySelector('#conversation-count');
const leadCount = document.querySelector('#lead-count');
const clientForm = document.querySelector('#client-form');
const clientList = document.querySelector('#client-list');
const clientCount = document.querySelector('#client-count');
const clientSearch = document.querySelector('#client-search');
const goalFilter = document.querySelector('#goal-filter');
const paymentFilter = document.querySelector('#payment-filter');
const teamFilter = document.querySelector('#team-filter');

const readStore = (key) => JSON.parse(localStorage.getItem(key) || '[]');
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const formatDate = (value) => value ? new Date(`${value}T00:00:00`).toLocaleDateString() : 'Not set';
const formatCurrency = (value) => Number(value || 0).toLocaleString(undefined, { style: 'currency', currency: 'USD' });
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);


function getClientFormData() {
  return clientFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetClientForm() {
  clientForm.reset();
  document.querySelector('#client-id').value = '';
  document.querySelector('#clientGoal').value = 'Home';
  document.querySelector('#paymentStatus').value = 'Current';
  document.querySelector('#mortgageReady').value = 'No';
  document.querySelector('#realtorClient').value = 'No';
}

function saveClient(event) {
  event.preventDefault();
  const clients = readStore(CLIENTS_KEY);
  const id = document.querySelector('#client-id').value || crypto.randomUUID();
  const existing = clients.findIndex((client) => client.id === id);
  const record = {
    id,
    ...getClientFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? clients[existing].createdAt : new Date().toISOString(),
  };

  if (existing >= 0) clients[existing] = record;
  else clients.unshift(record);

  writeStore(CLIENTS_KEY, clients);
  resetClientForm();
  render();
}

function editClient(id) {
  const client = readStore(CLIENTS_KEY).find((item) => item.id === id);
  if (!client) return;
  document.querySelector('#client-id').value = client.id;
  clientFields.forEach((field) => {
    document.querySelector(`#${field}`).value = client[field] || '';
  });
  clientForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteClient(id) {
  writeStore(CLIENTS_KEY, readStore(CLIENTS_KEY).filter((item) => item.id !== id));
  render();
}

function updateFilterOptions(clients) {
  const setOptions = (select, values, allLabel) => {
    const current = select.value;
    select.innerHTML = `<option value="">${allLabel}</option>` + values
      .filter(Boolean)
      .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
      .join('');
    select.value = values.includes(current) ? current : '';
  };
  setOptions(goalFilter, clientGoalOptions, 'All goals');
  setOptions(paymentFilter, paymentStatusOptions, 'All statuses');
  setOptions(teamFilter, [...new Set(clients.map((client) => client.assignedTeamMember).filter(Boolean))].sort(), 'All team members');
}

function getFilteredClients(clients) {
  const query = clientSearch.value.trim().toLowerCase();
  return clients.filter((client) => {
    const searchable = [client.fullName, client.phone, client.email, client.clientNotes, client.assignedTeamMember].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!goalFilter.value || client.clientGoal === goalFilter.value)
      && (!paymentFilter.value || client.paymentStatus === paymentFilter.value)
      && (!teamFilter.value || client.assignedTeamMember === teamFilter.value);
  });
}

function renderClientMetrics(clients) {
  document.querySelector('#metric-active-clients').textContent = clients.length;
  document.querySelector('#metric-mrr').textContent = formatCurrency(clients.reduce((sum, client) => sum + Number(client.monthlyFee || 0), 0));
  document.querySelector('#metric-initial-fees').textContent = formatCurrency(clients.reduce((sum, client) => sum + Number(client.initialFee || 0), 0));
  document.querySelector('#metric-round-1').textContent = clients.filter((client) => Number(client.currentRound) === 1).length;
  document.querySelector('#metric-round-2').textContent = clients.filter((client) => Number(client.currentRound) === 2).length;
  document.querySelector('#metric-mortgage-ready').textContent = clients.filter((client) => client.mortgageReady === 'Yes').length;
}

function renderClientCard(client) {
  const card = document.createElement('article');
  card.className = 'card client-card';
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(client.clientGoal || 'Goal')}</span><span class="badge">${escapeHtml(client.paymentStatus || 'Payment')}</span></div>
    <h3>${escapeHtml(client.fullName || 'Unnamed client')}</h3>
    <p class="group">${escapeHtml(client.phone || 'No phone')} • ${escapeHtml(client.email || 'No email')}</p>
    <dl>
      ${detail('Current / Goal Score', `${client.currentScore || '—'} / ${client.goalScore || '—'}`)}
      ${detail('Enrollment Date', formatDate(client.enrollmentDate))}
      ${detail('Initial Fee', formatCurrency(client.initialFee))}
      ${detail('Monthly Fee', formatCurrency(client.monthlyFee))}
      ${detail('Credit Monitoring Provider', client.creditMonitoringProvider)}
      ${detail('Last Dispute Sent', formatDate(client.lastDisputeSent))}
      ${detail('Next Follow-Up Date', formatDate(client.nextFollowUpDate))}
      ${detail('Current Round', client.currentRound)}
      ${detail('Assigned Team Member', client.assignedTeamMember)}
      ${detail('Mortgage Ready', client.mortgageReady)}
      ${detail('Realtor Client', client.realtorClient)}
      ${detail('Notes', client.clientNotes)}
    </dl>
    <div class="card-actions">
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.edit').addEventListener('click', () => editClient(client.id));
  card.querySelector('.delete').addEventListener('click', () => deleteClient(client.id));
  return card;
}

function getFormData() {
  return fields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetForm() {
  form.reset();
  document.querySelector('#conversation-id').value = '';
  document.querySelector('#leadTemperature').value = 'Warm';
  document.querySelector('#followUpNeeded').value = 'Yes';
  document.querySelector('#dmSent').value = 'No';
  document.querySelector('#status').value = 'New';
}

function saveConversation(event) {
  event.preventDefault();
  const conversations = readStore(CONVERSATIONS_KEY);
  const id = document.querySelector('#conversation-id').value || crypto.randomUUID();
  const existing = conversations.findIndex((conversation) => conversation.id === id);
  const record = {
    id,
    ...getFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? conversations[existing].createdAt : new Date().toISOString(),
  };

  if (existing >= 0) conversations[existing] = record;
  else conversations.unshift(record);

  writeStore(CONVERSATIONS_KEY, conversations);
  resetForm();
  render();
}

function editConversation(id) {
  const conversation = readStore(CONVERSATIONS_KEY).find((item) => item.id === id);
  if (!conversation) return;
  document.querySelector('#conversation-id').value = conversation.id;
  fields.forEach((field) => {
    document.querySelector(`#${field}`).value = conversation[field] || '';
  });
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteConversation(id) {
  writeStore(CONVERSATIONS_KEY, readStore(CONVERSATIONS_KEY).filter((item) => item.id !== id));
  render();
}

function convertToLead(id) {
  const conversations = readStore(CONVERSATIONS_KEY);
  const conversation = conversations.find((item) => item.id === id);
  if (!conversation) return;

  const leads = readStore(LEADS_KEY);
  const alreadyConverted = leads.some((lead) => lead.sourceConversationId === id);
  if (!alreadyConverted) {
    leads.unshift({
      id: crypto.randomUUID(),
      sourceConversationId: id,
      name: conversation.personName,
      source: `${conversation.platform} - ${conversation.groupName}`,
      painPoint: conversation.painPoint,
      temperature: conversation.leadTemperature,
      followUpDate: conversation.followUpDate,
      status: 'New lead',
      notes: conversation.notes,
      createdAt: new Date().toISOString(),
    });
    writeStore(LEADS_KEY, leads);
  }

  const updated = conversations.map((item) => item.id === id ? { ...item, status: 'Converted to lead', dmSent: 'Yes' } : item);
  writeStore(CONVERSATIONS_KEY, updated);
  render();
  document.querySelector('[data-tab="leads"]').click();
}

function detail(label, value) {
  return `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value || '—')}</dd></div>`;
}

function renderConversationCard(conversation) {
  const template = document.querySelector('#conversation-card-template');
  const card = template.content.cloneNode(true);
  card.querySelector('.platform').textContent = conversation.platform || 'Platform';
  card.querySelector('.temperature').textContent = conversation.leadTemperature || 'Warm';
  card.querySelector('.person').textContent = conversation.personName || 'Unnamed person';
  card.querySelector('.group').textContent = conversation.groupName || 'No group name';
  card.querySelector('dl').innerHTML = [
    detail('Question/Pain Point', conversation.painPoint),
    detail('My Public Reply', conversation.publicReply),
    detail('CTA Used', conversation.ctaUsed),
    detail('Follow-Up Needed', conversation.followUpNeeded),
    detail('Follow-Up Date', formatDate(conversation.followUpDate)),
    detail('DM Sent', conversation.dmSent),
    detail('Status', conversation.status),
    detail('Notes', conversation.notes),
    detail('Screenshot/Link Reference', conversation.reference),
  ].join('');
  card.querySelector('.convert').addEventListener('click', () => convertToLead(conversation.id));
  card.querySelector('.edit').addEventListener('click', () => editConversation(conversation.id));
  card.querySelector('.delete').addEventListener('click', () => deleteConversation(conversation.id));
  return card;
}

function renderLeadCard(lead) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(lead.temperature || 'Warm')}</span><span class="badge">${escapeHtml(lead.status || 'New lead')}</span></div>
    <h3>${escapeHtml(lead.name || 'Unnamed lead')}</h3>
    <p class="group">${escapeHtml(lead.source || 'Group conversation')}</p>
    <dl>
      ${detail('Pain Point', lead.painPoint)}
      ${detail('Follow-Up Date', formatDate(lead.followUpDate))}
      ${detail('Notes', lead.notes)}
    </dl>`;
  return card;
}

function render() {
  const conversations = readStore(CONVERSATIONS_KEY);
  const leads = readStore(LEADS_KEY);
  const clients = readStore(CLIENTS_KEY);
  conversationCount.textContent = `${conversations.length} conversation${conversations.length === 1 ? '' : 's'}`;
  leadCount.textContent = `${leads.length} lead${leads.length === 1 ? '' : 's'}`;
  clientCount.textContent = `${clients.length} client${clients.length === 1 ? '' : 's'}`;
  updateFilterOptions(clients);
  renderClientMetrics(clients);
  conversationList.innerHTML = '';
  leadList.innerHTML = '';
  clientList.innerHTML = '';

  if (!conversations.length) conversationList.innerHTML = '<p class="empty-message">No group conversations yet. Add your first tracked reply above.</p>';
  conversations.forEach((conversation) => conversationList.append(renderConversationCard(conversation)));

  if (!leads.length) leadList.innerHTML = '<p class="empty-message">No converted leads yet. Convert a group conversation to start your pipeline.</p>';
  leads.forEach((lead) => leadList.append(renderLeadCard(lead)));

  const filteredClients = getFilteredClients(clients);
  if (!filteredClients.length) clientList.innerHTML = '<p class="empty-message">No clients match your current view. Add a client or adjust your filters.</p>';
  filteredClients.forEach((client) => clientList.append(renderClientCard(client))); 
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
  });
});

form.addEventListener('submit', saveConversation);
clientForm.addEventListener('submit', saveClient);
document.querySelector('#reset-form').addEventListener('click', resetForm);
document.querySelector('#reset-client-form').addEventListener('click', resetClientForm);
clientSearch.addEventListener('input', render);
[goalFilter, paymentFilter, teamFilter].forEach((control) => control.addEventListener('change', render));
render();
