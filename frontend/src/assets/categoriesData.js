// ============================================================
// HOTNIGHTIES - ALL 67 CATEGORIES REGISTRY
// Standardized square 480x480 category artwork & taxonomy
// ============================================================

const categoryImageModules = import.meta.glob('./catagoryies/*.webp', {
  eager: true,
  import: 'default',
});

export const getImageForFile = (fileName) => {
  const key = `./catagoryies/${fileName}`;
  return categoryImageModules[key] || '';
};

export const CATEGORY_GROUPS = [
  { id: 'all', label: 'All Categories', count: 67 },
  { id: 'bras', label: 'Bras & Support', count: 30 },
  { id: 'nightwear', label: 'Nightwear & Sleepwear', count: 20 },
  { id: 'lingerie', label: 'Sexy Lingerie', count: 7 },
  { id: 'panties', label: 'Panties & Sets', count: 3 },
  { id: 'accessories', label: 'Accessories & Hosiery', count: 3 },
  { id: 'collections', label: 'Main Collections', count: 4 },
];

export const allCategoriesData = [
  // --- Bras & Support (30) ---
  {
    id: 'aire-bra',
    title: 'Aire Bra',
    slug: 'aire-bra',
    group: 'bras',
    file: 'Aire-Bra-NN-01_large.webp',
    keywords: ['aire', 'comfort', 'seamless', 'bra'],
    description: 'Ultra-lightweight, breathable aire bra for everyday zero-pressure comfort.'
  },
  {
    id: 'branded-bra',
    title: 'Branded Bra',
    slug: 'branded-bra',
    group: 'bras',
    file: 'Branded-Bra-NN-01_large.webp',
    keywords: ['branded', 'luxury', 'bra'],
    description: 'Premium imported designer bras with high-end fabric and contour fit.'
  },
  {
    id: 'bridal-bra',
    title: 'Bridal Bra',
    slug: 'bridal-bra',
    group: 'bras',
    file: 'Bridal-Bra-NN-02_large.webp',
    keywords: ['bridal', 'wedding', 'fancy', 'bra'],
    description: 'Exquisite bridal bras featuring delicate lace, satin trims, and flattering lift.'
  },
  {
    id: 'classic-bra',
    title: 'Classic Bra',
    slug: 'classic-bra',
    group: 'bras',
    file: 'Classic-Bra-NN-01_large.webp',
    keywords: ['classic', 'bra', 'everyday', 'wire-free'],
    description: 'Everyday staple classic bras offering dependable support and timeless elegance.'
  },
  {
    id: 'cotton-bra',
    title: 'Cotton Bra',
    slug: 'cotton-bra',
    group: 'bras',
    file: 'Cotton-Bra-NN-02_large.webp',
    keywords: ['cotton', 'breathable', 'soft', 'bra'],
    description: '100% skin-friendly pure cotton bras crafted for warm weather and sensitive skin.'
  },
  {
    id: 'double-padded-bra',
    title: 'Double Padded Bra',
    slug: 'double-padded-bra',
    group: 'bras',
    file: 'Douple-Padded-Bra-NN-02_large.webp',
    keywords: ['double padded', 'padded', 'push up', 'bra'],
    description: 'Maximum cleavage enhancement and full cup enhancement with plush double padding.'
  },
  {
    id: 'embroidered-bra',
    title: 'Embroidered Bra',
    slug: 'embroidered-bra',
    group: 'bras',
    file: 'Embroidered-Bra-NN-02_large.webp',
    keywords: ['embroidered', 'embroidery', 'lace', 'bra'],
    description: 'Detailed needlework embroidery and sheer accents for a romantic silhouette.'
  },
  {
    id: 'everyday-bra',
    title: 'Everyday Bra',
    slug: 'everyday-bra',
    group: 'bras',
    file: 'Every-Day-Bra-NN-02_large.webp',
    keywords: ['everyday', 'daily', 'comfort', 'bra'],
    description: 'Your go-to daily comfort bra designed with soft straps and non-digging bands.'
  },
  {
    id: 'fancy-bra',
    title: 'Fancy Bra',
    slug: 'fancy-bra',
    group: 'bras',
    file: 'Fancy-Bra-NN-02_large.webp',
    keywords: ['fancy', 'party', 'glamour', 'bra'],
    description: 'Glamorous and embellished bras created for parties, evenings, and weddings.'
  },
  {
    id: 'foam-bra',
    title: 'Foam Bra',
    slug: 'foam-bra',
    group: 'bras',
    file: 'Foam-Bra-NN-02_large.webp',
    keywords: ['foam', 'molded', 'cup', 'bra'],
    description: 'Soft foam molded cups that prevent nipple show-through under tight shirts.'
  },
  {
    id: 'front-open-bra',
    title: 'Front Open Bra',
    slug: 'front-open-bra',
    group: 'bras',
    file: 'Front-Open-Bra-2-NN_large.webp',
    keywords: ['front open', 'front closure', 'front', 'bra'],
    description: 'Effortless front clasp closure paired with smooth racerback and butterfly lace backs.'
  },
  {
    id: 'imported-bra',
    title: 'Imported Bra',
    slug: 'imported-bra',
    group: 'bras',
    file: 'Imported-Bra-NN-01_large.webp',
    keywords: ['imported', 'international', 'bra'],
    description: 'Directly sourced international standard lingerie engineered with superior elastic fibers.'
  },
  {
    id: 'lace-bra',
    title: 'Lace Bra',
    slug: 'lace-bra',
    group: 'bras',
    file: 'Lace-Bra-NN-01_large.webp',
    keywords: ['lace', 'scalloped', 'sheer', 'bra'],
    description: 'Feminine French floral lace detailing with scalloped borders and supportive frames.'
  },
  {
    id: 'net-bra',
    title: 'Net Bra',
    slug: 'net-bra',
    group: 'bras',
    file: 'Net-Bra-NN-02_large.webp',
    keywords: ['net', 'mesh', 'sheer', 'bra'],
    description: 'Lightweight see-through mesh and net construction for an airy, barely-there feel.'
  },
  {
    id: 'non-padded-bra',
    title: 'Non-Padded Bra',
    slug: 'non-padded-bra',
    group: 'bras',
    file: 'Non-Padded-Bra-NN-02_large.webp',
    keywords: ['non padded', 'unpadded', 'natural', 'bra'],
    description: 'Natural shape enhancement without bulky padding for breezy all-day wear.'
  },
  {
    id: 'non-wired-bra',
    title: 'Non-Wired Bra',
    slug: 'non-wired-bra',
    group: 'bras',
    file: 'Non-Wired-Bra-NN-07_large.webp',
    keywords: ['non wired', 'wire free', 'wireless', 'bra'],
    description: 'Total freedom from underwires with wide supportive underbands that never poke.'
  },
  {
    id: 'nursing-maternity-bra',
    title: 'Nursing & Maternity Bra',
    slug: 'nursing-maternity-bra',
    group: 'bras',
    file: 'Nursing-Bra-Maternity-Bra-NN-01_large.webp',
    keywords: ['nursing', 'maternity', 'feeding', 'drop cup', 'bra'],
    description: 'Easy one-hand clip drop cups and expandable stretch bands for nursing mothers.'
  },
  {
    id: 'party-bra',
    title: 'Party Bra',
    slug: 'party-bra',
    group: 'bras',
    file: 'Party-Bra-NN-02_large.webp',
    keywords: ['party', 'evening', 'backless', 'bra'],
    description: 'Statement party bras with low backs, plunge necklines, and glitter details.'
  },
  {
    id: 'plus-size-bra',
    title: 'Plus Size Bra',
    slug: 'plus-size-bra',
    group: 'bras',
    file: 'Plus-Size-Bra-NN-01_large.webp',
    keywords: ['plus size', 'full coverage', 'large cup', 'bra'],
    description: 'Heavy bust support with wide cushioned straps, 3-row hooks, and side minimizer panels.'
  },
  {
    id: 'push-up-bra',
    title: 'Push-Up Bra',
    slug: 'push-up-bra',
    group: 'bras',
    file: 'Push-Up-Bra-NN-04_large.webp',
    keywords: ['push up', 'cleavage', 'lift', 'bra'],
    description: 'Instantly adds 1 to 2 cup sizes while creating sensational lift and cleavage.'
  },
  {
    id: 'semi-transparent-bra',
    title: 'Semi-Transparent Bra',
    slug: 'semi-transparent-bra',
    group: 'bras',
    file: 'Semi-Transparent-Bra-NN-04_large.webp',
    keywords: ['semi transparent', 'sheer', 'peek-a-boo', 'bra'],
    description: 'Artfully crafted sheer panels and solid cup zones for alluring subtlety.'
  },
  {
    id: 'sexy-bra',
    title: 'Sexy Bra',
    slug: 'sexy-bra',
    group: 'bras',
    file: 'Sexy-Bra-NN-01_large.webp',
    keywords: ['sexy', 'erotic', 'strappy', 'bra'],
    description: 'Provocative cutouts, cage straps, and sensual necklines designed to stun.'
  },
  {
    id: 'silicone-bra',
    title: 'Silicone Bra',
    slug: 'silicone-bra',
    group: 'bras',
    file: 'Silicone-Bra-NN-02_large.webp',
    keywords: ['silicone', 'stick-on', 'backless', 'strapless', 'bra'],
    description: 'Self-adhesive medical silicone cups for backless and strapless dresses.'
  },
  {
    id: 'single-padded-bra',
    title: 'Single Padded Bra',
    slug: 'single-padded-bra',
    group: 'bras',
    file: 'Single-Padded-Bra-NN-02_large.webp',
    keywords: ['single padded', 'lightly padded', 'bra'],
    description: 'Light modesty padding providing gentle shape and zero bulk under garments.'
  },
  {
    id: 'sports-bra',
    title: 'Sports Bra',
    slug: 'sports-bra',
    group: 'bras',
    file: 'Sports-Bra-NN-05_large.webp',
    keywords: ['sports', 'gym', 'workout', 'running', 'bra'],
    description: 'High-impact bounce control, moisture-wicking fabric, and ergonomic racerbacks.'
  },
  {
    id: 'strapless-bra',
    title: 'Strapless Bra',
    slug: 'strapless-bra',
    group: 'bras',
    file: 'Strapless-Bra-NN-01_large.webp',
    keywords: ['strapless', 'bandeau', 'slip-free', 'bra'],
    description: 'Anti-slip silicone gripper bands ensure it stays locked in place without straps.'
  },
  {
    id: 't-shirt-bra',
    title: 'T-Shirt Bra',
    slug: 't-shirt-bra',
    group: 'bras',
    file: 'T-shirt-Bra-NN-02_large.webp',
    keywords: ['t shirt', 'seamless', 'invisible', 'bra'],
    description: 'Ultra-smooth seamless cups that remain completely invisible under fitted tees.'
  },
  {
    id: 'transparent-bra',
    title: 'Transparent Bra',
    slug: 'transparent-bra',
    group: 'bras',
    file: 'Transparent-Bra-NN-01_large.webp',
    keywords: ['transparent', 'clear straps', 'invisible', 'bra'],
    description: 'Clear TPU back bands and invisible straps designed for sheer fashion cuts.'
  },
  {
    id: 'underwired-bra',
    title: 'Underwired Bra',
    slug: 'underwired-bra',
    group: 'bras',
    file: 'Underwired-Bra-NN-02_large.webp',
    keywords: ['underwired', 'wired', 'structured', 'bra'],
    description: 'Precision underwire structure offering unmatched upward contour and shape definition.'
  },
  {
    id: 'bras-collection',
    title: 'Bras Collection',
    slug: 'bras',
    group: 'bras',
    file: 'Bra-Online-Shopping-in-Pakistan-2_result_large.webp',
    keywords: ['bras', 'bra', 'collection'],
    description: 'Explore the full spectrum of bras suited for all bust sizes and occasions.'
  },

  // --- Nightwear & Sleepwear (20) ---
  {
    id: 'bridal-nighty',
    title: 'Bridal Nighty',
    slug: 'bridal-nighty',
    group: 'nightwear',
    file: 'Bridal-Nighty-NN_large.webp',
    keywords: ['bridal', 'wedding', 'honeymoon', 'nighty'],
    description: 'Luxury bridal nightwear sets crafted with silk, flowing chiffon, and French lace.'
  },
  {
    id: 'cami-sets',
    title: 'Cami Sets',
    slug: 'cami-sets',
    group: 'nightwear',
    file: 'Cami-Sets-Category-Banner-NN_large.webp',
    keywords: ['cami', 'set', 'shorts', 'camisole'],
    description: 'Coordinated camisole tops and cheeky lounge shorts in satin and soft modal.'
  },
  {
    id: 'cotton-nighty',
    title: 'Cotton Nighty',
    slug: 'cotton-nighty',
    group: 'nightwear',
    file: 'Cotton-Nighty-NN_large.webp',
    keywords: ['cotton', 'nighty', 'night dress', 'breathable'],
    description: 'Cool, soothing 100% cotton nighties ideal for restful sleep through warm nights.'
  },
  {
    id: 'fancy-nighty',
    title: 'Fancy Nighty',
    slug: 'fancy-nighty',
    group: 'nightwear',
    file: 'Fancy-Nighty-NN_large.webp',
    keywords: ['fancy', 'embroidered', 'nighty'],
    description: 'Embellished evening nighties featuring sheer overlays, slits, and satin ties.'
  },
  {
    id: 'honeymoon-nighty',
    title: 'Honeymoon Nighty',
    slug: 'honeymoon-nighty',
    group: 'nightwear',
    file: 'Honeymoon-Nighty-NN_33386b65-ccdf-4ba3-924c-69f86984c779_large.webp',
    keywords: ['honeymoon', 'seductive', 'sexy', 'nighty'],
    description: 'Unforgettable romantic styles crafted for intimacy and romantic getaways.'
  },
  {
    id: 'jersey-nighty',
    title: 'Jersey Nighty',
    slug: 'jersey-nighty',
    group: 'nightwear',
    file: 'Jersey-Nighty-NN_large.webp',
    keywords: ['jersey', 'stretch', 'soft', 'nighty'],
    description: 'Super-stretchy, figure-skimming knit jersey night dresses for casual relaxation.'
  },
  {
    id: 'lace-nighty',
    title: 'Lace Nighty',
    slug: 'lace-nighty',
    group: 'nightwear',
    file: 'Lace-Nighty-NN_large.webp',
    keywords: ['lace', 'chemise', 'babydoll', 'nighty'],
    description: 'Delicate all-over lace and scalloped hem chemises that feel featherlight.'
  },
  {
    id: 'ladies-gown',
    title: 'Ladies Night Gown',
    slug: 'ladies-gown',
    group: 'nightwear',
    file: 'Ladies-Gown-NN_large.webp',
    keywords: ['gown', 'robe', 'maxi', 'nightdress'],
    description: 'Regal, ankle-length flowing satin gowns with coordinating robes.'
  },
  {
    id: 'long-nighty',
    title: 'Long Nighty',
    slug: 'long-nighty',
    group: 'nightwear',
    file: 'Long-Nighty-NN_29e00f85-a365-4a04-a1fa-16d2428996fd_large.webp',
    keywords: ['long', 'maxi', 'floor length', 'nighty'],
    description: 'Full-length coverage with graceful drape and flattering side splits.'
  },
  {
    id: 'net-nighty',
    title: 'Net Nighty',
    slug: 'net-nighty',
    group: 'nightwear',
    file: 'Net-Nighty-Category-Banner-NN_large.webp',
    keywords: ['net', 'mesh', 'see through', 'nighty'],
    description: 'Sensual see-through net nighties featuring backless cuts and ribbon ties.'
  },
  {
    id: 'ladies-nightdress',
    title: 'Nightdresses',
    slug: 'ladies-nightdress',
    group: 'nightwear',
    file: 'Nightdress-NN-02_large.webp',
    keywords: ['nightdress', 'slip', 'chemise', 'sleepwear'],
    description: 'Chic knee-length and midi nightdresses for comfort and elegance.'
  },
  {
    id: 'ladies-nighty',
    title: 'Nighties',
    slug: 'ladies-nighty',
    group: 'nightwear',
    file: 'Nighties-NN_large.webp',
    keywords: ['nighty', 'nighties', 'hot nighty'],
    description: 'Our signature collection of alluring nighties made with love and fine craft.'
  },
  {
    id: 'ladies-nighty-sets',
    title: 'Nighty Sets',
    slug: 'ladies-nighty-sets',
    group: 'nightwear',
    file: 'Nighty-Sets-NN_large.webp',
    keywords: ['set', 'sets', 'multi piece', 'bundle', 'nighty'],
    description: 'Luxury 3-piece, 4-piece, and 5-piece bridal robe bundles.'
  },
  {
    id: 'pyjamas',
    title: 'Pyjamas & Loungewear',
    slug: 'pyjamas',
    group: 'nightwear',
    file: 'Pyjama-NN_large.webp',
    keywords: ['pyjama', 'pajama', 'trouser', 'shirt', 'loungewear'],
    description: 'Button-down silk pajama sets and cozy loungewear bottoms.'
  },
  {
    id: 'satin-nighty',
    title: 'Satin Nighty',
    slug: 'satin-nighty',
    group: 'nightwear',
    file: 'Satin-Nighty-NN_large.webp',
    keywords: ['satin', 'glossy', 'silk', 'nighty'],
    description: 'Glistening satin slips that glide effortlessly over skin with deep V-necks.'
  },
  {
    id: 'sexy-nighty',
    title: 'Sexy Nighty',
    slug: 'sexy-nighty',
    group: 'nightwear',
    file: 'Sexy-Nighty-NN_large.webp',
    keywords: ['sexy', 'erotic', 'babydoll', 'nighty'],
    description: 'Intense allure, plunging necks, and sheer details made to ignite sparks.'
  },
  {
    id: 'short-nighty',
    title: 'Short Nighty',
    slug: 'short-nighty',
    group: 'nightwear',
    file: 'Short-Nighty-NN_large.webp',
    keywords: ['short', 'mini', 'chemise', 'nighty'],
    description: 'Playful mini-length nighties accentuating your legs and silhouette.'
  },
  {
    id: 'silk-nighty',
    title: 'Silk Nighty',
    slug: 'silk-nighty',
    group: 'nightwear',
    file: 'Silk-Nighty-NN_f412a47d-cf84-411b-a3bd-e7e116abe6ff_large.webp',
    keywords: ['silk', 'ice silk', 'premium', 'nighty'],
    description: 'Pure ice-silk indulgence offering a cooling touch and opulent finish.'
  },
  {
    id: 'transparent-nighty',
    title: 'Transparent Nighty',
    slug: 'transparent-nighty',
    group: 'nightwear',
    file: 'Transparent-Nighty-NN_large.webp',
    keywords: ['transparent', 'sheer', 'gauze', 'nighty'],
    description: 'Ethereal sheer gauze chemises with delicate lace appliqués.'
  },
  {
    id: 'wedding-nighty',
    title: 'Wedding Nighty',
    slug: 'wedding-nighty',
    group: 'nightwear',
    file: 'Wedding-Nighty-NN_large.webp',
    keywords: ['wedding', 'bridal', 'first night', 'special', 'nighty'],
    description: 'Exquisitely crafted for wedding nights with matching satin robes and thongs.'
  },

  // --- Sexy Lingerie (7) ---
  {
    id: 'ladies-bikini',
    title: 'Bikini & Swimwear',
    slug: 'ladies-bikini',
    group: 'lingerie',
    file: 'Bikini-_-Swimwear-Online-Shopping-in-Pakistan-2_result_large.webp',
    keywords: ['bikini', 'swimwear', 'micro bikini', 'lingerie'],
    description: 'Seductive string cuts, sheer triangles, and resort-ready bikini sets.'
  },
  {
    id: 'body-stocking',
    title: 'Body Stocking & Fishnet',
    slug: 'body-stocking',
    group: 'lingerie',
    file: 'Body-Stocking-Fishnet-Online-Shopping-in-Pakistan-3_result_large.webp',
    keywords: ['body stocking', 'fishnet', 'bodysuit', 'erotic'],
    description: 'Full-body stretch jacquard and erotic fishnet suits designed to hug every curve.'
  },
  {
    id: 'garter-belt',
    title: 'Garter Belt',
    slug: 'garter-belt',
    group: 'lingerie',
    file: 'Garter-Belt-NN-01_large.webp',
    keywords: ['garter', 'belt', 'stocking', 'clips'],
    description: 'High-waist lace garter belts with adjustable satin straps and metal clips.'
  },
  {
    id: 'ladies-bathrobe',
    title: 'Ladies Bathrobe',
    slug: 'ladies-bathrobe',
    group: 'lingerie',
    file: 'Ladies-Bathrobe-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['bathrobe', 'robe', 'kimono', 'satin robe'],
    description: 'Luxurious silk-satin and lace-trimmed kimono bathrobes with waist tie belts.'
  },
  {
    id: 'body-shaper',
    title: 'Body Shaper',
    slug: 'body-shaper',
    group: 'lingerie',
    file: 'Ladies-Body-Shaper-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['shaper', 'tummy control', 'shapewear', 'corset'],
    description: 'Targeted compression panels sculpt your waist, hips, and back smoothly.'
  },
  {
    id: 'leg-stocking',
    title: 'Leg Stockings',
    slug: 'leg-stocking',
    group: 'lingerie',
    file: 'Leg-Stocking-Online-Shopping-in-Pakistan-2_result_large.webp',
    keywords: ['leg stocking', 'thigh high', 'stay ups', 'hosiery'],
    description: 'Thigh-high stay-up stockings accented with wide silicone-lined lace bands.'
  },
  {
    id: 'stocking',
    title: 'Stockings',
    slug: 'stocking',
    group: 'lingerie',
    file: 'Stocking-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['stocking', 'sheer tights', 'pantyhose', 'hosiery'],
    description: 'Ultra-fine 15D and 30D sheer tights giving your legs an airbrushed look.'
  },

  // --- Panties & Sets (3) ---
  {
    id: 'bra-panty-sets',
    title: 'Bra Panty Sets',
    slug: 'bra-panty-sets',
    group: 'panties',
    file: 'Bra-Panty-Sets-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['set', 'sets', 'bra panty', 'matching'],
    description: 'Perfect matching 2-piece bra and panty pairs in lace, mesh, and silk.'
  },
  {
    id: 'camisole',
    title: 'Camisoles',
    slug: 'camisole',
    group: 'panties',
    file: 'Camisole-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['camisole', 'cami', 'tank', 'inner slip'],
    description: 'Breathable inner slips and spaghetti strap camisoles for daily layering.'
  },
  {
    id: 'ladies-panty',
    title: 'Panties & Thongs',
    slug: 'ladies-panty',
    group: 'panties',
    file: 'Ladies-Panty-_-Thong-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['panty', 'thong', 'brief', 'seamless', 'g-string'],
    description: 'Seamless ice-silk briefs, seductive lace thongs, and cotton everyday panties.'
  },

  // --- Accessories & Hosiery (3) ---
  {
    id: 'ladies-socks',
    title: 'Ladies Socks',
    slug: 'ladies-socks',
    group: 'accessories',
    file: 'Ladies-Socks-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['socks', 'ankle socks', 'footwear'],
    description: 'Invisible low-cut loafer socks, breathable cotton crews, and lace frill ankles.'
  },
  {
    id: 'nipple-covers',
    title: 'Nipple Covers',
    slug: 'nipple-covers',
    group: 'accessories',
    file: 'Nipple-Cover-NN-01_large.webp',
    keywords: ['nipple', 'cover', 'silicone', 'pasties', 'adhesive'],
    description: 'Reusable medical-grade silicone pasties providing total concealment under sheer tops.'
  },
  {
    id: 'tights',
    title: 'Tights',
    slug: 'tights',
    group: 'accessories',
    file: 'Tights-Online-Shopping-in-Pakistan-4_result_large.webp',
    keywords: ['tights', 'leggings', 'opaque', 'footless'],
    description: 'Opaque stretch tights and footless leggings offering smooth leg contour.'
  },

  // --- Main Collections (4) ---
  {
    id: 'all-products',
    title: 'All Collections',
    slug: 'shop',
    group: 'collections',
    file: 'Women-Lingerie-Innerwear-Sleepwear-Nightwear-Nighty-Undergarments-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['all', 'everything', 'catalog'],
    description: 'Discover the full Hotnighties boutique collection with discreet delivery.'
  },
  {
    id: 'sexy-lingerie',
    title: 'Sexy Lingerie',
    slug: 'sexy-lingerie',
    group: 'collections',
    file: 'Sexy-Lingerie-Online-Shopping-in-Pakistan-2_result_large.webp',
    keywords: ['lingerie', 'sexy', 'erotic'],
    description: 'Explore the master sexy lingerie category and seductive subcategories.'
  },
  {
    id: 'ladies-nightwear',
    title: 'Ladies Nightwear',
    slug: 'ladies-nightwear',
    group: 'collections',
    file: 'Ladies-Nightwear-Sleepwear-Nighty-Online-Shopping-in-Pakistan_result_large.webp',
    keywords: ['nightwear', 'sleepwear', 'nighty'],
    description: 'Explore all ladies sleepwear, nightdresses, satin robes, and pajamas.'
  },
  {
    id: 'ladies-undergarments',
    title: 'Ladies Undergarments',
    slug: 'ladies-undergarments',
    group: 'collections',
    file: 'Undergarments-NN-02_large.webp',
    keywords: ['undergarments', 'bras', 'panties', 'innerwear'],
    description: 'Explore the complete undergarments directory for everyday comfort and support.'
  }
];

// Attach the resolved image to each category item
export const categoriesWithImages = allCategoriesData.map((item) => ({
  ...item,
  image: getImageForFile(item.file),
}));

export const getCategoryBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().replace('/collections/', '').replace('/', '');
  return categoriesWithImages.find(
    (c) => c.slug.toLowerCase() === cleanSlug || c.id.toLowerCase() === cleanSlug
  );
};

export default categoriesWithImages;
