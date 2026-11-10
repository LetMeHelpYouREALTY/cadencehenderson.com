# Google SEO Setup Guide

## ✅ **COMPLETED OPTIMIZATIONS**

Your Cadence Henderson website is now fully optimized for Google Search!

---

## 🎯 **WHAT'S BEEN ADDED**

### 1. **Sitemap.xml** ✅
- **File:** `lib/sitemap-data.ts` + `app/sitemap.xml/route.ts`
- **URL:** https://www.cadencehenderson.com/sitemap.xml
- **Includes:** Public hubs, builders, villages, rentals, news articles
- **Primary host:** `www.cadencehenderson.com` (apex 301s to www via middleware + Vercel redirects)

**Pages Indexed:**
- Homepage (priority: 1.0, daily updates)
- New Homes pages (priority: 0.9, weekly)
- All builder pages (8)
- All rental pages (3)
- All lifestyle pages (7)
- News, Contact, Maps, FAQs, etc.

---

### 2. **Robots.txt** ✅
- **File:** `app/robots.ts`
- **URL:** https://www.cadencehenderson.com/robots.txt
- **Purpose:** Tells Google which pages to crawl
- **Includes:** Link to sitemap

**Settings:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Sitemap: https://www.cadencehenderson.com/sitemap.xml
```

---

### 3. **Structured Data (Schema.org)** ✅
- **Type:** RealEstateAgent
- **Format:** JSON-LD
- **Location:** Every page (in <head>)

**Includes:**
```json
{
  "@type": "RealEstateAgent",
  "name": "Cadence Henderson Homes By Dr. Jan Duffy",
  "telephone": "+1-702-930-8672",
  "email": "DrJanSells@CadenceHenderson.com",
  "address": {
    "streetAddress": "1170 E Sunset Rd, 2nd Floor",
    "addressLocality": "Henderson",
    "addressRegion": "NV",
    "postalCode": "89011"
  },
  "geo": {
    "latitude": 36.0562609,
    "longitude": -115.0515617
  },
  "hasCredential": {
    "identifier": "S.0197614"
  },
  "memberOf": {
    "name": "Berkshire Hathaway HomeServices Nevada Properties"
  },
  "knowsAbout": [
    "Luxury Homes",
    "Investment Properties", 
    "First-Time Homebuyers",
    "Relocations",
    "Cadence Henderson"
  ]
}
```

**Benefits:**
- Shows in Google Business/Maps
- Rich snippets in search results
- Knowledge panel eligibility
- Enhanced local SEO

---

### 4. **Open Graph Metadata** ✅

**Complete OG Tags:**
- ✅ `og:site_name` - Business name
- ✅ `og:url` - Canonical URL
- ✅ `og:title` - SEO title
- ✅ `og:description` - SEO description
- ✅ `og:image` - 1200x630 preview
- ✅ `og:locale` - en_US
- ✅ `og:type` - website

**Twitter Cards:**
- ✅ Large image card
- ✅ Proper title/description
- ✅ Creator attribution

---

### 5. **Meta Tags Optimization** ✅

**Page Title:**
```
Cadence Henderson Homes By Dr. Jan Duffy - Master Planned Community
```

**Description:**
```
Discover Cadence, a premier master-planned community in Henderson, Nevada. 
Featuring new homes, exceptional amenities, and stunning views. 
Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices. 
Call 702-930-8672
```

**Keywords Naturally Included:**
- Cadence Henderson
- Henderson Nevada
- Master-planned community
- New homes
- Real estate agent
- Berkshire Hathaway
- Dr. Jan Duffy
- REALTOR

---

## 📋 **NEXT STEPS FOR GOOGLE**

### **Step 1: Google Search Console** (Required) — **www primary**

1. Go to https://search.google.com/search-console
2. Add a **URL-prefix** property: `https://www.cadencehenderson.com` (preferred)
3. Optionally also add the Domain property `cadencehenderson.com`, then set **www as preferred** / confirm apex → www 301s
4. Verify (DNS TXT recommended)
5. Submit sitemap: `https://www.cadencehenderson.com/sitemap.xml`
6. Use URL Inspection on a few apex URLs — they should report **301 → www**
7. Request indexing for key hubs after production deploy

**Site already enforces www:**
- `metadataBase` + canonicals = `https://www.cadencehenderson.com`
- `middleware.ts` 301 apex → www (and HTTP → HTTPS)
- `vercel.json` host redirect apex → www
- `robots.ts` `host` + sitemap on www

### **Step 2: Google Business Profile** (Highly Recommended)

1. Go to https://business.google.com
2. Create/claim business listing
3. Use exact name matching site NAP / CONTACT_INFO
4. Category: Real Estate Agent
5. Address: 1170 E Sunset Rd, 2nd Floor, Henderson, NV 89011
6. Phone: 702-930-8672
7. Website: https://www.cadencehenderson.com
8. Verify with postcard or phone
9. Add photos and business hours

### **Step 3: Google Analytics** (Recommended)

Add tracking code to `app/layout.tsx`:

```tsx
// Add to layout.tsx <head> section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### **Step 4: Bing Webmaster Tools** (Optional)

Submit sitemap to Bing as well for additional search traffic.

---

## 🎯 **SEO KEYWORDS TARGETED**

**Primary Keywords:**
- Cadence Henderson
- Henderson Nevada homes
- Master-planned community Henderson
- New homes Henderson NV
- Cadence real estate

**Long-tail Keywords:**
- Homes for sale in Cadence Henderson
- Cadence Henderson real estate agent
- Dr. Jan Duffy Henderson realtor
- Luxury homes Henderson Nevada
- Berkshire Hathaway Henderson

**Local SEO:**
- Henderson NV real estate
- Las Vegas area homes
- Summerlin alternative
- Lake Mead area homes

---

## 📊 **ON-PAGE SEO CHECKLIST**

✅ **Technical SEO:**
- [x] Sitemap.xml created
- [x] Robots.txt created
- [x] Structured data (Schema.org)
- [x] Meta descriptions on all pages
- [x] Canonical URLs set
- [x] Mobile-responsive design
- [x] Fast page load (Next.js optimized)
- [x] HTTPS ready

✅ **Content SEO:**
- [x] Unique title tags
- [x] H1 tags on every page
- [x] Proper heading hierarchy (H1-H6)
- [x] Alt text on images
- [x] Internal linking structure
- [x] 28+ pages of quality content
- [x] Local keywords throughout

✅ **Local SEO:**
- [x] NAP consistency (Name, Address, Phone)
- [x] Google Maps embedded
- [x] Local area pages (Henderson, Las Vegas)
- [x] Business license displayed
- [x] Service area defined in schema
- [x] Geo coordinates in schema

✅ **User Experience:**
- [x] Fast loading
- [x] Mobile-first design
- [x] Clear navigation
- [x] Contact info on every page
- [x] Call-to-action buttons
- [x] Professional design

---

## 🚀 **EXPECTED GOOGLE RESULTS**

Once indexed, your site should appear for:

**Branded Searches:**
- "Cadence Henderson homes"
- "Dr Jan Duffy realtor"
- "Homes by Dr Jan Duffy"

**Local Searches:**
- "Henderson NV real estate agent"
- "Cadence homes for sale"
- "Berkshire Hathaway Henderson"

**Service Searches:**
- "Master-planned communities Henderson"
- "New homes Henderson Nevada"
- "Luxury homes Henderson"

---

## 📱 **GOOGLE MY BUSINESS OPTIMIZATION**

**When Setting Up:**
- Business Name: Cadence Henderson Homes By Dr. Jan Duffy
- Category: Real Estate Agent
- Secondary: Real Estate Consultant
- Description: Specializing in Cadence Henderson master-planned community. Expert in luxury homes, investment properties, and first-time buyers. REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.

**Services to List:**
- Home Buying Assistance
- Home Selling Assistance
- Market Analysis
- Investment Property Consulting
- Relocation Services
- First-Time Buyer Programs

**Photos to Upload:**
- Office exterior/interior
- Cadence community photos
- Professional headshot
- Home listings
- Client testimonials (with permission)

---

## 🎊 **SITE IS GOOGLE-READY!**

All technical SEO completed. Your site is fully prepared for:
- ✅ Google Search indexing
- ✅ Google Business Profile
- ✅ Google Maps integration
- ✅ Rich snippets in search results
- ✅ Local search rankings
- ✅ Social media sharing

**Next:** Submit to Google Search Console and claim your Google Business Profile! 🚀
