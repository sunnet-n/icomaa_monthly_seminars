# 📧 Email Integration Setup Guide

Your contact form is now configured with EmailJS! Follow these steps to receive emails.

---

## ✅ OPTION 1: EmailJS (Recommended - Easiest)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free plan available)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (easiest)
   - Outlook
   - Yahoo
   - Or custom SMTP
4. Connect your **awezowsunnet@gmail.com** account
5. Note your **Service ID** (e.g., "service_abc123")

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set template content:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the ICOMAA website contact form.
```

4. Note your **Template ID** (e.g., "template_xyz789")

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "abc123XYZ")

### Step 5: Update Your Code
In `/components/Contact.tsx` (lines 27-29), replace:

```typescript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";      // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";    // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";      // Replace with your Public Key
```

### Step 6: Test
1. Go to your contact page
2. Fill out the form
3. Click "Send Message"
4. Check **awezowsunnet@gmail.com** inbox!

**✅ Done! You'll receive emails instantly.**

---

## 📋 OPTION 2: Formspree (Alternative - No Code Setup)

1. Go to https://formspree.io/
2. Sign up for free
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/abc123`)
5. Update the form action:

```typescript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  onSubmit={handleSubmit}
>
```

---

## 📋 OPTION 3: Netlify Forms (If Hosted on Netlify)

Your form already has Netlify Forms attributes! If you're hosting on Netlify:

1. Deploy your site to Netlify
2. Netlify automatically detects the form
3. Go to Netlify Dashboard → "Forms"
4. Set up email notifications:
   - Settings → Form notifications
   - Add **awezowsunnet@gmail.com**
5. Done! You'll receive emails automatically

**Note:** The form attributes are already in your code (lines 67-70):
```typescript
data-netlify="true"
netlify-honeypot="bot-field"
```

---

## 💡 RECOMMENDED: EmailJS Setup

**Why EmailJS?**
- ✅ Works on any hosting (Vercel, Netlify, GitHub Pages)
- ✅ Free tier: 200 emails/month
- ✅ No backend needed
- ✅ Easy setup (5 minutes)
- ✅ Reliable delivery
- ✅ Email tracking

---

## 🎯 Quick Test After Setup

1. Fill out your contact form
2. Use a test email
3. Check spam folder if email doesn't arrive
4. Add EmailJS to your email whitelist

---

## ⚠️ Important Notes

- **Gmail**: May need to enable "Less secure app access" or use App Password
- **Rate Limits**: Free EmailJS = 200 emails/month
- **Spam**: First email might go to spam - mark as "Not Spam"
- **Email Template**: Customize to your preferences

---

## 🆘 Need Help?

If you have issues:
1. Check EmailJS dashboard for error logs
2. Verify all credentials are correct
3. Check browser console for errors
4. Test with a different email address

---

## 📱 Newsletter Form

The newsletter form in the footer also needs EmailJS setup. After setting up EmailJS for the contact form, I can help you connect the newsletter too!

---

**Ready to set up? Let me know if you need help with any step!** 🚀
