Build a landing page for "Loc Fácil", a construction equipment rental company in Brazil.
The visual style must closely mirror the attached reference website (Furnixa furniture store),
but adapted for equipment rental — using orange & blue instead of green tones.
All "Buy" interactions become WhatsApp rental buttons. There is no cart, no checkout.

The design should feel: clean, modern, airy — with generous whitespace, transparent/frosted
glass UI elements, smooth cards with hover effects, and a professional but approachable tone.
Think: "premium construction rental brand" — trustworthy and bold.

---

## design.json
```json
{
  "brand": {
    "name": "Loc Fácil",
    "tagline": "Alugue. Construa. Realize.",
    "instagram": "https://instagram.com/locfacilclaraval"
  },

  "designStyle": {
    "reference": "Furnixa furniture website — clean editorial layout, generous whitespace,
                  product cards on white background, frosted/glass UI badges,
                  dark footer, horizontal category filter pills, testimonial section",
    "adaptation": "Replace green palette with orange #E8621A (energy) + blue #1A3A6B (trust).
                   Replace furniture with construction equipment photography.
                   Replace purchase flow with WhatsApp CTA throughout.",
    "feel": "Modern, airy, premium-rental brand. Bold typography. Clean cards.
             Glass/transparent badge elements. Subtle shadows. Tasteful animations.",
    "moodKeywords": ["confiável", "moderno", "prático", "obra", "resultado"]
  },

  "colorPalette": {
    "primary": "#E8621A",
    "primaryDark": "#C04E0D",
    "primaryLight": "#F4894A",
    "secondary": "#1A3A6B",
    "secondaryDark": "#0F2347",
    "secondaryLight": "#2655A0",
    "accent": "#F5C842",
    "white": "#FFFFFF",
    "lightBg": "#F7F7F5",
    "cardBg": "#FFFFFF",
    "textDark": "#1A1A1A",
    "textMid": "#4B5563",
    "textLight": "#9CA3AF",
    "glassBadge": "rgba(255,255,255,0.75) with backdrop-filter: blur(8px)",
    "darkSection": "#0F2347",
    "orangeSection": "#E8621A"
  },

  "typography": {
    "displayFont": "Playfair Display — for H1 hero headline (same editorial feel as Furnixa)",
    "headingFont": "Barlow Condensed 700 — for H2, H3, section titles, uppercase",
    "bodyFont": "DM Sans 400/500 — for descriptions, labels, small text",
    "sizes": {
      "h1": "clamp(2.8rem, 5.5vw, 4.5rem)",
      "h2": "clamp(1.6rem, 3vw, 2.4rem)",
      "h3": "1.1rem, uppercase, letter-spacing 0.05em",
      "body": "0.95rem, line-height 1.65",
      "small": "0.8rem",
      "price": "1.3rem, Barlow Condensed 700, color: #E8621A",
      "badge": "0.7rem, uppercase, bold, letter-spacing 0.08em"
    }
  },

  "spacing": {
    "sectionPaddingY": "80px",
    "containerMaxWidth": "1280px",
    "containerPaddingX": "24px",
    "cardGap": "24px",
    "cardBorderRadius": "16px",
    "buttonBorderRadius": "999px (pill shape — same as Furnixa)"
  },

  "components": {
    "navbar": {
      "style": "transparent on scroll-top, white with shadow on scroll-down",
      "height": "68px",
      "logo": "Loc + Fácil — 'Loc' in secondary blue, 'Fácil' in orange; Barlow Condensed 800",
      "links": ["Equipamentos", "Como Funciona", "Sobre", "Contato"],
      "cta": "pill button — WhatsApp green — 'Pedir Orçamento'",
      "icons": "search icon + whatsapp icon right side (like Furnixa search + bag icons)"
    },

    "hero": {
      "layout": "full-width section, light gray background #F7F7F5 (same as Furnixa hero)",
      "structure": "centered headline top, large product image anchored bottom-right bleeds out,
                    floating glass badge cards on left side",
      "headline": {
        "text": "Alugue Equipamentos de Construção com Facilidade",
        "style": "Playfair Display, large, centered, dark — highlight 'Facilidade' in orange"
      },
      "ctaButton": "centered below headline — pill shape, orange — 'Solicitar no WhatsApp'",
      "floatingBadges": {
        "style": "glassmorphism cards — white 75% opacity + blur — same as Furnixa left badges",
        "badges": [
          "🚚 Entrega Rápida",
          "🔒 Sem Burocracia",
          "⭐ +500 Obras Atendidas"
        ]
      },
      "heroImage": "[generate] large dramatic image of construction equipment (betoneira + martelete)
                    on white/light background, studio style, bottom-right positioned, slight overflow",
      "socialProof": "small cluster of avatar icons + '⭐ Avaliação 4.9 — clientes satisfeitos'
                      floating card top-right (same pattern as Furnixa)"
    },

    "latestCollection": {
      "sectionTitle": "Nossos Equipamentos em Destaque",
      "layout": "title left + subtitle paragraph right (same 2-col header as Furnixa)",
      "subtitle": "Do martelete à betoneira — tudo que sua obra precisa, pronto para alugar hoje.",
      "cardRow": "horizontal scrollable row of 4 product cards (same as Furnixa collection row)",
      "card": {
        "background": "#FFFFFF",
        "border": "1px solid #F0F0F0",
        "borderRadius": "16px",
        "shadow": "0 2px 12px rgba(0,0,0,0.06)",
        "imageArea": "white background, centered equipment image, height 180px, padding 16px",
        "badgeTopLeft": "glass pill — 'Novo' or 'Popular' in orange",
        "wishlistIcon": "top-right heart icon (repurpose: use WhatsApp icon instead)",
        "name": "DM Sans 500, dark, 0.95rem",
        "price": "Barlow Condensed 700, orange — 'A partir de R$ 80/dia'",
        "ratingRow": "⭐ 4.8 · 34 avaliações — small gray text",
        "hoverEffect": "card lifts (translateY -6px), shadow deepens, border turns orange"
      }
    },

    "marqueeStatement": {
      "style": "full-width large editorial text — same as Furnixa 'We craft amazing products...'",
      "text": "Entregamos os equipamentos certos 🏗️ para cada obra e ajudamos a construir 🔧 resultados reais com rapidez e confiança 🤝",
      "background": "#FFFFFF",
      "font": "Playfair Display or Barlow Condensed, 2rem+, centered, with equipment emoji inline"
    },

    "whyLocFacil": {
      "layout": "2 columns — left: 2 stacked images with 'Novo Estoque' glass badge (like Furnixa),
                 right: text content + benefit icons",
      "background": "#0F2347 (dark blue)",
      "leftImages": "[generate] 2 stacked construction site / equipment photos, rounded corners",
      "glassBadge": "'🔧 Equipamento Revisado' — glass card overlapping images",
      "rightContent": {
        "title": "Equipamentos que Você Vai Querer Sempre",
        "titleColor": "#FFFFFF",
        "subtitle": "Qualidade e confiabilidade em cada locação.",
        "subtitleColor": "#94A3B8",
        "benefits": [
          { "icon": "Truck", "title": "Entrega Grátis na Região", "desc": "Levamos até sua obra sem custo extra" },
          { "icon": "ShieldCheck", "title": "Preços Acessíveis", "desc": "Valores justos, sem taxa escondida" }
        ],
        "benefitIconBg": "rgba(232,98,26,0.15)",
        "benefitIconColor": "#E8621A"
      }
    },

    "equipmentCatalog": {
      "sectionTitle": "Todos os Equipamentos",
      "filterPills": {
        "style": "horizontal pill buttons — same as Furnixa 'All / Chair / Cabinet / Sofa / Bed'",
        "options": ["Todos", "Concreto", "Perfuração", "Estrutura", "Acabamento"],
        "activePill": "orange background, white text",
        "inactivePill": "white background, gray border, dark text"
      },
      "grid": "3-column card grid (same as Furnixa Best Quality Products section)",
      "cards": [
        { "name": "Betoneira 400L", "badge": "Popular", "price": "R$ 80/dia", "rating": "4.9" },
        { "name": "Martelete Perfurador", "badge": "Novo", "price": "R$ 60/dia", "rating": "4.8" },
        { "name": "Painel Metálico (Forma)", "badge": "", "price": "R$ 45/dia", "rating": "4.7" },
        { "name": "Andaime Tubular", "badge": "Popular", "price": "R$ 35/dia", "rating": "4.9" },
        { "name": "Compactador de Solo", "badge": "", "price": "R$ 90/dia", "rating": "4.8" },
        { "name": "Esmerilhadeira Angular", "badge": "Novo", "price": "R$ 40/dia", "rating": "4.6" }
      ],
      "cardImages": "[generate stock photos for each equipment — clean white/light background,
                     professional product photography style]"
    },

    "ctaBanner": {
      "style": "full-width rounded banner — same as Furnixa 'Explore the Beauty...' section",
      "background": "gradient from #1A3A6B to #0F2347 with subtle construction texture overlay",
      "layout": "text left-center + equipment image right (bleeds out of card bottom)",
      "title": "Equipamentos prontos para sua obra agora",
      "titleColor": "#FFFFFF",
      "ctaButton": "pill, orange — 'Solicitar no WhatsApp'",
      "image": "[generate] betoneira or martelete hero shot, partially cropped at bottom"
    },

    "testimonials": {
      "sectionLabel": "Depoimentos",
      "sectionTitle": "O que Nossos Clientes Disseram",
      "layout": "same as Furnixa — text testimonial left + 2 product images right",
      "card": {
        "quoteIcon": "large orange quotation marks",
        "text": "customer review text",
        "avatar": "orange circle with initials",
        "name": "customer name",
        "role": "Mestre de obras / Engenheiro / etc"
      },
      "navigation": "prev/next arrows below (same as Furnixa)",
      "rightImages": "[generate] 2 photos of happy workers using rented equipment on site"
    },

    "footer": {
      "background": "#0F2347",
      "topSection": "minimal — logo left, Instagram icon right",
      "divider": "1px solid rgba(255,255,255,0.1)",
      "bottomLine": {
        "left": "© 2025 Loc Fácil — Todos os direitos reservados",
        "right": "Desenvolvido por Leonardo Cintra",
        "textColor": "#64748B",
        "fontSize": "0.8rem"
      }
    }
  },

  "interactions": {
    "navbarScroll": "transparent → white + shadow on scroll past 80px",
    "cardHover": "translateY(-6px), shadow grows, optional orange border-top 3px appears",
    "filterPills": "smooth active state transition with orange fill",
    "ctaButton": "subtle scale(1.03) on hover, WhatsApp icon bounces once on page load",
    "heroImage": "subtle float animation — translateY ±8px, duration 4s ease-in-out infinite",
    "sectionReveal": "fade-up with stagger on scroll enter (use Intersection Observer)",
    "glassBadges": "fade-in with slight scale from 0.92 on page load"
  },

  "glassmorphism": {
    "style": "white background 70–80% opacity + backdrop-filter: blur(10px)",
    "border": "1px solid rgba(255,255,255,0.5)",
    "shadow": "0 4px 24px rgba(0,0,0,0.08)",
    "borderRadius": "12px",
    "usedIn": ["hero floating badges", "equipment stacked image badge", "navbar on scroll"]
  },

  "whatsappCTA": {
    "color": "#25D366",
    "icon": "WhatsApp SVG logo",
    "message": "Olá! Gostaria de alugar um equipamento da Loc Fácil.",
    "allButtonsLink": "https://wa.me/55XXXXXXXXXXX?text=Ol%C3%A1%21+Gostaria+de+alugar+um+equipamento+da+Loc+F%C3%A1cil.",
    "placement": "Navbar, Hero, each Equipment Card, CTA Banner, Final CTA section"
  }
}
```

## Technical Requirements
- Nextjs App Router latest (v16)
- Lucide React for all icons
- Google Fonts: Playfair Display + Barlow Condensed + DM Sans
- Framer Motion or CSS transitions for all animations
- Intersection Observer for scroll-triggered animations
- Mobile-first, fully responsive (stack to 1 column on mobile)
- Smooth scroll between anchor sections
- All WhatsApp buttons open: https://wa.me/5561994500144
- No cart, no login, no checkout — single-page landing only
- Language: pt-br

## Image Generation Instructions
- Hero: large studio-style image of construction equipment (betoneira prominently),
  clean background, slight drop shadow, partial bleed
- Equipment cards: individual product photos, white/light background, professional angles
- Why section: 2 stacked images — construction worker using equipment on a real job site
- CTA Banner: dramatic equipment close-up, warm orange-tinted lighting
- Testimonials right panel: 2 photos of job sites / workers, rounded cards