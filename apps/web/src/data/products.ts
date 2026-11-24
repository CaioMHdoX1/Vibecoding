import { Product } from '@misho/shared';

export interface CatalogProduct extends Product {
  priceBase: number;
  imageUrl: string;
  imageAlt?: string;
  tags?: string[];
}

export const MOCK_PRODUCTS: CatalogProduct[] = [
  {
    id: 'bonsai-1',
    name: 'Pinus Thunbergii (Pinheiro Negro Japonês)',
    slug: 'pinheiro-negro-japones-chokkan',
    description: 'Espécime tradicional japonês com casca áspera escultural e agulhas firmes verde-escuras. Cultivado ao longo de décadas na postura vertical formal.',
    species: 'Pinus thunbergii',
    estimatedAge: 28,
    style: 'CHOKKAN',
    careLevel: 'AVANCADO',
    sunExposure: 'SOL_PLENO',
    active: true,
    priceBase: 345000, // R$ 3.450,00
    imageUrl: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pinheiro Negro Japonês em vaso cerâmico',
    tags: ['Peça Única', 'Clássico'],
    variants: [
      {
        id: 'var-1',
        size: 'Médio (45cm)',
        pot: 'Cerâmica Tokoname Tradicional',
        price: 345000,
        stockQuantity: 1,
        sku: 'MSH-PIN-001',
      },
    ],
  },
  {
    id: 'bonsai-2',
    name: 'Acer Palmatum (Bordo Japonês Vermelho)',
    slug: 'acer-palmatum-moyogi',
    description: 'Folhagem com tonalidades dinâmicas do carmesim ao bronze. Silhueta sinuosa e tronco informal com excelente conicidade.',
    species: 'Acer palmatum',
    estimatedAge: 16,
    style: 'MOYOGI',
    careLevel: 'INTERMEDIARIO',
    sunExposure: 'MEIA_SOMBRA',
    active: true,
    priceBase: 219000, // R$ 2.190,00
    imageUrl: 'https://images.unsplash.com/photo-1599598425947-630e0a5e2f7b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Acer Palmatum com folhas avermelhadas',
    tags: ['Outono', 'Destaque'],
    variants: [
      {
        id: 'var-2',
        size: 'Médio (38cm)',
        pot: 'Cerâmica Esmaltada Azul Cobalto',
        price: 219000,
        stockQuantity: 2,
        sku: 'MSH-ACE-002',
      },
    ],
  },
  {
    id: 'bonsai-3',
    name: 'Juniperus Chinensis (Shimpaku)',
    slug: 'juniperus-chinensis-kengai',
    description: 'Cascata dramática com veios de madeira morta natural (jin e shari). Uma composição que evoca árvores sobreviventes em penhascos montanhosos.',
    species: 'Juniperus chinensis',
    estimatedAge: 35,
    style: 'KENGAI',
    careLevel: 'AVANCADO',
    sunExposure: 'SOL_PLENO',
    active: true,
    priceBase: 489000, // R$ 4.890,00
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bonsai Shimpaku em estilo cascata',
    tags: ['Madeira Morta', 'Exclusivo'],
    variants: [
      {
        id: 'var-3',
        size: 'Grande (55cm)',
        pot: 'Vaso Cascata Profundo de Grés',
        price: 489000,
        stockQuantity: 1,
        sku: 'MSH-JUN-003',
      },
    ],
  },
  {
    id: 'bonsai-4',
    name: 'Ficus Retusa (Figueira de Banyan)',
    slug: 'ficus-retusa-shakan',
    description: 'Excelente para iniciantes, com raízes aéreas fortes e grande tolerância ambiental. Tronco inclinado com copa frondosa e vigorosa.',
    species: 'Ficus retusa',
    estimatedAge: 12,
    style: 'SHAKAN',
    careLevel: 'INICIANTE',
    sunExposure: 'MEIA_SOMBRA',
    active: true,
    priceBase: 89000, // R$ 890,00
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Ficus retusa com raízes proeminentes',
    tags: ['Iniciante Amigável', 'Ambiente Interno Iluminado'],
    variants: [
      {
        id: 'var-4',
        size: 'Pequeno (28cm)',
        pot: 'Cerâmica Artesanal Terracota',
        price: 89000,
        stockQuantity: 5,
        sku: 'MSH-FIC-004',
      },
    ],
  },
  {
    id: 'bonsai-5',
    name: 'Ulmus Parvifolia (Olmo Chinês)',
    slug: 'ulmus-parvifolia-bunjin',
    description: 'Estilo literati (Bunjin) elegante com tronco fino e sinuoso, poucas ramificações e folhagem diminuta de grande delicadeza.',
    species: 'Ulmus parvifolia',
    estimatedAge: 19,
    style: 'BUNJIN',
    careLevel: 'INTERMEDIARIO',
    sunExposure: 'SOL_PLENO',
    active: true,
    priceBase: 165000, // R$ 1.650,00
    imageUrl: 'https://images.unsplash.com/photo-1613143329712-421712a20a46?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Olmo Chinês em estilo Literati',
    tags: ['Minimalismo', 'Literati'],
    variants: [
      {
        id: 'var-5',
        size: 'Médio (42cm)',
        pot: 'Bandeja Rasa Nanban',
        price: 165000,
        stockQuantity: 2,
        sku: 'MSH-ULM-005',
      },
    ],
  },
  {
    id: 'bonsai-6',
    name: 'Rhododendron Indicum (Azaleia Satsuki)',
    slug: 'azaleia-satsuki-moyogi',
    description: 'Conhecida por sua espetacular floração na primavera com flores bicolores e ramificação refinada e proporcional.',
    species: 'Rhododendron indicum',
    estimatedAge: 15,
    style: 'MOYOGI',
    careLevel: 'INTERMEDIARIO',
    sunExposure: 'MEIA_SOMBRA',
    active: true,
    priceBase: 198000, // R$ 1.980,00
    imageUrl: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Azaleia Bonsai com floração abundante',
    tags: ['Floração', 'Primavera'],
    variants: [
      {
        id: 'var-6',
        size: 'Pequeno (30cm)',
        pot: 'Cerâmica Oval Creme',
        price: 198000,
        stockQuantity: 3,
        sku: 'MSH-AZA-006',
      },
    ],
  },
];
