const CONVERSATIONS_KEY = 'synergy4life.groupConversations';
const LEADS_KEY = 'synergy4life.leads';
const CLIENTS_KEY = 'synergy4life.clients';
const PIPELINE_KEY = 'synergy4life.pipeline';
const PIPELINE_DELETED_KEY = 'synergy4life.pipeline.deletedSourceLeads';
const CREDIT_FILES_KEY = 'synergy4life.creditFiles';

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
const pipelineStages = ['New Lead', 'Contacted', 'Credit Analysis Sent', 'Follow Up', 'Enrolled', 'Active Client', 'Lost Lead'];
const creditGoalOptions = ['Mortgage', 'Auto', 'Personal', 'Business'];
const creditStatusOptions = ['Active', 'Awaiting Documents', 'In Dispute', 'Escalated', 'Complete', 'Paused'];
const disputeStageOptions = ['Round 1', 'Round 2', 'Round 3', 'CFPB', 'Attorney Escalation'];
const creditFileFields = [
  'creditClientName', 'creditEmail', 'creditPhone', 'creditGoal', 'scoreEq', 'scoreEx', 'scoreTu',
  'creditTargetScore', 'creditEnrollmentDate', 'creditStatus', 'disputeStage', 'creditFollowUpDate',
  'creditMortgageReady', 'negativeAccounts', 'inquiries', 'latePayments', 'collections',
  'chargeOffs', 'repossessions', 'bankruptcy', 'disputeRoundNotes'
];
const pipelineFields = ['pipelineName', 'pipelinePhone', 'pipelineEmail', 'pipelineSource', 'pipelineStage', 'pipelineValue', 'pipelineNotes'];

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
const pipelineForm = document.querySelector('#pipeline-form');
const pipelineBoard = document.querySelector('#pipeline-board');
const pipelineCount = document.querySelector('#pipeline-count');
const pipelineSearch = document.querySelector('#pipeline-search');
const pipelineStageFilter = document.querySelector('#pipeline-stage-filter');
const pipelineSourceFilter = document.querySelector('#pipeline-source-filter');
const creditFileForm = document.querySelector('#credit-file-form');
const creditFileList = document.querySelector('#credit-file-list');
const creditFileCount = document.querySelector('#credit-file-count');
const creditFileSearch = document.querySelector('#credit-file-search');
const creditGoalFilter = document.querySelector('#credit-goal-filter');
const creditStatusFilter = document.querySelector('#credit-status-filter');
const creditStageFilter = document.querySelector('#credit-stage-filter');
const creditMortgageFilter = document.querySelector('#credit-mortgage-filter');

const readStore = (key) => JSON.parse(localStorage.getItem(key) || '[]');
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const formatDate = (value) => value ? new Date(`${value}T00:00:00`).toLocaleDateString() : 'Not set';
const formatCurrency = (value) => Number(value || 0).toLocaleString(undefined, { style: 'currency', currency: 'USD' });
const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);


function seedSelect(select, values, allLabel = '') {
  select.innerHTML = (allLabel ? `<option value="">${allLabel}</option>` : '') + values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join('');
}

function getPipelineFormData() {
  return pipelineFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function normalizePipelineLead(lead) {
  return {
    id: lead.id || crypto.randomUUID(),
    pipelineName: lead.pipelineName || lead.name || 'Unnamed lead',
    pipelinePhone: lead.pipelinePhone || lead.phone || '',
    pipelineEmail: lead.pipelineEmail || lead.email || '',
    pipelineSource: lead.pipelineSource || lead.source || 'Converted lead',
    pipelineStage: pipelineStages.includes(lead.pipelineStage) ? lead.pipelineStage : 'New Lead',
    pipelineValue: lead.pipelineValue || lead.value || '',
    pipelineNotes: lead.pipelineNotes || lead.notes || lead.painPoint || '',
    createdAt: lead.createdAt || new Date().toISOString(),
    updatedAt: lead.updatedAt || new Date().toISOString(),
    sourceLeadId: lead.sourceLeadId,
  };
}

function getPipelineLeads() {
  const pipeline = readStore(PIPELINE_KEY).map(normalizePipelineLead);
  const convertedLeads = readStore(LEADS_KEY);
  const deletedSourceLeads = readStore(PIPELINE_DELETED_KEY);
  let changed = false;
  convertedLeads.forEach((lead) => {
    if (!deletedSourceLeads.includes(lead.id) && !pipeline.some((item) => item.sourceLeadId === lead.id)) {
      pipeline.unshift({ ...normalizePipelineLead(lead), id: crypto.randomUUID(), sourceLeadId: lead.id });
      changed = true;
    }
  });
  if (changed) writeStore(PIPELINE_KEY, pipeline);
  return pipeline;
}

function resetPipelineForm() {
  pipelineForm.reset();
  document.querySelector('#pipeline-id').value = '';
  document.querySelector('#pipelineStage').value = 'New Lead';
}

function savePipelineLead(event) {
  event.preventDefault();
  const pipeline = getPipelineLeads();
  const id = document.querySelector('#pipeline-id').value || crypto.randomUUID();
  const existing = pipeline.findIndex((lead) => lead.id === id);
  const record = {
    id,
    ...getPipelineFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? pipeline[existing].createdAt : new Date().toISOString(),
  };
  if (existing >= 0) pipeline[existing] = record;
  else pipeline.unshift(record);
  writeStore(PIPELINE_KEY, pipeline);
  resetPipelineForm();
  render();
}

function editPipelineLead(id) {
  const lead = getPipelineLeads().find((item) => item.id === id);
  if (!lead) return;
  document.querySelector('#pipeline-id').value = lead.id;
  pipelineFields.forEach((field) => {
    document.querySelector(`#${field}`).value = lead[field] || '';
  });
  document.querySelector('[data-tab="pipeline"]').click();
  pipelineForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deletePipelineLead(id) {
  const lead = getPipelineLeads().find((item) => item.id === id);
  if (lead?.sourceLeadId) {
    writeStore(PIPELINE_DELETED_KEY, [...new Set([...readStore(PIPELINE_DELETED_KEY), lead.sourceLeadId])]);
  }
  writeStore(PIPELINE_KEY, getPipelineLeads().filter((item) => item.id !== id));
  render();
}

function movePipelineLead(id, stage) {
  const pipeline = getPipelineLeads().map((lead) => lead.id === id ? { ...lead, pipelineStage: stage, updatedAt: new Date().toISOString() } : lead);
  writeStore(PIPELINE_KEY, pipeline);
  render();
}

function getFilteredPipelineLeads(leads) {
  const query = pipelineSearch.value.trim().toLowerCase();
  const source = pipelineSourceFilter.value.trim().toLowerCase();
  return leads.filter((lead) => {
    const searchable = [lead.pipelineName, lead.pipelinePhone, lead.pipelineEmail, lead.pipelineSource, lead.pipelineNotes].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!pipelineStageFilter.value || lead.pipelineStage === pipelineStageFilter.value)
      && (!source || (lead.pipelineSource || '').toLowerCase().includes(source));
  });
}

function renderPipelineMetrics(leads) {
  document.querySelector('#metric-pipeline-leads').textContent = leads.length;
  document.querySelector('#metric-enrolled-value').textContent = formatCurrency(leads
    .filter((lead) => ['Enrolled', 'Active Client'].includes(lead.pipelineStage))
    .reduce((sum, lead) => sum + Number(lead.pipelineValue || 0), 0));
  document.querySelector('#metric-pipeline-active').textContent = leads.filter((lead) => lead.pipelineStage === 'Active Client').length;
}

function renderPipelineCard(lead) {
  const card = document.createElement('article');
  card.className = 'card pipeline-card';
  card.draggable = true;
  card.dataset.id = lead.id;
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(lead.pipelineStage)}</span><span class="badge">${formatCurrency(lead.pipelineValue)}</span></div>
    <h3>${escapeHtml(lead.pipelineName || 'Unnamed lead')}</h3>
    <p class="group">${escapeHtml(lead.pipelinePhone || 'No phone')} • ${escapeHtml(lead.pipelineEmail || 'No email')}<br>${escapeHtml(lead.pipelineSource || 'No source')}</p>
    <dl>${detail('Notes', lead.pipelineNotes)}</dl>
    <label class="stage-move-label">Move to stage<select class="stage-move">${pipelineStages.map((stage) => `<option value="${escapeHtml(stage)}" ${stage === lead.pipelineStage ? 'selected' : ''}>${escapeHtml(stage)}</option>`).join('')}</select></label>
    <div class="card-actions">
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', lead.id);
    card.classList.add('dragging');
  });
  card.addEventListener('dragend', () => card.classList.remove('dragging'));
  card.querySelector('.stage-move').addEventListener('change', (event) => movePipelineLead(lead.id, event.target.value));
  card.querySelector('.edit').addEventListener('click', () => editPipelineLead(lead.id));
  card.querySelector('.delete').addEventListener('click', () => deletePipelineLead(lead.id));
  return card;
}

function renderPipelineBoard(leads) {
  pipelineBoard.innerHTML = '';
  const filtered = getFilteredPipelineLeads(leads);
  pipelineStages.forEach((stage) => {
    const stageLeads = filtered.filter((lead) => lead.pipelineStage === stage);
    const column = document.createElement('section');
    column.className = 'pipeline-column';
    column.dataset.stage = stage;
    column.innerHTML = `<div class="pipeline-column-header"><h3>${escapeHtml(stage)}</h3><span class="count-pill">${stageLeads.length}</span></div>`;
    column.addEventListener('dragover', (event) => { event.preventDefault(); column.classList.add('drag-over'); });
    column.addEventListener('dragleave', () => column.classList.remove('drag-over'));
    column.addEventListener('drop', (event) => {
      event.preventDefault();
      column.classList.remove('drag-over');
      const id = event.dataTransfer.getData('text/plain');
      if (id) movePipelineLead(id, stage);
    });
    if (!stageLeads.length) column.insertAdjacentHTML('beforeend', '<p class="pipeline-empty">Drop leads here</p>');
    stageLeads.forEach((lead) => column.append(renderPipelineCard(lead)));
    pipelineBoard.append(column);
  });
}

function getCreditFileFormData() {
  return creditFileFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetCreditFileForm() {
  creditFileForm.reset();
  document.querySelector('#credit-file-id').value = '';
  document.querySelector('#creditGoal').value = 'Mortgage';
  document.querySelector('#creditStatus').value = 'Active';
  document.querySelector('#disputeStage').value = 'Round 1';
  document.querySelector('#creditMortgageReady').value = 'No';
}

function saveCreditFile(event) {
  event.preventDefault();
  const creditFiles = readStore(CREDIT_FILES_KEY);
  const id = document.querySelector('#credit-file-id').value || crypto.randomUUID();
  const existing = creditFiles.findIndex((file) => file.id === id);
  const record = {
    id,
    ...getCreditFileFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? creditFiles[existing].createdAt : new Date().toISOString(),
  };

  if (existing >= 0) creditFiles[existing] = record;
  else creditFiles.unshift(record);

  writeStore(CREDIT_FILES_KEY, creditFiles);
  resetCreditFileForm();
  render();
}

function editCreditFile(id) {
  const creditFile = readStore(CREDIT_FILES_KEY).find((item) => item.id === id);
  if (!creditFile) return;
  document.querySelector('#credit-file-id').value = creditFile.id;
  creditFileFields.forEach((field) => {
    document.querySelector(`#${field}`).value = creditFile[field] || '';
  });
  document.querySelector('[data-tab="credit-files"]').click();
  creditFileForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteCreditFile(id) {
  writeStore(CREDIT_FILES_KEY, readStore(CREDIT_FILES_KEY).filter((item) => item.id !== id));
  render();
}

function getFilteredCreditFiles(creditFiles) {
  const query = creditFileSearch.value.trim().toLowerCase();
  return creditFiles.filter((file) => {
    const searchable = [
      file.creditClientName, file.creditEmail, file.creditPhone, file.negativeAccounts,
      file.inquiries, file.latePayments, file.collections, file.chargeOffs,
      file.repossessions, file.bankruptcy, file.disputeRoundNotes
    ].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!creditGoalFilter.value || file.creditGoal === creditGoalFilter.value)
      && (!creditStatusFilter.value || file.creditStatus === creditStatusFilter.value)
      && (!creditStageFilter.value || file.disputeStage === creditStageFilter.value)
      && (!creditMortgageFilter.value || file.creditMortgageReady === creditMortgageFilter.value);
  });
}

function renderCreditFileMetrics(creditFiles) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  document.querySelector('#metric-credit-active').textContent = creditFiles.filter((file) => file.creditStatus !== 'Complete').length;
  document.querySelector('#metric-credit-mortgage-ready').textContent = creditFiles.filter((file) => file.creditMortgageReady === 'Yes').length;
  document.querySelector('#metric-credit-follow-ups').textContent = creditFiles.filter((file) => {
    if (!file.creditFollowUpDate) return false;
    return new Date(`${file.creditFollowUpDate}T00:00:00`) <= today;
  }).length;
}

function renderCreditFileCard(file) {
  const card = document.createElement('article');
  card.className = 'card credit-file-card';
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge">${escapeHtml(file.creditGoal || 'Goal')}</span>
      <span class="badge">${escapeHtml(file.creditStatus || 'Status')}</span>
      <span class="badge">${escapeHtml(file.disputeStage || 'Round 1')}</span>
      <span class="badge ${file.creditMortgageReady === 'Yes' ? 'success-badge' : ''}">Mortgage Ready: ${escapeHtml(file.creditMortgageReady || 'No')}</span>
    </div>
    <h3>${escapeHtml(file.creditClientName || 'Unnamed client')}</h3>
    <p class="group">${escapeHtml(file.creditPhone || 'No phone')} • ${escapeHtml(file.creditEmail || 'No email')}</p>
    <dl>
      ${detail('Current Scores (EQ / EX / TU)', `${file.scoreEq || '—'} / ${file.scoreEx || '—'} / ${file.scoreTu || '—'}`)}
      ${detail('Target Score', file.creditTargetScore)}
      ${detail('Enrollment Date', formatDate(file.creditEnrollmentDate))}
      ${detail('Follow-Up Date', formatDate(file.creditFollowUpDate))}
      ${detail('Negative Accounts', file.negativeAccounts)}
      ${detail('Inquiries', file.inquiries)}
      ${detail('Late Payments', file.latePayments)}
      ${detail('Collections', file.collections)}
      ${detail('Charge Offs', file.chargeOffs)}
      ${detail('Repossessions', file.repossessions)}
      ${detail('Bankruptcy', file.bankruptcy)}
      ${detail('Dispute Round Notes', file.disputeRoundNotes)}
    </dl>
    <div class="card-actions">
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.edit').addEventListener('click', () => editCreditFile(file.id));
  card.querySelector('.delete').addEventListener('click', () => deleteCreditFile(file.id));
  return card;
}

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
      phone: '',
      email: '',
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
  const pipelineLeads = getPipelineLeads();
  const creditFiles = readStore(CREDIT_FILES_KEY);
  conversationCount.textContent = `${conversations.length} conversation${conversations.length === 1 ? '' : 's'}`;
  leadCount.textContent = `${leads.length} lead${leads.length === 1 ? '' : 's'}`;
  clientCount.textContent = `${clients.length} client${clients.length === 1 ? '' : 's'}`;
  pipelineCount.textContent = `${pipelineLeads.length} lead${pipelineLeads.length === 1 ? '' : 's'}`;
  creditFileCount.textContent = `${creditFiles.length} file${creditFiles.length === 1 ? '' : 's'}`;
  updateFilterOptions(clients);
  renderClientMetrics(clients);
  renderPipelineMetrics(pipelineLeads);
  renderCreditFileMetrics(creditFiles);
  conversationList.innerHTML = '';
  leadList.innerHTML = '';
  clientList.innerHTML = '';
  creditFileList.innerHTML = '';
  renderPipelineBoard(pipelineLeads);

  if (!conversations.length) conversationList.innerHTML = '<p class="empty-message">No group conversations yet. Add your first tracked reply above.</p>';
  conversations.forEach((conversation) => conversationList.append(renderConversationCard(conversation)));

  if (!leads.length) leadList.innerHTML = '<p class="empty-message">No converted leads yet. Convert a group conversation to start your pipeline.</p>';
  leads.forEach((lead) => leadList.append(renderLeadCard(lead)));

  const filteredClients = getFilteredClients(clients);
  if (!filteredClients.length) clientList.innerHTML = '<p class="empty-message">No clients match your current view. Add a client or adjust your filters.</p>';
  filteredClients.forEach((client) => clientList.append(renderClientCard(client)));

  const filteredCreditFiles = getFilteredCreditFiles(creditFiles);
  if (!filteredCreditFiles.length) creditFileList.innerHTML = '<p class="empty-message">No credit files match your current view. Add a credit repair client or adjust your filters.</p>';
  filteredCreditFiles.forEach((file) => creditFileList.append(renderCreditFileCard(file)));
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
  });
});

seedSelect(document.querySelector('#pipelineStage'), pipelineStages);
seedSelect(pipelineStageFilter, pipelineStages, 'All stages');
seedSelect(creditGoalFilter, creditGoalOptions, 'All goals');
seedSelect(creditStatusFilter, creditStatusOptions, 'All statuses');
seedSelect(creditStageFilter, disputeStageOptions, 'All stages');

form.addEventListener('submit', saveConversation);
clientForm.addEventListener('submit', saveClient);
pipelineForm.addEventListener('submit', savePipelineLead);
creditFileForm.addEventListener('submit', saveCreditFile);
document.querySelector('#reset-form').addEventListener('click', resetForm);
document.querySelector('#reset-client-form').addEventListener('click', resetClientForm);
document.querySelector('#reset-pipeline-form').addEventListener('click', resetPipelineForm);
document.querySelector('#reset-credit-file-form').addEventListener('click', resetCreditFileForm);
clientSearch.addEventListener('input', render);
pipelineSearch.addEventListener('input', render);
pipelineSourceFilter.addEventListener('input', render);
pipelineStageFilter.addEventListener('change', render);
creditFileSearch.addEventListener('input', render);
[creditGoalFilter, creditStatusFilter, creditStageFilter, creditMortgageFilter].forEach((control) => control.addEventListener('change', render));
[goalFilter, paymentFilter, teamFilter].forEach((control) => control.addEventListener('change', render));
render();
