import { slugify } from '../Utils/slugify';

export type Recipe = {
  id: string;
  title: string;
  image?: string;
  categories: string[]; // [huvudkategori, underkategori]
  tags?: string[];
  description?: string;
  ingredients?: string[];
  instructions?: string[];
  portions?: number;
  path?: string;
};

const create = (recipe: Omit<Recipe, 'id' | 'path'>): Recipe => {
  const id = slugify(recipe.title);

  return {
    ...recipe,
    id,
    path: `/recipe/${id}`,
  };
};

export const recipes: Recipe[] = [
  create({
    title: 'En portion kladdkaka',
    image:
      'https://mykitchenstories.se/wp-content/uploads/2021/01/IMG_9364-scaled-1.jpg',
    categories: ['Bakat', 'Kladdkaka'],
    tags: ['sött'],
    description: 'En portion kladdkaka.',
    ingredients: [
      '25 g smör',
      '2 msk strösocker',
      '1,5 msk brunt farinsocker',
      '1 tsk vaniljsocker',
      '1 ägg',
      '2,5 msk vetemjöl',
      '1 msk kakao',
      '1 nypa salt',
      'vispgrädde och hallon att servera till kladdkakan',
    ],
    instructions: [
      'Sätt ugnen på 175 grader (över- och undervärme, 200 grader i vår dåliga ugn).',
      'Smält smöret i en kastrull på medelvärme. Rör ihop smöret med resten av ingredienserna i en bunke bara precis tills att de går ihop till en jämn smet.',
      'Grädda kladdkakan i mitten av ugnen i 10 min eller tills kanterna av kakan är fast och mitten är vobblig.',
      'Låt svalna helt och hållet innan servering, i kylskåpet minst 1h. Servera tillsammans med vispad grädde och färska hallon.',
    ],
  }),

  // Mat
  create({
    title: 'Köttbullar med potatismos',
    categories: ['Mat', 'Lunch'],
    tags: ['snabb'],
    description: 'Svenska köttbullar med klassiskt potatismos.',
  }),
  create({
    title: 'Enkel pastasallad',
    categories: ['Mat', 'Middag'],
    tags: ['snabb', 'vegetarisk'],
    description: 'Pastasallad med grönsaker och dressing.',
  }),
  create({
    title: 'Yoghurt med müsli',
    categories: ['Mat', 'Frukost'],
    tags: ['snabb'],
    description: 'Enkel frukost med yoghurt och müsli.',
  }),

  // Efterrätt
  create({
    title: 'Chokladmousse',
    categories: ['Efterrätt', 'Choklad'],
    tags: ['sött'],
    description: 'Len chokladmousse.',
  }),
  create({
    title: 'Jordgubbspaj',
    categories: ['Efterrätt', 'Paj'],
    tags: ['sött'],
    description: 'Somrig jordgubbspaj.',
  }),
  create({
    title: 'Hemmagjord vaniljglass',
    categories: ['Efterrätt', 'Glass'],
    tags: ['sött'],
    description: 'Krämig vaniljglass.',
  }),

  // Bakat
  create({
    title: 'Blåbärsmuffins',
    categories: ['Bakat', 'Muffins och cupcakes'],
    tags: ['sött'],
    description: 'Saftiga muffins med blåbär.',
  }),
  create({
    title: 'Sockerkaka',
    categories: ['Bakat', 'Mjuka kakor'],
    tags: ['sött'],
    description: 'Klassisk sockerkaka.',
  }),
  create({
    title: 'Chokladcookies',
    categories: ['Bakat', 'Kakor och cookies'],
    tags: ['sött'],
    description: 'Knapriga cookies med chokladbitar.',
  }),

  // Snacks
  create({
    title: 'Kryddiga popcorn',
    categories: ['Snacks', 'Popcorn'],
    tags: ['snabb'],
    description: 'Popcorn med chili och paprika.',
  }),
  create({
    title: 'Honungsrostade nötter',
    categories: ['Snacks', 'Nötter'],
    tags: ['snabb', 'sött'],
    description: 'Nötter rostade med honung.',
  }),
  create({
    title: 'Hemmagjorda chips',
    categories: ['Snacks', 'Chips'],
    tags: ['snabb'],
    description: 'Krispiga potatischips.',
  }),

  // Dryck
  create({
    title: 'Grön smoothie',
    categories: ['Dryck', 'Smoothie'],
    tags: ['vegansk', 'snabb'],
    description: 'Smoothie med spenat och banan.',
  }),
  create({
    title: 'Apelsinjuice',
    categories: ['Dryck', 'Juice'],
    tags: ['snabb'],
    description: 'Färskpressad apelsinjuice.',
  }),
  create({
    title: 'Virgin mojito',
    categories: ['Dryck', 'Cocktail'],
    tags: ['snabb'],
    description: 'Alkoholfri mojito.',
  }),

  create({
    title: 'Pannkakor',
    categories: ['Mat', 'Frukost'],
    tags: ['snabb'],
    description: 'Klassiska tunna pannkakor',
  }),

  create({
    title: 'Avokadomacka',
    categories: ['Mat', 'Frukost'],
    tags: ['vegansk', 'snabb'],
  }),

  create({
    title: 'Kladdkaka Classic',
    categories: ['Bakat', 'Kladdkaka'],
    tags: ['sött'],
  }),

  create({
    title: 'En portion kladdkaka med vit choklad och vanilj',
    image: 'https://www.recepten.se/bilder/recept/672/main/l/vit-kladdkaka.jpg',
    categories: ['Bakat', 'Kladdkaka'],
    description:
      'Omgjord från Camilla Hamids saffranskladdkaka, fast med vanilj istället för saffran.',
    ingredients: [
      '30 g vit choklad',
      '25 g smör',
      '2 msk strösocker',
      '0,5 tsk vaniljsocker',
      '1 nypa salt',
      '2 msk vetemjöl',
      '1 ägg',
      'Vaniljpulver',
      'Florsocker att pudra med',
    ],
    instructions: [
      'Sätt ugnen på 175 grader (över- och undervärme, 200 grader i vår dåliga ugn).',
      'Grovhacka den vita chokladen och smält i mikro eller vattenbad.',
      'Smält smöret i mikro eller i kastrull.',
      'Blanda samman alla ingrediender, inklusive smöret och den vita chokladen, i en bunke med försiktiga rörelser bara precis tills allt går ihop till en jämn smet.',
      'Ta en liten form lagom för en person och smörj med smöret som blivit över.',
      'Häll upp smeten i formen och grädda kladdkakan i mitten av ugnen i ca 10 minuter eller tills kanterna är gräddade och mitten är vobblig.',
      'Låt kladdkakan svalna helt och hållet i kylskåpet i minst 1h.',
      'Pudra över florsocker och servera gärna med vispad grädde med lite vaniljsocker i.',
    ],
    portions: 1,
    tags: ['sött', 'vanilj', 'egenkomponerat'],
  }),
];
