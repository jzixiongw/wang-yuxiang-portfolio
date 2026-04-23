import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const __dirname = decodeURIComponent(path.dirname(new URL(import.meta.url).pathname));
const PUBLIC = path.join(__dirname, 'public');

// ─── Page dimensions (landscape A4) ───
const W = 841.89;
const H = 595.28;
const MARGIN = 60;
const CONTENT_W = W - MARGIN * 2;
const CONTENT_H = H - MARGIN * 2;

// ─── Colors & Fonts ───
const BLACK = '#1a1a1a';
const GRAY = '#555555';
const LIGHT_GRAY = '#999999';
const ACCENT = '#333333';
const BG = '#ffffff';

// ─── Data (EN version) ───
const hero = {
  name: 'WANG Yuxiang',
  school: 'Nuova Accademia di Belle Arti, Milano (NABA)',
  intro:
    'I am a creator focused on character rigging, technical art, and visual storytelling, with experience in game design, short films, and 3D/VFX production. I am continuously exploring the intersection of technical tools and artistic expression.',
  resumeItems: [
    'Major: Creative Technology — Game / Animation Track',
    'Undergraduate, Class of 2026',
  ],
};

const projects = [
  // Featured
  {
    titleEn: 'Face Rigging Project',
    cover: '/images/face-rigging-cover.jpg',
    descriptionEn:
      'Built a complete facial rigging system using a custom-made facial rigging toolkit. The project covers facial skeleton setup, controller creation, weight painting, GUI design & linking, eye functionality, Wrap4D blendshape creation & import, code-based blendshape system in Maya, and integrating blendshapes into the existing rig pipeline. It also includes mouth expression drivers, zipper lips, overall lip control, mouth-jaw/nose linkage, wrinkle normal map creation & connection, eyebrow-forehead coordination, secondary controller integration with SDK mirroring, common Deformer applications, and head squash & stretch for expression enhancement.',
    featured: true,
  },
  {
    titleEn: 'Full Body Rigging Project',
    cover: '/images/full-body-rigging-cover.jpg',
    descriptionEn:
      'Implemented a full-body rigging system with basic scripting support, featuring IK/FK switching, spine IK, limb stretch & twist (with counter-flip), corrective shapes, and helper joints.',
    featured: true,
  },
  {
    titleEn: 'Taison Project',
    cover: '/images/taison-cover.jpg',
    descriptionEn:
      'An abstract, concept-driven short film created collaboratively in UE5. All assets were made by the team. I contributed to most stages — from ideation, storyboarding, and character work to VFX. The piece was shortlisted for the Italian national TGA competition and exhibited in Rome.',
    featured: true,
  },
  {
    titleEn: 'UE PCG Project',
    cover: '/images/ue-pcg-cover.jpg',
    descriptionEn:
      'A UE5 learning project inspired by online tutorials. I built a set of procedural assets to form the main landscape, then added procedural foliage and a focal-point tree created in SpeedTree. Fog cards, lighting, and bird-flock particles complete the atmosphere.',
    featured: true,
  },
  {
    titleEn: 'Whiteout Game Dev Project',
    cover: '/images/whiteout-cover.jpg',
    descriptionEn:
      'Created during a Global Game Jam. As a team project, I was mainly responsible for art and contributed gameplay design ideas.',
    featured: true,
  },
  // Other
  {
    titleEn: 'Animation Project',
    cover: '/images/animation-cover.jpg',
    descriptionEn:
      'This project focused on hand-keying a short animation clip.',
    featured: false,
  },
  {
    titleEn: 'Film Directing Portfolio',
    cover: '/images/films-cover.jpg',
    descriptionEn:
      'A collection of past directing, cinematography, and lighting works.',
    featured: false,
  },
  {
    titleEn: 'DaVinci Project',
    cover: '/images/davinci-cover.jpg',
    descriptionEn:
      'This project explored DaVinci Resolve color grading and VFX features, including primary and secondary color correction.',
    featured: false,
  },
  {
    titleEn: 'Maya Lighting Project',
    cover: '/images/maya-light-cover.jpg',
    descriptionEn:
      'This project focused on creating a sunset lighting scene in Maya.',
    featured: false,
  },
  {
    titleEn: 'Nuke Project',
    cover: '/images/nuke-cover.jpg',
    descriptionEn:
      'A summary and showcase of my Nuke learning, including keying, tracking, and color management.',
    featured: false,
    subItems: [
      { title: 'Screen Replacement', caption: 'Replaced on-screen content with target footage.' },
      { title: 'Camera Tracking', caption: 'Completed 3D camera solve for live-action footage.' },
      { title: 'Text Replacement', caption: 'Replaced existing text information in the footage.' },
      { title: 'Green Screen Replacement', caption: 'Completed keying and rebuilt background environment.' },
    ],
  },
];

// ─── Build PDF ───
const doc = new PDFDocument({
  size: [W, H],
  margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  info: {
    Title: 'WANG Yuxiang — Portfolio',
    Author: 'WANG Yuxiang',
  },
});

const OUTPUT = path.join(PUBLIC, 'documents', 'WANG_Yuxiang_Portfolio.pdf');
const stream = fs.createWriteStream(OUTPUT);
doc.pipe(stream);

// ─── Helper: register fonts (use Helvetica built-in) ───
const FONT_REGULAR = 'Helvetica';
const FONT_BOLD = 'Helvetica-Bold';
const FONT_LIGHT = 'Helvetica';
const FONT_OBLIQUE = 'Helvetica-Oblique';

// ─── Helper: draw a thin rule ───
function drawRule(y, width = CONTENT_W, xOffset = MARGIN) {
  doc
    .strokeColor(LIGHT_GRAY)
    .lineWidth(0.5)
    .moveTo(xOffset, y)
    .lineTo(xOffset + width, y)
    .stroke();
}

// ─── Helper: safe image fit ───
function fitImage(imgPath, x, y, maxW, maxH) {
  const fullPath = path.join(PUBLIC, imgPath);
  if (!fs.existsSync(fullPath)) return y;
  doc.image(fullPath, x, y, {
    fit: [maxW, maxH],
    align: 'center',
    valign: 'center',
  });
  return y;
}

// ════════════════════════════════════════════════
// PAGE 1: COVER / TITLE
// ════════════════════════════════════════════════
function drawCoverPage() {
  // Centered vertically
  const centerY = H / 2;

  // Name
  doc
    .font(FONT_BOLD)
    .fontSize(42)
    .fillColor(BLACK)
    .text(hero.name, MARGIN, centerY - 110, {
      width: CONTENT_W,
      align: 'center',
    });

  // Thin rule
  drawRule(centerY - 50, 200, W / 2 - 100);

  // School
  doc
    .font(FONT_LIGHT)
    .fontSize(13)
    .fillColor(GRAY)
    .text(hero.school, MARGIN, centerY - 35, {
      width: CONTENT_W,
      align: 'center',
    });

  // Portfolio label
  doc
    .font(FONT_OBLIQUE)
    .fontSize(14)
    .fillColor(LIGHT_GRAY)
    .text('Portfolio', MARGIN, centerY + 5, {
      width: CONTENT_W,
      align: 'center',
    });
}

// ════════════════════════════════════════════════
// PAGE 2: ABOUT / INTRO
// ════════════════════════════════════════════════
function drawIntroPage() {
  doc.addPage();

  let y = MARGIN + 20;

  // Section title
  doc
    .font(FONT_BOLD)
    .fontSize(11)
    .fillColor(LIGHT_GRAY)
    .text('ABOUT', MARGIN, y, { width: CONTENT_W });

  y += 30;
  drawRule(y);
  y += 25;

  // Name
  doc
    .font(FONT_BOLD)
    .fontSize(28)
    .fillColor(BLACK)
    .text(hero.name, MARGIN, y, { width: CONTENT_W });

  y += 45;

  // School
  doc
    .font(FONT_LIGHT)
    .fontSize(12)
    .fillColor(GRAY)
    .text(hero.school, MARGIN, y, { width: CONTENT_W });

  y += 30;

  // Resume items
  hero.resumeItems.forEach((item) => {
    doc
      .font(FONT_LIGHT)
      .fontSize(11)
      .fillColor(GRAY)
      .text(`·  ${item}`, MARGIN, y, { width: CONTENT_W });
    y += 18;
  });

  y += 20;
  drawRule(y);
  y += 25;

  // Intro paragraph
  doc
    .font(FONT_LIGHT)
    .fontSize(12)
    .fillColor(BLACK)
    .text(hero.intro, MARGIN, y, {
      width: CONTENT_W * 0.7,
      lineGap: 6,
    });
}

// ════════════════════════════════════════════════
// PAGE 3: TABLE OF CONTENTS
// ════════════════════════════════════════════════
function drawTOC() {
  doc.addPage();

  let y = MARGIN + 20;

  doc
    .font(FONT_BOLD)
    .fontSize(11)
    .fillColor(LIGHT_GRAY)
    .text('WORKS', MARGIN, y);

  y += 30;
  drawRule(y);
  y += 25;

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  // Featured
  doc
    .font(FONT_BOLD)
    .fontSize(16)
    .fillColor(BLACK)
    .text('Featured Projects', MARGIN, y);
  y += 30;

  featured.forEach((p, i) => {
    doc
      .font(FONT_LIGHT)
      .fontSize(11)
      .fillColor(GRAY)
      .text(`${String(i + 1).padStart(2, '0')}`, MARGIN, y, { continued: true })
      .font(FONT_REGULAR)
      .fillColor(BLACK)
      .text(`    ${p.titleEn}`, { continued: false });
    y += 22;
  });

  y += 20;

  // Other
  doc
    .font(FONT_BOLD)
    .fontSize(16)
    .fillColor(BLACK)
    .text('Other Projects', MARGIN, y);
  y += 30;

  others.forEach((p, i) => {
    doc
      .font(FONT_LIGHT)
      .fontSize(11)
      .fillColor(GRAY)
      .text(`${String(i + 1 + featured.length).padStart(2, '0')}`, MARGIN, y, { continued: true })
      .font(FONT_REGULAR)
      .fillColor(BLACK)
      .text(`    ${p.titleEn}`, { continued: false });
    y += 22;
  });
}

// ════════════════════════════════════════════════
// PROJECT PAGES
// ════════════════════════════════════════════════
function drawProjectPages(project, index) {
  doc.addPage();

  // ── Page 1: Full-bleed image with title overlay ──
  const imgPath = path.join(PUBLIC, project.cover);
  const imgExists = fs.existsSync(imgPath);

  if (imgExists) {
    // Full-bleed cover image (with margins)
    const imgMaxW = CONTENT_W;
    const imgMaxH = CONTENT_H - 80; // leave room for title at bottom

    doc.image(imgPath, MARGIN, MARGIN, {
      fit: [imgMaxW, imgMaxH],
      align: 'center',
      valign: 'center',
    });
  }

  // Project number + title at bottom
  const titleY = H - MARGIN - 45;
  
  doc
    .font(FONT_LIGHT)
    .fontSize(10)
    .fillColor(LIGHT_GRAY)
    .text(`${String(index + 1).padStart(2, '0')}`, MARGIN, titleY);

  doc
    .font(FONT_BOLD)
    .fontSize(22)
    .fillColor(BLACK)
    .text(project.titleEn, MARGIN, titleY + 16, { width: CONTENT_W });

  // ── Page 2: Description ──
  if (project.descriptionEn && project.descriptionEn.length > 60) {
    doc.addPage();

    let y = MARGIN + 20;

    // Project number + title
    doc
      .font(FONT_LIGHT)
      .fontSize(10)
      .fillColor(LIGHT_GRAY)
      .text(`${String(index + 1).padStart(2, '0')}  —  ${project.featured ? 'Featured' : 'Other'}`, MARGIN, y);

    y += 25;

    doc
      .font(FONT_BOLD)
      .fontSize(24)
      .fillColor(BLACK)
      .text(project.titleEn, MARGIN, y, { width: CONTENT_W * 0.8 });

    y += 45;
    drawRule(y);
    y += 30;

    // Description
    doc
      .font(FONT_REGULAR)
      .fontSize(12)
      .fillColor(ACCENT)
      .text(project.descriptionEn, MARGIN, y, {
        width: CONTENT_W * 0.65,
        lineGap: 7,
      });

    // Sub-items (for Nuke project)
    if (project.subItems) {
      y = doc.y + 30;
      drawRule(y, CONTENT_W * 0.65);
      y += 20;

      doc
        .font(FONT_BOLD)
        .fontSize(11)
        .fillColor(LIGHT_GRAY)
        .text('BREAKDOWN', MARGIN, y);
      y += 22;

      project.subItems.forEach((item) => {
        doc
          .font(FONT_BOLD)
          .fontSize(11)
          .fillColor(BLACK)
          .text(item.title, MARGIN, y, { width: CONTENT_W * 0.65 });
        y += 16;
        doc
          .font(FONT_LIGHT)
          .fontSize(10)
          .fillColor(GRAY)
          .text(item.caption, MARGIN, y, { width: CONTENT_W * 0.65 });
        y += 20;
      });
    }

    // Small image on the right side of description page
    if (imgExists) {
      const thumbW = CONTENT_W * 0.28;
      const thumbH = CONTENT_H * 0.5;
      const thumbX = W - MARGIN - thumbW;
      const thumbY = MARGIN + 100;
      doc.image(imgPath, thumbX, thumbY, {
        fit: [thumbW, thumbH],
        align: 'center',
        valign: 'center',
      });
    }
  }
}

// ════════════════════════════════════════════════
// FINAL PAGE
// ════════════════════════════════════════════════
function drawEndPage() {
  doc.addPage();
  const centerY = H / 2;

  doc
    .font(FONT_BOLD)
    .fontSize(28)
    .fillColor(BLACK)
    .text('Thank You', MARGIN, centerY - 40, {
      width: CONTENT_W,
      align: 'center',
    });

  doc
    .font(FONT_LIGHT)
    .fontSize(12)
    .fillColor(GRAY)
    .text(hero.name, MARGIN, centerY + 10, {
      width: CONTENT_W,
      align: 'center',
    });

  doc
    .font(FONT_LIGHT)
    .fontSize(10)
    .fillColor(LIGHT_GRAY)
    .text(hero.school, MARGIN, centerY + 30, {
      width: CONTENT_W,
      align: 'center',
    });
}

// ─── Render all pages ───
drawCoverPage();
drawIntroPage();
drawTOC();

projects.forEach((project, i) => {
  drawProjectPages(project, i);
});

drawEndPage();

// ─── Page numbers (bottom-right, skip cover) ───
const pageRange = doc.bufferedPageRange();
for (let i = 1; i < pageRange.count; i++) {
  doc.switchToPage(i);
  doc
    .font(FONT_LIGHT)
    .fontSize(9)
    .fillColor(LIGHT_GRAY)
    .text(`${i + 1}`, W - MARGIN - 30, H - MARGIN + 15, {
      width: 30,
      align: 'right',
    });
}

doc.end();

stream.on('finish', () => {
  console.log(`✓ Portfolio PDF saved to: ${OUTPUT}`);
});
