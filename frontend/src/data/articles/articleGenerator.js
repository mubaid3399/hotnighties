// ============================================================
// DYNAMIC PRODUCT ARTICLE GENERATOR
// Produces rich, tailored editorial guides & FAQs for all products
// ============================================================

export const generateProductArticle = (product) => {
  if (!product) return null;

  const title = product.title || 'Intimate Apparel Piece';
  const desc = product.description || '';
  const category = (product.category || '').toLowerCase();
  const subcategory = (product.subcategory || '').toLowerCase();
  const type = (product.type || '').toLowerCase();
  const price = product.discountedPrice || 1999;

  // Determine category archetype
  const isBra = type.includes('bra') || subcategory.includes('bra') || title.toLowerCase().includes('bra');
  const isPanty = type.includes('pantie') || subcategory.includes('pantie') || title.toLowerCase().includes('panty') || title.toLowerCase().includes('thong');
  const isNighty = subcategory.includes('night') || category.includes('sleepwear') || title.toLowerCase().includes('nighty') || title.toLowerCase().includes('gown');
  const isLingerie = category.includes('lingerie') || subcategory.includes('lingerie') || title.toLowerCase().includes('sexy') || title.toLowerCase().includes('babydoll') || title.toLowerCase().includes('chemise');
  const isRobe = title.toLowerCase().includes('robe') || subcategory.includes('robe') || title.toLowerCase().includes('kimono');
  const isPajama = title.toLowerCase().includes('pajama') || subcategory.includes('pajama') || title.toLowerCase().includes('cami');

  // 1. Story & Narrative
  let story = [];
  let badge = 'Premium Essential';
  let headline = `Complete Guide: ${title}`;
  let subheadline = `Discover the craftsmanship, superior fabric, and flattering contour that sets this piece apart`;

  if (isBra) {
    badge = 'Contour & Support Engineering';
    headline = `Designed for All-Day Comfort: ${title}`;
    subheadline = `Why this bra offers seamless contouring, zero-poke support, and breathable everyday elegance`;
    story = [
      `Engineered with precision for modern women who refuse to compromise between comfort and silhouette definition, the ${title} provides tailored support without constricting your natural shape. Whether worn under casual everyday tees or festive formal outfits, it shapes a smooth, natural outline.`,
      `Crafted using flexible, skin-pampering microfibers and ergonomic underband construction, this bra eliminates side spillage, painful shoulder digging, and skin pinching. The breathable cup structure allows continuous airflow, keeping you fresh and confident through long, warm days in Pakistan.`
    ];
  } else if (isNighty || isLingerie) {
    badge = 'Luxury Sleepwear & Sensual Allure';
    headline = `Effortless Grace: ${title}`;
    subheadline = `The secret to indulgent evenings, soothing sleep, and romantic confidence`;
    story = [
      `Elevate your nighttime ritual with the luxurious ${title}. Beautifully tailored to drape like a gentle breeze over feminine curves, this piece harmonizes romantic allure with relaxing lounge comfort.`,
      `Every seam, strap, and trim has been designed to celebrate your silhouette while ensuring you never feel restricted. The premium fabric feels delightfully soft against bare skin, making every evening and morning feel like a luxurious getaway.`
    ];
  } else if (isRobe) {
    badge = 'Royal Loungewear Collection';
    headline = `Wrap Yourself in Elegance: ${title}`;
    subheadline = `Plush softness, timeless elegance, and effortless loungewear luxury`;
    story = [
      `Step into pure comfort with the ${title}. Designed as the quintessential morning and evening layer, this robe wraps you in sophisticated elegance whether preparing for your day or unwinding after hours.`,
      `Featuring a flowing cut, adjustable waist sash, and indulgent fabric that stays soft after repeated washes, it is a staple investment for every curated wardrobe and bridal trousseau.`
    ];
  } else if (isPanty) {
    badge = 'Zero-Line Comfort Fit';
    headline = `Second-Skin Perfection: ${title}`;
    subheadline = `Eliminate panty lines and irritation with breathable stretch contouring`;
    story = [
      `Experience invisible, all-day confidence with the ${title}. Cut to sit smoothly beneath tight trousers, jeans, and bridal wear without irritating panty lines or rolling waistbands.`,
      `Features a 100% natural cotton gusset lining for hygienic, moisture-wicking freshness and flexible multi-way stretch edges that never dig into your hips.`
    ];
  } else {
    story = [
      desc || `The ${title} is crafted with attention to fine details, delivering optimal fit, enduring quality, and contemporary design.`,
      `Made using premium, skin-friendly fabrics with careful finishing that retains elasticity, softness, and vibrant colour over time.`
    ];
  }

  // 2. Why it is different and better
  const whyBetter = [
    {
      title: isBra ? 'Zero-Poke Gentle Contouring' : isNighty || isLingerie ? 'Feather-Light Breathable Touch' : 'Silky Skin-Safe Comfort',
      description: isBra
        ? 'Constructed with cushioned cup edges and soft-touch underband that avoids the painful poking and underarm chafing common in market bras.'
        : 'Woven from premium micro-threads with cloud-soft hand-feel that never scratches, itches, or clings uncomfortably in humid weather.'
    },
    {
      title: 'Ergonomic Tailoring for Pakistani Body Types',
      description: 'Unlike mass-produced imports with arbitrary sizing, this piece is cut to flatter and support natural South Asian proportions with flexible ease.'
    },
    {
      title: 'Durable Double-Locked Stitching',
      description: 'Reinforced at all high-tension points with high-elasticity threads, ensuring seams will not snap, fray, or unravel during active movement or washing.'
    },
    {
      title: 'Fade-Resistant Luxury Dyes',
      description: 'Dyed using eco-friendly, hypoallergenic color-locking pigments that retain their deep, rich luster without bleeding onto bedsheets or other clothing.'
    },
    {
      title: '100% Discreet Packaging & Fast COD Delivery',
      description: 'Delivered nationwide across Pakistan in a secure, completely plain, unbranded parcel ensuring 100% privacy from dispatch to your doorstep.'
    }
  ];

  // 3. Comparison
  const comparisonTable = {
    hotnighties: [
      'Skin-friendly hypoallergenic fabric tailored for humid weather',
      'Ergonomic flexible cut that contours without binding or pinching',
      'Reinforced stretch stitching that preserves shape over time',
      '100% discreet, plain-package courier delivery nationwide',
      'Authentic product backed by dedicated WhatsApp size assistance'
    ],
    generic: [
      'Cheap scratchy synthetic blends that irritate sensitive skin',
      'Boxy or ill-proportioned cuts that cause spillage and riding up',
      'Loose threads that snap and lose shape after a few washes',
      'Often delivered in transparent bags or with awkward exterior labels',
      'No customer support or size guidance after purchase'
    ]
  };

  // 4. Styling Tips
  const stylingTips = isBra
    ? [
        'Perfect as an everyday contour bra beneath fitted T-shirts, kurtis, and formal blouses.',
        'Adjust the shoulder straps so two fingers can easily slide under the band for optimal support.',
        'Pair with matching smooth panties for a coordinated foundation.'
      ]
    : isNighty || isLingerie
    ? [
        'Layer underneath a matching sheer kimono or satin bathrobe for a complete bridal or loungewear look.',
        'Wear for romantic anniversary celebrations, honeymoons, or indulgent weekend lounging.',
        'Drape with delicate jewelry and soft slippers for an effortless luxury evening aesthetic.'
      ]
    : [
        'Versatile staple suitable for daily layering, lounging, and comfortable slumber.',
        'Keep in your regular rotation for dependable comfort that retains softness wash after wash.',
        'Ideal gift for brides-to-be, anniversaries, or self-care indulgence.'
      ];

  // 5. Care Guide
  const careGuide = [
    'Hand wash in cool or lukewarm water (30°C max) using mild detergent for best longevity.',
    'If machine washing, place inside a protective mesh lingerie bag on the delicate cycle.',
    'Do not bleach, wring vigorously, or use harsh fabric softeners.',
    'Air dry in the shade on a flat surface or hanger away from direct intense sunlight and tumble dryers.'
  ];

  // 6. Deeply Product-Specific FAQs Generator
  const t = title.toLowerCase();
  const d = (desc || '').toLowerCase();

  const hasLace = t.includes('lace') || d.includes('lace');
  const isPadded = t.includes('pad') || d.includes('pad') || t.includes('foam');
  const isNonPadded = t.includes('non padded') || t.includes('unpadded') || t.includes('non-padded');
  const isWired = t.includes('wired') || d.includes('wired');
  const isWireFree = t.includes('non wired') || t.includes('wireless') || t.includes('wirefree') || t.includes('wire-free') || (!isWired && isBra);
  const isCotton = t.includes('cotton') || d.includes('cotton');
  const isSilkSatin = t.includes('silk') || t.includes('satin') || d.includes('silk') || d.includes('satin');
  const isPushUp = t.includes('push up') || t.includes('push-up') || t.includes('plunge');
  const isBridal = t.includes('bridal') || t.includes('wedding') || d.includes('bridal') || d.includes('wedding');
  const isLong = t.includes('long') || t.includes('gown') || t.includes('floor') || t.includes('maxi');
  const isShort = t.includes('short') || t.includes('mini') || t.includes('babydoll');
  const isPack = t.includes('pack of') || t.includes('set of') || t.includes('pack') || t.includes('2 pc') || t.includes('3 pc') || t.includes('5 pc') || t.includes('6 pc');
  const isCamisole = t.includes('cami') || t.includes('tank');
  const isNippleCover = t.includes('nipple') || t.includes('cover');
  const isTights = t.includes('tight') || t.includes('sock');

  let faqs = [];

  if (isNippleCover) {
    faqs = [
      {
        question: `Are these ${title} reusable, and how many times can they be worn?`,
        answer: `Yes, our medical-grade silicone covers are washable and reusable up to 30 to 50 times with proper care. Simply rinse under lukewarm water with mild soap and let air dry to reactivate the self-adhesive surface.`
      },
      {
        question: 'Are they sweat-proof and waterproof for humid summers and weddings?',
        answer: 'Yes! The high-adhesion organic silicone backing is engineered to withstand perspiration and humidity, staying firmly in place under formal gowns, bridal wear, and backless dresses.'
      },
      {
        question: 'Will they show an unnatural ridge through thin white silk or chiffon?',
        answer: 'No. They feature ultra-thin, tapered feather edges that blend seamlessly with your skin, giving a completely invisible, smooth silhouette with zero nipple show-through.'
      },
      {
        question: 'Is the adhesive hypoallergenic and painless to remove?',
        answer: 'Yes, crafted from pure biocompatible silicone that peels off smoothly without irritating sensitive skin or pulling delicate breast tissue.'
      },
      {
        question: 'How do I store them between uses?',
        answer: 'Always replace the protective clear plastic film over the adhesive after drying and store inside their protective case to prevent dust and lint accumulation.'
      }
    ];
  } else if (isTights) {
    faqs = [
      {
        question: `What is the opacity and stretch elasticity of ${title}?`,
        answer: 'Woven with high-denier microfiber stretch yarn that provides smooth, uniform leg coverage with multi-directional elasticity that moves with your body without sagging or bagging at the knees.'
      },
      {
        question: 'Does the waistband roll down or dig uncomfortably into the waist?',
        answer: 'No. Features an extra-wide, soft-ribbed contour waistband that sits comfortably at the natural waist without rolling, pinching, or cutting off circulation.'
      },
      {
        question: 'Are the toes and crotch gusset reinforced against laddering?',
        answer: 'Yes, critical friction zones including the toe caps and inner crotch gusset are double-knitted with anti-laddering threads to resist runs and friction tears.'
      },
      {
        question: 'How should I wash these tights to prevent snags?',
        answer: 'We recommend gentle hand washing or placing inside a protective mesh laundry bag on cold delicate cycle. Never wash alongside garments with open hooks or rough zippers.'
      }
    ];
  } else if (isBra) {
    if (isPadded || isPushUp) {
      faqs = [
        {
          question: `Are the cups of ${title} thickly padded or light contour foam?`,
          answer: isPushUp
            ? 'This bra features sculpted push-up padding designed to gently lift and center the bust, creating an enhanced, flattering cleavage without stiff bulk.'
            : 'It is crafted with lightweight, breathable contour foam cups that provide full nipple modesty and a smooth, rounded shape without adding excess cup bulk.'
        },
        {
          question: `Is this ${title} wired or wire-free?`,
          answer: isWired
            ? 'It features soft-cushioned underwires encased in plush channel ribbon that lifts and separates the bust without painful poking or ribcage pressure.'
            : 'It is completely wireless! Soft underbust contouring provides reliable everyday support and uplift with zero metal wire discomfort.'
        },
        {
          question: 'Will this bra show ridges or seam lines under fitted T-shirts and kurtis?',
          answer: 'No. The cups feature ultra-smooth, seamless outer microfiber construction that stays completely invisible beneath light tees, tight kurtis, and formal silk blouses.'
        },
        {
          question: 'How do the shoulder straps fit — do they adjust to prevent digging?',
          answer: 'Equipped with fully adjustable, brushed soft-touch shoulder straps engineered with optimal width to disperse bust weight evenly and eliminate shoulder grooves.'
        },
        {
          question: 'How do I wash this padded bra without deforming or wrinkling the cups?',
          answer: 'Hand wash in cold water using gentle detergent and reshape the cups with your fingers while damp. Never wring or tumble dry; air dry flat or hang by the center gore.'
        },
        {
          question: 'How do I choose the correct band and cup size for this bra?',
          answer: 'Our bras are calibrated true to standard Pakistani sizing (e.g. 32B, 34B, 36B, 38B, 40B). If you are between band sizes, size up for a relaxed fit or reach out to our WhatsApp styling desk for exact measurement advice.'
        }
      ];
    } else {
      // Non-padded / Cotton / Classic Bra
      faqs = [
        {
          question: `Does ${title} provide double-layer fabric coverage over the bust?`,
          answer: 'Yes, the cups are designed with dual-layered high-density fabric that ensures natural support and complete modesty without requiring foam padding.'
        },
        {
          question: `Is the fabric of ${title} breathable for hot and humid weather in Pakistan?`,
          answer: isCotton
            ? 'Yes, made from 100% premium combed cotton that absorbs perspiration, promotes continuous air circulation, and keeps you delightfully fresh throughout long summer days.'
            : 'Yes, crafted from breathable moisture-wicking micro-stretch fabric engineered specifically to keep skin cool and dry during hot weather.'
        },
        {
          question: 'Does this bra have any metal wires that can poke into the ribs?',
          answer: 'No, this is a 100% wire-free comfort bra. The supportive underband gently contours to your ribcage with soft-touch elastic, providing zero-pressure comfort.'
        },
        {
          question: 'Can this bra be worn for sleeping and all-day home lounging?',
          answer: 'Absolutely! Its non-restrictive, seamless comfort makes it a top choice for 24/7 wear, sleeping, and everyday household activities.'
        },
        {
          question: 'Will the underband elastic roll up or stretch out after washing?',
          answer: 'No. We use reinforced multi-thread elastic bands that recover their original shape wash after wash without curling, snapping, or losing tension.'
        },
        {
          question: 'How does this bra shape the bust compared to padded bras?',
          answer: 'It supports your authentic natural silhouette, distributing tissue smoothly across the chest for a graceful, unexaggerated look under Eastern and Western clothing.'
        }
      ];
    }
  } else if (isPanty) {
    faqs = [
      {
        question: `Does ${title} show visible panty lines (VPL) under tight clothes?`,
        answer: 'No. Engineered with flat laser-cut edges and ultra-thin stretch seams that lie completely flush against the skin, staying virtually invisible under fitted trousers, jeans, and party wear.'
      },
      {
        question: 'Is the inner crotch gusset made from 100% pure cotton for feminine hygiene?',
        answer: 'Yes, every panty features a 100% natural breathable cotton gusset lining that prevents moisture buildup and protects feminine intimate health.'
      },
      {
        question: `What is the rise height and waistband fit of ${title}?`,
        answer: t.includes('high')
          ? 'Features a comfortable high-waist rise that gently tucks the tummy and smooths love handles without rolling down when sitting.'
          : 'Features an ergonomic mid-rise / low-rise cut that rests naturally on the hips with gentle, non-pinching elastic.'
      },
      {
        question: 'Will the waistband or leg openings dig into the skin or cause chafing?',
        answer: 'No. The elastic trims are wrapped in soft-spun fibers that stretch generously to match your body movements with zero digging or red marks.'
      },
      {
        question: isPack
          ? 'What colors and sizes are included in this pack?'
          : 'How do I choose the correct hip measurement size?',
        answer: isPack
          ? 'This value pack includes a curated assortment of popular everyday tones. Each piece is crafted from identical premium fabric and checked for consistent sizing.'
          : 'Refer to your standard trouser size: Small fits 34-36 inch hips, Medium fits 36-38 inch hips, Large fits 38-40 inch hips, and XL fits 40-42 inch hips.'
      },
      {
        question: 'How does the fabric hold up to repeated machine washes?',
        answer: 'The color-locking dyes and resilient elastane threads prevent shrinking, color fading, and loose elastic threads through frequent laundry cycles.'
      }
    ];
  } else if (isRobe) {
    faqs = [
      {
        question: `What is the fabric texture and warmth level of ${title}?`,
        answer: isSilkSatin
          ? 'Crafted from lustrous silk satin with a liquid-soft hand-feel. It is lightweight, cooling, and drapes elegantly for year-round luxury lounging and bridal trousseau.'
          : 'Crafted from plush, highly absorbent cotton terry / waffle weave that wraps you in cozy, comforting warmth right after a bath or on chilly mornings.'
      },
      {
        question: 'Does this robe include an inner security tie as well as the outer sash belt?',
        answer: 'Yes! Features internal ribbon ties to keep the robe securely closed across the chest, paired with matching outer belt loops and an adjustable sash tie.'
      },
      {
        question: 'What is the sleeve and hem length of this robe?',
        answer: isLong
          ? 'Designed as a full-length maxi robe that gracefully reaches the calves or ankles, with full-length relaxed sleeves for complete coverage and warmth.'
          : 'Features a comfortable knee-length / mid-thigh hemline with elegant 3/4 length kimono sleeves that stay clear of water when washing your face or hands.'
      },
      {
        question: 'Does this robe have functional side pockets?',
        answer: 'Yes, it features deep, seamlessly integrated side pockets to comfortably hold your phone, lip balm, or keep your hands warm.'
      },
      {
        question: 'Can this robe be layered over matching nighties and lingerie?',
        answer: 'Yes, it is designed with a generous, flowing silhouette that slips effortlessly over camisoles, sleep shirts, and sensual nightgowns.'
      },
      {
        question: 'How do I wash this robe to maintain its fabric luster and softness?',
        answer: 'Machine wash on gentle cycle in cold water with mild detergent. For satin robes, hang to air dry in the shade; for terry cotton robes, tumble dry low for fluffy softness.'
      }
    ];
  } else if (isPajama) {
    faqs = [
      {
        question: `What is the waistband design on the ${title} bottoms?`,
        answer: 'Features a wide, flexible elastic waistband complemented by an adjustable satin / fabric drawstring to let you customize your exact waist comfort.'
      },
      {
        question: 'Does the camisole / shirt top have adjustable shoulder straps?',
        answer: 'Yes, the top is equipped with smooth metal sliders on the straps so you can effortlessly adjust the neckline drop and bust fit.'
      },
      {
        question: 'Is the fabric lightweight and breathable for hot summer nights?',
        answer: 'Yes! Woven from cooling, feather-light fibers that allow air to circulate freely around your body, preventing nighttime sweating and overheating.'
      },
      {
        question: 'Does this pajama set shrink after washing?',
        answer: 'No. The fabric is pre-shrunk during manufacturing, ensuring the length and fit remain true to size through repeated gentle washes.'
      },
      {
        question: 'Can this set be worn as both sleepwear and casual lounge wear at home?',
        answer: 'Absolutely! Its coordinated, polished aesthetic makes it ideal for relaxing on Sunday mornings, working from home, and sleeping comfortably.'
      },
      {
        question: 'What size should I choose if I prefer a loose, relaxed fit?',
        answer: 'Our pajama sets are cut with a relaxed drape. If you prefer extra roominess for sleeping, we recommend sizing up one size.'
      }
    ];
  } else if (isNighty || isLingerie) {
    faqs = [
      {
        question: `What is the length of ${title} — is it floor length or above knee?`,
        answer: isLong
          ? 'This piece is cut as a graceful floor-length maxi nightgown (approx. 52-56 inches length) that creates a statuesque, slimming silhouette.'
          : 'This piece features a playful, seductive mid-thigh / above-knee hemline that showcases your legs and moves freely.'
      },
      {
        question: `Does ${title} include a matching panty or under-piece?`,
        answer: hasLace || isLingerie
          ? 'Yes, this sensual piece comes with a coordinated matching G-string / panty to complete your intimate look.'
          : 'This piece is designed as a standalone luxury sleep dress that pairs beautifully with any of our matching undergarments or robes.'
      },
      {
        question: 'How sheer or transparent is the material?',
        answer: hasLace
          ? 'Features an artistic balance of delicate sheer floral lace and soft contour panels that offer an alluring glimpse while framing your silhouette.'
          : 'Crafted from opaque, high-density silk/satin that drapes smoothly without being see-through under room lighting.'
      },
      {
        question: 'Are the shoulder straps adjustable for different bust heights?',
        answer: 'Yes, equipped with smooth sliders or ribbon ties that allow you to raise or lower the neckline for your exact comfort and preference.'
      },
      {
        question: 'Will the fabric cause itching or cling uncomfortably in air conditioning?',
        answer: 'No. Crafted from anti-static, hypoallergenic micro-threads that feel cool to the touch and glide effortlessly across your skin without clinging.'
      },
      {
        question: 'How do I care for this delicate nightgown to preserve its beauty?',
        answer: 'Hand wash gently in cool water with mild silk/lingerie shampoo. Lay flat to dry away from direct heat to protect the delicate seams and lace.'
      }
    ];
  } else {
    // General fallback tailored to the product title
    faqs = [
      {
        question: `What makes ${title} different from standard market alternatives?`,
        answer: `The ${title} is constructed using superior skin-friendly fabrics, reinforced stitching, and ergonomic tailoring specifically proportioned for South Asian body types.`
      },
      {
        question: `How do I select the right size for ${title}?`,
        answer: 'Our items fit true to standard Pakistani measurements. Check our Size Guide or message our female styling desk on WhatsApp (+92 306 5363744) for confidential assistance.'
      },
      {
        question: 'Is the fabric suitable for sensitive skin?',
        answer: 'Yes, all our fabrics undergo rigorous quality testing and are pre-treated to be hypoallergenic, breathable, and free of harsh chemical residues.'
      },
      {
        question: 'How do I wash and care for this product?',
        answer: 'We recommend gentle washing in cool water with mild detergent. Avoid bleach and tumble drying to ensure the elastic and colors stay vibrant.'
      },
      {
        question: 'How is the item packaged when delivered in Pakistan?',
        answer: 'Every order is sealed in a 100% discreet, plain opaque flyer with no intimate descriptions or logos visible on the exterior.'
      }
    ];
  }

  return {
    headline,
    subheadline,
    badge,
    story,
    whyBetter,
    comparisonTable,
    stylingTips,
    careGuide,
    faqs
  };
};
