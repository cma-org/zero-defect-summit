# Vercel Environment Variables Setup

## ✅ CORS Configuration Updated

The backend CORS has been updated to allow requests from:
- `https://zero-defect-summit.vercel.app` (your frontend)
- All localhost origins (for development)

## Environment Variables Required

### 1. Frontend Environment Variables (Vercel)

In your **Vercel project settings** for `zero-defect-summit`:

```env
VITE_API_URL=https://zero-defect-server.vercel.app
```

**How to set in Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://zero-defect-server.vercel.app`
   - **Environment:** Production, Preview, Development (select all)

### 2. Backend Environment Variables (Vercel)

In your **Vercel project settings** for `zero-defect-server`:

```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
FRONTEND_URL=https://zero-defect-summit.vercel.app
NODE_ENV=production
```

**How to set in Vercel:**
1. Go to your backend Vercel project dashboard (`zero-defect-server`)
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `PORT=3001`
   - `MONGODB_URI` (your MongoDB Atlas connection string)
   - `RAZORPAY_KEY_ID` (your Razorpay key ID)
   - `RAZORPAY_KEY_SECRET` (your Razorpay key secret)
   - `RAZORPAY_WEBHOOK_SECRET` (your Razorpay webhook secret)
   - `FRONTEND_URL=https://zero-defect-summit.vercel.app`
   - `NODE_ENV=production`

## CORS Configuration

The backend is now configured to allow:
- ✅ `https://zero-defect-summit.vercel.app` (production frontend)
- ✅ `http://localhost:*` (all localhost ports for development)
- ✅ Any origin specified in `FRONTEND_URL` environment variable

## URLs Summary

| Service | URL |
|---------|-----|
| **Frontend** | https://zero-defect-summit.vercel.app |
| **Backend API** | https://zero-defect-server.vercel.app |
| **Health Check** | https://zero-defect-server.vercel.app/health |

## Testing

After setting environment variables:

1. **Test Backend Health:**
   ```bash
   curl https://zero-defect-server.vercel.app/health
   ```
   Should return: `{"status":"OK","message":"Server is running"}`

2. **Test Frontend:**
   - Visit: https://zero-defect-summit.vercel.app
   - Try submitting the registration form
   - Check browser console for any CORS errors

3. **Test API Connection:**
   - Open browser DevTools → Network tab
   - Submit registration form
   - Verify request goes to: `https://zero-defect-server.vercel.app/api/registration/save-registration`

## Troubleshooting

### CORS Error Still Appearing

1. **Check FRONTEND_URL in backend:**
   - Make sure it's set to: `https://zero-defect-summit.vercel.app`
   - No trailing slash needed (but it will work with or without)

2. **Redeploy Backend:**
   - After setting environment variables, redeploy the backend
   - Environment variables require a new deployment to take effect

3. **Check Browser Console:**
   - Look for the exact origin being blocked
   - Verify it matches `https://zero-defect-summit.vercel.app`

### API Not Responding

1. **Check Backend Deployment:**
   - Verify backend is deployed and running
   - Check Vercel logs for errors

2. **Check Environment Variables:**
   - Ensure all backend env vars are set
   - MongoDB URI is correct
   - Razorpay credentials are valid

3. **Check MongoDB Connection:**
   - Verify MongoDB Atlas allows connections from Vercel IPs
   - Or allow all IPs (0.0.0.0/0) for testing

## Local Development

For local development, create these files:

### `.env` (project root)
```env
VITE_API_URL=http://localhost:3001
```

### `backend/.env`
```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret
FRONTEND_URL=http://localhost:8080
NODE_ENV=development
```

## Next Steps

1. ✅ Set `VITE_API_URL` in frontend Vercel project
2. ✅ Set all backend env vars in backend Vercel project
3. ✅ Set `FRONTEND_URL=https://zero-defect-summit.vercel.app` in backend
4. ✅ Redeploy both frontend and backend
5. ✅ Test the registration form

---

**Note:** After setting environment variables in Vercel, you must redeploy for them to take effect!

