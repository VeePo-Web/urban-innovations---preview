# Urban Innovations — Uncertain / Needs Confirmation

Items from the annotated screenshots where my interpretation was a best-guess.
Confirm each one and let me know if the call was right or needs adjusting.

---

## rent.html — Renting + Leasing

### 1. Office space wording removal
**What I did:** Removed "office space" from both the intro paragraph and the Commercial section.
- Intro: `"apartments, homes, retail and office space"` → `"apartments, condos, homes, and retail space"`
- Commercial section: `"Retail and office space is commonly leased on a 5 year term"` → `"Retail space is commonly leased on a 5-year term"`

**Why uncertain:** The handwritten annotation said "delete offices" near the intro, which I interpreted as removing office-space wording throughout. But if Urban Innovations still leases office space, this copy is now inaccurate.

**Confirm:** Does Urban Innovations still lease office/commercial office space, or is it retail-only now?

---

### 2. Interac payment banner kept
**What I did:** Kept the "Pay your rent with direct payment through the Email Money Transfer system by Interac® — Learn How" banner in the footer.

**Why uncertain:** The Interac banner was not crossed out in the annotation, so I left it. But it links to an external Interac page and references a specific payment process. If this payment method is no longer offered or the link is dead, it should be removed.

**Confirm:** Is the Interac rent payment still active and the correct flow?

---

### 3. Hero image area — Brentwood only
**What I did:** Removed the Marda Loop sign image (`prop_scndmdlp.jpg`) from the sidebar slideshow (`#rnt_imgroll`).

**Why uncertain:** The annotation said "only use the Brentwood picture to appear here" with an arrow pointing at the full top image area. The main hero image (`#image_main`) is set via CSS as a background — it may already be the Brentwood property photo, or it could be a different image entirely. I only edited the slideshow, not the CSS background.

**Confirm:** Does the main hero image at the top of rent.html look correct (Brentwood property), or does the CSS background image also need replacing?

---

## about.html — About Us

### 4. "Renovation Projects" label placement
**What I did:** Added `<p class="abtxt"> Renovation Projects </p>` as a section label directly above the first redevelopment paragraph, and renamed the existing "new projects" label to `Construction Projects`.

**Why uncertain:** The handwritten "Renovation Projects" in the annotation appeared near the top of the white content box, which could mean:
- (a) A new sub-section label above the restoration paragraph — what I did
- (b) Replacing the "Real Estate Redevelopment" h2 heading entirely

**Confirm:** Should "Renovation Projects" replace the `Real Estate Redevelopment` heading, or sit below it as a sub-label (current state)?

---

### 5. Zoning notation
**What I did:** Changed `(R1–RM5 zoned)` to `(R-CG to M-C2 zoned)`.

**Why uncertain:** The handwriting in the annotation could read either "R-CG to MC-2" or "R-CG to M-C2". I used "R-CG to M-C2" (hyphen between M and C2) as it matches standard Calgary zoning notation.

**Confirm:** Is `R-CG to M-C2` the exact notation wanted, or should it be `R-CG to MC-2`?

---

## contact.html — Contact

### 6. Asterisk contact icon kept
**What I did:** Removed only the Facebook icon (`#cnctfcbk`). Kept the asterisk/chat-bubble contact icon (`#cnctlink`, image: `prop_cnctrovr.png`).

**Why uncertain:** The annotation showed a crossed-out Facebook icon and a crossed-out fax. Only the Facebook icon was clearly crossed out; the asterisk icon appeared intact. However, with Facebook gone, the asterisk icon now sits alone and may look out of place depending on the layout.

**Confirm:** Should the asterisk contact icon also be removed, leaving only the email text and application links?

---

## index.html — Home

### 7. CTA link wording
**What I did:** Replaced the bullet link lists on the home page service cards with single-line CTAs:
- Real Estate card: `Learn About Redevelopment` → links to about.html
- Renting + Leasing card: `Renting + Leasing Information` → links to rent.html

**Why uncertain:** The annotation crossed out the bullet lists but did not specify replacement wording. The text I used is functional but may not match the preferred tone or branding language.

**Confirm:** Are "Learn About Redevelopment" and "Renting + Leasing Information" the right CTA labels, or should they say something else?

---

## All Pages — Global

### 8. Copyright image outdated
**What is there:** The `copyright.png` image at the bottom of every page reads **© 2011 2014 Urban Innovations**.

**Why uncertain:** This was not annotated/crossed out in any of the screenshots so I left it untouched. But the year is now significantly outdated.

**Confirm:** Should the copyright image be updated to show the current year? If yes, the `copyright.png` image file itself needs to be recreated (it's image-based, not text in HTML).

---

### 9. Sitemap page not updated
**What is there:** `sitemap.html` still lists and links to `projects.html` in its sitemap entries.

**Why uncertain:** The sitemap was not in the annotated screenshots. Now that projects has been removed from all navigation, the sitemap should arguably reflect that too.

**Confirm:** Should `sitemap.html` be updated to remove the projects entry?

---

### 10. Meta keywords stale on some pages
**What is there:**
- `rent.html` keywords still include: `Marda Loop, Montgomery, Bowness`
- `contact.html` keywords include unrelated terms: `pine bark mulch, bark mulch, Springbank mulch, Elbow Valley mulch`

**Why uncertain:** These are invisible to visitors (meta tags only) and were not annotated. Left untouched to avoid scope creep. But they affect SEO accuracy.

**Confirm:** Should meta keywords be cleaned up to match current content?
