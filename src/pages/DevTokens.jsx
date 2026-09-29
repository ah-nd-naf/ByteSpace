import Container from '../components/Container';
import Logo from '../components/Logo';
import PartnerLogos from '../components/PartnerLogos';
import {
  shapeCylinderLime,
  shapeSpring2Lime,
  shapeConeLime,
  shapeTorusBlue,
  shapeSpring1Blue,
  shapePyramidWhite,
  shapeSpring2White,
} from '../assets/images';

export default function DevTokens() {
  const brandColors = [
    { name: 'Primary Blue (Persian Blue/800)', hex: '#003BE2', bg: 'bg-[#003BE2]', text: 'text-white' },
    { name: 'Lime Accent (Buttons/Chips)', hex: '#CBFC01', bg: 'bg-[#CBFC01]', text: 'text-[#242528]' },
    { name: 'Lime 404 & Brandmark', hex: '#D4FB20', bg: 'bg-[#D4FB20]', text: 'text-[#242528]' },
    { name: 'Pure White', hex: '#FFFFFF', bg: 'bg-[#FFFFFF] border border-[#CED0D3]', text: 'text-[#242528]' },
  ];

  const neutralColors = [
    { name: 'Text Primary', hex: '#242528', bg: 'bg-[#242528]', text: 'text-white' },
    { name: 'Text Body', hex: '#4B4C53', bg: 'bg-[#4B4C53]', text: 'text-white' },
    { name: 'Text Muted', hex: '#82868E', bg: 'bg-[#82868E]', text: 'text-white' },
    { name: 'Text Subtle', hex: '#ABAEB5', bg: 'bg-[#ABAEB5]', text: 'text-[#242528]' },
    { name: 'Border Light', hex: '#CED0D3', bg: 'bg-[#CED0D3]', text: 'text-[#242528]' },
    { name: 'Border Divider', hex: '#E5E6E8', bg: 'bg-[#E5E6E8]', text: 'text-[#242528]' },
    { name: 'Surface Light (Partner strip)', hex: '#F5F5F6', bg: 'bg-[#F5F5F6] border border-[#E5E6E8]', text: 'text-[#242528]' },
    { name: 'Background Soft', hex: '#FAFAFA', bg: 'bg-[#FAFAFA] border border-[#E5E6E8]', text: 'text-[#242528]' },
    { name: 'Dark Surface', hex: '#040819', bg: 'bg-[#040819]', text: 'text-white' },
    { name: 'Dark Card', hex: '#18191B', bg: 'bg-[#18191B]', text: 'text-white' },
  ];

  const typeScale = [
    {
      label: 'Heading L',
      token: 'text-heading-l',
      size: '72px',
      weight: '600',
      lh: '120%',
      lhStatus: 'Confirmed from Figma (-1% letter-spacing)',
      note: 'Figma confirmed: Heading L',
      sample: 'Get Access to Hundreds Courses Available',
    },
    {
      label: 'Heading XL',
      token: 'text-heading-xl',
      size: '48px',
      weight: '600',
      lh: '120%',
      lhStatus: 'unverified',
      sample: 'Discover Your Passion, Build Your Skills',
    },
    {
      label: 'Heading L-44',
      token: 'text-heading-l-44',
      size: '44px',
      weight: '600',
      lh: '120%',
      lhStatus: 'unverified',
      note: 'Figma name not yet confirmed',
      sample: 'Sign up and come in',
    },
    {
      label: 'Heading M',
      token: 'text-heading-m',
      size: '36px',
      weight: '600',
      lh: '125%',
      lhStatus: 'unverified',
      sample: '12K Students • 70+ Courses',
    },
    {
      label: 'Heading S',
      token: 'text-heading-s',
      size: '24px',
      weight: '600',
      lh: '130%',
      lhStatus: 'unverified',
      sample: 'Learn Figma from Basic by PurePearl',
    },
    {
      label: 'Card Title M',
      token: 'text-card-title',
      size: '20px',
      weight: '600',
      lh: '140%',
      lhStatus: 'unverified',
      sample: 'Build Digital Asset: A Comprehensive Guide',
    },
    {
      label: 'Body Large',
      token: 'text-body-lg',
      size: '18px',
      weight: '400 / 500',
      lh: '150%',
      lhStatus: 'unverified',
      sample: 'Unlock your creativity, gain valuable knowledge, and grow your business.',
    },
    {
      label: 'Body Base',
      token: 'text-body',
      size: '16px',
      weight: '400 / 500',
      lh: '150%',
      lhStatus: 'unverified',
      sample: 'ByteSpace supports individuals or entities in the creation and administration of courses.',
    },
    {
      label: 'Body Small',
      token: 'text-body-sm',
      size: '14px',
      weight: '400 / 500',
      lh: '150%',
      lhStatus: 'unverified',
      sample: 'Stay up to date with our latest features and releases by joining our newsletter.',
    },
    {
      label: 'Caption',
      token: 'text-caption',
      size: '12px',
      weight: '400 / 500',
      lh: '140%',
      lhStatus: 'unverified',
      sample: '17 Lessons • 2 hours 16 mins • 59 Comments • Beginner • 26+',
    },
    {
      label: 'Micro',
      token: 'text-micro',
      size: '10px',
      weight: '500',
      lh: '130%',
      lhStatus: 'unverified',
      sample: 'Total Revenue July 1-28 • +12.5% • 4.5 (240)',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#242528] pb-24 font-['Poppins']">
      {/* Dev Header */}
      <header className="bg-[#003BE2] text-white py-6 border-b border-[#E5E6E8]">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-xs bg-[#CBFC01] text-[#242528] px-2 py-0.5 rounded-full font-semibold">
              Design System Tokens
            </span>
          </div>
          <span className="text-sm text-white/80">
            Route: <code className="bg-white/10 px-2 py-1 rounded">/dev-tokens</code>
          </span>
        </Container>
      </header>

      <Container className="mt-10 space-y-16">
        {/* Section 1: Logos */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-6">1. Logos & Brand Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#003BE2] p-8 rounded-xl flex flex-col items-center justify-center gap-3">
              <span className="text-xs text-white/70 uppercase tracking-wider">Logo on Primary Blue (#003BE2)</span>
              <Logo />
            </div>
            <div className="bg-[#242528] p-8 rounded-xl flex flex-col items-center justify-center gap-3">
              <span className="text-xs text-white/70 uppercase tracking-wider">Logo on Dark Neutral (#242528)</span>
              <Logo />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-[#4B4C53] mb-3 uppercase tracking-wider">
              Partner Logos Strip (&lt;PartnerLogos /&gt;)
            </h3>
            <div className="rounded-xl overflow-hidden border border-[#E5E6E8]">
              <PartnerLogos />
            </div>
          </div>
        </section>

        {/* Section 2: Colors */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-6">2. Color Palette (Exact Figma Tokens)</h2>
          
          <h3 className="text-sm font-semibold text-[#4B4C53] mb-3 uppercase tracking-wider">Brand Accent Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {brandColors.map((c) => (
              <div key={c.name} className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#E5E6E8]">
                <div className={`h-24 ${c.bg} flex items-center justify-center font-bold text-sm ${c.text}`}>
                  {c.hex}
                </div>
                <div className="p-3 bg-white">
                  <div className="font-semibold text-xs text-[#242528]">{c.name}</div>
                  <div className="text-[11px] text-[#82868E]">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-[#4B4C53] mb-3 uppercase tracking-wider">Neutrals & Surfaces (Measured from PDF)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {neutralColors.map((c) => (
              <div key={c.name} className="flex flex-col rounded-xl overflow-hidden shadow-sm border border-[#E5E6E8]">
                <div className={`h-20 ${c.bg} flex items-center justify-center font-bold text-xs ${c.text}`}>
                  {c.hex}
                </div>
                <div className="p-3 bg-white">
                  <div className="font-semibold text-xs text-[#242528]">{c.name}</div>
                  <div className="text-[11px] text-[#82868E]">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Typography Scale */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-6">3. Typography Scale (Poppins via @fontsource/poppins)</h2>
          <div className="space-y-6 divide-y divide-[#E5E6E8]">
            {typeScale.map((t) => (
              <div key={t.label} className="pt-6 first:pt-0">
                <div className="flex flex-wrap items-center justify-between text-xs text-[#82868E] mb-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#242528]">{t.label}</span>
                    <code className="text-[11px] font-mono bg-[#F5F5F6] text-[#4B4C53] px-1.5 py-0.5 rounded">{t.token}</code>
                    {t.note && (
                      <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                        {t.note}
                      </span>
                    )}
                  </div>
                  <span>Size: {t.size} • Weight: {t.weight} • Line Height: {t.lh} ({t.lhStatus})</span>
                </div>
                <div style={{ fontSize: t.size, lineHeight: t.lh }} className="text-[#242528] font-semibold tracking-[-0.01em] break-words">
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 404 Display */}
        <section className="bg-[#003BE2] p-8 rounded-2xl shadow-card relative overflow-hidden text-center">
          <div className="relative z-10 py-12">
            <div className="text-404-gradient select-none">
              404
            </div>
            <div className="-mt-32 text-white text-2xl font-semibold">
              The page you are looking for doesn't exist
            </div>
            <p className="text-white/80 mt-2 text-sm">
              Rendered using vertical linear gradient from #D4FB20 to transparent white (0% opacity).
            </p>
          </div>
        </section>

        {/* Section 5: Hero Background Grid & Lime Circle */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-2">5. Hero Blue Grid & Lime Circle Arc</h2>
          <p className="text-sm text-[#4B4C53] mb-6">
            Blue grid (120px cell, verified against Figma at 100% zoom: 150 screen px at 125% display scaling = 120 design px; line opacity 12% is estimated by eye, not exact) + CSS lime circle (1149px diameter, 320px border #CBFC01, top 582px, left 145px).
          </p>

          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-hero-grid border border-[#003BE2] shadow-ambient">
            {/* The exact CSS lime circle */}
            <div className="hero-lime-circle scale-75 origin-top" />

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <span className="bg-[#CBFC01] text-[#242528] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Hero Grid & Circle Demonstration
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl text-white">
                Get Access to Hundreds Courses Available
              </h1>
              <p className="mt-4 text-white/80 text-sm max-w-md">
                100% pure CSS reproduction without any images.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Pre-tinted 3D Shapes */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-2">6. Pre-Tinted 3D Shapes (PIL Colorized PNGs)</h2>
          <p className="text-sm text-[#4B4C53] mb-6">
            Generated with PIL colorization preserving surface luminance, specular highlights, and alpha transparency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeCylinderLime} alt="Cylinder Lime" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-[#CBFC01] mt-2">Cylinder Lime</span>
              <span className="text-[10px] text-white/60">Top-Right Hero</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeSpring2Lime} alt="Spring 2 Lime" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-[#CBFC01] mt-2">Spring 2 Lime</span>
              <span className="text-[10px] text-white/60">Top-Left Hero</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeConeLime} alt="Cone Lime" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-[#CBFC01] mt-2">Cone Lime</span>
              <span className="text-[10px] text-white/60">Creator Banner</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeTorusBlue} alt="Torus Blue" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-white mt-2">Torus Blue</span>
              <span className="text-[10px] text-white/60">Bottom-Left Hero</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeSpring1Blue} alt="Spring 1 Blue" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-white mt-2">Spring 1 Blue</span>
              <span className="text-[10px] text-white/60">Bottom-Right Hero</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapePyramidWhite} alt="Pyramid White" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-white mt-2">Pyramid White</span>
              <span className="text-[10px] text-white/60">Mid-Right Hero</span>
            </div>
            <div className="bg-[#003BE2] p-4 rounded-xl flex flex-col items-center">
              <img src={shapeSpring2White} alt="Spring 2 White" className="w-28 h-28 object-contain" />
              <span className="text-xs font-semibold text-white mt-2">Spring 2 White</span>
              <span className="text-[10px] text-white/60">Mid-Left Hero</span>
            </div>
          </div>
        </section>

        {/* Section 7: Container Verification */}
        <section className="bg-white p-8 rounded-2xl shadow-card border border-[#E5E6E8]">
          <h2 className="text-2xl font-semibold mb-2">7. Layout Container Verification (1132px Max Width)</h2>
          <p className="text-sm text-[#4B4C53] mb-4">
            The element below uses &lt;Container /&gt; with border markers showing the exact 1132px bounds.
          </p>
          <div className="w-full bg-[#F5F5F6] py-6 border border-dashed border-[#CED0D3] rounded-xl">
            <Container className="bg-[#003BE2]/10 border-2 border-[#003BE2] rounded-lg py-4 text-center font-semibold text-[#003BE2] text-sm">
              Container Width: 1132px (Centered with auto margins)
            </Container>
          </div>
        </section>
      </Container>
    </div>
  );
}
