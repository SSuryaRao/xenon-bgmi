# Meta Pixel Verification Guide for Client

## Pixel ID: 3200634670096198

---

## Step 1: Browser Console Verification

1. Open your website in Chrome/Firefox
2. Press F12 (open Developer Tools)
3. Go to **Console** tab
4. Run these commands one by one:

### Command 1: Check if pixel loaded
```javascript
fbq
```
**Expected Result:** Should show a function, NOT "undefined"
**Screenshot this!**

---

### Command 2: Get pixel state
```javascript
fbq.getState()
```
**Expected Result:**
```javascript
{
  pixelInitializationTime: [timestamp],
  pixels: Array(1)
}
```
**Screenshot this!**

---

### Command 3: Get pixel details
```javascript
fbq.getState().pixels[0]
```
**Expected Result:**
```javascript
{
  id: "3200634670096198",
  eventCount: 1,
  agent: null,
  userData: {},
  ...
}
```
**Screenshot this!** - Shows your exact Pixel ID and event count

---

### Command 4: Check network requests
```javascript
performance.getEntriesByType('resource')
  .filter(r => r.name.includes('facebook'))
  .map(r => r.name)
```
**Expected Result:** Should show URLs containing `facebook.net` and `fbevents.js`
**Screenshot this!**

---

## Step 2: Network Tab Verification

1. Open Developer Tools (F12)
2. Go to **Network** tab
3. Filter by: `facebook` or `fbevents`
4. Reload the page
5. Look for:
   - ✅ `fbevents.js` - Status 200 (loaded successfully)
   - ✅ `tr?id=3200634670096198` - Event sent to Facebook

**Screenshot both requests!**

---

## Step 3: Meta Events Manager (Client's Side)

### Where to Check:
1. Go to: https://business.facebook.com/events_manager2/
2. Select Pixel ID: `3200634670096198`
3. Click **"Overview"** tab

### If No Data Shows:
- **Wait 15-20 minutes** - Events have delay
- Check **"Test Events"** tab instead - shows live data
- Verify pixel ownership - must be admin/owner

### Common Issues:
- ❌ Wrong pixel ID being checked
- ❌ Not admin/owner of the pixel
- ❌ Looking at wrong Business Manager account
- ❌ Ad blocker enabled (affects tracking)

---

## Step 4: Test Events (Real-Time Verification)

1. Go to Meta Events Manager
2. Select your pixel
3. Click **"Test Events"** tab
4. You should see your browser/IP listed
5. Open your website
6. **Watch events appear in real-time**

**Screenshot test events showing live data!**

---

## Step 5: Fire Manual Test Event

In browser console, run:
```javascript
fbq('trackCustom', 'ClientVerificationTest', {
  timestamp: new Date().toISOString(),
  tester: 'developer'
});
console.log('Event fired! Check Meta Events Manager');
```

Then check **Test Events** tab in Meta Events Manager - should appear within seconds.

---

## Common Client Mistakes:

### 1. Checking Wrong Location
- ❌ Ads Manager (wrong place)
- ✅ Events Manager → Overview/Test Events

### 2. Not Enough Time
- Events need 15-20 minutes to show in Overview
- Use "Test Events" for instant verification

### 3. Not Admin/Owner
- Client may not have permissions
- Ask them to add you as admin to verify

### 4. Wrong Business Manager
- Multiple accounts can cause confusion
- Confirm pixel ID matches

---

## Proof Checklist for Client:

Send client these screenshots:
- [ ] Meta Pixel Helper showing green checkmark
- [ ] Console showing `fbq.getState()` with pixel ID
- [ ] Network tab showing `fbevents.js` loaded (Status 200)
- [ ] Network tab showing `tr?id=3200634670096198` request
- [ ] Test Events tab showing live activity (if they have access)

---

## If Client Still Can't See It:

Ask them:
1. **"Which Business Manager account are you checking?"**
2. **"Are you the owner/admin of pixel 3200634670096198?"**
3. **"Are you checking Events Manager or Ads Manager?"** (Must be Events Manager)
4. **"How long has it been since you checked?"** (Need 15-20 min for Overview data)

---

## Alternative: Give Client Test Event Code

1. Client goes to: Events Manager → Test Events
2. Gets Test Event Code (e.g., `TEST12345`)
3. You add to URL: `https://your-site.com/?test_event_code=TEST12345`
4. Client can see events in real-time

This proves pixel is working immediately!
