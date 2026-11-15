export type BoardScene = {
  id: string;
  durationInFrames: number;
  style: string;
  purpose: string;
  narration: string;
  onScreenText: string[];
  transition: string;
  assetNotes: string[];
};

export const storyboard: BoardScene[] = [
  {
    id: 'city-heat-hook',
    durationInFrames: 150,
    style: 'editorial-paper-collage',
    purpose: 'Hook: show that city heat is an outcome of materials and design.',
    narration: 'Kota bukan hanya tempat kita tinggal. Cara kota dibangun ikut menentukan seberapa panas hari yang kita rasakan.',
    onScreenText: ['KOTA', 'MENYIMPAN PANAS'],
    transition: 'paper-swipe',
    assetNotes: ['All visuals are original vector shapes; no external assets required.'],
  },
  {
    id: 'surface-contrast',
    durationInFrames: 150,
    style: 'documentary-infographic',
    purpose: 'Compare sunlit hard surfaces with a shaded, planted area without making unsupported numerical claims.',
    narration: 'Aspal dan beton menyerap energi matahari. Pepohonan memberi naungan, sementara air yang menguap membantu lingkungan terasa lebih sejuk.',
    onScreenText: ['ASPAL', 'NAUNGAN', 'PENGUAPAN'],
    transition: 'diagram-build',
    assetNotes: ['Illustrative comparison only; no quantitative data is asserted.'],
  },
  {
    id: 'design-payoff',
    durationInFrames: 150,
    style: 'kinetic-type-and-infographic',
    purpose: 'Resolve the idea into practical urban design levers.',
    narration: 'Jadi, merancang kota yang lebih nyaman bukan soal satu solusi ajaib. Ini soal menghubungkan naungan, ruang hijau, dan pilihan material.',
    onScreenText: ['NAUNGAN', 'RUANG HIJAU', 'MATERIAL'],
    transition: 'match-cut',
    assetNotes: ['Original vector typography and shapes.'],
  },
];
