# Phase 1: Foundation & Core Features

**Duration**: 4-6 weeks  
**Goal**: Authentication, core transaction management, account system, and CSV/Excel import

---

## 🗄️ Database Features

### Week 1-2: Auth & User Management
- [ ] Users table (id, clerk_user_id, email, name, subscription_tier, timestamps)
- [ ] User preferences table (currency, date_format, timezone, theme, language)
- [ ] Sessions table for tracking
- [ ] Indexes on clerk_user_id, email, session_token

### Week 3-4: Core Finance Schema
- [ ] Accounts table (name, type, institution, balance, currency, color, icon)
- [ ] Categories table (name, type, parent_category, color, icon, is_system)
- [ ] Tags table (name, color)
- [ ] Transactions table (account, category, amount, date, description, merchant, status)
- [ ] Transaction_tags junction table
- [ ] Indexes on user_id, account_id, category_id, date
- [ ] Default categories seed data

### Week 5-6: Import System
- [ ] Import_jobs table (file_name, status, total_rows, success_count, error_count, mapping_config)
- [ ] Import_transactions staging table (raw_data, mapped_data, status, error_message)
- [ ] Indexes on import_job_id, status

---

## 🔧 Backend Features

### Week 1-2: Authentication & User API
- [ ] Express server setup with TypeScript
- [ ] Clerk authentication middleware
- [ ] Error handling middleware
- [ ] Rate limiting and security (helmet, cors)
- [ ] Health check endpoint
- [ ] `POST /api/auth/webhook` - Sync Clerk users
- [ ] `GET /api/users/me` - Get current user
- [ ] `PUT /api/users/me` - Update user profile
- [ ] `GET /api/users/me/preferences` - Get preferences
- [ ] `PUT /api/users/me/preferences` - Update preferences
- [ ] Zod validation schemas for all endpoints

### Week 3-4: Core Finance API
- [ ] `GET /api/accounts` - List accounts (with filters)
- [ ] `POST /api/accounts` - Create account
- [ ] `GET /api/accounts/:id` - Get account details
- [ ] `PUT /api/accounts/:id` - Update account
- [ ] `DELETE /api/accounts/:id` - Soft delete account
- [ ] `GET /api/accounts/:id/balance` - Get account balance
- [ ] `GET /api/categories` - List categories (hierarchical)
- [ ] `POST /api/categories` - Create category
- [ ] `GET /api/categories/:id` - Get category details
- [ ] `PUT /api/categories/:id` - Update category
- [ ] `DELETE /api/categories/:id` - Delete category
- [ ] `GET /api/tags` - List tags with usage count
- [ ] `POST /api/tags` - Create tag
- [ ] `PUT /api/tags/:id` - Update tag
- [ ] `DELETE /api/tags/:id` - Delete tag
- [ ] `GET /api/transactions` - List transactions (filters: account, category, type, date range, search, tags, pagination, sorting)
- [ ] `POST /api/transactions` - Create transaction
- [ ] `GET /api/transactions/:id` - Get transaction details
- [ ] `PUT /api/transactions/:id` - Update transaction
- [ ] `DELETE /api/transactions/:id` - Delete transaction
- [ ] `GET /api/transactions/stats` - Get statistics
- [ ] `GET /api/dashboard/summary` - Dashboard data
- [ ] Balance calculation service
- [ ] Duplicate detection logic

### Week 5-6: Import API
- [ ] File upload with multer (CSV, Excel)
- [ ] CSV parser service (papaparse)
- [ ] Excel parser service (xlsx)
- [ ] `POST /api/import/upload` - Upload file
- [ ] `POST /api/import/preview` - Preview first 10 rows
- [ ] `POST /api/import/configure` - Save column mapping
- [ ] `POST /api/import/start` - Process import
- [ ] `POST /api/import/confirm` - Confirm and create transactions
- [ ] `GET /api/import/jobs` - Import history
- [ ] `GET /api/import/jobs/:id` - Job details
- [ ] `GET /api/import/jobs/:id/errors` - Import errors
- [ ] `DELETE /api/import/jobs/:id` - Delete import job
- [ ] Intelligent column detection
- [ ] Data validation service
- [ ] Batch processing (100 rows at a time)

---

## 🎨 Frontend Features

### Week 1-2: Auth & Layout
- [ ] Next.js 14 project with App Router
- [ ] Clerk integration (SignIn, SignUp components)
- [ ] Tailwind CSS + shadcn/ui components
- [ ] Dark mode support
- [ ] Zustand stores (user, preferences, UI state)
- [ ] API client with axios
- [ ] `/` - Landing page (hero, features, pricing preview)
- [ ] `/pricing` - Pricing tiers comparison
- [ ] `/features` - Feature showcase
- [ ] `/login` - Login page
- [ ] `/signup` - Registration page
- [ ] `/dashboard` - Dashboard layout with sidebar
- [ ] `/settings` - Settings overview
- [ ] `/settings/profile` - Profile edit form
- [ ] `/settings/preferences` - Preferences (currency, date format, timezone, theme, language)
- [ ] `/settings/security` - Security settings
- [ ] Reusable components: Button, Input, Card, Loading, Toast, Modal

### Week 3-4: Core Finance UI
- [ ] `/dashboard` - Summary cards (balance, income, expenses, net), recent transactions, charts (pie, bar)
- [ ] `/accounts` - Account list (grid/list view, filters, search)
- [ ] `/accounts/add` - Create account form
- [ ] `/accounts/[id]` - Account details with transactions
- [ ] `/transactions` - Transaction table (filters: date range, account, category, type, tags, search, pagination, sorting)
- [ ] `/transactions/add` - Transaction form (type, amount, date, account, category, merchant, tags, notes)
- [ ] `/transactions/[id]` - Transaction details
- [ ] `/categories` - Category management (income/expense sections, hierarchy, inline edit)
- [ ] `/tags` - Tag management (list, create, edit, delete)
- [ ] Reusable components:
  - Transaction form
  - Account selector
  - Category selector (hierarchical)
  - Tag multi-select
  - Data table with sorting/filtering
  - Charts (pie, bar, line using recharts)
  - Date picker
  - Currency input
- [ ] Zustand stores (accounts, transactions, categories, tags, dashboard)
- [ ] Optimistic updates

### Week 5-6: Import UI
- [ ] `/transactions/import` - File upload (drag-and-drop, file validation)
- [ ] `/transactions/import/map` - Column mapping (dropdowns, sample data, format selectors)
- [ ] `/transactions/import/preview` - Preview table (50 rows, error highlighting, duplicate detection, statistics)
- [ ] `/transactions/import/progress` - Progress bar with real-time updates
- [ ] `/transactions/import/complete` - Import summary (success/error counts, error report download)
- [ ] `/transactions/import/history` - Past imports list
- [ ] Reusable components:
  - File upload with drag-and-drop
  - Column mapping table
  - Import preview table
  - Progress tracker
  - Import stats card
- [ ] Import store (Zustand)
- [ ] Progress polling

---

## ✅ Test Cases

### Authentication & User Management
- [ ] User created from Clerk webhook
- [ ] User preferences created with defaults
- [ ] GET /api/users/me returns current user
- [ ] GET /api/users/me fails without authentication
- [ ] PUT /api/users/me updates profile
- [ ] PUT /api/users/me/preferences updates preferences
- [ ] Login redirects to dashboard
- [ ] Signup creates account
- [ ] Logout clears session
- [ ] Protected routes require authentication
- [ ] Profile update form works
- [ ] Theme toggle works

### Accounts Management
- [ ] Account created with initial balance
- [ ] GET /api/accounts returns user's accounts only
- [ ] GET /api/accounts filters by type and is_active
- [ ] GET /api/accounts/:id returns account details
- [ ] GET /api/accounts/:id fails for other user's account
- [ ] PUT /api/accounts/:id updates account
- [ ] DELETE /api/accounts/:id soft deletes account
- [ ] Account balance calculated correctly
- [ ] Account list displays all accounts
- [ ] Account creation form validates fields
- [ ] Account edit updates data
- [ ] Account delete confirmation works
- [ ] Account type filter works
- [ ] Account search works

### Categories Management
- [ ] System + user categories returned
- [ ] Category hierarchy works (parent/child)
- [ ] POST /api/categories creates category
- [ ] POST /api/categories prevents duplicate names
- [ ] PUT /api/categories/:id prevents editing system categories
- [ ] DELETE /api/categories/:id prevents deleting system categories
- [ ] Category list grouped by type
- [ ] Category creation modal works
- [ ] Category inline edit works
- [ ] Subcategory creation works

### Tags Management
- [ ] GET /api/tags returns user's tags with usage count
- [ ] POST /api/tags creates tag
- [ ] POST /api/tags prevents duplicate names
- [ ] DELETE /api/tags removes from transactions
- [ ] Tag creation works
- [ ] Tag edit works
- [ ] Tag color picker works

### Transactions Management
- [ ] Transaction created successfully
- [ ] Transaction updates account balance
- [ ] Transaction deletion reverts balance
- [ ] GET /api/transactions filters by account, category, type, date range, tags
- [ ] GET /api/transactions searches description/merchant
- [ ] GET /api/transactions paginates correctly
- [ ] GET /api/transactions sorts by date/amount
- [ ] GET /api/transactions/:id includes account/category/tags
- [ ] PUT /api/transactions/:id adjusts account balance
- [ ] GET /api/transactions/stats calculates totals and groups by category
- [ ] Transaction filters work (date, account, category, type, tags, search)
- [ ] Transaction sorting works
- [ ] Transaction pagination works
- [ ] Transaction creation form validates
- [ ] Transaction edit updates data
- [ ] Transaction delete confirmation works
- [ ] Tag multi-select works
- [ ] Amount input formats correctly
- [ ] Date picker works
- [ ] Category selector works
- [ ] Account selector works

### Dashboard
- [ ] GET /api/dashboard/summary returns all stats
- [ ] Dashboard calculates total balance, income, expenses, net income
- [ ] Dashboard displays recent transactions
- [ ] Dashboard shows account balances
- [ ] Dashboard shows spending by category chart
- [ ] Dashboard shows income vs expense chart
- [ ] Dashboard date range selector works
- [ ] Dashboard handles loading/error states

### CSV/Excel Import
- [ ] POST /api/import/upload accepts CSV and Excel
- [ ] POST /api/import/upload rejects invalid file types/sizes
- [ ] POST /api/import/upload detects columns correctly
- [ ] POST /api/import/preview returns first 10 rows
- [ ] POST /api/import/configure saves mapping
- [ ] POST /api/import/start processes file and detects duplicates
- [ ] POST /api/import/confirm creates transactions and updates balances
- [ ] GET /api/import/jobs returns import history
- [ ] File upload drag-and-drop works
- [ ] Column mapping dropdowns work
- [ ] Column mapping suggestions work
- [ ] Import preview highlights errors and duplicates
- [ ] Import preview shows statistics
- [ ] Import progress updates in real-time
- [ ] Import complete summary displays
- [ ] Import error report downloads
- [ ] Import history displays past imports

### Security
- [ ] Unauthenticated requests return 401
- [ ] Users cannot access other users' data
- [ ] Rate limiting prevents abuse
- [ ] SQL injection prevented
- [ ] File upload size limits enforced
- [ ] File type validation works
- [ ] Protected routes redirect to login

### Performance
- [ ] Dashboard loads in < 500ms
- [ ] Transaction list loads in < 1s
- [ ] Page load time < 2 seconds
- [ ] Large CSV import completes successfully

### Integration
- [ ] User signup → Create account → Add transaction → View dashboard
- [ ] Login → Import CSV → Confirm import → View transactions
- [ ] Create transaction → Edit → Delete → Verify balance
- [ ] Upload CSV → Map columns → Preview → Import → Verify in transactions

---

## 📦 Deliverables

- [ ] Working authentication system
- [ ] User profile and preferences management
- [ ] Account CRUD
- [ ] Transaction CRUD with advanced filtering
- [ ] Category and tag management
- [ ] Dashboard with summary and charts
- [ ] CSV/Excel import with duplicate detection
- [ ] Import history
- [ ] Responsive UI with dark mode
- [ ] All critical paths tested manually
- [ ] API documentation (markdown)
- [ ] Database migrations documented

---

**Phase 1 Complete = Ready for AI Features in Phase 2! 🚀**
