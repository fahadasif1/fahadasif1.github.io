import { Photo, SocialLink, NavigationItem } from './types';

// =============================================================================
// 📝 EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO
// =============================================================================

export const SITE_CONFIG = {
  title: "Fahad Asif",
  description: "Editorial & Portrait Photography Portfolio of Fahad Asif",
  email: "fahad.asif1@yahoo.com",
  year: new Date().getFullYear(),
};

// -----------------------------------------------------------------------------
// NAVIGATION LINKS
// -----------------------------------------------------------------------------
export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// -----------------------------------------------------------------------------
// HERO SECTION
// -----------------------------------------------------------------------------
export const HERO_CONTENT = {
  title: "Fahad Asif",
  subtitle: "Visual Storyteller & Photographer",
  // 📸 REPLACE: Background image for the top section
  backgroundImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop", 
  ctaText: "View Portfolio",
  ctaLink: "#gallery"
};

// -----------------------------------------------------------------------------
// ABOUT SECTION
// -----------------------------------------------------------------------------
export const ABOUT_CONTENT = {
  // 📸 REPLACE: Your profile picture
  profileImage: "https://drive.google.com/thumbnail?id=1ATfRfpycLpPqlnmTwkEVgAahm_3S5g5v&sz=w1000", 
  heading: "Behind the Lens",
  bio: [
    `I am Fahad Asif, a visual storyteller driven by a passion for capturing authentic, unscripted moments. My work focuses on the human experience, using light, shadow, silence, and movement to create images that feel honest and emotionally grounded.`,
    `I believe a photograph is more than an image — it is a moment preserved, a fleeting second made lasting. Through a thoughtful and intuitive approach, I aim to tell stories that resonate and leave a lasting impression.`,
    `Available for collaborations, creative projects, and commissioned work.`
  ],
  stats: []
};

// -----------------------------------------------------------------------------
// CONTACT SECTION
// -----------------------------------------------------------------------------
export const CONTACT_CONTENT = {
  heading: "Let's Create Together",
  text: "Interested in working together? Fill out the form below or send me an email directly.",
  email: "fahad.asif1@yahoo.com",
  socials: [
    { platform: "Instagram", url: "https://instagram.com/fahadpixelates", iconName: "instagram" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/fahadasif1", iconName: "linkedin" },
  ] as SocialLink[]
};

// -----------------------------------------------------------------------------
// GALLERY IMAGES
// -----------------------------------------------------------------------------
// NOTE: Google Drive images use the thumbnail endpoint to ensure they load on external sites.
export const PORTFOLIO_IMAGES: Photo[] = [
  // --- TOP PRIORITY ---
  {
    id: 13,
    title: "Portfolio XXI",
    category: "Stoke-on-Trent",
    url: "https://drive.google.com/thumbnail?id=15jTUbtJxfgR0NS7E0rhQNzO6kuq6u5PB&sz=w1000"
  },
  {
    id: 20,
    title: "Portfolio XX",
    category: "Wales",
    url: "https://drive.google.com/thumbnail?id=1f3BVGHgASPwxs9Y7p0t61LwNbf06nTur&sz=w1000"
  },
  {
    id: 21,
    title: "Portfolio XIX",
    category: "Coventry",
    url: "https://drive.google.com/thumbnail?id=1H3MERzu4_doyYTFw5_SByFYWwEfD0u-a&sz=w1000"
  },
  {
    id: 18,
    title: "Portfolio XVIII",
    category: "Scotland",
    url: "https://drive.google.com/thumbnail?id=1S_7YRdSKLBiP5N8E8HDqx9uRioFuH050&sz=w1000"
  },
  
  // --- REMAINING IMAGES ---
  {
    id: 1,
    title: "Portfolio XVII",
    category: "Rugby Train Station",
    url: "https://drive.google.com/thumbnail?id=12hRyhzhReinw4j9J4-vUQB0HyMAHYoXe&sz=w1000"
  },
  {
    id: 2,
    title: "Portfolio XVI",
    category: "Earlsdon Arts Hall",
    url: "https://drive.google.com/thumbnail?id=1vdOoO6XZaO4n5ESafGK_0WNWMe4sNwU3&sz=w1000"
  },
  {
    id: 3,
    title: "Portfolio XV",
    category: "Coventry Vintage Pub",
    url: "https://drive.google.com/thumbnail?id=1RRgOXaH22LuQdelUJcdHtb5XejBBs16o&sz=w1000"
  },
  {
    id: 4,
    title: "Portfolio XIV",
    category: "Scotland",
    url: "https://drive.google.com/thumbnail?id=1GrIpQPiOg9ymPF3w0n3JtBvNOH3nl5v6&sz=w1000"
  },
  {
    id: 5,
    title: "Portfolio XIII",
    category: "Coventry Cathedral Way",
    url: "https://drive.google.com/thumbnail?id=1IMgODQnEKbD0I8QNivCOdFWCJhuN4Onl&sz=w1000"
  },
  {
    id: 6,
    title: "Portfolio XII",
    category: "Birmingham City Centre",
    url: "https://drive.google.com/thumbnail?id=1rxzu7cg1vK4QMh4VQzspNgCQqU3t_PXp&sz=w1000"
  },
  {
    id: 7,
    title: "Portfolio XI",
    category: "Coventry Cathedral",
    url: "https://drive.google.com/thumbnail?id=1RR71LswijF5_IQbtebkX0jzHHfzV4Bbp&sz=w1000"
  },
  {
    id: 8,
    title: "Portfolio X",
    category: "Earlsdon",
    url: "https://drive.google.com/thumbnail?id=1_dc-0DK2n58u5vnvjdRWWOj7iG0RXypR&sz=w1000"
  },
  {
    id: 9,
    title: "Portfolio IX",
    category: "Portrait",
    url: "https://drive.google.com/thumbnail?id=1LKAxjqnEaGU6ejgFFxTQCZc33ZmGSua-&sz=w1000"
  },
  {
    id: 10,
    title: "Portfolio VIII",
    category: "Editorial",
    url: "https://drive.google.com/thumbnail?id=1s4GeCPDLTE5LLDNEg7hoD4sEw60VR9Lv&sz=w1000"
  },
  {
    id: 11,
    title: "Portfolio VII",
    category: "Landscape",
    url: "https://drive.google.com/thumbnail?id=1kOPM0gT67Hvt3lIc_cgrgHlGMJjxslqi&sz=w1000"
  },
  {
    id: 12,
    title: "Portfolio VI",
    category: "Wales",
    url: "https://drive.google.com/thumbnail?id=1kVzJCXQ81JN_NCvkGf-Rd9WMqXYvfpzP&sz=w1000"
  },
  {
    id: 14,
    title: "Portfolio V",
    category: "Birmingham",
    url: "https://drive.google.com/thumbnail?id=1GYsVsWHrwkzd7ZEhEZzW2tVS8PQJE6jU&sz=w1000"
  },
  {
    id: 15,
    title: "Portfolio IV",
    category: "Birmingham",
    url: "https://drive.google.com/thumbnail?id=1hVKpz8sW8poPcVs3968kL1wbKadk5ikC&sz=w1000"
  },
  {
    id: 16,
    title: "Portfolio III",
    category: "Stoke-on-Trent",
    url: "https://drive.google.com/thumbnail?id=1s_F262nTeoUNfgic1pxNeVn5oBHgbfP0&sz=w1000"
  },
  {
    id: 17,
    title: "Portfolio II",
    category: "Stoke-on-Trent",
    url: "https://drive.google.com/thumbnail?id=10G51VxzQkQbHE31HHzRcpNrsqtKk3TDH&sz=w1000"
  },
  {
    id: 19,
    title: "Portfolio I",
    category: "Wales",
    url: "https://drive.google.com/thumbnail?id=1H-uuH8MLlXw1mLbNL8ogbQS01_Pl53kO&sz=w1000"
  },
];