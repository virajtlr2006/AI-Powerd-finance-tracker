# Accounts - Simple Guide

## What is an Account?
A place where you keep money (bank account, credit card, cash, etc.)

---

## Information We Store

| Field | Meaning | Example |
|-------|---------|---------|
| Name | What you call it | "Chase Checking" |
| Type | Kind of account | Checking, Savings, Credit Card, Cash |
| Institution | Bank name | "Chase Bank" |
| Initial Balance | Starting amount | $5,000 |
| Current Balance | Amount now | $4,750 |
| Currency | Money type | USD, EUR, GBP |
| Color | Visual ID | Blue, Green |
| Icon | Visual symbol | Bank icon |
| Active | Still using it? | Yes/No |

---

## What You Can Do

### 1. View All Accounts
See all your accounts with balances and filters

### 2. View One Account
See detailed info + recent transactions

### 3. Create Account
**Required:** Name, Type, Initial Balance  
**Optional:** Bank name, color, icon, notes

### 4. Update Account
Change name, bank, color, icon, or notes  
**Cannot change:** Initial balance, account type

### 5. Delete Account
Marks as inactive (safe - keeps history)  
**Cannot delete** if it has transactions

### 6. Check Balance
Shows current balance calculated from all transactions

---

## Security
- Only you can see your accounts
- Must be logged in
- Can only edit your own accounts

---

## Quick Examples

**Add Account:** Name → Type → Balance → Save  
**Track Multiple:** Add all accounts → See total on dashboard  
**Close Account:** Delete → Marks inactive → Keeps history  

---

## API Endpoints

| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | `/api/accounts` | List all accounts (with filters: type, is_active) |
| GET | `/api/accounts/:id` | Get one account details |
| POST | `/api/accounts` | Create new account |
| PUT | `/api/accounts/:id` | Update account |
| DELETE | `/api/accounts/:id` | Delete account (soft delete) |
| GET | `/api/accounts/:id/balance` | Get account balance |

---

## Frontend Pages

| Page | What it shows |
|------|---------------|
| `/accounts` | List of all accounts (grid/list view, filters, search) |
| `/accounts/add` | Form to create new account |
| `/accounts/[id]` | Account details + recent transactions |

---

## Test Cases

### Database
- [ ] Account created with correct user_id
- [ ] Initial balance equals current balance on creation
- [ ] Account soft delete (is_active = false)
- [ ] Foreign key to user works

### Backend API
- [ ] GET /api/accounts returns user's accounts only
- [ ] GET /api/accounts filters by type and is_active
- [ ] GET /api/accounts/:id fails for other user's account
- [ ] POST /api/accounts creates account successfully
- [ ] POST /api/accounts validates required fields
- [ ] PUT /api/accounts/:id updates account
- [ ] DELETE /api/accounts/:id soft deletes account
- [ ] DELETE /api/accounts/:id prevents deletion with transactions
- [ ] GET /api/accounts/:id/balance calculates correctly

### Frontend
- [ ] Accounts list displays all accounts
- [ ] Account creation form validates fields
- [ ] Account created successfully
- [ ] Account edit updates data
- [ ] Account delete confirmation works
- [ ] Account type filter works
- [ ] Account search works
- [ ] Account balance displays correctly

---

**That's it!** Simple account tracking for your finances.
