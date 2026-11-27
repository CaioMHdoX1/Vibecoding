import { Product } from '@misho/shared';

export interface CatalogProduct extends Product {
  priceBase: number;
  originalPrice?: number; // Preço original para itens em promoção
  discountPercent?: number; // Percentual de desconto
  imageUrl: string;
  imageAlt?: string;
  tags?: string[];
}

// Imagens reais e estáveis de bonsais e plantas do Unsplash
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
    priceBase: 293000, // R$ 2.930,00 (Com 15% OFF)
    originalPrice: 345000, // R$ 3.450,00
    discountPercent: 15,
    imageUrl: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pinheiro Negro Japonês em vaso cerâmico',
    tags: ['Oportunidade', 'Peça Única', 'Clássico'],
    variants: [
      {
        id: 'var-1',
        size: 'Médio (45cm)',
        pot: 'Cerâmica Tokoname Tradicional',
        price: 293000,
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
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bonsai de Acer com folhas avermelhadas',
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
    imageUrl: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bonsai Shimpaku esculpido em cascata',
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
    priceBase: 71200, // R$ 712,00 (Com 20% OFF)
    originalPrice: 89000, // R$ 890,00
    discountPercent: 20,
    imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Ficus retusa com raízes proeminentes',
    tags: ['Oportunidade', 'Iniciante Amigável'],
    variants: [
      {
        id: 'var-4',
        size: 'Pequeno (28cm)',
        pot: 'Cerâmica Artesanal Terracota',
        price: 71200,
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
    imageUrl: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=800&q=80',
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
    priceBase: 158400, // R$ 1.584,00 (Com 20% OFF)
    originalPrice: 198000, // R$ 1.980,00
    discountPercent: 20,
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Bonsai com flores e folhagem delicada',
    tags: ['Oportunidade', 'Floração'],
    variants: [
      {
        id: 'var-6',
        size: 'Pequeno (30cm)',
        pot: 'Cerâmica Oval Creme',
        price: 158400,
        stockQuantity: 3,
        sku: 'MSH-AZA-006',
      },
    ],
  },
  {
    id: 'bonsai-7',
    name: 'Olea Europaea (Oliveira Centenária Bonsai)',
    slug: 'olea-europaea-shakan',
    description: 'Tronco rugoso com madeira entalhada pelo tempo e folhas verde-acinzentadas de alto simbolismo e longevidade.',
    species: 'Olea europaea',
    estimatedAge: 42,
    style: 'SHAKAN',
    careLevel: 'INTERMEDIARIO',
    sunExposure: 'SOL_PLENO',
    active: true,
    priceBase: 312000, // R$ 3.120,00 (Com 25% OFF)
    originalPrice: 416000, // R$ 4.160,00
    discountPercent: 25,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Oliveira Bonsai com tronco rugoso',
    tags: ['Oportunidade', 'Centenária', 'Rara'],
    variants: [
      {
        id: 'var-7',
        size: 'Grande (50cm)',
        pot: 'Cerâmica Rústica Wabi',
        price: 312000,
        stockQuantity: 1,
        sku: 'MSH-OLE-007',
      },
    ],
  },
  {
    id: 'bonsai-8',
    name: 'Carmona Retusa (Árvore do Chá de Fukien)',
    slug: 'carmona-retusa-chokkan',
    description: 'Pequenas flores brancas em formato de estrela e folhas brilhantes verde-escuras. Excelente adaptação ao cultivo interno.',
    species: 'Carmona retusa',
    estimatedAge: 10,
    style: 'CHOKKAN',
    careLevel: 'INICIANTE',
    sunExposure: 'MEIA_SOMBRA',
    active: true,
    priceBase: 78000, // R$ 780,00
    imageUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Árvore do Chá Fukien com flores brancas',
    tags: ['Floração Contínua', 'Iniciante'],
    variants: [
      {
        id: 'var-8',
        size: 'Pequeno (22cm)',
        pot: 'Vaso Retangular Esmaltado Jade',
        price: 78000,
        stockQuantity: 4,
        sku: 'MSH-CAR-008',
      },
    ],
  },
];
