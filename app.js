const CONVERSATIONS_KEY = 'synergy4life.groupConversations';
const LEADS_KEY = 'synergy4life.leads';

const fields = [
  'platform', 'groupName', 'personName', 'painPoint', 'publicReply', 'ctaUsed',
  'leadTemperature', 'followUpNeeded', 'followUpDate', 'dmSent', 'status', 'notes', 'reference'
];

const form = document.querySelector('#conversation-form');
const conversationList = document.querySelector('#conversation-list');
const leadList = document.querySelector('#lead-list');
const conversationCount = document.querySelector('#conversation-count');
const leadCount = document.querySelector('#lead-count');

const readStore = (key) => JSON.parse(localStorage.getItem(key) || '[]');
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const formatDate = (value) => value ? new Date(`${value}T00:00:00`).toLocaleDateString() : 'Not set';
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

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
  conversationCount.textContent = `${conversations.length} conversation${conversations.length === 1 ? '' : 's'}`;
  leadCount.textContent = `${leads.length} lead${leads.length === 1 ? '' : 's'}`;
  conversationList.innerHTML = '';
  leadList.innerHTML = '';

  if (!conversations.length) conversationList.innerHTML = '<p class="empty-message">No group conversations yet. Add your first tracked reply above.</p>';
  conversations.forEach((conversation) => conversationList.append(renderConversationCard(conversation)));

  if (!leads.length) leadList.innerHTML = '<p class="empty-message">No converted leads yet. Convert a group conversation to start your pipeline.</p>';
  leads.forEach((lead) => leadList.append(renderLeadCard(lead)));
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
  });
});

form.addEventListener('submit', saveConversation);
document.querySelector('#reset-form').addEventListener('click', resetForm);
render();
