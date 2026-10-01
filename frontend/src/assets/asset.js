// ============================================================
// HOTNIGHTIES - PRODUCT ASSETS & DATA
// Structure:
//   1. Image imports (grouped by category)
//   2. Product data (one array per category)
//   3. Combined catalog + helper exports
// ============================================================

// ------------------------------------------------------------
// 1. IMAGE IMPORTS
// ------------------------------------------------------------

// --- Logo ---
import logo from "./logo.png";
import mobileLogo from "./mobile-logo.png";

// --- Banner Images 
import banner1 from './bannerimg01.jfif'
import banner2 from './bannerimg02.jfif'
import banner3 from './bannerimg03.jfif'
import aboutImg from './about-hero-bold.jpg'
import aboutSecondaryImg from './about-hero-erotic.jpg'

// --- Bras ---
import braProduct1 from "./Adjustable Sports Bras for Women High Support Padded Racerback Sport for Large Bust Workout Running Gym.jpg";
import braProduct2 from "./Anti-Sagging Seamless Bra for Beautiful Back, Minimizer for Large Bust, Wire-Free, Lifts and Prevents Sagging for Large Busts.jpg";
import braProduct3 from "./Plus-size Brassiere Lady Wire-free Middle-aged Older Women's Underwear Three-row Hook Large Cup Girl Bra Full Coverage.jpg";
import braProduct4 from "./Wholesale High Elasticity NakedFeel Seamless Sports Bra Women Fixed Molded Cup Yoga Bra Top Vest for Gym Running.jpg";
import braProduct5 from "./Women's Glossy Underwear Solid Comfortable Seamless Thin Top Thick Bottom Small Chest Gathered  Sportsbra-1.png";
import braProduct6 from "./Mesh Lace Hollow Sports Bra Running Fitness Sexy Backless Tops Pilates Yoga Wear for Women.avif";

// --- Panties ---
import pantieProduct1 from "./Beautiful Style Sexy Red Color Women High Rise Thong Panty With Chain.avif";
import pantieProduct2 from "./Bell Fenny Factory Wholesale Logo Label Custom Women Thongs V String Panties Seamless Soft Women Ice Silk Underwear.avif";
import pantieProduct3 from "./Disposable Underwear Women's Portable Boxer Shorts 100 Bamboo Fiber Sterilized Large Size Anti-Exposure.avif";
import pantieProduct4 from "./Factory Direct Wholesale Women Underwear Bulk Stock Lots Cotton Panties.avif";
import pantieProduct5 from "./Fashion and Soft LADIES' BRIEFS.avif";
import pantieProduct6 from "./High Waist Panty Women Panties Soft Stretch Cotton Briefs Tummy Control.avif";
import pantieProduct7 from "./High-quality wholesale skin-friendly and breathable women's panties Close-fitting women's underwear.avif";
import pantieProduct8 from "./LYNMISS Anti-Bacterial Culotte Menstruelle 4 Layer Period Underwear.avif";
import pantieProduct9 from "./N Sexy Solid High-Rise Nylon Cotton Womens Panties for Yoga Fitness; XL.avif";
import pantieProduct10 from "./Sexy Lace Floral Womens Panties International Trade Thin Sheer Low-rise Briefs Cotton Nylon Gusset.avif";
import pantieProduct11 from "./Wholesale Cross-border Foreign Trade Large Plus Size Lace Briefs 2021high Waist Ladies Panties.avif";
import pantieProduct12 from "./Wholesale Soft Pure Cotton Women Triangle Panties.avif";
import pantieProduct13 from "./Wholesale Women's Low-Rise Seamless Ice Silk Underwear Breathable Triangle.avif";
import pantieProduct14 from "./Women High Waisted Tummy Control Shapewear Panties.avif";
import pantieProduct15 from "./Women Panties Lace Underwear 6 Colors Low Rise Wholesale.avif";
import pantieProduct16 from "./Women's Cotton Panties Comfortable Skin Friendly Women's Underwear Soft Female.avif";
import pantieProduct17 from "./Women's Panties Sexy Underwear High Stretch Transparent Silk Zipper Crotch Bottom Ladies Bikini Thong 5031.avif";
import pantieProduct18 from "./Women's Shiny Rhinestone Lace Bikini Panties Ultra-Thin Low-Waisted Half-Covering.avif";
// NOTE: the old "pantieProduct19" used the same image file as pantieProduct11
// (a duplicate listing), so it has been removed.

// --- Nighties & Sleepwear ---
import nightieProduct1 from "./2024 New Good Quality Satin Nightie Wholesale Women's Robe 4 Pieces Pajamas Erotic Lingerie Set Kimono Silk Sleepwear.jpg";
import nightieProduct2 from "./5PC Silk Robe Sleep Suit Womens Lace Satin Pajamas Gown Set V-Neck Cami Nighties Wear Pijama.jpg";
import nightieProduct3 from "./Best Selling Products 2025 Lace Nightwear Women Sleepwear.jpg";
import nightieProduct4 from "./Butterfly Backless Pajamas Sleepwear Women Pajama Sexy Nighty for Honeymoon.avif";
import nightieProduct5 from "./Cheap Women's Sexy Lounge Wear Love Heart Print Halter Shorts Pajamas Set Casual.jpg";
import nightieProduct6 from "./Embroidery Ladies Night Lace Sexy Dress Pijama Women Underwear Sleepwear.avif";
import nightieProduct7 from "./FASHION LADIES' NIGHTIE.png";
import nightieProduct8 from "./Factory Price Wholesale Long Dress Luxury Lace Sleepwear Sexy Lingerie Women Night Dress.jpg";
import nightieProduct9 from "./High Quality Summer Sexy White Pyjamas Heart Print Cami.avif";
import nightieProduct10 from "./Hot Romantic Nightie for Ladies.jpg";
import nightieProduct11 from "./Hot Sale Floral Snap Crotch Teddy Chemise Nightie Women's Sexy Gauze See-Through Pajama.jpg";
import nightieProduct12 from "./Hot Sale Floral Snap Crotch Teddy Chemise Nightie Women's Sexy Gauze.jpg";
import nightieProduct13 from "./Hot Selling European and American Camisole Pajamas for Women.avif";
import nightieProduct14 from "./Lace Night Dresses for Woman Plus Size Women's Sleepwear Evening Dresses.avif";
import nightieProduct15 from "./M0605 Lace Bow See Through Embroidery Lingerie Women Sleepwear Bodysuit Pajamas.jpg";
import nightieProduct16 from "./New Good Quality Satin Nightie Wholesale Women's Robe 4 Pieces Pajamas Erotic Lingerie Set Kimono Silk Sleepwear.jpg";
import nightieProduct17 from "./New Product Ideas 2024 Plus Size Girls Sleepwears Ladies Sexy Nighties Women's.jpg";
import nightieProduct18 from "./New Satin Nightdress Contrast Lace V-neck Chemise Dress Erotic Backless Nightie.jpg";
import nightieProduct19 from "./OEM Women's Sexy Silk Nightgown Lace Sling Sleepwear Dress Elegant Lingerie Night Dress.avif";
import nightieProduct20 from "./P093 Wholesale Sexy Lingerie Silk Stain Lace Mature Nightie 3pcs Homewear Set Women Sleepwear.jpg";
import nightieProduct21 from "./Plus Size Lingerie Deep V Strap Nightdress Three-Piece Set Sexy Transparent Sleepwear Uniform Temptation Wholesale.png";
import nightieProduct22 from "./Sexy Hot Night Dress.avif";
import nightieProduct23 from "./Sexy Sleepwear Pajamas Lingerie.avif";
import nightieProduct24 from "./Sexy Women's Sleepwear Night Gowns Sleep Dress Lace Sexy Night Dress.avif";
import nightieProduct25 from "./Wholesale 5pcs Plus Size Night Gowns Sexy Sleepwear.jpg";
import nightieProduct26 from "./Wholesale Women Lace-Trimmed Loungewear Girl Night Wear Set Nighty.jpg";
import nightieProduct27 from "./Women Nighty for Sex Ladies Nighties Sleepwear.jpg";
import nightieProduct28 from "./Women Sex Attraction Lace Perspective Lingerie Sexy Night Dress for Hot Sex.jpg";
import nightieProduct29 from "./Women's Sexy Nighties Hot Selling Satin Pajamas Full Slip Babydoll Suspender Nightwear.png";
import nightieProduct30 from "./Women's Sleepwear Underwear Transparent Sexy Lace Lingerie Pijamas Sets Nightdress and Panty Female Nighty Clothes Party Gift.avif";
import nightieProduct31 from "./Womens Pajamas Nighty for Ladies Sexy Hot Robe Sexy Satin.jpg";
import nightieProduct32 from "./sexy sleeperwear lingerie.avif";

// ------------------------------------------------------------
// 2. CATEGORY NAMES & HELPERS
// ------------------------------------------------------------

export const CATEGORY_INNERWEAR = "Women's Innerwear";
export const CATEGORY_SLEEPWEAR = "Women's Sleepwear";

// Adds the category and a computed discount percentage to every product
const withCategory = (category, type, items) =>
    items.map((item) => ({
        ...item,
        category,
        type,
        discountPercent: Math.round(
            ((item.actualPrice - item.discountedPrice) / item.actualPrice) * 100
        ),
    }));

// ------------------------------------------------------------
// 3. PRODUCT DATA
// ------------------------------------------------------------

// ===================== BRAS =====================
const bras = withCategory(CATEGORY_INNERWEAR, "bra", [
    {
        id: "braProduct1",
        title: "High-Support Padded Racerback Sports Bra",
        description: "Engineered for high-intensity workouts, this racerback sports bra delivers outstanding support for large busts. Featuring thick adjustable straps, a padded interior, and moisture-wicking fabric to keep you dry and confident during running, gym sessions, and intense cardio. The racerback design allows full range of motion while the breathable material keeps you cool throughout your workout.",
        actualPrice: 2200,
        discountedPrice: 1499,
        bestseller: true,
        subcategory: "Sports Bra",
        image: braProduct1,
    },
    {
        id: "braProduct2",
        title: "Anti-Sagging Seamless Minimizer Bra - Wire-Free",
        description: "Say goodbye to discomfort with this anti-sagging seamless minimizer bra. Designed specifically for large busts, it features wire-free construction that lifts and prevents sagging naturally. The back-smoothing design eliminates bra bulge for a clean silhouette. Crafted with ultra-soft fabric, this everyday essential offers all-day comfort without compromising on shape or support.",
        actualPrice: 2800,
        discountedPrice: 1899,
        bestseller: true,
        subcategory: "Minimizer Bra",
        image: braProduct2,
    },
    {
        id: "braProduct3",
        title: "Plus-Size Full-Coverage Wire-Free Bra - Three-Row Hook",
        description: "Specially crafted for plus-size women, this full-coverage wire-free bra offers exceptional support with its reinforced three-row hook-and-eye closure. Wide padded straps reduce shoulder pressure while the structured cups provide a comfortable, lifted shape throughout the day. Ideal for middle-aged and older women who prioritize comfort and full coverage over fashion.",
        actualPrice: 3200,
        discountedPrice: 2199,
        bestseller: false,
        subcategory: "Plus Size Bra",
        image: braProduct3,
    },
    {
        id: "braProduct4",
        title: "NakedFeel Seamless Sports Bra - Molded Cup Yoga Vest",
        description: "Experience barely-there comfort with this high-elasticity NakedFeel seamless sports bra. The fixed molded cups provide shape and modesty while the seamless construction eliminates chafing and irritation. Perfect for yoga, pilates, light running, and gym wear. The vest-style design offers full torso coverage and can also double as a stylish crop top.",
        actualPrice: 1800,
        discountedPrice: 1199,
        bestseller: true,
        subcategory: "Sports Bra",
        image: braProduct4,
    },
    {
        id: "braProduct5",
        title: "Glossy Seamless Gathered Push-Up Sports Bra",
        description: "This glossy seamless sports bra features a thin-top thick-bottom construction that naturally gathers and lifts for a flattering shape. Designed for smaller chests seeking a boost, the thick padded bottom provides push-up support while the smooth shiny exterior makes it fashionable enough to wear as a top. Comfortable for both light workouts and casual lounging.",
        actualPrice: 1500,
        discountedPrice: 999,
        bestseller: false,
        subcategory: "Sports Bra",
        image: braProduct5,
    },
    {
        id: "braProduct6",
        title: "Mesh Lace Hollow Backless Sports Bra - Yoga and Pilates",
        description: "A stunning fusion of style and function, this mesh lace hollow sports bra features a sexy backless design with intricate lace detailing. Perfect for yoga, pilates, and fitness workouts, it provides light-to-medium support while making a bold fashion statement. The breathable mesh panels ensure ventilation and the lace adds a feminine touch to your activewear collection.",
        actualPrice: 1600,
        discountedPrice: 1099,
        bestseller: false,
        subcategory: "Sports Bra",
        image: braProduct6,
    },
]);

// ===================== PANTIES =====================
const panties = withCategory(CATEGORY_INNERWEAR, "panty", [
    {
        id: "pantieProduct1",
        title: "Sexy High-Rise Thong Panty with Decorative Chain - Red",
        description: "Make a bold statement with this alluring high-rise thong panty in a passionate red hue, adorned with a delicate decorative chain at the waist. Crafted from stretchy fabric for a snug, comfortable fit, this daring piece is perfect for date nights, honeymoons, or whenever you want to feel irresistibly confident. The minimalist thong design eliminates visible panty lines.",
        actualPrice: 1200,
        discountedPrice: 799,
        bestseller: true,
        subcategory: "Thong",
        image: pantieProduct1,
    },
    {
        id: "pantieProduct2",
        title: "Ice Silk Seamless V-String Thong - Ultra Soft",
        description: "Indulge in cloud-like softness with these ice silk seamless V-string thong panties. The ultra-smooth ice silk fabric feels cool against the skin and moves seamlessly with your body. The V-string design eliminates panty lines making them perfect for fitted outfits. Available in multiple colors, these breathable panties keep you fresh and comfortable all day long.",
        actualPrice: 900,
        discountedPrice: 599,
        bestseller: true,
        subcategory: "Thong",
        image: pantieProduct2,
    },
    {
        id: "pantieProduct3",
        title: "Disposable Bamboo Fiber Boxer Shorts - Travel and Hygiene",
        description: "The ultimate travel companion. These disposable boxer shorts are made from 100% bamboo fiber, offering exceptional softness, breathability, and hygiene. Sterilized and individually sealed for maximum cleanliness, they are perfect for travel, hospital stays, postpartum recovery, or any situation requiring extra hygiene. Anti-exposure design and large-size cut for comfortable full coverage.",
        actualPrice: 800,
        discountedPrice: 549,
        bestseller: false,
        subcategory: "Boyshorts",
        image: pantieProduct3,
    },
    {
        id: "pantieProduct4",
        title: "Soft Cotton Everyday Panties - Wholesale Multi-Pack",
        description: "Timeless comfort meets everyday practicality in these classic cotton panties. Made from high-quality soft cotton fabric, they offer a gentle, breathable feel that is perfect for all-day wear. The simple, clean design with a smooth waistband ensures no pinching or discomfort. A wardrobe staple that every woman needs, available in bulk value packs for exceptional savings.",
        actualPrice: 700,
        discountedPrice: 449,
        bestseller: false,
        subcategory: "Briefs",
        image: pantieProduct4,
    },
    {
        id: "pantieProduct5",
        title: "Fashion Soft Ladies Briefs - Classic Comfort Fit",
        description: "These fashionable ladies' briefs perfectly balance style and everyday comfort. Constructed from soft, stretchy fabric with a smooth waistband and a flattering cut that contours naturally to your body. The full-coverage back and moderate front provide the security and coverage needed for busy daily life. Available in a range of cheerful colors to match your mood.",
        actualPrice: 650,
        discountedPrice: 449,
        bestseller: false,
        subcategory: "Briefs",
        image: pantieProduct5,
    },
    {
        id: "pantieProduct6",
        title: "High-Waist Tummy Control Cotton Briefs - Stretch Comfort",
        description: "Feel confident and supported in these high-waist tummy control briefs. The soft stretch cotton fabric hugs your curves while the elevated waistband gently smooths and controls the tummy area. Ideal for wearing under high-waisted skirts, trousers, or dresses. The breathable cotton gusset ensures hygiene and all-day freshness. A must-have for comfort-first dressing.",
        actualPrice: 900,
        discountedPrice: 649,
        bestseller: true,
        subcategory: "High-Waist Briefs",
        image: pantieProduct6,
    },
    {
        id: "pantieProduct7",
        title: "Skin-Friendly Breathable Close-Fitting Panties",
        description: "Designed with your skin's health in mind, these close-fitting panties are made from high-quality, skin-friendly fabric that allows your skin to breathe freely. The soft, gentle waistband prevents elastic marks and the smooth construction prevents chafing. Perfect for everyday wear, sensitive skin, and post-workout recovery. A thoughtful blend of hygiene, comfort, and subtle style.",
        actualPrice: 750,
        discountedPrice: 499,
        bestseller: false,
        subcategory: "Briefs",
        image: pantieProduct7,
    },
    {
        id: "pantieProduct8",
        title: "LYNMISS 4-Layer Anti-Bacterial Period Underwear",
        description: "Revolutionize your period experience with LYNMISS innovative 4-layer period underwear. The anti-bacterial inner layer keeps you fresh, while three additional protection layers provide reliable leak-proof coverage. No more bulky pads or worrying about leaks. These period panties are washable, reusable, and eco-friendly. Comfortable enough to wear all day and night for worry-free protection.",
        actualPrice: 2500,
        discountedPrice: 1799,
        bestseller: true,
        subcategory: "Period Underwear",
        image: pantieProduct8,
    },
    {
        id: "pantieProduct9",
        title: "High-Rise Nylon Cotton Yoga Fitness Panties - Solid",
        description: "Engineered for active women, these high-rise nylon-cotton blend panties deliver the stretch and support needed for yoga, fitness, and everyday movement. The high-rise waistband stays put during all activities while the nylon content adds durability and shape retention. The breathable cotton lining keeps you comfortable whether you are at the gym or going about your day.",
        actualPrice: 850,
        discountedPrice: 599,
        bestseller: false,
        subcategory: "High-Waist Briefs",
        image: pantieProduct9,
    },
    {
        id: "pantieProduct10",
        title: "Sheer Lace Floral Low-Rise Briefs - Cotton Nylon Blend",
        description: "Delicate and feminine, these sheer lace floral low-rise briefs are crafted from a soft cotton-nylon blend with a breathable cotton gusset for hygiene. The intricate floral lace pattern adds a romantic touch while the low-rise cut pairs perfectly with jeans and low-waist outfits. Thin, sheer construction feels barely-there while the stretchy waistband ensures a comfortable, non-restrictive fit.",
        actualPrice: 950,
        discountedPrice: 649,
        bestseller: false,
        subcategory: "Lace Briefs",
        image: pantieProduct10,
    },
    {
        id: "pantieProduct11",
        title: "Plus-Size High-Waist Lace Briefs - Full Coverage",
        description: "Designed for the fuller figure, these plus-size high-waist lace briefs offer elegant style without sacrificing comfort. The lace detailing adds a touch of femininity while the generous high waistband provides smoothing support around the tummy. The stretch fabric accommodates larger sizes comfortably without pinching or rolling down. Beautiful, supportive, and available in extended sizes.",
        actualPrice: 1100,
        discountedPrice: 749,
        bestseller: false,
        subcategory: "Plus Size Panties",
        image: pantieProduct11,
    },
    {
        id: "pantieProduct12",
        title: "Pure Cotton Triangle Panties - Soft and Breathable",
        description: "Back to basics with these pure cotton triangle panties, the ultimate in simplicity, softness, and breathability. Made from 100% soft cotton, they are gentle on sensitive skin and allow maximum airflow throughout the day. The classic triangle cut offers moderate coverage with a comfortable, non-binding fit. Perfect for everyday wear, lounging, and sleep.",
        actualPrice: 600,
        discountedPrice: 399,
        bestseller: false,
        subcategory: "Briefs",
        image: pantieProduct12,
    },
    {
        id: "pantieProduct13",
        title: "Low-Rise Seamless Ice Silk Breathable Triangle Panties",
        description: "Experience the luxurious feel of ice silk in these low-rise seamless triangle panties. The ice silk fabric has a naturally cooling effect and a smooth, silky texture that feels incredible against the skin. The seamless construction leaves no visible lines under clothing while the breathable material keeps you fresh all day. A modern essential for the comfort-conscious woman.",
        actualPrice: 800,
        discountedPrice: 549,
        bestseller: true,
        subcategory: "Seamless Panties",
        image: pantieProduct13,
    },
    {
        id: "pantieProduct14",
        title: "High-Waisted Tummy Control Shapewear Panties",
        description: "Achieve a smooth, sculpted silhouette with these high-waisted tummy control shapewear panties. The firm control panel targets the tummy, waist, and hips for an instantly slimmer appearance. Breathable, stretchy fabric moves with you comfortably while the invisible design stays discreetly under any outfit. The ideal foundation garment for special occasions, workwear, or anytime you want to look your best.",
        actualPrice: 1500,
        discountedPrice: 999,
        bestseller: true,
        subcategory: "Shapewear",
        image: pantieProduct14,
    },
    {
        id: "pantieProduct15",
        title: "Lace Underwear Low-Rise Panties - 6 Colors Pack",
        description: "Stock up and save with this vibrant 6-color pack of lace low-rise panties. Each pair features delicate lace fabric with a comfortable elastic waistband and a low-rise cut that pairs beautifully with your everyday wardrobe. The semi-sheer lace adds a touch of elegance while remaining comfortable for daily wear. A great value pack to refresh your lingerie drawer all at once.",
        actualPrice: 2200,
        discountedPrice: 1499,
        bestseller: false,
        subcategory: "Lace Briefs",
        image: pantieProduct15,
    },
    {
        id: "pantieProduct16",
        title: "Skin-Friendly Soft Cotton Panties - Daily Comfort",
        description: "The foundation of everyday comfort, these skin-friendly cotton panties are made from premium soft cotton that feels gentle against your skin all day long. The breathable fabric prevents moisture build-up, keeping you fresh and dry. A clean, simple design with a soft waistband that will not dig in or leave marks. Available in classic colors that complement any wardrobe.",
        actualPrice: 650,
        discountedPrice: 429,
        bestseller: false,
        subcategory: "Briefs",
        image: pantieProduct16,
    },
    {
        id: "pantieProduct17",
        title: "Sexy Transparent Silk Bikini Thong - Zipper Crotch Detail",
        description: "Daring and provocative, this transparent silk bikini thong features a unique zipper crotch design for ultimate seduction. The high-stretch fabric clings to your curves while the ultra-sheer material reveals more than it conceals. A bold statement piece for intimate moments, honeymoons, or special occasions when you want to be unforgettably alluring.",
        actualPrice: 1400,
        discountedPrice: 949,
        bestseller: false,
        subcategory: "Thong",
        image: pantieProduct17,
    },
    {
        id: "pantieProduct18",
        title: "Rhinestone Lace Bikini Panties - Ultra-Thin Low-Waisted",
        description: "Dazzle with these stunning rhinestone-embellished lace bikini panties. Shimmering rhinestone details catch the light beautifully while the ultra-thin lace fabric offers a barely-there feel. The low-waisted cut and half-covering back design create a chic, confident look. Perfect for special occasions, intimate evenings, or as a luxurious gift for the woman who deserves to feel like royalty.",
        actualPrice: 1600,
        discountedPrice: 1099,
        bestseller: true,
        subcategory: "Lace Briefs",
        image: pantieProduct18,
    },
]);

// ===================== NIGHTIES & SLEEPWEAR =====================
const nighties = withCategory(CATEGORY_SLEEPWEAR, "nightie", [
    {
        id: "nightieProduct1",
        title: "Satin Kimono Robe 4-Piece Pajama Set",
        description: "Step into pure luxury with this premium 4-piece satin kimono robe set. Includes a flowing robe, satin cami top, matching shorts, and a sash belt, everything you need for a complete and indulgent bedtime look. The smooth satin fabric glides over your skin with a cool, sensual feel. Perfect for honeymoons, anniversaries, or simply treating yourself to a five-star sleep experience.",
        actualPrice: 4500,
        discountedPrice: 2999,
        bestseller: true,
        subcategory: "Pajama Set",
        image: nightieProduct1,
    },
    {
        id: "nightieProduct2",
        title: "5-Piece Silk Lace Satin Pajama Set - V-Neck Cami and Gown",
        description: "The ultimate luxury sleep set, this 5-piece collection includes a satin gown, V-neck cami, lace shorts, pants, and a lightweight robe. The silk-like satin fabric is cool, smooth, and incredibly soft against the skin. Intricate lace detailing elevates each piece with romantic femininity. A complete sleepwear wardrobe in one purchase, perfect for bridal trousseaus and gifts.",
        actualPrice: 5500,
        discountedPrice: 3799,
        bestseller: true,
        subcategory: "Pajama Set",
        image: nightieProduct2,
    },
    {
        id: "nightieProduct3",
        title: "Lace Nightwear Sleepwear Dress - 2025 Best Seller",
        description: "The top-rated sleepwear pick of 2025, this lace nightwear dress combines elegant design with exceptional comfort. Delicate lace fabric drapes beautifully over your curves while thin spaghetti straps and a flattering neckline create a stunning silhouette. Lightweight and breathable, it keeps you comfortable through the night. A timeless piece that transitions effortlessly from bedroom to boudoir.",
        actualPrice: 2200,
        discountedPrice: 1499,
        bestseller: true,
        subcategory: "Nightdress",
        image: nightieProduct3,
    },
    {
        id: "nightieProduct4",
        title: "Butterfly Backless Sexy Honeymoon Nighty",
        description: "Enchant and captivate with this butterfly-inspired backless nighty designed for unforgettable honeymoon nights. The intricate butterfly back design creates a stunning visual statement while the sexy open back reveals just enough skin. Sheer, lightweight fabric flows gracefully over your body. The perfect combination of artistry and seduction, a truly special piece for your most intimate moments.",
        actualPrice: 2800,
        discountedPrice: 1899,
        bestseller: true,
        subcategory: "Sexy Nightie",
        image: nightieProduct4,
    },
    {
        id: "nightieProduct5",
        title: "Love Heart Print Halter Shorts Pajama Set",
        description: "Cute, cozy, and casual, this love heart print halter pajama set is perfect for relaxed evenings at home. The playful heart print adds a whimsical charm while the halter top design is adjustable for a customized fit. Soft, lightweight fabric keeps you comfortable during warm nights. The matching shorts complete the look for an effortlessly stylish loungewear set.",
        actualPrice: 1800,
        discountedPrice: 1199,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct5,
    },
    {
        id: "nightieProduct6",
        title: "Embroidery Lace Sexy Night Dress - Intimate Sleepwear",
        description: "Detailed embroidery and delicate lace come together in this exquisite sexy night dress. The intricate floral embroidery pattern adds artisanal charm while the transparent lace fabric creates an alluring, intimate look. Designed to flatter the feminine silhouette with a fitted bodice and flared hemline. A beautiful piece that makes you feel confident, sensual, and utterly feminine.",
        actualPrice: 2500,
        discountedPrice: 1699,
        bestseller: false,
        subcategory: "Sexy Nightie",
        image: nightieProduct6,
    },
    {
        id: "nightieProduct7",
        title: "Fashion Ladies Nightie - Classic Elegant Sleepwear",
        description: "Timeless elegance in a classic ladies nightie. This beautifully crafted sleepwear piece features soft, flowing fabric that drapes gracefully over the body for a flattering silhouette. The simple yet elegant design is ideal for everyday sleepwear and is comfortable enough to wear all night long. Available in classic colors, this versatile nightie is a wardrobe essential for every woman.",
        actualPrice: 1600,
        discountedPrice: 1099,
        bestseller: false,
        subcategory: "Nightdress",
        image: nightieProduct7,
    },
    {
        id: "nightieProduct8",
        title: "Luxury Lace Long Night Dress - Sexy Lingerie Gown",
        description: "Exude sophistication and sensuality in this floor-length luxury lace night dress. The intricate full-body lace design is both elegant and seductive, perfect for special evenings. The deep V-neckline and flowing silhouette create a dramatic, head-turning look. Premium quality lace fabric is soft and breathable. An investment piece that makes every evening feel like a special occasion.",
        actualPrice: 3500,
        discountedPrice: 2399,
        bestseller: false,
        subcategory: "Sexy Nightie",
        image: nightieProduct8,
    },
    {
        id: "nightieProduct9",
        title: "Heart Print Cami Pajama Set - Summer Pyjamas",
        description: "Breezy, stylish, and perfectly suited for summer nights, this white heart-print cami pajama set is both adorable and comfortable. The adjustable cami top pairs with matching bottoms for a coordinated look. Lightweight, breathable fabric ensures a cool and comfortable sleep even on the warmest nights. The charming heart print adds a playful romantic touch to your nighttime routine.",
        actualPrice: 1700,
        discountedPrice: 1149,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct9,
    },
    {
        id: "nightieProduct10",
        title: "Hot Romantic Nightie for Ladies - Sensual Sleepwear",
        description: "Set the mood for romance with this hot and sensual nightie designed to make you feel irresistible. The flattering cut and seductive fabric highlight your feminine curves while keeping you comfortable and confident. Delicate details like lace trim or sheer panels add depth and allure to the design. Ideal for date nights, anniversaries, and creating unforgettable intimate moments.",
        actualPrice: 2200,
        discountedPrice: 1499,
        bestseller: true,
        subcategory: "Sexy Nightie",
        image: nightieProduct10,
    },
    {
        id: "nightieProduct11",
        title: "Floral Snap-Crotch Teddy Chemise - See-Through Gauze",
        description: "Bold, daring, and utterly irresistible, this floral snap-crotch teddy chemise in sheer gauze fabric is the ultimate in intimate lingerie. The floral pattern adds a delicate feminine touch while the see-through material creates a teasing, seductive look. The snap-crotch design is both practical and playful. Perfect for special intimate occasions when you want to make a memorable impression.",
        actualPrice: 2600,
        discountedPrice: 1799,
        bestseller: false,
        subcategory: "Chemise & Teddy",
        image: nightieProduct11,
    },
    {
        id: "nightieProduct12",
        title: "Floral Gauze Teddy Chemise Nightie - Sheer Sexy Lingerie",
        description: "A stunning sheer floral chemise that is as beautiful as it is seductive. The delicate gauze fabric creates an ethereal, dreamy look while the fitted silhouette flatters your natural curves. Floral details add a romantic, feminine aesthetic. Lightweight and breathable fabric makes it comfortable for sleep while the elegant design makes it perfect for intimate occasions and special evenings.",
        actualPrice: 2400,
        discountedPrice: 1649,
        bestseller: false,
        subcategory: "Chemise & Teddy",
        image: nightieProduct12,
    },
    {
        id: "nightieProduct13",
        title: "European Camisole Pajamas for Women - Bestseller",
        description: "Inspired by European fashion sensibilities, this trendy camisole pajama set delivers effortless style for the modern woman. The elegant spaghetti-strap cami top features adjustable straps for a customized fit while the matching bottoms complete the sophisticated look. Soft, silky fabric feels luxurious against the skin. A bestseller that perfectly balances comfort with European chic.",
        actualPrice: 2000,
        discountedPrice: 1349,
        bestseller: true,
        subcategory: "Pajama Set",
        image: nightieProduct13,
    },
    {
        id: "nightieProduct14",
        title: "Plus-Size Lace Night Dress - Evening Sleepwear Gown",
        description: "Beautiful sleepwear designed to celebrate the fuller figure, this plus-size lace night dress drapes elegantly over curves of all sizes. The rich lace fabric adds feminine sophistication while the flowing silhouette provides comfortable, unrestricted movement. A flattering V-neckline and adjustable straps ensure a perfect fit. This is sleepwear that makes every woman feel luxurious and beautiful.",
        actualPrice: 2800,
        discountedPrice: 1899,
        bestseller: false,
        subcategory: "Plus Size Nightwear",
        image: nightieProduct14,
    },
    {
        id: "nightieProduct15",
        title: "Lace Bow See-Through Embroidery Bodysuit Pajamas",
        description: "A masterpiece of intimate fashion, this lace bow see-through bodysuit features exquisite embroidery detailing and a delicate bow accent for a touch of playful femininity. The sheer lace fabric creates an alluring, see-through effect while the bodysuit silhouette hugs your curves beautifully. This statement lingerie piece is perfect for special occasions and intimate evenings.",
        actualPrice: 3000,
        discountedPrice: 2099,
        bestseller: false,
        subcategory: "Chemise & Teddy",
        image: nightieProduct15,
    },
    {
        id: "nightieProduct16",
        title: "Satin Kimono Silk Sleepwear Set - 4-Piece Luxury Robe",
        description: "Experience the ultimate in bedroom luxury with this premium 4-piece satin kimono sleepwear set. The flowing kimono robe, satin camisole, comfortable shorts, and sash belt create a complete ensemble perfect for a luxurious sleep routine. Smooth satin fabric with a subtle sheen feels indulgently soft on the skin. An ideal gift for brides, anniversaries, or self-care.",
        actualPrice: 4800,
        discountedPrice: 3299,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct16,
    },
    {
        id: "nightieProduct17",
        title: "Plus-Size Ladies Sexy Nightie - 2024 New Collection",
        description: "Designed to make plus-size women feel beautiful and confident, this 2024 sexy nightie embraces curves with flattering cuts and sensual fabric choices. The thoughtfully designed silhouette provides comfort and coverage where needed while highlighting your best features. Available in extended sizes to ensure every woman can experience the joy of beautiful, sexy sleepwear.",
        actualPrice: 2500,
        discountedPrice: 1699,
        bestseller: false,
        subcategory: "Plus Size Nightwear",
        image: nightieProduct17,
    },
    {
        id: "nightieProduct18",
        title: "Satin Contrast Lace V-Neck Backless Chemise Nightdress",
        description: "Elegance meets seduction in this new satin nightdress featuring beautiful contrast lace detailing at the neckline and hem. The deep V-neck creates a flattering decolletage while the backless design adds a daring, sensual element. Smooth satin fabric glides effortlessly over your skin and the A-line silhouette flatters all body types. A sophisticated choice for romantic evenings.",
        actualPrice: 2800,
        discountedPrice: 1899,
        bestseller: true,
        subcategory: "Chemise & Teddy",
        image: nightieProduct18,
    },
    {
        id: "nightieProduct19",
        title: "Silk Lace Sling Sleepwear Night Dress - Elegant Lingerie",
        description: "A touch of old-world glamour meets modern lingerie in this silk lace sling night dress. The adjustable spaghetti sling straps and delicate lace trim create an elegant, feminine aesthetic. The silk-like fabric has a natural sheen and feels cool and smooth against the skin. Tailored for the woman who appreciates the finer things, this is sleepwear as an art form.",
        actualPrice: 3200,
        discountedPrice: 2199,
        bestseller: false,
        subcategory: "Nightdress",
        image: nightieProduct19,
    },
    {
        id: "nightieProduct20",
        title: "Silk Satin Lace 3-Piece Homewear Set - Mature Nightie",
        description: "A complete and sophisticated 3-piece homewear set featuring silk satin and lace in a mature, elegant design. The set includes a lace-trimmed top, matching bottom, and a flowing robe, perfect for evening relaxation and intimate occasions. The satin fabric has a smooth, cool feel while the lace detailing adds a refined, luxurious touch. Ideal for the woman who values both beauty and comfort.",
        actualPrice: 4000,
        discountedPrice: 2799,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct20,
    },
    {
        id: "nightieProduct21",
        title: "Plus-Size Deep-V Transparent 3-Piece Nightwear Set",
        description: "Designed for plus-size women who refuse to compromise on style, this deep-V transparent 3-piece nightwear set is bold, beautiful, and inclusive. The set includes a sheer transparent nightdress, matching shorts, and a robe. The deep V-neckline creates a dramatic, sensual look while the transparent fabric adds alluring depth. Flattering cuts ensure every piece looks stunning on fuller figures.",
        actualPrice: 3500,
        discountedPrice: 2399,
        bestseller: false,
        subcategory: "Plus Size Nightwear",
        image: nightieProduct21,
    },
    {
        id: "nightieProduct22",
        title: "Sexy Hot Night Dress - Minimal and Seductive",
        description: "Less is more with this minimal yet intensely seductive night dress. Designed for the bold and confident woman, this hot night dress features form-fitting fabric, daring necklines, and a cut that celebrates the female form. Lightweight and easy to move in, it is as comfortable as it is alluring. The perfect choice for intimate evenings when you want to feel powerfully attractive.",
        actualPrice: 1900,
        discountedPrice: 1299,
        bestseller: false,
        subcategory: "Sexy Nightie",
        image: nightieProduct22,
    },
    {
        id: "nightieProduct23",
        title: "Sexy Sleepwear Pajamas Lingerie Set",
        description: "A complete sexy lingerie set that blurs the line between intimate apparel and sleepwear. The coordinated set features thoughtfully designed pieces that work beautifully together for a cohesive, sensual look. Soft, stretchy fabric ensures comfort while the design details, lace trims, sheer panels, or delicate prints, make this set feel special and indulgent. Perfect for a night in or a romantic evening.",
        actualPrice: 2200,
        discountedPrice: 1499,
        bestseller: true,
        subcategory: "Pajama Set",
        image: nightieProduct23,
    },
    {
        id: "nightieProduct24",
        title: "Lace Sexy Night Dress - Women Sleep Gown",
        description: "Flowing, feminine, and deeply seductive, this lace sexy night dress is everything a sleep gown should be. Rich lace fabric cascades over your body with a sensual, elegant drape. The design features a flattering neckline and a silhouette that moves beautifully with every step. Comfortable enough for sleep yet beautiful enough to be admired. A quintessential piece for every lingerie collection.",
        actualPrice: 2400,
        discountedPrice: 1649,
        bestseller: false,
        subcategory: "Nightdress",
        image: nightieProduct24,
    },
    {
        id: "nightieProduct25",
        title: "Plus-Size Night Gowns - 5-Pack Sleepwear Collection",
        description: "An incredible value pack of 5 plus-size night gowns, each designed to celebrate fuller figures with flattering silhouettes and sensual style. Each gown in the collection features different designs, lace, satin, or sheer, ensuring variety for every mood and occasion. Inclusive sizing ensures a comfortable, flattering fit. Stock up and save on beautiful sleepwear that makes you feel fabulous.",
        actualPrice: 7500,
        discountedPrice: 4999,
        bestseller: false,
        subcategory: "Plus Size Nightwear",
        image: nightieProduct25,
    },
    {
        id: "nightieProduct26",
        title: "Lace-Trimmed Loungewear Night Wear Set",
        description: "The perfect marriage of loungewear comfort and lingerie glamour, this lace-trimmed night wear set is designed for women who love to look effortlessly beautiful at home. Soft, comfortable base fabric is elevated with delicate lace trim accents on the neckline, hem, and straps. The set includes a cami top and matching bottoms for a complete, coordinated look.",
        actualPrice: 2000,
        discountedPrice: 1349,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct26,
    },
    {
        id: "nightieProduct27",
        title: "Ladies Nightie Sleepwear - Sensual Night Wear",
        description: "Sensual, comfortable, and beautifully designed, this ladies nightie is crafted for the woman who values both beauty and rest. The flattering design skims over curves gracefully while the soft, breathable fabric ensures a comfortable night sleep. Whether for romantic evenings or self-care nights, this nightie delivers the perfect balance of style and comfort.",
        actualPrice: 2000,
        discountedPrice: 1349,
        bestseller: false,
        subcategory: "Sexy Nightie",
        image: nightieProduct27,
    },
    {
        id: "nightieProduct28",
        title: "Lace Perspective Lingerie Sexy Night Dress",
        description: "An electrifying design that commands attention, this lace perspective night dress features strategic see-through panels that create a captivating, tantalizing effect. The artistic placement of sheer lace against solid fabric creates depth and visual interest. A daring, confident choice for the woman who is not afraid to express her sensuality. Perfect for creating unforgettable intimate moments.",
        actualPrice: 2800,
        discountedPrice: 1899,
        bestseller: true,
        subcategory: "Sexy Nightie",
        image: nightieProduct28,
    },
    {
        id: "nightieProduct29",
        title: "Satin Babydoll Suspender Nightwear - Full Slip Nighty",
        description: "The classic babydoll silhouette reimagined in luxurious satin, this full slip suspender nightwear is both timeless and seductive. The smooth satin fabric catches the light with a beautiful sheen while the babydoll cut provides a flattering, figure-skimming silhouette. Delicate suspender straps and lace detailing add feminine elegance. A gorgeous, investment-worthy piece for your lingerie collection.",
        actualPrice: 3000,
        discountedPrice: 2099,
        bestseller: true,
        subcategory: "Chemise & Teddy",
        image: nightieProduct29,
    },
    {
        id: "nightieProduct30",
        title: "Transparent Lace Lingerie Pajama Set - Nightdress and Panty",
        description: "A complete intimate gift set featuring a transparent lace nightdress paired with a matching lace panty. The sheer, delicate lace creates a romantic, intimate aesthetic while the perfect coordination makes it ideal as a gift for weddings, anniversaries, or special celebrations. Comfortable elastic waistbands and adjustable straps ensure a great fit. A gift that says you deserve to feel beautiful.",
        actualPrice: 3200,
        discountedPrice: 2199,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct30,
    },
    {
        id: "nightieProduct31",
        title: "Satin Robe Pajamas Nighty - Hot and Sexy Ladies Set",
        description: "Turn up the heat with this stunning satin robe nighty set, the perfect combination of luxurious comfort and undeniable sensuality. The flowing satin robe has a natural, glamorous drape while the included matching pieces complete the look. Whether you are lounging at home or preparing for a romantic evening, this set makes you feel like the leading lady you are.",
        actualPrice: 3500,
        discountedPrice: 2399,
        bestseller: false,
        subcategory: "Pajama Set",
        image: nightieProduct31,
    },
    {
        id: "nightieProduct32",
        title: "Sexy Sleepwear Lingerie - Sheer Lace Night Set",
        description: "A stunning sheer lace lingerie set that is the definition of effortless seduction. The delicate, transparent lace fabric creates an ethereal, dream-like quality while the thoughtful design ensures you look and feel incredible. Light as a feather and sensual to the touch, this sleepwear set is the perfect choice for romantic evenings, honeymoons, and anytime you want to feel utterly irresistible.",
        actualPrice: 2600,
        discountedPrice: 1799,
        bestseller: false,
        subcategory: "Sexy Nightie",
        image: nightieProduct32,
    },
]);

// ------------------------------------------------------------
// 4. COMBINED CATALOG & EXPORTS
// ------------------------------------------------------------

export const products = [...bras, ...panties, ...nighties];

export const asset = {
    logo,
    mobileLogo,
    banner1,
    banner2,
    banner3,
    aboutImg,
    aboutSecondaryImg,
    braProduct1,
    braProduct2,
    braProduct3,
    braProduct4,
    braProduct5,
    braProduct6,
    pantieProduct1,
    pantieProduct2,
    pantieProduct3,
    pantieProduct4,
    pantieProduct5,
    pantieProduct6,
    pantieProduct7,
    pantieProduct8,
    pantieProduct9,
    pantieProduct10,
    pantieProduct11,
    pantieProduct12,
    pantieProduct13,
    pantieProduct14,
    pantieProduct15,
    pantieProduct16,
    pantieProduct17,
    pantieProduct18,
    nightieProduct1,
    nightieProduct2,
    nightieProduct3,
    nightieProduct4,
    nightieProduct5,
    nightieProduct6,
    nightieProduct7,
    nightieProduct8,
    nightieProduct9,
    nightieProduct10,
    nightieProduct11,
    nightieProduct12,
    nightieProduct13,
    nightieProduct14,
    nightieProduct15,
    nightieProduct16,
    nightieProduct17,
    nightieProduct18,
    nightieProduct19,
    nightieProduct20,
    nightieProduct21,
    nightieProduct22,
    nightieProduct23,
    nightieProduct24,
    nightieProduct25,
    nightieProduct26,
    nightieProduct27,
    nightieProduct28,
    nightieProduct29,
    nightieProduct30,
    nightieProduct31,
    nightieProduct32,
};

export default asset;

// Logo
export { logo };

// Category groups (same names as before, so existing imports keep working)
export const braProducts = bras;
export const pantieProducts = panties;
export const nightieProducts = nighties;
export const bestSellers = products.filter((p) => p.bestseller);

// Top-level categories and their subcategories, e.g. for filters and menus
export const categories = [CATEGORY_INNERWEAR, CATEGORY_SLEEPWEAR];

export const subcategoriesByCategory = products.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    if (!acc[p.category].includes(p.subcategory)) acc[p.category].push(p.subcategory);
    return acc;
}, {});

// Lookup helpers
export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductsByCategory = (category) =>
    products.filter((p) => p.category === category);
export const getProductsBySubcategory = (subcategory) =>
    products.filter((p) => p.subcategory === subcategory);