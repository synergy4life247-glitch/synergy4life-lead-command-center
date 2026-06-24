const CONVERSATIONS_KEY = 'synergy4life.groupConversations';
const LEADS_KEY = 'synergy4life.leads';
const CLIENTS_KEY = 'synergy4life.clients';
const PIPELINE_KEY = 'synergy4life.pipeline';
const PIPELINE_DELETED_KEY = 'synergy4life.pipeline.deletedSourceLeads';
const CREDIT_FILES_KEY = 'synergy4life.creditFiles';
const TASKS_KEY = 'synergy4life.tasks';
const MORTGAGE_READINESS_KEY = 'synergy4life.mortgageReadiness';
const CREDIT_INTELLIGENCE_KEY = 'synergy4life.creditIntelligence';
const DASHBOARD_KEY = 'synergy4life.dashboard';
const DOCUMENTS_KEY = 'synergy4life.documents';
const COMMUNICATIONS_KEY = 'synergy4life.communications';
const REVENUE_CENTER_KEY = 'synergy4life.revenueCenter';
const TEAM_KEY = 'synergy4life.teamMembers';
const CONTENT_KEY = 'synergy4life.contentCenter';
const AUTOMATIONS_KEY = 'synergy4life.automations';
const ONBOARDING_KEY = 'synergy4life.onboarding';
const DISPUTES_KEY = 'synergy4life.disputeCenter';

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
const creditIntelligenceFields = [
  'ciClientName', 'ciGoalType', 'ciEquifaxScore', 'ciExperianScore', 'ciTransUnionScore',
  'ciOpenRevolving', 'ciOpenInstallment', 'ciAutoLoanPresent', 'ciMortgageHistoryPresent',
  'ciAuthorizedUserPresent', 'ciAverageAge', 'ciUtilization', 'ciTotalInquiries',
  'ciRecentLatePayments', 'ciCollectionCount', 'ciChargeOffCount', 'ciRepoCount', 'ciBankruptcyPresent'
];
const pipelineFields = ['pipelineName', 'pipelinePhone', 'pipelineEmail', 'pipelineSource', 'pipelineStage', 'pipelineValue', 'pipelineNotes'];
const mortgageLoanTypes = ['FHA', 'VA', 'USDA', 'Conventional'];
const mortgageReadinessFields = [
  'mortgageClientName', 'mortgageScoreEq', 'mortgageScoreEx', 'mortgageScoreTu', 'desiredLoanType',
  'targetPurchasePrice', 'estimatedIncome', 'currentMonthlyDebt', 'downPaymentAvailable',
  'bankruptcyHistory', 'foreclosureHistory', 'latePayments24Months', 'utilizationPercentage',
  'totalActiveTradelines', 'openInstallmentLoans', 'openRevolvingAccounts', 'collectionCount', 'chargeOffCount'
];
const taskFields = ['taskTitle', 'taskPerson', 'taskSource', 'taskType', 'taskDueDate', 'taskPriority', 'taskStatus', 'taskNotes'];
const taskSourceOptions = ['Leads', 'Clients', 'Group Conversations', 'Pipeline Items', 'Credit Files'];
const taskTypeOptions = ['Call', 'Text', 'Email', 'Follow-Up', 'Dispute Round', 'Credit File Review', 'Mortgage Check-In', 'Real Estate Follow-Up', 'Skool Follow-Up', 'Payment Follow-Up'];
const taskPriorityOptions = ['Low', 'Medium', 'High', 'Urgent'];
const taskStatusOptions = ['Pending', 'Completed', 'Overdue'];
const documentCategories = ['ID', 'Social Security Card', 'Utility Bill', 'Credit Report', 'Dispute Letter', 'Bureau Response', 'CFPB Complaint', 'FTC Complaint', 'Attorney Letter', 'Mortgage Documents', 'Income Documents', 'Closing Documents', 'Other'];
const documentStatusOptions = ['Pending Review', 'Reviewed', 'Sent', 'Archived'];
const documentFields = ['documentClientName', 'documentName', 'documentCategory', 'documentUploadDate', 'documentStatus', 'documentNotes'];
const communicationContactTypes = ['Lead', 'Client', 'Mentee', 'Realtor Lead', 'Business Partner', 'Backend Client', 'Skool Member'];
const communicationTypes = ['Call', 'Text', 'Email', 'Facebook Messenger', 'Instagram DM', 'Skool Message', 'Zoom', 'In Person'];
const communicationOutcomes = ['No Answer', 'Left Voicemail', 'Follow Up Needed', 'Appointment Set', 'Enrolled', 'Closed', 'Not Interested'];
const communicationFields = ['communicationContactName', 'communicationContactType', 'communicationType', 'communicationDateTime', 'communicationSubject', 'communicationNotes', 'communicationOutcome', 'communicationFollowUpDate'];
const revenueTypeOptions = ['Credit Repair Enrollment', 'Monthly Program Payment', 'Mentorship', 'Backend Service', 'Real Estate Commission', 'Course Sales', 'Skool Membership', 'Affiliate Income', 'Other'];
const expenseCategoryOptions = ['Marketing', 'Software', 'VA Payroll', 'Office Expense', 'Business Travel', 'Education', 'Advertising', 'Other'];
const incomeFields = ['incomeDate', 'incomeClientName', 'incomeRevenueType', 'incomeAmount', 'incomePaymentMethod', 'incomeNotes'];
const expenseFields = ['expenseDate', 'expenseCategory', 'expenseAmount', 'expenseVendor', 'expenseNotes'];
const teamRoleOptions = ['Virtual Assistant', 'Dispute Processor', 'Sales Representative', 'Moderator', 'Admin', 'Realtor Partner', 'Backend Processor', 'Mentor', 'Other'];
const teamStatusOptions = ['Active', 'Inactive', 'Training', 'On Leave'];
const teamPayTypeOptions = ['Hourly', 'Salary', 'Per File', 'Commission', 'Contractor'];
const contentPlatformOptions = ['Facebook', 'Instagram', 'TikTok', 'YouTube', 'Skool', 'LinkedIn', 'Email', 'Other'];
const contentTypeOptions = ['Educational Post', 'Reel', 'Story', 'Group Reply', 'Skool Post', 'Testimonial', 'Promo', 'Live Training', 'Builder Tour', 'Credit Tip'];
const contentCtaOptions = ['Comment START', 'Comment AUDIT', 'Comment SKOOL', 'Book Call', 'DM Me', 'Join Skool', 'Enroll', 'Mentorship', 'Credit Repair', 'Real Estate'];
const contentStatusOptions = ['Idea', 'Drafting', 'Ready', 'Scheduled', 'Posted', 'Repurpose', 'Archived'];
const contentFields = ['contentTitle', 'contentPlatform', 'contentType', 'contentTopic', 'contentAudience', 'contentHook', 'contentDraft', 'contentCta', 'contentStatus', 'contentScheduledDate', 'contentPostedDate', 'contentPerformanceNotes'];
const teamFields = ['teamFullName', 'teamRole', 'teamEmail', 'teamPhone', 'teamStartDate', 'teamStatus', 'teamPayType', 'teamPayRate', 'teamNotes', 'teamFilesCompleted', 'teamLeadsContacted', 'teamSalesClosed', 'teamTasksCompleted', 'teamLastActivityDate'];
const automationCategoryOptions = ['Lead Follow-Up', 'Client Follow-Up', 'Credit Repair Cycle', 'Mortgage Check-In', 'Real Estate Lead Nurture', 'Skool Engagement', 'Content Posting', 'Team Reminder', 'Billing Reminder', 'Custom'];
const automationFrequencyOptions = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Custom'];
const automationPriorityOptions = ['Low', 'Medium', 'High', 'Critical'];
const automationStatusOptions = ['Active', 'Paused', 'Completed', 'Overdue'];
const onboardingServiceOptions = ['Credit Repair', 'Mentorship', 'Backend Solutions', 'Realtor Buyer', 'Realtor Seller', 'Business Credit', 'Consultation', 'Other'];
const onboardingStatusOptions = ['New Enrollment', 'Waiting Documents', 'Documents Received', 'Analysis Pending', 'Ready For Round 1', 'Active Client', 'Completed'];
const onboardingChecklistFields = ['agreementSigned', 'invoicePaid', 'identityIqReceived', 'creditReportReceived', 'driverLicenseReceived', 'proofOfAddressReceived', 'portalSetupCompleted', 'welcomeEmailSent', 'initialAnalysisCompleted', 'round1Started'];
const onboardingFields = ['onboardingClientName', 'onboardingEmail', 'onboardingPhone', 'onboardingService', 'onboardingStatus', 'onboardingEnrollmentDate', 'onboardingAssignedTeamMember', ...onboardingChecklistFields, 'onboardingNotes'];
const disputeLetterTypes = ['Round 1 Factual', 'Round 2 Factual', 'Round 3 Escalation', 'Method of Verification', 'CFPB Complaint', 'FTC Complaint', 'Creditor Direct Dispute', 'Late Payment Dispute', 'Collection Dispute', 'Charge-Off Dispute', 'Bankruptcy Dispute', 'Repo Dispute', 'Identity Theft', 'Personal Information', 'Attorney Escalation'];
const disputeBureauOptions = ['Equifax', 'Experian', 'TransUnion', 'Creditor', 'Collector', 'CFPB', 'FTC', 'Attorney'];
const disputeStatusOptions = ['Draft', 'Ready To Send', 'Sent', 'Waiting Response', 'Verified', 'Deleted', 'Escalated', 'Attorney Review', 'Completed'];
const disputeResultOptions = ['Pending', 'Deleted', 'Updated', 'Verified', 'No Response', 'Reinserted'];
const disputeFields = ['disputeClientName', 'disputeCreditor', 'disputeBureau', 'disputeAccountType', 'disputeReason', 'disputeLetterType', 'disputeDateSent', 'disputeResponseDueDate', 'disputeStatus', 'disputeResult', 'disputeAssignedTeamMember', 'disputeNotes'];
const automationFields = ['automationName', 'automationCategory', 'automationDescription', 'automationAssignedTeamMember', 'automationTriggerDate', 'automationFrequency', 'automationLastCompleted', 'automationNextDueDate', 'automationStatus', 'automationPriority', 'automationNotes'];

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
const creditIntelligenceForm = document.querySelector('#credit-intelligence-form');
const creditIntelligenceList = document.querySelector('#credit-intelligence-list');
const creditIntelligenceCount = document.querySelector('#credit-intelligence-count');
const creditIntelligencePreview = document.querySelector('#credit-intelligence-preview');
const mortgageReadinessForm = document.querySelector('#mortgage-readiness-form');
const mortgageReadinessList = document.querySelector('#mortgage-readiness-list');
const mortgageReadinessCount = document.querySelector('#mortgage-readiness-count');
const mortgageReadinessPreview = document.querySelector('#mortgage-readiness-preview');
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const overdueTaskList = document.querySelector('#overdue-task-list');
const taskCount = document.querySelector('#task-count');
const taskSearch = document.querySelector('#task-search');
const taskStatusFilter = document.querySelector('#task-status-filter');
const taskPriorityFilter = document.querySelector('#task-priority-filter');
const taskSourceFilter = document.querySelector('#task-source-filter');
const dashboardSections = document.querySelector('#dashboard-sections');
const activityFeed = document.querySelector('#activity-feed');
const dashboardUpdated = document.querySelector('#dashboard-updated');
const documentForm = document.querySelector('#document-form');
const documentList = document.querySelector('#document-list');
const documentCount = document.querySelector('#document-count');
const documentSearch = document.querySelector('#document-search');
const documentCategoryFilter = document.querySelector('#document-category-filter');
const documentClientFilter = document.querySelector('#document-client-filter');
const documentClientCounts = document.querySelector('#document-client-counts');
const communicationForm = document.querySelector('#communication-form');
const communicationList = document.querySelector('#communication-list');
const communicationCount = document.querySelector('#communication-count');
const communicationSearch = document.querySelector('#communication-search');
const communicationContactFilter = document.querySelector('#communication-contact-filter');
const communicationTypeFilter = document.querySelector('#communication-type-filter');
const communicationOutcomeFilter = document.querySelector('#communication-outcome-filter');
const communicationDateFilter = document.querySelector('#communication-date-filter');
const incomeForm = document.querySelector('#income-form');
const expenseForm = document.querySelector('#expense-form');
const revenueTransactionCount = document.querySelector('#revenue-transaction-count');
const revenueTransactionList = document.querySelector('#revenue-transaction-list');
const revenueSearch = document.querySelector('#revenue-search');
const revenueKindFilter = document.querySelector('#revenue-kind-filter');
const revenueCategoryFilter = document.querySelector('#revenue-category-filter');
const revenueStartFilter = document.querySelector('#revenue-start-filter');
const revenueEndFilter = document.querySelector('#revenue-end-filter');
const teamForm = document.querySelector('#team-form');
const teamList = document.querySelector('#team-list');
const teamCount = document.querySelector('#team-count');
const teamSearch = document.querySelector('#team-search');
const teamRoleFilter = document.querySelector('#team-role-filter');
const teamStatusFilter = document.querySelector('#team-status-filter');
const teamRankings = document.querySelector('#team-rankings');
const contentForm = document.querySelector('#content-form');
const contentList = document.querySelector('#content-list');
const contentCount = document.querySelector('#content-count');
const contentSearch = document.querySelector('#content-search');
const contentPlatformFilter = document.querySelector('#content-platform-filter');
const contentTypeFilter = document.querySelector('#content-type-filter');
const contentCtaFilter = document.querySelector('#content-cta-filter');
const contentStatusFilter = document.querySelector('#content-status-filter');
const contentCalendar = document.querySelector('#content-calendar');
const contentIdeaBank = document.querySelector('#content-idea-bank');
const automationForm = document.querySelector('#automation-form');
const automationList = document.querySelector('#automation-list');
const automationCount = document.querySelector('#automation-count');
const automationSearch = document.querySelector('#automation-search');
const automationCategoryFilter = document.querySelector('#automation-category-filter');
const automationStatusFilter = document.querySelector('#automation-status-filter');
const automationPriorityFilter = document.querySelector('#automation-priority-filter');
const onboardingForm = document.querySelector('#onboarding-form');
const onboardingList = document.querySelector('#onboarding-list');
const onboardingCount = document.querySelector('#onboarding-count');
const onboardingSearch = document.querySelector('#onboarding-search');
const onboardingStatusFilter = document.querySelector('#onboarding-status-filter');
const onboardingServiceFilter = document.querySelector('#onboarding-service-filter');
const onboardingTeamFilter = document.querySelector('#onboarding-team-filter');
const disputeForm = document.querySelector('#dispute-form');
const disputeList = document.querySelector('#dispute-list');
const disputeCount = document.querySelector('#dispute-count');
const disputeSearch = document.querySelector('#dispute-search');
const disputeBureauFilter = document.querySelector('#dispute-bureau-filter');
const disputeCreditorFilter = document.querySelector('#dispute-creditor-filter');
const disputeStatusFilter = document.querySelector('#dispute-status-filter');
const disputeResultFilter = document.querySelector('#dispute-result-filter');

const readStore = (key) => JSON.parse(localStorage.getItem(key) || '[]');
const writeStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const formatDate = (value) => value ? new Date(`${value}T00:00:00`).toLocaleDateString() : 'Not set';
const formatCurrency = (value) => Number(value || 0).toLocaleString(undefined, { style: 'currency', currency: 'USD' });
const todayDateString = () => new Date().toISOString().slice(0, 10);
const asNumber = (value) => Number(value || 0);
const average = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
const formatPercent = (value) => `${Math.round(value)}%`;
const isTaskOverdue = (task) => task.taskStatus !== 'Completed' && task.taskDueDate && task.taskDueDate < todayDateString();
const isFollowUpDue = (value) => value && value <= todayDateString();
const formatDateTime = (value) => value ? new Date(value).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }) : 'Not set';

const isThisMonth = (value) => {
  if (!value) return false;
  const date = new Date(value);
  const now = new Date();
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
};
const daysUntil = (value) => value ? Math.ceil((new Date(`${value}T00:00:00`) - new Date(`${todayDateString()}T00:00:00`)) / 86400000) : null;

const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);


function seedSelect(select, values, allLabel = '') {
  select.innerHTML = (allLabel ? `<option value="">${allLabel}</option>` : '') + values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join('');
}






function normalizeAutomation(automation) {
  return {
    ...automation,
    automationStatus: automation.automationStatus !== 'Completed' && automation.automationNextDueDate && automation.automationNextDueDate < todayDateString()
      ? 'Overdue'
      : (automation.automationStatus || 'Active'),
  };
}

function getAutomations() {
  const automations = readStore(AUTOMATIONS_KEY).map(normalizeAutomation);
  writeStore(AUTOMATIONS_KEY, automations);
  return automations;
}

function getAutomationFormData() {
  return automationFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetAutomationForm() {
  automationForm.reset();
  document.querySelector('#automation-id').value = '';
  document.querySelector('#automationCategory').value = 'Lead Follow-Up';
  document.querySelector('#automationFrequency').value = 'Weekly';
  document.querySelector('#automationStatus').value = 'Active';
  document.querySelector('#automationPriority').value = 'Medium';
}

function saveAutomation(event) {
  event.preventDefault();
  const automations = getAutomations();
  const id = document.querySelector('#automation-id').value || crypto.randomUUID();
  const existing = automations.findIndex((item) => item.id === id);
  const record = normalizeAutomation({
    id,
    ...getAutomationFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? automations[existing].createdAt : new Date().toISOString(),
  });
  if (existing >= 0) automations[existing] = record;
  else automations.unshift(record);
  writeStore(AUTOMATIONS_KEY, automations);
  resetAutomationForm();
  render();
}

function editAutomation(id) {
  const automation = getAutomations().find((item) => item.id === id);
  if (!automation) return;
  document.querySelector('#automation-id').value = automation.id;
  automationFields.forEach((field) => { document.querySelector(`#${field}`).value = automation[field] || ''; });
  document.querySelector('[data-tab="automations"]').click();
  automationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteAutomation(id) {
  writeStore(AUTOMATIONS_KEY, getAutomations().filter((item) => item.id !== id));
  render();
}

function markAutomationComplete(id) {
  const automations = getAutomations().map((item) => item.id === id ? { ...item, automationStatus: 'Completed', automationLastCompleted: todayDateString(), updatedAt: new Date().toISOString() } : item);
  writeStore(AUTOMATIONS_KEY, automations);
  render();
}

function getFilteredAutomations(automations) {
  const query = automationSearch.value.trim().toLowerCase();
  return automations.filter((item) => {
    const haystack = automationFields.map((field) => item[field]).join(' ').toLowerCase();
    return (!query || haystack.includes(query))
      && (!automationCategoryFilter.value || item.automationCategory === automationCategoryFilter.value)
      && (!automationStatusFilter.value || item.automationStatus === automationStatusFilter.value)
      && (!automationPriorityFilter.value || item.automationPriority === automationPriorityFilter.value);
  }).sort((a, b) => new Date(`${a.automationNextDueDate || '9999-12-31'}T00:00:00`) - new Date(`${b.automationNextDueDate || '9999-12-31'}T00:00:00`));
}

function renderAutomationMetrics(automations) {
  const today = todayDateString();
  document.querySelector('#metric-automation-active').textContent = automations.filter((item) => item.automationStatus === 'Active').length;
  document.querySelector('#metric-automation-due-today').textContent = automations.filter((item) => item.automationNextDueDate === today && item.automationStatus !== 'Completed').length;
  document.querySelector('#metric-automation-overdue').textContent = automations.filter((item) => item.automationStatus === 'Overdue').length;
  document.querySelector('#metric-automation-completed-month').textContent = automations.filter((item) => item.automationStatus === 'Completed' && isThisMonth(item.automationLastCompleted || item.updatedAt)).length;
}

function renderAutomationCard(automation) {
  const card = document.createElement('article');
  card.className = `card automation-card ${automation.automationStatus === 'Overdue' ? 'task-overdue automation-overdue' : ''}`;
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge">${escapeHtml(automation.automationStatus || 'Active')}</span>
      <span class="badge priority-${escapeHtml((automation.automationPriority || 'medium').toLowerCase())}">${escapeHtml(automation.automationPriority || 'Medium')}</span>
      <span class="badge">${escapeHtml(automation.automationCategory || 'Custom')}</span>
    </div>
    <h3>${escapeHtml(automation.automationName || 'Untitled automation')}</h3>
    <p class="group">${escapeHtml(automation.automationAssignedTeamMember || 'Unassigned')} • ${escapeHtml(automation.automationFrequency || 'Custom')}</p>
    <dl>
      ${detail('Next Due Date', formatDate(automation.automationNextDueDate))}
      ${detail('Trigger Date', formatDate(automation.automationTriggerDate))}
      ${detail('Last Completed', formatDate(automation.automationLastCompleted))}
      ${detail('Description', automation.automationDescription)}
      ${detail('Notes', automation.automationNotes)}
    </dl>
    <div class="card-actions">
      <button class="complete primary" type="button" ${automation.automationStatus === 'Completed' ? 'disabled' : ''}>Mark Complete</button>
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.complete').addEventListener('click', () => markAutomationComplete(automation.id));
  card.querySelector('.edit').addEventListener('click', () => editAutomation(automation.id));
  card.querySelector('.delete').addEventListener('click', () => deleteAutomation(automation.id));
  return card;
}

function getContentItems() {
  const items = readStore(CONTENT_KEY);
  return Array.isArray(items) ? items : [];
}

function getContentFormData() {
  return contentFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetContentForm() {
  contentForm.reset();
  document.querySelector('#content-id').value = '';
  document.querySelector('#contentPlatform').value = 'Facebook';
  document.querySelector('#contentType').value = 'Educational Post';
  document.querySelector('#contentCta').value = 'Comment START';
  document.querySelector('#contentStatus').value = 'Idea';
}

function saveContent(event) {
  event.preventDefault();
  const items = getContentItems();
  const id = document.querySelector('#content-id').value || crypto.randomUUID();
  const existing = items.findIndex((item) => item.id === id);
  const record = { id, ...getContentFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? items[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) items[existing] = record;
  else items.unshift(record);
  writeStore(CONTENT_KEY, items);
  resetContentForm();
  render();
}

function editContent(id) {
  const item = getContentItems().find((record) => record.id === id);
  if (!item) return;
  document.querySelector('#content-id').value = item.id;
  contentFields.forEach((field) => { document.querySelector(`#${field}`).value = item[field] || ''; });
  document.querySelector('[data-tab="content"]').click();
  contentForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteContent(id) {
  writeStore(CONTENT_KEY, getContentItems().filter((item) => item.id !== id));
  render();
}

function getFilteredContent(items) {
  const query = contentSearch.value.trim().toLowerCase();
  return items.filter((item) => {
    const haystack = contentFields.map((field) => item[field]).join(' ').toLowerCase();
    return (!query || haystack.includes(query))
      && (!contentPlatformFilter.value || item.contentPlatform === contentPlatformFilter.value)
      && (!contentTypeFilter.value || item.contentType === contentTypeFilter.value)
      && (!contentCtaFilter.value || item.contentCta === contentCtaFilter.value)
      && (!contentStatusFilter.value || item.contentStatus === contentStatusFilter.value);
  }).sort((a, b) => new Date(b.contentScheduledDate || b.contentPostedDate || b.updatedAt || b.createdAt) - new Date(a.contentScheduledDate || a.contentPostedDate || a.updatedAt || a.createdAt));
}

function renderContentMetrics(items) {
  document.querySelector('#metric-content-total').textContent = items.length;
  document.querySelector('#metric-content-ready').textContent = items.filter((item) => ['Ready', 'Scheduled'].includes(item.contentStatus)).length;
  document.querySelector('#metric-content-posted-month').textContent = items.filter((item) => item.contentStatus === 'Posted' && isThisMonth(item.contentPostedDate)).length;
  document.querySelector('#metric-content-ideas').textContent = items.filter((item) => item.contentStatus === 'Idea').length;
}

function renderContentCalendar(items) {
  const scheduled = items.filter((item) => item.contentScheduledDate || item.contentPostedDate)
    .sort((a, b) => new Date(a.contentScheduledDate || a.contentPostedDate) - new Date(b.contentScheduledDate || b.contentPostedDate))
    .slice(0, 12);
  contentCalendar.innerHTML = scheduled.length ? scheduled.map((item) => `
    <article class="calendar-item">
      <time>${formatDate(item.contentScheduledDate || item.contentPostedDate)}</time>
      <div><strong>${escapeHtml(item.contentTitle || 'Untitled content')}</strong><span>${escapeHtml(item.contentPlatform || 'Platform')} • ${escapeHtml(item.contentType || 'Type')} • ${escapeHtml(item.contentStatus || 'Status')}</span></div>
    </article>`).join('') : '<p class="empty-message">No scheduled or posted content yet. Add scheduled dates to build your calendar.</p>';
}

function renderContentCard(item, compact = false) {
  const card = document.createElement('article');
  card.className = `card content-card status-${(item.contentStatus || '').toLowerCase().replace(/\s+/g, '-')}`;
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge">${escapeHtml(item.contentPlatform || 'Platform')}</span>
      <span class="badge">${escapeHtml(item.contentType || 'Type')}</span>
      <span class="badge ${item.contentStatus === 'Posted' ? 'success-badge' : ''}">${escapeHtml(item.contentStatus || 'Status')}</span>
    </div>
    <h3>${escapeHtml(item.contentTitle || 'Untitled content')}</h3>
    <p class="group">${escapeHtml(item.contentTopic || 'No topic')} • ${escapeHtml(item.contentAudience || 'No audience')}</p>
    <dl>
      ${detail('Hook', item.contentHook)}
      ${compact ? '' : detail('Caption/Draft', item.contentDraft)}
      ${detail('CTA', item.contentCta)}
      ${detail('Scheduled Date', formatDate(item.contentScheduledDate))}
      ${detail('Posted Date', formatDate(item.contentPostedDate))}
      ${compact ? '' : detail('Performance Notes', item.contentPerformanceNotes)}
    </dl>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editContent(item.id));
  card.querySelector('.delete').addEventListener('click', () => deleteContent(item.id));
  return card;
}

function getTeamMembers() {
  const members = readStore(TEAM_KEY);
  return Array.isArray(members) ? members : [];
}

function getTeamFormData() {
  return teamFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetTeamForm() {
  teamForm.reset();
  document.querySelector('#team-id').value = '';
  document.querySelector('#teamRole').value = 'Virtual Assistant';
  document.querySelector('#teamStatus').value = 'Active';
  document.querySelector('#teamPayType').value = 'Hourly';
  document.querySelector('#teamLastActivityDate').value = todayDateString();
}

function saveTeamMember(event) {
  event.preventDefault();
  const members = getTeamMembers();
  const id = document.querySelector('#team-id').value || crypto.randomUUID();
  const existing = members.findIndex((member) => member.id === id);
  const record = { id, ...getTeamFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? members[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) members[existing] = record;
  else members.unshift(record);
  writeStore(TEAM_KEY, members);
  resetTeamForm();
  render();
}

function editTeamMember(id) {
  const member = getTeamMembers().find((item) => item.id === id);
  if (!member) return;
  document.querySelector('#team-id').value = member.id;
  teamFields.forEach((field) => { document.querySelector(`#${field}`).value = member[field] || ''; });
  document.querySelector('[data-tab="team"]').click();
  teamForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteTeamMember(id) {
  writeStore(TEAM_KEY, getTeamMembers().filter((member) => member.id !== id));
  render();
}

function teamProductivityScore(member) {
  return asNumber(member.teamFilesCompleted) * 3
    + asNumber(member.teamSalesClosed) * 5
    + asNumber(member.teamTasksCompleted) * 2
    + asNumber(member.teamLeadsContacted);
}

function renderTeamMetrics(members) {
  document.querySelector('#metric-team-total').textContent = members.length;
  document.querySelector('#metric-team-active').textContent = members.filter((member) => member.teamStatus === 'Active').length;
  document.querySelector('#metric-team-files').textContent = members.reduce((sum, member) => sum + asNumber(member.teamFilesCompleted), 0);
  document.querySelector('#metric-team-sales').textContent = members.reduce((sum, member) => sum + asNumber(member.teamSalesClosed), 0);
  document.querySelector('#metric-team-productivity').textContent = members.reduce((sum, member) => sum + teamProductivityScore(member), 0);
}

function getFilteredTeamMembers(members) {
  const query = teamSearch.value.trim().toLowerCase();
  return members.filter((member) => {
    const searchable = [member.teamFullName, member.teamRole, member.teamEmail, member.teamPhone, member.teamStatus, member.teamPayType, member.teamNotes].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!teamRoleFilter.value || member.teamRole === teamRoleFilter.value)
      && (!teamStatusFilter.value || member.teamStatus === teamStatusFilter.value);
  });
}

function renderTeamRankings(members) {
  const ranked = [...members].sort((a, b) => teamProductivityScore(b) - teamProductivityScore(a)).slice(0, 5);
  teamRankings.innerHTML = ranked.length ? ranked.map((member, index) => `
    <article class="chart-row team-ranking-row">
      <span>#${index + 1} ${escapeHtml(member.teamFullName || 'Unnamed team member')} • ${escapeHtml(member.teamRole || 'Role')}</span>
      <strong>${teamProductivityScore(member)}</strong>
    </article>`).join('') : '<p class="empty-message">No productivity rankings yet. Add team activity to see leaders.</p>';
}

function renderTeamCard(member) {
  const card = document.createElement('article');
  card.className = 'card team-card';
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(member.teamRole || 'Role')}</span><span class="badge ${member.teamStatus === 'Active' ? 'success-badge' : ''}">${escapeHtml(member.teamStatus || 'Status')}</span><span class="badge">Score: ${teamProductivityScore(member)}</span></div>
    <h3>${escapeHtml(member.teamFullName || 'Unnamed team member')}</h3>
    <p class="group">${escapeHtml(member.teamEmail || 'No email')} • ${escapeHtml(member.teamPhone || 'No phone')}</p>
    <dl>
      ${detail('Start Date', formatDate(member.teamStartDate))}
      ${detail('Pay', `${member.teamPayType || 'Not set'}${member.teamPayRate ? ` • ${formatCurrency(member.teamPayRate)}` : ''}`)}
      ${detail('Files Completed', member.teamFilesCompleted)}
      ${detail('Leads Contacted', member.teamLeadsContacted)}
      ${detail('Sales Closed', member.teamSalesClosed)}
      ${detail('Tasks Completed', member.teamTasksCompleted)}
      ${detail('Last Activity Date', formatDate(member.teamLastActivityDate))}
      ${detail('Activity Tracking', member.teamLastActivityDate ? `${daysUntil(member.teamLastActivityDate) !== null ? Math.abs(daysUntil(member.teamLastActivityDate)) : 0} day(s) since last activity` : 'No activity date logged')}
      ${detail('Notes', member.teamNotes)}
    </dl>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editTeamMember(member.id));
  card.querySelector('.delete').addEventListener('click', () => deleteTeamMember(member.id));
  return card;
}

function getRevenueRecords() {
  const records = readStore(REVENUE_CENTER_KEY);
  return Array.isArray(records) ? records : [];
}

function getIncomeFormData() {
  return incomeFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function getExpenseFormData() {
  return expenseFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetIncomeForm() {
  incomeForm.reset();
  document.querySelector('#income-id').value = '';
  document.querySelector('#incomeDate').value = todayDateString();
  document.querySelector('#incomeRevenueType').value = revenueTypeOptions[0];
}

function resetExpenseForm() {
  expenseForm.reset();
  document.querySelector('#expense-id').value = '';
  document.querySelector('#expenseDate').value = todayDateString();
  document.querySelector('#expenseCategory').value = expenseCategoryOptions[0];
}

function saveIncome(event) {
  event.preventDefault();
  const records = getRevenueRecords();
  const id = document.querySelector('#income-id').value || crypto.randomUUID();
  const existing = records.findIndex((item) => item.id === id);
  const record = { id, kind: 'income', ...getIncomeFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? records[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) records[existing] = record;
  else records.unshift(record);
  writeStore(REVENUE_CENTER_KEY, records);
  resetIncomeForm();
  render();
}

function saveExpense(event) {
  event.preventDefault();
  const records = getRevenueRecords();
  const id = document.querySelector('#expense-id').value || crypto.randomUUID();
  const existing = records.findIndex((item) => item.id === id);
  const record = { id, kind: 'expense', ...getExpenseFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? records[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) records[existing] = record;
  else records.unshift(record);
  writeStore(REVENUE_CENTER_KEY, records);
  resetExpenseForm();
  render();
}

function editRevenueRecord(id) {
  const record = getRevenueRecords().find((item) => item.id === id);
  if (!record) return;
  document.querySelector('[data-tab="revenue-center"]').click();
  if (record.kind === 'income') {
    document.querySelector('#income-id').value = id;
    incomeFields.forEach((field) => { document.querySelector(`#${field}`).value = record[field] || ''; });
    incomeForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    document.querySelector('#expense-id').value = id;
    expenseFields.forEach((field) => { document.querySelector(`#${field}`).value = record[field] || ''; });
    expenseForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function deleteRevenueRecord(id) {
  writeStore(REVENUE_CENTER_KEY, getRevenueRecords().filter((item) => item.id !== id));
  render();
}

function recordDate(record) {
  return record.kind === 'income' ? record.incomeDate : record.expenseDate;
}

function recordCategory(record) {
  return record.kind === 'income' ? record.incomeRevenueType : record.expenseCategory;
}

function recordAmount(record) {
  return asNumber(record.kind === 'income' ? record.incomeAmount : record.expenseAmount);
}

function getFilteredRevenueRecords(records) {
  const query = revenueSearch.value.trim().toLowerCase();
  return records.filter((record) => {
    const haystack = [...incomeFields, ...expenseFields].map((field) => record[field]).join(' ').toLowerCase();
    const date = recordDate(record);
    return (!query || haystack.includes(query))
      && (!revenueKindFilter.value || record.kind === revenueKindFilter.value)
      && (!revenueCategoryFilter.value || recordCategory(record) === revenueCategoryFilter.value)
      && (!revenueStartFilter.value || date >= revenueStartFilter.value)
      && (!revenueEndFilter.value || date <= revenueEndFilter.value);
  }).sort((a, b) => new Date(recordDate(b) || b.createdAt) - new Date(recordDate(a) || a.createdAt));
}

function updateRevenueCategoryFilter() {
  const selected = revenueCategoryFilter.value;
  seedSelect(revenueCategoryFilter, [...revenueTypeOptions, ...expenseCategoryOptions], 'All categories');
  revenueCategoryFilter.value = selected;
}

function renderBarList(container, rows, emptyText) {
  const max = Math.max(...rows.map((row) => row.value), 0);
  container.innerHTML = rows.length ? rows.map((row) => `
    <div class="chart-row">
      <div class="chart-row-label"><span>${escapeHtml(row.label)}</span><strong>${formatCurrency(row.value)}</strong></div>
      <div class="chart-track"><span style="width: ${max ? Math.max((row.value / max) * 100, 4) : 0}%"></span></div>
    </div>`).join('') : `<p class="empty-message">${emptyText}</p>`;
}

function renderRevenueMetrics(records) {
  const income = records.filter((record) => record.kind === 'income');
  const expenses = records.filter((record) => record.kind === 'expense');
  const totalRevenue = income.reduce((sum, record) => sum + recordAmount(record), 0);
  const monthlyRevenue = income.filter((record) => isThisMonth(record.incomeDate)).reduce((sum, record) => sum + recordAmount(record), 0);
  const totalExpenses = expenses.reduce((sum, record) => sum + recordAmount(record), 0);
  const clients = new Set(income.map((record) => record.incomeClientName).filter(Boolean));
  document.querySelector('#metric-total-revenue').textContent = formatCurrency(totalRevenue);
  document.querySelector('#metric-monthly-revenue').textContent = formatCurrency(monthlyRevenue);
  document.querySelector('#metric-total-expenses').textContent = formatCurrency(totalExpenses);
  document.querySelector('#metric-net-profit').textContent = formatCurrency(totalRevenue - totalExpenses);
  document.querySelector('#metric-average-client-value').textContent = formatCurrency(clients.size ? totalRevenue / clients.size : 0);

  const byService = revenueTypeOptions.map((type) => ({ label: type, value: income.filter((record) => record.incomeRevenueType === type).reduce((sum, record) => sum + recordAmount(record), 0) })).filter((row) => row.value > 0);
  renderBarList(document.querySelector('#revenue-service-chart'), byService, 'No revenue by service type yet.');

  const monthly = {};
  income.forEach((record) => {
    if (!record.incomeDate) return;
    const key = record.incomeDate.slice(0, 7);
    monthly[key] = (monthly[key] || 0) + recordAmount(record);
  });
  const monthRows = Object.entries(monthly).sort(([a], [b]) => b.localeCompare(a)).slice(0, 6).map(([label, value]) => ({ label, value }));
  renderBarList(document.querySelector('#monthly-revenue-report'), monthRows, 'No monthly revenue report yet.');
}

function renderRevenueCard(record) {
  const card = document.createElement('article');
  const isIncome = record.kind === 'income';
  card.className = `card revenue-card ${isIncome ? 'income-card' : 'expense-card'}`;
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge ${isIncome ? 'success-badge' : 'danger-badge'}">${isIncome ? 'Income' : 'Expense'}</span>
      <span class="badge">${escapeHtml(recordCategory(record))}</span>
    </div>
    <h3>${escapeHtml(isIncome ? record.incomeClientName : record.expenseVendor || 'Business expense')}</h3>
    <p class="group">${formatCurrency(recordAmount(record))} • ${formatDate(recordDate(record))}</p>
    <dl>
      ${isIncome ? detail('Payment Method', record.incomePaymentMethod) : detail('Vendor', record.expenseVendor)}
      ${detail('Notes', isIncome ? record.incomeNotes : record.expenseNotes)}
    </dl>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editRevenueRecord(record.id));
  card.querySelector('.delete').addEventListener('click', () => deleteRevenueRecord(record.id));
  return card;
}

function getCommunicationFormData() {
  return communicationFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetCommunicationForm() {
  communicationForm.reset();
  document.querySelector('#communication-id').value = '';
  document.querySelector('#communicationDateTime').value = new Date().toISOString().slice(0, 16);
  document.querySelector('#communicationContactType').value = 'Lead';
  document.querySelector('#communicationType').value = 'Call';
  document.querySelector('#communicationOutcome').value = 'Follow Up Needed';
}

function saveCommunication(event) {
  event.preventDefault();
  const communications = readStore(COMMUNICATIONS_KEY);
  const id = document.querySelector('#communication-id').value || crypto.randomUUID();
  const existing = communications.findIndex((item) => item.id === id);
  const record = { id, ...getCommunicationFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? communications[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) communications[existing] = record;
  else communications.unshift(record);
  writeStore(COMMUNICATIONS_KEY, communications);
  resetCommunicationForm();
  render();
}

function editCommunication(id) {
  const communication = readStore(COMMUNICATIONS_KEY).find((item) => item.id === id);
  if (!communication) return;
  document.querySelector('#communication-id').value = id;
  communicationFields.forEach((field) => { document.querySelector(`#${field}`).value = communication[field] || ''; });
  document.querySelector('[data-tab="communications"]').click();
  communicationForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteCommunication(id) {
  writeStore(COMMUNICATIONS_KEY, readStore(COMMUNICATIONS_KEY).filter((item) => item.id !== id));
  render();
}

function getFilteredCommunications(communications) {
  const query = communicationSearch.value.trim().toLowerCase();
  return communications.filter((item) => {
    const haystack = communicationFields.map((field) => item[field]).join(' ').toLowerCase();
    return (!query || haystack.includes(query))
      && (!communicationContactFilter.value || item.communicationContactType === communicationContactFilter.value)
      && (!communicationTypeFilter.value || item.communicationType === communicationTypeFilter.value)
      && (!communicationOutcomeFilter.value || item.communicationOutcome === communicationOutcomeFilter.value)
      && (!communicationDateFilter.value || (item.communicationDateTime || '').slice(0, 10) === communicationDateFilter.value);
  }).sort((a, b) => new Date(b.communicationDateTime || b.createdAt) - new Date(a.communicationDateTime || a.createdAt));
}

function renderCommunicationMetrics(communications) {
  document.querySelector('#metric-communications-total').textContent = communications.length;
  document.querySelector('#metric-communications-calls-today').textContent = communications.filter((item) => item.communicationType === 'Call' && (item.communicationDateTime || '').slice(0, 10) === todayDateString()).length;
  document.querySelector('#metric-communications-followups').textContent = communications.filter((item) => isFollowUpDue(item.communicationFollowUpDate)).length;
  document.querySelector('#metric-communications-appointments').textContent = communications.filter((item) => item.communicationOutcome === 'Appointment Set').length;
  document.querySelector('#metric-communications-enrollments').textContent = communications.filter((item) => ['Enrolled', 'Closed'].includes(item.communicationOutcome)).length;
}

function renderCommunicationCard(item) {
  const card = document.createElement('article');
  const due = isFollowUpDue(item.communicationFollowUpDate);
  card.className = `card communication-card${due ? ' follow-up-due' : ''}`;
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge">${escapeHtml(item.communicationContactType)}</span>
      <span class="badge">${escapeHtml(item.communicationType)}</span>
      <span class="badge ${due ? 'danger-badge' : ''}">${due ? 'Follow-up due' : escapeHtml(item.communicationOutcome)}</span>
    </div>
    <h3>${escapeHtml(item.communicationContactName)}</h3>
    <p class="group">${escapeHtml(item.communicationSubject)} • ${formatDateTime(item.communicationDateTime)}</p>
    <dl>
      ${detail('Outcome', item.communicationOutcome)}
      ${detail('Next Follow-Up Date', formatDate(item.communicationFollowUpDate))}
      ${detail('Notes', item.communicationNotes)}
    </dl>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editCommunication(item.id));
  card.querySelector('.delete').addEventListener('click', () => deleteCommunication(item.id));
  return card;
}

function getCreditIntelligenceFormData() {
  return creditIntelligenceFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function scoreCategory(score) {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 55) return 'Fair';
  if (score >= 35) return 'Poor';
  return 'Critical';
}

function calculateCreditIntelligence(input = {}) {
  const scores = [input.ciEquifaxScore, input.ciExperianScore, input.ciTransUnionScore].map(asNumber).filter(Boolean);
  const averageScore = Math.round(average(scores));
  const revolving = asNumber(input.ciOpenRevolving);
  const installment = asNumber(input.ciOpenInstallment);
  const totalAccounts = revolving + installment;
  const age = asNumber(input.ciAverageAge);
  const utilization = asNumber(input.ciUtilization);
  const inquiries = asNumber(input.ciTotalInquiries);
  const latePayments = asNumber(input.ciRecentLatePayments);
  const collections = asNumber(input.ciCollectionCount);
  const chargeOffs = asNumber(input.ciChargeOffCount);
  const repos = asNumber(input.ciRepoCount);
  const bankruptcy = input.ciBankruptcyPresent === 'Yes';
  const autoPresent = input.ciAutoLoanPresent === 'Yes';
  const mortgagePresent = input.ciMortgageHistoryPresent === 'Yes';
  const auPresent = input.ciAuthorizedUserPresent === 'Yes';
  const thinFile = totalAccounts < 3 || age < 2 || scores.length < 3;
  const missingRevolving = revolving === 0;
  const missingInstallment = installment === 0;
  const creditMixDeficient = missingRevolving || missingInstallment || (!autoPresent && ['Auto Loan', 'Home Purchase'].includes(input.ciGoalType));
  const highUtilization = utilization > 30;
  const tooManyInquiries = inquiries > 5;
  const recentLateWarning = latePayments > 0;
  const freezeIndicator = scores.length < 3 || averageScore < 350;

  let readinessScore = 40;
  readinessScore += averageScore ? Math.min(30, Math.max(0, (averageScore - 520) / 11)) : -8;
  readinessScore += !thinFile ? 10 : -10;
  readinessScore += !creditMixDeficient ? 8 : -6;
  readinessScore += utilization <= 9 ? 14 : utilization <= 30 ? 8 : utilization <= 50 ? 1 : -12;
  readinessScore += inquiries <= 2 ? 6 : inquiries <= 5 ? 2 : -8;
  readinessScore -= latePayments * 6;
  readinessScore -= collections * 5;
  readinessScore -= chargeOffs * 6;
  readinessScore -= repos * 7;
  readinessScore -= bankruptcy ? 12 : 0;
  readinessScore += age >= 5 ? 5 : age >= 2 ? 2 : 0;
  if (input.ciGoalType === 'Home Purchase' && mortgagePresent && latePayments === 0 && utilization <= 30) readinessScore += 5;
  if (input.ciGoalType === 'Business Funding' && revolving >= 3 && utilization <= 15 && inquiries <= 3) readinessScore += 5;
  readinessScore = Math.max(0, Math.min(100, Math.round(readinessScore)));

  const flags = {
    thinFile, creditMixDeficient, missingRevolving, missingInstallment,
    missingAutoHistory: !autoPresent, missingMortgageHistory: !mortgagePresent,
    highUtilization, tooManyInquiries, recentLateWarning, freezeIndicator,
  };
  const disputes = [];
  if (collections) disputes.push('Validate collection accounts and dispute inaccurate, unverifiable, duplicate, or outdated reporting.');
  if (chargeOffs) disputes.push('Audit charge offs for balance, date, ownership, and bureau-level reporting inconsistencies.');
  if (repos) disputes.push('Review repossessions for notices, deficiency balance accuracy, and bureau inconsistencies.');
  if (latePayments) disputes.push('Target recent late payments with goodwill, factual disputes, and payment-history documentation.');
  if (bankruptcy) disputes.push('Verify bankruptcy public record data and every included account for accurate status and dates.');
  if (tooManyInquiries) disputes.push('Dispute unauthorized or non-permissible inquiries; avoid new applications during the repair window.');
  if (!disputes.length) disputes.push('No major negative categories entered; focus disputes only on inaccurate or unverifiable items.');

  const positiveAccounts = [];
  if (missingRevolving) positiveAccounts.push('Add 1-2 low-fee revolving accounts or secured cards reporting to all three bureaus.');
  else if (revolving < 3) positiveAccounts.push('Add one additional revolving tradeline after utilization is controlled.');
  if (missingInstallment) positiveAccounts.push('Add a small credit-builder installment loan if it fits the client budget.');
  if (!autoPresent && input.ciGoalType === 'Auto Loan') positiveAccounts.push('Build installment strength before applying for auto financing.');
  if (!mortgagePresent && input.ciGoalType === 'Home Purchase') positiveAccounts.push('Compensate for no mortgage history with clean rent verification, low utilization, and stable tradelines.');
  if (!auPresent && thinFile) positiveAccounts.push('Consider a seasoned authorized-user account with perfect payment history and low utilization.');
  if (!positiveAccounts.length) positiveAccounts.push('Maintain existing positive accounts; do not add unnecessary new debt before the goal.');

  const recommendations = [
    `Utilization: ${highUtilization ? 'pay revolving balances below 30% immediately, then target 1-9% for scoring optimization.' : 'keep reported balances between 1-9% and avoid maxed-out cards.'}`,
    `Inquiry strategy: ${tooManyInquiries ? 'pause applications for 60-90 days and challenge unauthorized inquiries.' : 'batch rate-shopping only when necessary and avoid unnecessary hard pulls.'}`,
    `Mortgage readiness: ${input.ciGoalType === 'Home Purchase' ? (readinessScore >= 75 && utilization <= 30 && !recentLateWarning ? 'profile is approaching lender-ready; verify DTI, reserves, and documentation.' : 'prioritize no new lates, utilization under 10%, clean collections, and stable tradelines.') : 'keep mortgage standards in mind if home buying becomes a future goal.'}`,
    `Funding readiness: ${input.ciGoalType === 'Business Funding' ? (readinessScore >= 75 ? 'stronger funding posture; keep inquiries low and utilization under 15%.' : 'build 3+ revolving accounts, low utilization, and a cleaner inquiry profile before funding applications.') : 'for future funding, preserve low utilization and avoid excessive inquiries.'}`,
  ];
  const timeline = readinessScore >= 85 ? '0-30 days' : readinessScore >= 70 ? '30-60 days' : readinessScore >= 55 ? '60-90 days' : readinessScore >= 35 ? '90-180 days' : '180+ days';
  return { averageScore, totalAccounts, readinessScore, status: scoreCategory(readinessScore), flags, disputes, positiveAccounts, recommendations, timeline };
}

function normalizeCreditIntelligence(record) {
  return { ...record, calculated: calculateCreditIntelligence(record) };
}

function resetCreditIntelligenceForm() {
  creditIntelligenceForm.reset();
  document.querySelector('#credit-intelligence-id').value = '';
  document.querySelector('#ciGoalType').value = 'Home Purchase';
  ['ciAutoLoanPresent', 'ciMortgageHistoryPresent', 'ciAuthorizedUserPresent', 'ciBankruptcyPresent'].forEach((field) => document.querySelector(`#${field}`).value = 'No');
  updateCreditIntelligencePreview();
}

function saveCreditIntelligence(event) {
  event.preventDefault();
  const reports = readStore(CREDIT_INTELLIGENCE_KEY);
  const id = document.querySelector('#credit-intelligence-id').value || crypto.randomUUID();
  const existing = reports.findIndex((report) => report.id === id);
  const record = { id, ...getCreditIntelligenceFormData(), updatedAt: new Date().toISOString(), createdAt: existing >= 0 ? reports[existing].createdAt : new Date().toISOString() };
  if (existing >= 0) reports[existing] = record;
  else reports.unshift(record);
  writeStore(CREDIT_INTELLIGENCE_KEY, reports);
  resetCreditIntelligenceForm();
  render();
}

function editCreditIntelligence(id) {
  const report = readStore(CREDIT_INTELLIGENCE_KEY).find((item) => item.id === id);
  if (!report) return;
  document.querySelector('#credit-intelligence-id').value = report.id;
  creditIntelligenceFields.forEach((field) => document.querySelector(`#${field}`).value = report[field] || '');
  updateCreditIntelligencePreview();
  document.querySelector('[data-tab="credit-intelligence"]').click();
  creditIntelligenceForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteCreditIntelligence(id) {
  writeStore(CREDIT_INTELLIGENCE_KEY, readStore(CREDIT_INTELLIGENCE_KEY).filter((item) => item.id !== id));
  render();
}

function renderCreditIntelligenceMetrics(reports) {
  const calculated = reports.map(normalizeCreditIntelligence);
  document.querySelector('#metric-ci-average').textContent = Math.round(average(calculated.map((item) => item.calculated.readinessScore)));
  document.querySelector('#metric-ci-thin').textContent = calculated.filter((item) => item.calculated.flags.thinFile).length;
  document.querySelector('#metric-ci-mortgage-ready').textContent = calculated.filter((item) => item.ciGoalType === 'Home Purchase' && item.calculated.readinessScore >= 75 && !item.calculated.flags.recentLateWarning && !item.calculated.flags.highUtilization).length;
  document.querySelector('#metric-ci-high-risk').textContent = calculated.filter((item) => item.calculated.status === 'Poor' || item.calculated.status === 'Critical').length;
}

function intelligenceList(title, items) {
  return `<div class="intelligence-section"><h4>${escapeHtml(title)}</h4><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>`;
}

function renderCreditIntelligenceCard(item) {
  const report = normalizeCreditIntelligence(item);
  const calc = report.calculated;
  const activeFlags = Object.entries(calc.flags).filter(([, value]) => value).map(([key]) => key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()));
  const card = document.createElement('article');
  card.className = `card credit-intelligence-card status-${calc.status.toLowerCase()}`;
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(report.ciGoalType || 'Goal')}</span><span class="badge">${calc.status}</span><span class="badge">${calc.readinessScore}/100</span></div>
    <h3>${escapeHtml(report.ciClientName || 'Unnamed client')}</h3>
    <div class="readiness-meter"><span style="width:${calc.readinessScore}%"></span></div>
    <p class="group">Average score: ${calc.averageScore || '—'} • Accounts: ${calc.totalAccounts} • Timeline: ${escapeHtml(calc.timeline)}</p>
    <dl>
      ${detail('Current Scores (EQ / EX / TU)', `${report.ciEquifaxScore || '—'} / ${report.ciExperianScore || '—'} / ${report.ciTransUnionScore || '—'}`)}
      ${detail('Detected Analysis Flags', activeFlags.length ? activeFlags.join('\n') : 'No major structural deficiencies detected')}
      ${detail('Estimated Timeline to Goal', calc.timeline)}
    </dl>
    <div class="intelligence-report">
      ${intelligenceList('What should be disputed', calc.disputes)}
      ${intelligenceList('Positive accounts to add', calc.positiveAccounts)}
      ${intelligenceList('Strategic recommendations', calc.recommendations)}
    </div>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editCreditIntelligence(report.id));
  card.querySelector('.delete').addEventListener('click', () => deleteCreditIntelligence(report.id));
  return card;
}

function updateCreditIntelligencePreview() {
  if (!creditIntelligencePreview) return;
  const calc = calculateCreditIntelligence(getCreditIntelligenceFormData());
  creditIntelligencePreview.innerHTML = `
    <article class="preview-card"><span>Readiness Score</span><strong>${calc.readinessScore}/100</strong><div class="readiness-meter"><span style="width:${calc.readinessScore}%"></span></div></article>
    <article class="preview-card"><span>Status</span><strong>${calc.status}</strong></article>
    <article class="preview-card"><span>Thin File</span><strong>${calc.flags.thinFile ? 'Yes' : 'No'}</strong></article>
    <article class="preview-card"><span>Timeline</span><strong>${escapeHtml(calc.timeline)}</strong></article>
    <article class="preview-card recommendations"><span>Dynamic Intelligence Report</span><p>${escapeHtml([...calc.disputes, ...calc.positiveAccounts, ...calc.recommendations].join(' • '))}</p></article>`;
}

function getMortgageReadinessFormData() {
  return mortgageReadinessFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function calculateMortgageReadiness(input = {}) {
  const scores = [input.mortgageScoreEq, input.mortgageScoreEx, input.mortgageScoreTu].map(asNumber).filter(Boolean);
  const averageScore = Math.round(average(scores));
  const income = asNumber(input.estimatedIncome);
  const monthlyIncome = income / 12;
  const monthlyDebt = asNumber(input.currentMonthlyDebt);
  const dti = monthlyIncome ? (monthlyDebt / monthlyIncome) * 100 : 0;
  const purchasePrice = asNumber(input.targetPurchasePrice);
  const downPayment = asNumber(input.downPaymentAvailable);
  const downPaymentPercent = purchasePrice ? (downPayment / purchasePrice) * 100 : 0;
  const utilization = asNumber(input.utilizationPercentage);
  const latePayments = asNumber(input.latePayments24Months);
  const tradelines = asNumber(input.totalActiveTradelines);
  const installments = asNumber(input.openInstallmentLoans);
  const revolving = asNumber(input.openRevolvingAccounts);
  const collections = asNumber(input.collectionCount);
  const chargeOffs = asNumber(input.chargeOffCount);
  const loanMinimums = { FHA: 580, VA: 620, USDA: 640, Conventional: 620 };
  const minimumScore = loanMinimums[input.desiredLoanType] || 620;

  let readinessScore = 30;
  readinessScore += Math.min(30, Math.max(0, (averageScore - 520) / 10));
  readinessScore += dti && dti <= 36 ? 15 : dti <= 43 ? 10 : dti <= 50 ? 4 : -8;
  readinessScore += utilization <= 10 ? 12 : utilization <= 30 ? 7 : utilization <= 50 ? 2 : -8;
  readinessScore += downPaymentPercent >= 5 ? 8 : downPaymentPercent >= 3.5 ? 5 : downPaymentPercent > 0 ? 2 : -5;
  readinessScore += tradelines >= 3 ? 6 : tradelines >= 1 ? 2 : -6;
  readinessScore += installments > 0 && revolving > 0 ? 4 : 0;
  readinessScore -= latePayments * 5;
  readinessScore -= collections * 4;
  readinessScore -= chargeOffs * 4;
  readinessScore -= input.bankruptcyHistory === 'Yes' ? 10 : 0;
  readinessScore -= input.foreclosureHistory === 'Yes' ? 10 : 0;
  readinessScore -= averageScore && averageScore < minimumScore ? 12 : 0;
  readinessScore = Math.max(0, Math.min(100, Math.round(readinessScore)));

  const approvalProbability = Math.max(5, Math.min(98, Math.round((readinessScore * 0.86) + (averageScore >= minimumScore ? 8 : -8))));
  const approvalStatus = readinessScore >= 82 && averageScore >= minimumScore && dti <= 43 && latePayments === 0 ? 'Ready Now'
    : readinessScore >= 68 ? '30-60 Days Away'
    : readinessScore >= 52 ? '60-90 Days Away'
    : '90+ Days Away';
  const recommendations = [];
  if (utilization > 10) recommendations.push('Reduce utilization below 10%');
  if (latePayments > 0) recommendations.push('Remove recent late payments');
  if (revolving < 2) recommendations.push('Add revolving account');
  if (!installments || !revolving) recommendations.push('Improve credit mix');
  if (dti > 43) recommendations.push('Reduce DTI');
  if (purchasePrice && downPaymentPercent < 3.5) recommendations.push('Increase down payment');
  if (tradelines < 3) recommendations.push('Add positive tradelines');
  if (collections > 0) recommendations.push('Resolve or remove collection accounts');
  if (chargeOffs > 0) recommendations.push('Address charge offs before application');
  if (averageScore && averageScore < minimumScore) recommendations.push(`Raise middle score to at least ${minimumScore} for ${input.desiredLoanType || 'selected loan'} guidelines`);
  if (!recommendations.length) recommendations.push('Maintain balances, payments, and documentation through application');

  return { averageScore, dti, downPaymentPercent, readinessScore, approvalProbability, approvalStatus, recommendations };
}

function normalizeMortgageReadiness(record) {
  return { ...record, calculated: calculateMortgageReadiness(record) };
}

function resetMortgageReadinessForm() {
  mortgageReadinessForm.reset();
  document.querySelector('#mortgage-readiness-id').value = '';
  document.querySelector('#desiredLoanType').value = 'FHA';
  document.querySelector('#bankruptcyHistory').value = 'No';
  document.querySelector('#foreclosureHistory').value = 'No';
  updateMortgageReadinessPreview();
}

function saveMortgageReadiness(event) {
  event.preventDefault();
  const evaluations = readStore(MORTGAGE_READINESS_KEY);
  const id = document.querySelector('#mortgage-readiness-id').value || crypto.randomUUID();
  const existing = evaluations.findIndex((item) => item.id === id);
  const record = {
    id,
    ...getMortgageReadinessFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? evaluations[existing].createdAt : new Date().toISOString(),
  };
  if (existing >= 0) evaluations[existing] = record;
  else evaluations.unshift(record);
  writeStore(MORTGAGE_READINESS_KEY, evaluations);
  resetMortgageReadinessForm();
  updateMortgageReadinessPreview();
  render();
}

function editMortgageReadiness(id) {
  const evaluation = readStore(MORTGAGE_READINESS_KEY).find((item) => item.id === id);
  if (!evaluation) return;
  document.querySelector('#mortgage-readiness-id').value = evaluation.id;
  mortgageReadinessFields.forEach((field) => {
    document.querySelector(`#${field}`).value = evaluation[field] || '';
  });
  updateMortgageReadinessPreview();
  document.querySelector('[data-tab="mortgage-ready"]').click();
  mortgageReadinessForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteMortgageReadiness(id) {
  writeStore(MORTGAGE_READINESS_KEY, readStore(MORTGAGE_READINESS_KEY).filter((item) => item.id !== id));
  render();
}

function renderMortgageMetrics(evaluations) {
  const calculated = evaluations.map(normalizeMortgageReadiness);
  document.querySelector('#metric-mri-ready').textContent = calculated.filter((item) => item.calculated.approvalStatus === 'Ready Now').length;
  document.querySelector('#metric-mri-improvement').textContent = calculated.filter((item) => item.calculated.approvalStatus !== 'Ready Now').length;
  document.querySelector('#metric-mri-score').textContent = Math.round(average(calculated.map((item) => item.calculated.averageScore).filter(Boolean)));
  document.querySelector('#metric-mri-dti').textContent = formatPercent(average(calculated.map((item) => item.calculated.dti).filter(Boolean)));
}

function renderMortgageReadinessCard(item) {
  const evaluation = normalizeMortgageReadiness(item);
  const calc = evaluation.calculated;
  const card = document.createElement('article');
  card.className = 'card mortgage-card';
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge ${calc.approvalStatus === 'Ready Now' ? 'success-badge' : ''}">${escapeHtml(calc.approvalStatus)}</span>
      <span class="badge">${escapeHtml(evaluation.desiredLoanType || 'Loan')}</span>
      <span class="badge">${calc.approvalProbability}% probability</span>
    </div>
    <h3>${escapeHtml(evaluation.mortgageClientName || 'Unnamed client')}</h3>
    <p class="group">Target: ${formatCurrency(evaluation.targetPurchasePrice)} • Down payment: ${formatCurrency(evaluation.downPaymentAvailable)}</p>
    <dl>
      ${detail('Current Scores (EQ / EX / TU)', `${evaluation.mortgageScoreEq || '—'} / ${evaluation.mortgageScoreEx || '—'} / ${evaluation.mortgageScoreTu || '—'}`)}
      ${detail('Average Client Score', calc.averageScore)}
      ${detail('Debt-to-Income Ratio', formatPercent(calc.dti))}
      ${detail('Mortgage Readiness Score', `${calc.readinessScore}/100`)}
      ${detail('Approval Probability', `${calc.approvalProbability}%`)}
      ${detail('Recommendations', calc.recommendations.join('\n'))}
    </dl>
    <div class="card-actions">
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.edit').addEventListener('click', () => editMortgageReadiness(evaluation.id));
  card.querySelector('.delete').addEventListener('click', () => deleteMortgageReadiness(evaluation.id));
  return card;
}

function updateMortgageReadinessPreview() {
  if (!mortgageReadinessPreview) return;
  const calc = calculateMortgageReadiness(getMortgageReadinessFormData());
  mortgageReadinessPreview.innerHTML = `
    <article class="preview-card"><span>DTI</span><strong>${formatPercent(calc.dti)}</strong></article>
    <article class="preview-card"><span>Readiness Score</span><strong>${calc.readinessScore}/100</strong></article>
    <article class="preview-card"><span>Approval Probability</span><strong>${calc.approvalProbability}%</strong></article>
    <article class="preview-card"><span>Status</span><strong>${escapeHtml(calc.approvalStatus)}</strong></article>
    <article class="preview-card recommendations"><span>Recommendations</span><p>${escapeHtml(calc.recommendations.join(' • '))}</p></article>`;
}


function getDisputeFormData() {
  return disputeFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function resetDisputeForm() {
  disputeForm.reset();
  document.querySelector('#dispute-id').value = '';
  document.querySelector('#disputeBureau').value = 'Equifax';
  document.querySelector('#disputeLetterType').value = 'Round 1 Factual';
  document.querySelector('#disputeStatus').value = 'Draft';
  document.querySelector('#disputeResult').value = 'Pending';
}

function isDisputeOverdue(dispute) {
  return dispute.disputeResponseDueDate && dispute.disputeResponseDueDate < todayDateString() && !['Deleted', 'Verified', 'Completed'].includes(dispute.disputeStatus || '');
}

function saveDispute(event) {
  event.preventDefault();
  const disputes = readStore(DISPUTES_KEY);
  const id = document.querySelector('#dispute-id').value || crypto.randomUUID();
  const existing = disputes.findIndex((dispute) => dispute.id === id);
  const record = {
    id,
    ...getDisputeFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? disputes[existing].createdAt : new Date().toISOString(),
  };
  if (existing >= 0) disputes[existing] = record;
  else disputes.unshift(record);
  writeStore(DISPUTES_KEY, disputes);
  resetDisputeForm();
  render();
}

function editDispute(id) {
  const dispute = readStore(DISPUTES_KEY).find((item) => item.id === id);
  if (!dispute) return;
  document.querySelector('#dispute-id').value = dispute.id;
  disputeFields.forEach((field) => document.querySelector(`#${field}`).value = dispute[field] || '');
  document.querySelector('[data-tab="dispute-center"]').click();
  disputeForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteDispute(id) {
  writeStore(DISPUTES_KEY, readStore(DISPUTES_KEY).filter((item) => item.id !== id));
  render();
}

function getFilteredDisputes(disputes) {
  const query = disputeSearch.value.trim().toLowerCase();
  const creditor = disputeCreditorFilter.value.trim().toLowerCase();
  return disputes.filter((dispute) => {
    const searchable = disputeFields.map((field) => dispute[field]).join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!disputeBureauFilter.value || dispute.disputeBureau === disputeBureauFilter.value)
      && (!creditor || (dispute.disputeCreditor || '').toLowerCase().includes(creditor))
      && (!disputeStatusFilter.value || dispute.disputeStatus === disputeStatusFilter.value)
      && (!disputeResultFilter.value || dispute.disputeResult === disputeResultFilter.value);
  });
}

function renderDisputeMetrics(disputes) {
  document.querySelector('#metric-dispute-sent').textContent = disputes.filter((dispute) => ['Sent', 'Waiting Response', 'Verified', 'Deleted', 'Escalated', 'Attorney Review', 'Completed'].includes(dispute.disputeStatus)).length;
  document.querySelector('#metric-dispute-pending').textContent = disputes.filter((dispute) => dispute.disputeStatus === 'Waiting Response' || dispute.disputeResult === 'Pending').length;
  document.querySelector('#metric-dispute-verified').textContent = disputes.filter((dispute) => dispute.disputeStatus === 'Verified' || dispute.disputeResult === 'Verified').length;
  document.querySelector('#metric-dispute-deleted').textContent = disputes.filter((dispute) => dispute.disputeStatus === 'Deleted' || dispute.disputeResult === 'Deleted').length;
  document.querySelector('#metric-dispute-escalations').textContent = disputes.filter((dispute) => ['Escalated', 'Attorney Review'].includes(dispute.disputeStatus) || ['Round 3 Escalation', 'Attorney Escalation', 'CFPB Complaint', 'FTC Complaint'].includes(dispute.disputeLetterType)).length;
}

function renderDisputeCard(dispute) {
  const card = document.createElement('article');
  const overdue = isDisputeOverdue(dispute);
  card.className = `card dispute-card${overdue ? ' dispute-overdue' : ''}`;
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(dispute.disputeLetterType || 'Letter')}</span><span class="badge">${escapeHtml(dispute.disputeStatus || 'Draft')}</span><span class="badge">${escapeHtml(dispute.disputeResult || 'Pending')}</span>${overdue ? '<span class="badge danger-badge">Overdue response</span>' : ''}</div>
    <h3>${escapeHtml(dispute.disputeClientName || 'Unnamed client')}</h3>
    <p class="group">${escapeHtml(dispute.disputeCreditor || 'No creditor')} • ${escapeHtml(dispute.disputeBureau || 'No bureau')} • ${escapeHtml(dispute.disputeAccountType || 'No account type')}</p>
    <dl>
      ${detail('Dispute Reason', dispute.disputeReason)}
      ${detail('Date Sent', formatDate(dispute.disputeDateSent))}
      ${detail('Response Due Date', formatDate(dispute.disputeResponseDueDate))}
      ${detail('Assigned Team Member', dispute.disputeAssignedTeamMember)}
      ${detail('Notes', dispute.disputeNotes)}
    </dl>
    <div class="card-actions">
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.edit').addEventListener('click', () => editDispute(dispute.id));
  card.querySelector('.delete').addEventListener('click', () => deleteDispute(dispute.id));
  return card;
}

function getTaskFormData() {
  return taskFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function getDocumentFormData() {
  return documentFields.reduce((data, field) => {
    data[field] = document.querySelector(`#${field}`).value.trim();
    return data;
  }, {});
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function resetDocumentForm() {
  documentForm.reset();
  document.querySelector('#document-id').value = '';
  document.querySelector('#documentUploadDate').value = todayDateString();
  document.querySelector('#documentCategory').value = 'ID';
  document.querySelector('#documentStatus').value = 'Pending Review';
}

async function saveDocument(event) {
  event.preventDefault();
  const documents = readStore(DOCUMENTS_KEY);
  const id = document.querySelector('#document-id').value || crypto.randomUUID();
  const existing = documents.findIndex((document) => document.id === id);
  const file = document.querySelector('#documentFile').files[0];
  const previous = existing >= 0 ? documents[existing] : {};
  const record = {
    id,
    ...getDocumentFormData(),
    fileName: file ? file.name : (previous.fileName || ''),
    fileType: file ? file.type : (previous.fileType || ''),
    fileData: file ? await readFileAsDataUrl(file) : (previous.fileData || ''),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? documents[existing].createdAt : new Date().toISOString(),
  };
  if (existing >= 0) documents[existing] = record;
  else documents.unshift(record);
  writeStore(DOCUMENTS_KEY, documents);
  resetDocumentForm();
  render();
}

function editDocument(id) {
  const documentRecord = readStore(DOCUMENTS_KEY).find((item) => item.id === id);
  if (!documentRecord) return;
  document.querySelector('#document-id').value = documentRecord.id;
  documentFields.forEach((field) => document.querySelector(`#${field}`).value = documentRecord[field] || '');
  document.querySelector('[data-tab="documents"]').click();
  documentForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteDocument(id) {
  writeStore(DOCUMENTS_KEY, readStore(DOCUMENTS_KEY).filter((item) => item.id !== id));
  render();
}

function getFilteredDocuments(documents) {
  const query = documentSearch.value.trim().toLowerCase();
  return documents.filter((documentRecord) => {
    const searchable = [documentRecord.documentClientName, documentRecord.documentName, documentRecord.documentCategory, documentRecord.documentStatus, documentRecord.documentNotes, documentRecord.fileName].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!documentCategoryFilter.value || documentRecord.documentCategory === documentCategoryFilter.value)
      && (!documentClientFilter.value || documentRecord.documentClientName === documentClientFilter.value);
  });
}

function updateDocumentClientFilter(documents) {
  const selected = documentClientFilter.value;
  const clients = [...new Set(documents.map((documentRecord) => documentRecord.documentClientName).filter(Boolean))].sort();
  seedSelect(documentClientFilter, clients, 'All clients');
  documentClientFilter.value = clients.includes(selected) ? selected : '';
}

function renderDocumentMetrics(documents) {
  document.querySelector('#metric-documents-total').textContent = documents.length;
  document.querySelector('#metric-documents-pending').textContent = documents.filter((documentRecord) => documentRecord.documentStatus === 'Pending Review').length;
  document.querySelector('#metric-documents-today').textContent = documents.filter((documentRecord) => documentRecord.documentUploadDate === todayDateString()).length;
  const byCategory = documentCategories.map((category) => `${category}: ${documents.filter((documentRecord) => documentRecord.documentCategory === category).length}`).filter((item) => !item.endsWith(': 0'));
  document.querySelector('#metric-documents-category').textContent = byCategory.length ? byCategory.join(' • ') : '—';
}

function renderDocumentClientCounts(documents) {
  const counts = documents.reduce((totals, documentRecord) => {
    const client = documentRecord.documentClientName || 'Unassigned';
    totals[client] = (totals[client] || 0) + 1;
    return totals;
  }, {});
  documentClientCounts.innerHTML = Object.entries(counts).length ? Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([client, count]) => `<span class="count-pill">${escapeHtml(client)}: ${count}</span>`).join('') : '<p class="empty-message">No client document counts yet.</p>';
}

function renderDocumentCard(documentRecord) {
  const card = document.createElement('article');
  card.className = 'card document-card';
  const hasFile = Boolean(documentRecord.fileData);
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(documentRecord.documentCategory || 'Other')}</span><span class="badge">${escapeHtml(documentRecord.documentStatus || 'Pending Review')}</span></div>
    <h3>${escapeHtml(documentRecord.documentName || 'Untitled document')}</h3>
    <p class="group">${escapeHtml(documentRecord.documentClientName || 'No client')} • ${escapeHtml(documentRecord.fileName || 'No file attached')}</p>
    <dl>
      ${detail('Upload Date', formatDate(documentRecord.documentUploadDate))}
      ${detail('Notes', documentRecord.documentNotes)}
    </dl>
    <div class="document-preview">${hasFile && (documentRecord.fileType || '').startsWith('image/') ? `<img src="${documentRecord.fileData}" alt="Preview of ${escapeHtml(documentRecord.documentName)}" />` : hasFile ? `<iframe title="Preview of ${escapeHtml(documentRecord.documentName)}" src="${documentRecord.fileData}"></iframe>` : '<p class="empty-message">No preview available until a file is uploaded.</p>'}</div>
    <div class="card-actions">
      <a class="button-link primary" href="${hasFile ? documentRecord.fileData : '#'}" download="${escapeHtml(documentRecord.fileName || documentRecord.documentName || 'document')}" ${hasFile ? '' : 'aria-disabled="true"'}>Download</a>
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.edit').addEventListener('click', () => editDocument(documentRecord.id));
  card.querySelector('.delete').addEventListener('click', () => deleteDocument(documentRecord.id));
  return card;
}

function normalizeTask(task) {
  return {
    ...task,
    taskStatus: isTaskOverdue(task) ? 'Overdue' : (task.taskStatus || 'Pending'),
  };
}

function getTasks() {
  const tasks = readStore(TASKS_KEY).map(normalizeTask);
  writeStore(TASKS_KEY, tasks);
  return tasks;
}

function resetTaskForm() {
  taskForm.reset();
  document.querySelector('#task-id').value = '';
  document.querySelector('#taskSource').value = 'Leads';
  document.querySelector('#taskType').value = 'Follow-Up';
  document.querySelector('#taskPriority').value = 'Medium';
  document.querySelector('#taskStatus').value = 'Pending';
}

function saveTask(event) {
  event.preventDefault();
  const tasks = getTasks();
  const id = document.querySelector('#task-id').value || crypto.randomUUID();
  const existing = tasks.findIndex((task) => task.id === id);
  const record = normalizeTask({
    id,
    ...getTaskFormData(),
    updatedAt: new Date().toISOString(),
    createdAt: existing >= 0 ? tasks[existing].createdAt : new Date().toISOString(),
  });
  if (existing >= 0) tasks[existing] = record;
  else tasks.unshift(record);
  writeStore(TASKS_KEY, tasks);
  resetTaskForm();
  render();
}

function editTask(id) {
  const task = getTasks().find((item) => item.id === id);
  if (!task) return;
  document.querySelector('#task-id').value = task.id;
  taskFields.forEach((field) => {
    document.querySelector(`#${field}`).value = task[field] || '';
  });
  document.querySelector('[data-tab="tasks"]').click();
  taskForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteTask(id) {
  writeStore(TASKS_KEY, getTasks().filter((item) => item.id !== id));
  render();
}

function markTaskComplete(id) {
  const tasks = getTasks().map((task) => task.id === id ? { ...task, taskStatus: 'Completed', updatedAt: new Date().toISOString() } : task);
  writeStore(TASKS_KEY, tasks);
  render();
}

function getFilteredTasks(tasks) {
  const query = taskSearch.value.trim().toLowerCase();
  return tasks.filter((task) => {
    const searchable = [task.taskTitle, task.taskPerson, task.taskSource, task.taskType, task.taskNotes].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!taskStatusFilter.value || task.taskStatus === taskStatusFilter.value)
      && (!taskPriorityFilter.value || task.taskPriority === taskPriorityFilter.value)
      && (!taskSourceFilter.value || task.taskSource === taskSourceFilter.value);
  });
}

function renderTaskMetrics(tasks) {
  const today = todayDateString();
  document.querySelector('#metric-tasks-today').textContent = tasks.filter((task) => task.taskDueDate === today && task.taskStatus !== 'Completed').length;
  document.querySelector('#metric-tasks-overdue').textContent = tasks.filter((task) => task.taskStatus === 'Overdue').length;
  document.querySelector('#metric-tasks-completed').textContent = tasks.filter((task) => task.taskStatus === 'Completed').length;
  document.querySelector('#metric-tasks-urgent').textContent = tasks.filter((task) => task.taskPriority === 'Urgent' && task.taskStatus !== 'Completed').length;
}

function renderTaskCard(task) {
  const card = document.createElement('article');
  card.className = `card task-card ${task.taskStatus === 'Overdue' ? 'task-overdue' : ''}`;
  card.innerHTML = `
    <div class="card-topline">
      <span class="badge">${escapeHtml(task.taskStatus || 'Pending')}</span>
      <span class="badge priority-${escapeHtml((task.taskPriority || 'medium').toLowerCase())}">${escapeHtml(task.taskPriority || 'Medium')}</span>
      <span class="badge">${escapeHtml(task.taskSource || 'Source')}</span>
    </div>
    <h3>${escapeHtml(task.taskTitle || 'Untitled task')}</h3>
    <p class="group">${escapeHtml(task.taskPerson || 'No associated person')} • ${escapeHtml(task.taskType || 'Follow-Up')}</p>
    <dl>
      ${detail('Due Date', formatDate(task.taskDueDate))}
      ${detail('Notes', task.taskNotes)}
    </dl>
    <div class="card-actions">
      <button class="complete primary" type="button" ${task.taskStatus === 'Completed' ? 'disabled' : ''}>Mark Complete</button>
      <button class="edit secondary" type="button">Edit</button>
      <button class="delete danger" type="button">Delete</button>
    </div>`;
  card.querySelector('.complete').addEventListener('click', () => markTaskComplete(task.id));
  card.querySelector('.edit').addEventListener('click', () => editTask(task.id));
  card.querySelector('.delete').addEventListener('click', () => deleteTask(task.id));
  return card;
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


function getOnboardingFormData() {
  return onboardingFields.reduce((data, field) => {
    const control = document.querySelector(`#${field}`);
    data[field] = control.type === 'checkbox' ? control.checked : control.value.trim();
    return data;
  }, {});
}

function resetOnboardingForm() {
  onboardingForm.reset();
  document.querySelector('#onboarding-id').value = '';
  document.querySelector('#onboardingService').value = 'Credit Repair';
  document.querySelector('#onboardingStatus').value = 'New Enrollment';
}

function calculateOnboardingProgress(record) {
  return Math.round((onboardingChecklistFields.filter((field) => record[field]).length / onboardingChecklistFields.length) * 100);
}

function getMissingOnboardingItems(record) {
  const labels = {
    agreementSigned: 'Agreement Signed', invoicePaid: 'Invoice Paid', identityIqReceived: 'IdentityIQ Received',
    creditReportReceived: 'Credit Report Received', driverLicenseReceived: 'Driver License Received',
    proofOfAddressReceived: 'Proof of Address Received', portalSetupCompleted: 'Portal Setup Completed',
    welcomeEmailSent: 'Welcome Email Sent', initialAnalysisCompleted: 'Initial Analysis Completed', round1Started: 'Round 1 Started'
  };
  return onboardingChecklistFields.filter((field) => !record[field]).map((field) => labels[field]);
}

function saveOnboardingRecord(event) {
  event.preventDefault();
  const records = readStore(ONBOARDING_KEY);
  const id = document.querySelector('#onboarding-id').value || crypto.randomUUID();
  const existing = records.findIndex((item) => item.id === id);
  const previous = existing >= 0 ? records[existing] : {};
  const data = getOnboardingFormData();
  const record = {
    id,
    ...data,
    completedAt: data.onboardingStatus === 'Completed' ? (previous.completedAt || new Date().toISOString()) : '',
    updatedAt: new Date().toISOString(),
    createdAt: previous.createdAt || new Date().toISOString(),
  };
  if (existing >= 0) records[existing] = record;
  else records.unshift(record);
  writeStore(ONBOARDING_KEY, records);
  resetOnboardingForm();
  render();
}

function editOnboardingRecord(id) {
  const record = readStore(ONBOARDING_KEY).find((item) => item.id === id);
  if (!record) return;
  document.querySelector('#onboarding-id').value = record.id;
  onboardingFields.forEach((field) => {
    const control = document.querySelector(`#${field}`);
    if (control.type === 'checkbox') control.checked = Boolean(record[field]);
    else control.value = record[field] || '';
  });
  onboardingForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function deleteOnboardingRecord(id) {
  writeStore(ONBOARDING_KEY, readStore(ONBOARDING_KEY).filter((item) => item.id !== id));
  render();
}

function updateOnboardingTeamFilter(records) {
  const current = onboardingTeamFilter.value;
  const teams = [...new Set(records.map((record) => record.onboardingAssignedTeamMember).filter(Boolean))].sort();
  onboardingTeamFilter.innerHTML = '<option value="">All team members</option>' + teams.map((team) => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join('');
  onboardingTeamFilter.value = teams.includes(current) ? current : '';
}

function getFilteredOnboardingRecords(records) {
  const query = onboardingSearch.value.trim().toLowerCase();
  return records.filter((record) => {
    const searchable = [record.onboardingClientName, record.onboardingEmail, record.onboardingPhone, record.onboardingService, record.onboardingAssignedTeamMember, record.onboardingNotes].join(' ').toLowerCase();
    return (!query || searchable.includes(query))
      && (!onboardingStatusFilter.value || record.onboardingStatus === onboardingStatusFilter.value)
      && (!onboardingServiceFilter.value || record.onboardingService === onboardingServiceFilter.value)
      && (!onboardingTeamFilter.value || record.onboardingAssignedTeamMember === onboardingTeamFilter.value);
  });
}

function renderOnboardingMetrics(records) {
  document.querySelector('#metric-onboarding-new').textContent = records.filter((record) => record.onboardingStatus === 'New Enrollment').length;
  document.querySelector('#metric-onboarding-waiting').textContent = records.filter((record) => record.onboardingStatus === 'Waiting Documents').length;
  document.querySelector('#metric-onboarding-analysis').textContent = records.filter((record) => ['Documents Received', 'Analysis Pending'].includes(record.onboardingStatus)).length;
  document.querySelector('#metric-onboarding-active').textContent = records.filter((record) => record.onboardingStatus === 'Active Client').length;
  document.querySelector('#metric-onboarding-completed-month').textContent = records.filter((record) => record.onboardingStatus === 'Completed' && isThisMonth(record.completedAt || record.updatedAt)).length;
}

function renderOnboardingCard(record) {
  const progress = calculateOnboardingProgress(record);
  const missingItems = getMissingOnboardingItems(record);
  const card = document.createElement('article');
  card.className = `card onboarding-card ${missingItems.length ? 'onboarding-incomplete' : 'onboarding-complete'}`;
  card.innerHTML = `
    <div class="card-topline"><span class="badge">${escapeHtml(record.onboardingService || 'Service')}</span><span class="badge">${escapeHtml(record.onboardingStatus || 'Status')}</span><span class="badge ${missingItems.length ? 'warning-badge' : 'success-badge'}">${progress}% complete</span></div>
    <h3>${escapeHtml(record.onboardingClientName || 'Unnamed client')}</h3>
    <p class="group">${escapeHtml(record.onboardingPhone || 'No phone')} • ${escapeHtml(record.onboardingEmail || 'No email')}</p>
    <div class="progress-track" aria-label="Onboarding progress"><span style="width: ${progress}%"></span></div>
    ${missingItems.length ? `<p class="missing-alert"><strong>Incomplete file:</strong> ${escapeHtml(missingItems.join(', '))}</p>` : '<p class="complete-alert">All onboarding checklist items are complete.</p>'}
    <dl>
      ${detail('Enrollment Date', formatDate(record.onboardingEnrollmentDate))}
      ${detail('Assigned Team Member', record.onboardingAssignedTeamMember)}
      ${detail('Notes', record.onboardingNotes)}
    </dl>
    <div class="card-actions"><button class="edit secondary" type="button">Edit</button><button class="delete danger" type="button">Delete</button></div>`;
  card.querySelector('.edit').addEventListener('click', () => editOnboardingRecord(record.id));
  card.querySelector('.delete').addEventListener('click', () => deleteOnboardingRecord(record.id));
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


function calculateDashboardMetrics({ leads, clients, pipelineLeads, creditFiles, tasks, mortgageReadiness, creditIntelligence, documents, communications, revenueRecords, teamMembers = [], automations = [], onboardingRecords = [] }) {
  const totalLeadCount = leads.length + pipelineLeads.length;
  const hotLeads = leads.filter((lead) => lead.temperature === 'Hot').length + pipelineLeads.filter((lead) => ['Enrolled', 'Active Client'].includes(lead.pipelineStage)).length;
  const coldLeads = leads.filter((lead) => lead.temperature === 'Cold').length + pipelineLeads.filter((lead) => lead.pipelineStage === 'Lost Lead').length;
  const activeClients = clients.filter((client) => client.paymentStatus !== 'Paused').length;
  const clientsReadyForMortgage = clients.filter((client) => client.mortgageReady === 'Yes').length + creditFiles.filter((file) => file.creditMortgageReady === 'Yes').length;
  const creditScores = creditFiles.flatMap((file) => [file.scoreEq, file.scoreEx, file.scoreTu].map(asNumber).filter(Boolean));
  const readinessScores = [
    ...mortgageReadiness.map((item) => calculateMortgageReadiness(item).readinessScore),
    ...creditIntelligence.map((item) => calculateCreditIntelligence(item).readinessScore),
  ].filter((score) => score || score === 0);
  const highRiskProfiles = creditFiles.filter((file) => {
    const avgScore = average([file.scoreEq, file.scoreEx, file.scoreTu].map(asNumber).filter(Boolean));
    return file.creditStatus === 'Escalated' || (avgScore && avgScore < 580) || [file.collections, file.chargeOffs, file.repossessions, file.bankruptcy].some(Boolean);
  }).length + creditIntelligence.filter((item) => ['Poor', 'Critical'].includes(calculateCreditIntelligence(item).status)).length;
  const estimatedRevenue = pipelineLeads.reduce((sum, lead) => sum + asNumber(lead.pipelineValue), 0);
  const closedDeals = pipelineLeads.filter((lead) => ['Enrolled', 'Active Client'].includes(lead.pipelineStage)).length;
  const monthlyInitialFees = clients.filter((client) => isThisMonth(client.enrollmentDate || client.createdAt)).reduce((sum, client) => sum + asNumber(client.initialFee), 0);
  const monthlyRecurringRevenue = clients.filter((client) => client.paymentStatus === 'Current').reduce((sum, client) => sum + asNumber(client.monthlyFee), 0);
  const revenueCenterIncome = revenueRecords.filter((record) => record.kind === 'income');
  const revenueCenterExpenses = revenueRecords.filter((record) => record.kind === 'expense');
  const revenueCenterTotalRevenue = revenueCenterIncome.reduce((sum, record) => sum + recordAmount(record), 0);
  const revenueCenterMonthlyRevenue = revenueCenterIncome.filter((record) => isThisMonth(record.incomeDate)).reduce((sum, record) => sum + recordAmount(record), 0);
  const revenueCenterTotalExpenses = revenueCenterExpenses.reduce((sum, record) => sum + recordAmount(record), 0);
  const monthlyRevenue = revenueCenterIncome.length ? revenueCenterMonthlyRevenue : monthlyInitialFees + monthlyRecurringRevenue;
  const projectedRevenue = monthlyRevenue + pipelineLeads.filter((lead) => !['Enrolled', 'Active Client', 'Lost Lead'].includes(lead.pipelineStage)).reduce((sum, lead) => sum + asNumber(lead.pipelineValue), 0);
  const upcomingFollowUps = [
    ...tasks.filter((task) => task.taskStatus !== 'Completed' && daysUntil(task.taskDueDate) !== null && daysUntil(task.taskDueDate) > 0 && daysUntil(task.taskDueDate) <= 14),
    ...clients.filter((client) => daysUntil(client.nextFollowUpDate) !== null && daysUntil(client.nextFollowUpDate) >= 0 && daysUntil(client.nextFollowUpDate) <= 14),
    ...creditFiles.filter((file) => daysUntil(file.creditFollowUpDate) !== null && daysUntil(file.creditFollowUpDate) >= 0 && daysUntil(file.creditFollowUpDate) <= 14),
  ].length;
  return {
    leads: [ ['Total Leads', totalLeadCount], ['Hot Leads', hotLeads], ['Cold Leads', coldLeads], ['Leads Added This Month', leads.filter((lead) => isThisMonth(lead.createdAt)).length + pipelineLeads.filter((lead) => isThisMonth(lead.createdAt)).length] ],
    clients: [ ['Active Clients', activeClients], ['New Clients This Month', clients.filter((client) => isThisMonth(client.enrollmentDate || client.createdAt)).length], ['Clients Ready for Mortgage', clientsReadyForMortgage], ['Clients in Escalation', clients.filter((client) => client.paymentStatus === 'Past Due').length + creditFiles.filter((file) => file.creditStatus === 'Escalated').length] ],
    tasks: [ ['Tasks Due Today', tasks.filter((task) => task.taskDueDate === todayDateString() && task.taskStatus !== 'Completed').length], ['Overdue Tasks', tasks.filter((task) => task.taskStatus === 'Overdue').length], ['Upcoming Follow Ups', upcomingFollowUps] ],
    creditFiles: [ ['Total Credit Files', creditFiles.length], ['Average Client Score', Math.round(average(creditScores))], ['Average Readiness Score', Math.round(average(readinessScores))], ['High Risk Profiles', highRiskProfiles] ],
    pipeline: [ ['Leads by Stage', pipelineStages.map((stage) => `${stage}: ${pipelineLeads.filter((lead) => lead.pipelineStage === stage).length}`).join(' • ')], ['Estimated Revenue', formatCurrency(estimatedRevenue)], ['Closed Deals', closedDeals], ['Conversion Rate', formatPercent(totalLeadCount ? (closedDeals / totalLeadCount) * 100 : 0)] ],
    documents: [ ['Total Documents', documents.length], ['Pending Review', documents.filter((documentRecord) => documentRecord.documentStatus === 'Pending Review').length], ['Uploaded Today', documents.filter((documentRecord) => documentRecord.documentUploadDate === todayDateString()).length], ['Document Clients', new Set(documents.map((documentRecord) => documentRecord.documentClientName).filter(Boolean)).size] ],
    communications: [ ['Total Communications', communications.length], ['Calls Today', communications.filter((item) => item.communicationType === 'Call' && (item.communicationDateTime || '').slice(0, 10) === todayDateString()).length], ['Follow-Ups Due', communications.filter((item) => isFollowUpDue(item.communicationFollowUpDate)).length], ['Appointments Set', communications.filter((item) => item.communicationOutcome === 'Appointment Set').length] ],
    onboarding: [
      ['New Enrollments', String(onboardingRecords.filter((record) => record.onboardingStatus === 'New Enrollment').length)],
      ['Waiting Documents', String(onboardingRecords.filter((record) => record.onboardingStatus === 'Waiting Documents').length)],
      ['Ready For Analysis', String(onboardingRecords.filter((record) => ['Documents Received', 'Analysis Pending'].includes(record.onboardingStatus)).length)],
      ['Active Clients', String(onboardingRecords.filter((record) => record.onboardingStatus === 'Active Client').length)],
      ['Completed This Month', String(onboardingRecords.filter((record) => record.onboardingStatus === 'Completed' && isThisMonth(record.completedAt || record.updatedAt)).length)],
    ],
    financial: [ ['Total Revenue', formatCurrency(revenueCenterIncome.length ? revenueCenterTotalRevenue : monthlyRevenue)], ['Monthly Revenue', formatCurrency(monthlyRevenue)], ['Total Expenses', formatCurrency(revenueCenterTotalExpenses)], ['Net Profit', formatCurrency((revenueCenterIncome.length ? revenueCenterTotalRevenue : monthlyRevenue) - revenueCenterTotalExpenses)] ],
    team: [ ['Total Team Members', teamMembers.length], ['Active Team Members', teamMembers.filter((member) => member.teamStatus === 'Active').length], ['Team Productivity Score', teamMembers.reduce((sum, member) => sum + teamProductivityScore(member), 0)] ],
    automations: [ ['Active Automations', automations.filter((item) => item.automationStatus === 'Active').length], ['Due Today', automations.filter((item) => item.automationNextDueDate === todayDateString() && item.automationStatus !== 'Completed').length], ['Overdue', automations.filter((item) => item.automationStatus === 'Overdue').length], ['Completed This Month', automations.filter((item) => item.automationStatus === 'Completed' && isThisMonth(item.automationLastCompleted || item.updatedAt)).length] ],
  };
}

function collectActivity({ leads, clients, pipelineLeads, creditFiles, tasks, teamMembers = [], automations = [] }) {
  return [
    ...leads.map((lead) => ({ type: 'New lead added', title: lead.name || 'Unnamed lead', detail: lead.source || 'Converted lead', date: lead.createdAt })),
    ...pipelineLeads.map((lead) => ({ type: lead.updatedAt && lead.updatedAt !== lead.createdAt ? 'Lead moved in pipeline' : 'New lead added', title: lead.pipelineName || 'Unnamed lead', detail: lead.pipelineStage || 'New Lead', date: lead.updatedAt || lead.createdAt })),
    ...clients.map((client) => ({ type: 'Client added', title: client.fullName || 'Unnamed client', detail: client.clientGoal || 'Client record', date: client.createdAt })),
    ...creditFiles.map((file) => ({ type: 'Credit file updated', title: file.creditClientName || 'Unnamed client', detail: file.creditStatus || 'Credit file', date: file.updatedAt || file.createdAt })),
    ...tasks.filter((task) => task.taskStatus === 'Completed').map((task) => ({ type: 'Task completed', title: task.taskTitle || 'Task', detail: task.taskPerson || task.taskSource || 'Follow-up center', date: task.updatedAt || task.createdAt })),
    ...automations.map((automation) => ({ type: 'Automation updated', title: automation.automationName || 'Automation', detail: automation.automationStatus || automation.automationCategory || 'Automation center', date: automation.updatedAt || automation.createdAt })),
    ...teamMembers.map((member) => ({ type: 'Team activity logged', title: member.teamFullName || 'Team member', detail: `${member.teamRole || 'Role'} • ${teamProductivityScore(member)} productivity points`, date: member.teamLastActivityDate || member.updatedAt || member.createdAt })),
  ].filter((item) => item.date).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 12);
}

function renderDashboard(data) {
  const metrics = calculateDashboardMetrics(data);
  const groups = [
    ['LEADS', metrics.leads], ['CLIENTS', metrics.clients], ['TASKS', metrics.tasks], ['AUTOMATIONS', metrics.automations],
    ['ONBOARDING', metrics.onboarding],
    ['CREDIT FILES', metrics.creditFiles], ['DOCUMENTS', metrics.documents], ['COMMUNICATIONS', metrics.communications], ['TEAM', metrics.team], ['PIPELINE', metrics.pipeline], ['FINANCIAL METRICS', metrics.financial],
  ];
  dashboardSections.innerHTML = groups.map(([title, items]) => `
    <section class="dashboard-widget ${title === 'PIPELINE' || title === 'FINANCIAL METRICS' ? 'wide-widget' : ''}">
      <div class="dashboard-widget-header"><h3>${escapeHtml(title)}</h3></div>
      <div class="metrics-grid">${items.map(([label, value]) => `<article class="metric-card dashboard-metric-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></article>`).join('')}</div>
    </section>`).join('');
  const activity = collectActivity(data);
  activityFeed.innerHTML = activity.length ? activity.map((item) => `
    <article class="activity-item"><span class="activity-dot"></span><div><h4>${escapeHtml(item.type)}</h4><p>${escapeHtml(item.title)} — ${escapeHtml(item.detail)}</p><span class="activity-time">${new Date(item.date).toLocaleString()}</span></div></article>`).join('') : '<p class="empty-message">No recent activity yet. Use a quick action to start building your command center.</p>';
  dashboardUpdated.textContent = `Updated ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  writeStore(DASHBOARD_KEY, { metrics, activity, updatedAt: new Date().toISOString() });
}

function render() {
  const conversations = readStore(CONVERSATIONS_KEY);
  const leads = readStore(LEADS_KEY);
  const clients = readStore(CLIENTS_KEY);
  const pipelineLeads = getPipelineLeads();
  const creditFiles = readStore(CREDIT_FILES_KEY);
  const tasks = getTasks();
  const mortgageReadiness = readStore(MORTGAGE_READINESS_KEY);
  const creditIntelligence = readStore(CREDIT_INTELLIGENCE_KEY);
  const disputes = readStore(DISPUTES_KEY);
  const documents = readStore(DOCUMENTS_KEY);
  const communications = readStore(COMMUNICATIONS_KEY);
  const revenueRecords = getRevenueRecords();
  const teamMembers = getTeamMembers();
  const contentItems = getContentItems();
  const automations = getAutomations();
  const onboardingRecords = readStore(ONBOARDING_KEY);
  conversationCount.textContent = `${conversations.length} conversation${conversations.length === 1 ? '' : 's'}`;
  leadCount.textContent = `${leads.length} lead${leads.length === 1 ? '' : 's'}`;
  clientCount.textContent = `${clients.length} client${clients.length === 1 ? '' : 's'}`;
  pipelineCount.textContent = `${pipelineLeads.length} lead${pipelineLeads.length === 1 ? '' : 's'}`;
  creditFileCount.textContent = `${creditFiles.length} file${creditFiles.length === 1 ? '' : 's'}`;
  taskCount.textContent = `${tasks.length} task${tasks.length === 1 ? '' : 's'}`;
  creditIntelligenceCount.textContent = `${creditIntelligence.length} report${creditIntelligence.length === 1 ? '' : 's'}`;
  mortgageReadinessCount.textContent = `${mortgageReadiness.length} evaluation${mortgageReadiness.length === 1 ? '' : 's'}`;
  disputeCount.textContent = `${disputes.length} dispute${disputes.length === 1 ? '' : 's'}`;
  documentCount.textContent = `${documents.length} document${documents.length === 1 ? '' : 's'}`;
  communicationCount.textContent = `${communications.length} communication${communications.length === 1 ? '' : 's'}`;
  revenueTransactionCount.textContent = `${revenueRecords.length} transaction${revenueRecords.length === 1 ? '' : 's'}`;
  teamCount.textContent = `${teamMembers.length} team member${teamMembers.length === 1 ? '' : 's'}`;
  contentCount.textContent = `${contentItems.length} content item${contentItems.length === 1 ? '' : 's'}`;
  automationCount.textContent = `${automations.length} automation${automations.length === 1 ? '' : 's'}`;
  onboardingCount.textContent = `${onboardingRecords.length} record${onboardingRecords.length === 1 ? '' : 's'}`;
  updateFilterOptions(clients);
  renderClientMetrics(clients);
  renderPipelineMetrics(pipelineLeads);
  renderCreditFileMetrics(creditFiles);
  renderTaskMetrics(tasks);
  renderCreditIntelligenceMetrics(creditIntelligence);
  renderMortgageMetrics(mortgageReadiness);
  updateDocumentClientFilter(documents);
  renderDisputeMetrics(disputes);
  renderDocumentMetrics(documents);
  renderDocumentClientCounts(documents);
  renderCommunicationMetrics(communications);
  updateRevenueCategoryFilter();
  renderRevenueMetrics(revenueRecords);
  renderTeamMetrics(teamMembers);
  renderContentMetrics(contentItems);
  renderAutomationMetrics(automations);
  updateOnboardingTeamFilter(onboardingRecords);
  renderOnboardingMetrics(onboardingRecords);
  renderContentCalendar(contentItems);
  renderTeamRankings(teamMembers);
  renderDashboard({ leads, clients, pipelineLeads, creditFiles, tasks, mortgageReadiness, creditIntelligence, documents, communications, revenueRecords, teamMembers, automations, onboardingRecords });
  conversationList.innerHTML = '';
  leadList.innerHTML = '';
  clientList.innerHTML = '';
  creditFileList.innerHTML = '';
  taskList.innerHTML = '';
  creditIntelligenceList.innerHTML = '';
  mortgageReadinessList.innerHTML = '';
  overdueTaskList.innerHTML = '';
  disputeList.innerHTML = '';
  documentList.innerHTML = '';
  communicationList.innerHTML = '';
  revenueTransactionList.innerHTML = '';
  teamList.innerHTML = '';
  contentList.innerHTML = '';
  contentIdeaBank.innerHTML = '';
  automationList.innerHTML = '';
  onboardingList.innerHTML = '';
  renderPipelineBoard(pipelineLeads);

  if (!creditIntelligence.length) creditIntelligenceList.innerHTML = '<p class="empty-message">No credit intelligence reports yet. Analyze a client credit profile above.</p>';
  creditIntelligence.forEach((item) => creditIntelligenceList.append(renderCreditIntelligenceCard(item)));

  if (!mortgageReadiness.length) mortgageReadinessList.innerHTML = '<p class="empty-message">No mortgage readiness evaluations yet. Add a client assessment above.</p>';
  mortgageReadiness.forEach((item) => mortgageReadinessList.append(renderMortgageReadinessCard(item)));

  if (!conversations.length) conversationList.innerHTML = '<p class="empty-message">No group conversations yet. Add your first tracked reply above.</p>';
  conversations.forEach((conversation) => conversationList.append(renderConversationCard(conversation)));

  if (!leads.length) leadList.innerHTML = '<p class="empty-message">No converted leads yet. Convert a group conversation to start your pipeline.</p>';
  leads.forEach((lead) => leadList.append(renderLeadCard(lead)));

  const filteredClients = getFilteredClients(clients);
  if (!filteredClients.length) clientList.innerHTML = '<p class="empty-message">No clients match your current view. Add a client or adjust your filters.</p>';
  filteredClients.forEach((client) => clientList.append(renderClientCard(client)));

  const filteredDisputes = getFilteredDisputes(disputes);
  if (!filteredDisputes.length) disputeList.innerHTML = '<p class="empty-message">No dispute records match your current view. Add a dispute letter workflow or adjust your filters.</p>';
  filteredDisputes.forEach((dispute) => disputeList.append(renderDisputeCard(dispute)));

  const filteredDocuments = getFilteredDocuments(documents);
  if (!filteredDocuments.length) documentList.innerHTML = '<p class="empty-message">No documents match your current view. Upload a document or adjust your filters.</p>';
  filteredDocuments.forEach((documentRecord) => documentList.append(renderDocumentCard(documentRecord)));

  const filteredCommunications = getFilteredCommunications(communications);
  if (!filteredCommunications.length) communicationList.innerHTML = '<p class="empty-message">No communications match your current view. Add a conversation or adjust your filters.</p>';
  filteredCommunications.forEach((item) => communicationList.append(renderCommunicationCard(item)));

  const filteredContentItems = getFilteredContent(contentItems);
  const ideaItems = getFilteredContent(contentItems.filter((item) => item.contentStatus === 'Idea'));
  if (!ideaItems.length) contentIdeaBank.innerHTML = '<p class="empty-message">No content ideas match your current view. Capture an idea above to start the bank.</p>';
  ideaItems.forEach((item) => contentIdeaBank.append(renderContentCard(item, true)));
  if (!filteredContentItems.length) contentList.innerHTML = '<p class="empty-message">No content records match your current view. Add content or adjust your filters.</p>';
  filteredContentItems.forEach((item) => contentList.append(renderContentCard(item)));

  const filteredAutomations = getFilteredAutomations(automations);
  if (!filteredAutomations.length) automationList.innerHTML = '<p class="empty-message">No automations match your current view. Add an automation or adjust your filters.</p>';
  filteredAutomations.forEach((automation) => automationList.append(renderAutomationCard(automation)));

  const filteredOnboardingRecords = getFilteredOnboardingRecords(onboardingRecords);
  if (!filteredOnboardingRecords.length) onboardingList.innerHTML = '<p class="empty-message">No onboarding records match your current view. Add a client onboarding file or adjust your filters.</p>';
  filteredOnboardingRecords.forEach((record) => onboardingList.append(renderOnboardingCard(record)));

  const filteredTeamMembers = getFilteredTeamMembers(teamMembers);
  if (!filteredTeamMembers.length) teamList.innerHTML = '<p class="empty-message">No team members match your current view. Add a team member or adjust your filters.</p>';
  filteredTeamMembers.forEach((member) => teamList.append(renderTeamCard(member)));

  const filteredRevenueRecords = getFilteredRevenueRecords(revenueRecords);
  if (!filteredRevenueRecords.length) revenueTransactionList.innerHTML = '<p class="empty-message">No revenue center transactions match your current view. Add income or expenses above.</p>';
  filteredRevenueRecords.forEach((record) => revenueTransactionList.append(renderRevenueCard(record)));

  const filteredTasks = getFilteredTasks(tasks);
  const overdueTasks = filteredTasks.filter((task) => task.taskStatus === 'Overdue');
  if (overdueTasks.length) {
    overdueTaskList.innerHTML = '<h3 class="overdue-heading">Overdue tasks need attention</h3>';
    overdueTasks.forEach((task) => overdueTaskList.append(renderTaskCard(task)));
  }
  if (!filteredTasks.length) taskList.innerHTML = '<p class="empty-message">No tasks match your current view. Add a task or adjust your filters.</p>';
  filteredTasks.filter((task) => task.taskStatus !== 'Overdue').forEach((task) => taskList.append(renderTaskCard(task)));

  const filteredCreditFiles = getFilteredCreditFiles(creditFiles);
  if (!filteredCreditFiles.length) creditFileList.innerHTML = '<p class="empty-message">No credit files match your current view. Add a credit repair client or adjust your filters.</p>';
  filteredCreditFiles.forEach((file) => creditFileList.append(renderCreditFileCard(file)));
}

document.querySelectorAll('.quick-action').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = document.querySelector(`[data-tab="${button.dataset.targetTab}"]`);
    tab?.click();
    document.querySelector(`#${button.dataset.targetTab} form`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

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
seedSelect(document.querySelector('#desiredLoanType'), mortgageLoanTypes);
seedSelect(document.querySelector('#taskSource'), taskSourceOptions);
seedSelect(document.querySelector('#taskType'), taskTypeOptions);
seedSelect(document.querySelector('#taskPriority'), taskPriorityOptions);
seedSelect(document.querySelector('#taskStatus'), taskStatusOptions);
seedSelect(taskStatusFilter, taskStatusOptions, 'All statuses');
seedSelect(taskPriorityFilter, taskPriorityOptions, 'All priorities');
seedSelect(taskSourceFilter, taskSourceOptions, 'All source modules');
seedSelect(document.querySelector('#disputeBureau'), disputeBureauOptions);
seedSelect(document.querySelector('#disputeLetterType'), disputeLetterTypes);
seedSelect(document.querySelector('#disputeStatus'), disputeStatusOptions);
seedSelect(document.querySelector('#disputeResult'), disputeResultOptions);
seedSelect(disputeBureauFilter, disputeBureauOptions, 'All bureaus');
seedSelect(disputeStatusFilter, disputeStatusOptions, 'All statuses');
seedSelect(disputeResultFilter, disputeResultOptions, 'All results');
seedSelect(document.querySelector('#documentCategory'), documentCategories);
seedSelect(document.querySelector('#documentStatus'), documentStatusOptions);
seedSelect(documentCategoryFilter, documentCategories, 'All categories');
seedSelect(document.querySelector('#communicationContactType'), communicationContactTypes);
seedSelect(document.querySelector('#communicationType'), communicationTypes);
seedSelect(document.querySelector('#communicationOutcome'), communicationOutcomes);
seedSelect(communicationContactFilter, communicationContactTypes, 'All contact types');
seedSelect(communicationTypeFilter, communicationTypes, 'All communication types');
seedSelect(communicationOutcomeFilter, communicationOutcomes, 'All outcomes');
seedSelect(document.querySelector('#incomeRevenueType'), revenueTypeOptions);
seedSelect(document.querySelector('#expenseCategory'), expenseCategoryOptions);
seedSelect(revenueCategoryFilter, [...revenueTypeOptions, ...expenseCategoryOptions], 'All categories');
seedSelect(document.querySelector('#contentPlatform'), contentPlatformOptions);
seedSelect(document.querySelector('#contentType'), contentTypeOptions);
seedSelect(document.querySelector('#contentCta'), contentCtaOptions);
seedSelect(document.querySelector('#contentStatus'), contentStatusOptions);
seedSelect(contentPlatformFilter, contentPlatformOptions, 'All platforms');
seedSelect(contentTypeFilter, contentTypeOptions, 'All types');
seedSelect(contentCtaFilter, contentCtaOptions, 'All CTAs');
seedSelect(contentStatusFilter, contentStatusOptions, 'All statuses');
seedSelect(document.querySelector('#teamRole'), teamRoleOptions);
seedSelect(document.querySelector('#teamStatus'), teamStatusOptions);
seedSelect(document.querySelector('#teamPayType'), teamPayTypeOptions);
seedSelect(teamRoleFilter, teamRoleOptions, 'All roles');
seedSelect(teamStatusFilter, teamStatusOptions, 'All statuses');
seedSelect(document.querySelector('#onboardingService'), onboardingServiceOptions);
seedSelect(document.querySelector('#onboardingStatus'), onboardingStatusOptions);
seedSelect(onboardingServiceFilter, onboardingServiceOptions, 'All services');
seedSelect(onboardingStatusFilter, onboardingStatusOptions, 'All statuses');
seedSelect(document.querySelector('#automationCategory'), automationCategoryOptions);
seedSelect(document.querySelector('#automationFrequency'), automationFrequencyOptions);
seedSelect(document.querySelector('#automationStatus'), automationStatusOptions);
seedSelect(document.querySelector('#automationPriority'), automationPriorityOptions);
seedSelect(automationCategoryFilter, automationCategoryOptions, 'All categories');
seedSelect(automationStatusFilter, automationStatusOptions, 'All statuses');
seedSelect(automationPriorityFilter, automationPriorityOptions, 'All priorities');

form.addEventListener('submit', saveConversation);
clientForm.addEventListener('submit', saveClient);
pipelineForm.addEventListener('submit', savePipelineLead);
creditFileForm.addEventListener('submit', saveCreditFile);
creditIntelligenceForm.addEventListener('submit', saveCreditIntelligence);
mortgageReadinessForm.addEventListener('submit', saveMortgageReadiness);
taskForm.addEventListener('submit', saveTask);
disputeForm.addEventListener('submit', saveDispute);
documentForm.addEventListener('submit', saveDocument);
communicationForm.addEventListener('submit', saveCommunication);
incomeForm.addEventListener('submit', saveIncome);
expenseForm.addEventListener('submit', saveExpense);
teamForm.addEventListener('submit', saveTeamMember);
contentForm.addEventListener('submit', saveContent);
automationForm.addEventListener('submit', saveAutomation);
onboardingForm.addEventListener('submit', saveOnboardingRecord);
document.querySelector('#reset-form').addEventListener('click', resetForm);
document.querySelector('#reset-client-form').addEventListener('click', resetClientForm);
document.querySelector('#reset-pipeline-form').addEventListener('click', resetPipelineForm);
document.querySelector('#reset-credit-file-form').addEventListener('click', resetCreditFileForm);
document.querySelector('#reset-credit-intelligence-form').addEventListener('click', resetCreditIntelligenceForm);
document.querySelector('#reset-task-form').addEventListener('click', resetTaskForm);
document.querySelector('#reset-dispute-form').addEventListener('click', resetDisputeForm);
document.querySelector('#reset-document-form').addEventListener('click', resetDocumentForm);
document.querySelector('#reset-communication-form').addEventListener('click', resetCommunicationForm);
document.querySelector('#reset-income-form').addEventListener('click', resetIncomeForm);
document.querySelector('#reset-expense-form').addEventListener('click', resetExpenseForm);
document.querySelector('#reset-team-form').addEventListener('click', resetTeamForm);
document.querySelector('#reset-content-form').addEventListener('click', resetContentForm);
document.querySelector('#reset-automation-form').addEventListener('click', resetAutomationForm);
document.querySelector('#reset-onboarding-form').addEventListener('click', resetOnboardingForm);
document.querySelector('#reset-mortgage-readiness-form').addEventListener('click', resetMortgageReadinessForm);
creditIntelligenceFields.forEach((field) => {
  const control = document.querySelector(`#${field}`);
  control.addEventListener('input', updateCreditIntelligencePreview);
  control.addEventListener('change', updateCreditIntelligencePreview);
});
mortgageReadinessFields.forEach((field) => document.querySelector(`#${field}`).addEventListener('input', updateMortgageReadinessPreview));
document.querySelector('#desiredLoanType').addEventListener('change', updateMortgageReadinessPreview);
document.querySelector('#bankruptcyHistory').addEventListener('change', updateMortgageReadinessPreview);
document.querySelector('#foreclosureHistory').addEventListener('change', updateMortgageReadinessPreview);
clientSearch.addEventListener('input', render);
pipelineSearch.addEventListener('input', render);
pipelineSourceFilter.addEventListener('input', render);
pipelineStageFilter.addEventListener('change', render);
creditFileSearch.addEventListener('input', render);
taskSearch.addEventListener('input', render);
disputeSearch.addEventListener('input', render);
disputeCreditorFilter.addEventListener('input', render);
documentSearch.addEventListener('input', render);
communicationSearch.addEventListener('input', render);
communicationDateFilter.addEventListener('change', render);
revenueSearch.addEventListener('input', render);
[revenueKindFilter, revenueCategoryFilter, revenueStartFilter, revenueEndFilter].forEach((control) => control.addEventListener('change', render));
teamSearch.addEventListener('input', render);
contentSearch.addEventListener('input', render);
automationSearch.addEventListener('input', render);
onboardingSearch.addEventListener('input', render);
[teamRoleFilter, teamStatusFilter].forEach((control) => control.addEventListener('change', render));
[contentPlatformFilter, contentTypeFilter, contentCtaFilter, contentStatusFilter].forEach((control) => control.addEventListener('change', render));
[automationCategoryFilter, automationStatusFilter, automationPriorityFilter].forEach((control) => control.addEventListener('change', render));
[onboardingStatusFilter, onboardingServiceFilter, onboardingTeamFilter].forEach((control) => control.addEventListener('change', render));
[creditGoalFilter, creditStatusFilter, creditStageFilter, creditMortgageFilter].forEach((control) => control.addEventListener('change', render));
[taskStatusFilter, taskPriorityFilter, taskSourceFilter].forEach((control) => control.addEventListener('change', render));
[disputeBureauFilter, disputeStatusFilter, disputeResultFilter].forEach((control) => control.addEventListener('change', render));
[documentCategoryFilter, documentClientFilter].forEach((control) => control.addEventListener('change', render));
[communicationContactFilter, communicationTypeFilter, communicationOutcomeFilter].forEach((control) => control.addEventListener('change', render));
[goalFilter, paymentFilter, teamFilter].forEach((control) => control.addEventListener('change', render));
updateCreditIntelligencePreview();
resetDisputeForm();
resetDocumentForm();
resetCommunicationForm();
resetIncomeForm();
resetExpenseForm();
resetTeamForm();
resetContentForm();
resetAutomationForm();
resetOnboardingForm();
render();
