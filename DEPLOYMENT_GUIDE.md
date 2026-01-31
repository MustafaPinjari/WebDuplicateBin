# 🚀 Deployment Guide: Connecting Hostinger Domain to Netlify

This guide will walk you through connecting your custom domain purchased from Hostinger to your Netlify-deployed Duplicate Bin website.

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ A domain purchased from Hostinger
- ✅ Your website deployed on Netlify
- ✅ Access to both Hostinger and Netlify dashboards

## 🎯 Overview

We'll be configuring DNS records to point your Hostinger domain to your Netlify site. This involves:
1. Getting your Netlify site information
2. Configuring DNS records in Hostinger
3. Adding the custom domain in Netlify
4. Verifying the connection

---

## 📝 Step-by-Step Instructions

### Step 1: Get Your Netlify Site Information

1. **Log in to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in to your account

2. **Find Your Site**
   - Click on your Duplicate Bin site from the dashboard
   - Note down your site's URL (e.g., `amazing-site-123456.netlify.app`)

3. **Get Netlify's DNS Information**
   - In your site dashboard, go to **Site settings**
   - Click on **Domain management** in the left sidebar
   - Scroll down to **Custom domains** section
   - You'll need these Netlify DNS servers later:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```

### Step 2: Configure DNS in Hostinger

#### Option A: Using Netlify DNS (Recommended)

1. **Log in to Hostinger**
   - Go to [hostinger.com](https://hostinger.com)
   - Sign in to your account

2. **Access DNS Management**
   - Go to **Domains** section
   - Find your domain and click **Manage**
   - Click on **DNS / Name Servers**

3. **Change Name Servers**
   - Select **Use custom name servers**
   - Replace the existing name servers with Netlify's:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Click **Save Changes**

#### Option B: Using Hostinger DNS (Alternative)

If you prefer to keep Hostinger's DNS, follow these steps:

1. **Keep Hostinger Name Servers**
   - Stay in the DNS management section
   - Keep the default Hostinger name servers

2. **Add DNS Records**
   - Go to **DNS Zone Editor**
   - Add the following records:

   **For Root Domain (example.com):**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   TTL: 3600
   ```

   **For WWW Subdomain (www.example.com):**
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   TTL: 3600
   ```

CNAME | www | duplicatebin.netlify.app

   **Note:** Replace `your-site-name.netlify.app` with your actual Netlify site URL.

### Step 3: Add Custom Domain in Netlify

1. **Go Back to Netlify**
   - Navigate to your site's **Domain management** page

2. **Add Custom Domain**
   - Click **Add custom domain**
   - Enter your domain name (e.g., `yourdomain.com`)
   - Click **Verify**

3. **Add WWW Subdomain**
   - Click **Add custom domain** again
   - Enter `www.yourdomain.com`
   - Click **Verify**

4. **Set Primary Domain**
   - Choose which version should be primary (with or without www)
   - Click **Set as primary domain**

### Step 4: Enable HTTPS

1. **SSL Certificate**
   - In the **Domain management** section
   - Scroll down to **HTTPS**
   - Click **Verify DNS configuration**
   - Once verified, click **Provision certificate**

2. **Force HTTPS**
   - After the certificate is provisioned
   - Enable **Force HTTPS redirect**

---

## ⏱️ DNS Propagation Time

- **DNS changes can take 24-48 hours** to fully propagate worldwide
- **Netlify DNS**: Usually faster (2-4 hours)
- **Hostinger DNS**: May take longer (up to 48 hours)

## 🔍 Verification Steps

### Check DNS Propagation

1. **Use Online Tools**
   - [whatsmydns.net](https://whatsmydns.net)
   - Enter your domain name
   - Check if DNS records are propagating globally

2. **Command Line Check**
   ```bash
   # Check A record
   nslookup yourdomain.com
   
   # Check CNAME record
   nslookup www.yourdomain.com
   ```

### Test Your Website

1. **Try Different URLs**
   - `http://yourdomain.com`
   - `https://yourdomain.com`
   - `http://www.yourdomain.com`
   - `https://www.yourdomain.com`

2. **Check Redirects**
   - All variations should redirect to your primary domain
   - HTTP should redirect to HTTPS

---

## 🚨 Troubleshooting

### Common Issues and Solutions

#### 1. "Domain not found" Error
**Problem:** DNS records haven't propagated yet
**Solution:** Wait 24-48 hours and try again

#### 2. "SSL Certificate Failed"
**Problem:** DNS not properly configured
**Solution:** 
- Verify DNS records are correct
- Wait for DNS propagation
- Try provisioning certificate again

#### 3. "Site not loading"
**Problem:** Incorrect DNS configuration
**Solution:**
- Double-check A record points to `75.2.60.5`
- Verify CNAME record points to your Netlify site
- Clear browser cache

#### 4. "Mixed Content" Warnings
**Problem:** Some resources loading over HTTP
**Solution:**
- Enable "Force HTTPS" in Netlify
- Check all internal links use HTTPS

### DNS Record Quick Reference

| Record Type | Name | Value | Purpose |
|-------------|------|-------|---------|
| A | @ | 75.2.60.5 | Points root domain to Netlify |
| CNAME | www | your-site.netlify.app | Points www subdomain to Netlify |
| CNAME | * | your-site.netlify.app | Wildcard for all subdomains (optional) |

---

## 📞 Support Resources

### Netlify Support
- [Netlify Docs - Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Netlify Support](https://www.netlify.com/support/)

### Hostinger Support
- [Hostinger Knowledge Base](https://support.hostinger.com/)
- [DNS Management Guide](https://support.hostinger.com/en/articles/1583227-how-to-manage-dns-records)

---

## ✅ Final Checklist

Before considering the setup complete, verify:

- [ ] Domain resolves to your Netlify site
- [ ] WWW subdomain works correctly
- [ ] HTTPS is enabled and working
- [ ] HTTP redirects to HTTPS
- [ ] All pages load correctly
- [ ] No mixed content warnings
- [ ] DNS propagation is complete globally

---

## 🎉 Success!

Once everything is working:

1. **Test thoroughly** - Check all pages and functionality
2. **Update any hardcoded URLs** in your application
3. **Update social media links** and business cards
4. **Set up monitoring** to track uptime and performance

Your Duplicate Bin website should now be live on your custom domain! 🚀

---

## 📝 Notes

- Keep a backup of your DNS settings
- Document any custom configurations
- Monitor your site for the first few days after setup
- Consider setting up email forwarding if needed

**Need help?** Feel free to reach out if you encounter any issues during the setup process.