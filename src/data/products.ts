export const categories = ['All objects', 'Ceramics', 'Lighting', 'Textiles', 'Candles', 'Objects'] as const;
export type Category = typeof categories[number];
export type Variant = { id: string; name: string; color: string };
export type Product = { id: string; slug: string; name: string; category: Exclude<Category, 'All objects'>; description: string; price: number; currency: 'EUR'; images: string[]; variants: Variant[]; stockStatus: 'in-stock' | 'sold-out'; featured: boolean; material: string; dimensions: string; tile: number; label?: string };
const seed = [
  ['sora-vase', 'Sora Ceramic Vase', 'Ceramics', 48, 'An organic silhouette, a softly speckled finish. Sora brings a little stillness to the everyday, with or without a favourite stem.', 'Glazed stoneware', 'H 24 × W 18 cm', 'The signature piece'],
  ['mushroom-lamp', 'Mushroom Table Lamp', 'Lighting', 129, 'A sculptural dome and a soft pool of light. A little warmth for the corners you love to come home to.', 'Textured ceramic, LED compatible', 'H 32 × W 25 cm', 'A warmer glow'],
  ['sol-linen-throw', 'Sol Linen Throw', 'Textiles', 64, 'Beautifully rumpled linen in a warm clay tone. Drape over a sofa, take it to the window, settle into a slower afternoon.', 'Linen', '130 × 170 cm', 'Soft by nature'],
  ['dusk-candle', 'Dusk Amber Candle', 'Candles', 24, 'A quiet evening ritual in a warm amber glass vessel. An illustrative woody scent with notes of cedar and soft vanilla.', 'Glass vessel, plant wax blend', 'H 9 × W 8 cm', 'Evening ritual'],
  ['terra-vase', 'Terra Column Vase', 'Ceramics', 42, 'Clean lines meet earthy texture. A tall terracotta form made for a single branch or a moment all its own.', 'Terracotta', 'H 28 × W 10 cm', ''],
  ['everyday-mug', 'Everyday Stoneware Mug', 'Ceramics', 18, 'For the first coffee and the long conversation. A generous rounded handle and an easy, tactile shape.', 'Glazed stoneware', '350 ml', ''],
  ['haven-cushion', 'Haven Linen Cushion', 'Textiles', 39, 'An effortless layer of softness in natural linen. The quiet finishing touch to your favourite chair.', 'Linen cover, sample fibre insert', '45 × 45 cm', ''],
  ['noir-bowl', 'Noir Serving Bowl', 'Ceramics', 32, 'Deep charcoal stoneware with a soft, organic rim. Made for the centre of the table and the good things you share.', 'Glazed stoneware', 'H 8 × W 22 cm', ''],
  ['halo-vase', 'Halo Sculptural Vase', 'Ceramics', 56, 'A circle of calm. This softly rounded form explores the space between useful object and small sculpture.', 'Matte stoneware', 'H 23 × W 20 cm', ''],
  ['pleat-lamp', 'Pleat Table Lamp', 'Lighting', 98, 'Folded texture, diffused light and a gently rounded base. An inviting companion for a bedside or reading nook.', 'Ceramic base, fabric shade', 'H 35 × W 26 cm', ''],
  ['terra-plate', 'Terra Dinner Plate', 'Ceramics', 22, 'Warm, earthy stoneware for the simple pleasure of a good meal. A softly glazed face with a tactile outer edge.', 'Glazed stoneware', 'W 26 cm', ''],
  ['amber-glass-vase', 'Amber Glass Vase', 'Objects', 35, 'Golden glass that catches the changing light. Beautiful empty, or with a handful of seasonal stems.', 'Amber glass', 'H 26 × W 12 cm', ''],
  ['loop-wool-cushion', 'Loop Wool Cushion', 'Textiles', 49, 'Richly looped texture in a soft oat colour. A cosy layer that adds depth without asking for attention.', 'Wool blend cover', '45 × 45 cm', ''],
  ['form-candleholder', 'Form Candleholder', 'Candles', 28, 'A playful stack of quiet shapes. A small sculptural piece for a dinner table or an unhurried evening.', 'Matte stoneware', 'H 18 × W 9 cm', ''],
  ['woven-basket', 'Woven Storage Basket', 'Objects', 46, 'Natural woven texture and generous handles. A home for blankets, books and all the little things.', 'Woven seagrass', 'H 30 × W 32 cm', ''],
  ['pause-espresso-set', 'Pause Espresso Set', 'Ceramics', 26, 'Two small cups, one lovely pause. Speckled stoneware for an espresso and a moment to yourself.', 'Glazed stoneware, set of two', '90 ml each', ''],
] as const;
export const products: Product[] = seed.map((p, tile) => ({ id: p[0], slug: p[0], name: p[1], category: p[2], price: p[3], description: p[4], material: p[5], dimensions: p[6], label: p[7] || undefined, tile, currency: 'EUR', images: ['/images/catalog.png'], stockStatus: tile === 11 ? 'sold-out' : 'in-stock', featured: tile < 4, variants: [{id:'original', name: tile === 2 || tile === 4 || tile === 10 ? 'Clay' : tile === 7 ? 'Charcoal' : tile === 3 || tile === 11 ? 'Amber' : 'Natural', color: tile === 2 || tile === 4 || tile === 10 ? '#b57858' : tile === 7 ? '#363631' : tile === 3 || tile === 11 ? '#a46d2f' : '#d6c6af'}, {id:'gift', name:'Gift wrapped', color:'#8a917e'}] }));
export const money = (n: number) => new Intl.NumberFormat('en-IE', {style:'currency', currency:'EUR', maximumFractionDigits:2, minimumFractionDigits:0}).format(n);
export const findProduct = (id: string) => products.find(p => p.id === id);
