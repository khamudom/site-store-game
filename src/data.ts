export interface ICatalog {
  id: number;
  title: string;
  image: string;
  developer: string;
  price: string;
  href: string;
}

export const catalogNewReleases: ICatalog[] = [
  {
    id: 0,
    title: 'Dirt Rally',
    image: './src/assets/images/newrelease/dirtrally.jpg',
    developer: 'Codemaster',
    price: '$60.00',
    href: '/#',
  },
  {
    id: 1,
    title: 'Battlefield 5',
    image: './src/assets/images/newrelease/battlefield.jpg',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
  {
    id: 2,
    title: 'Need For Speed Heat',
    image: './src/assets/images/newrelease/nfs.jpg',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
  {
    id: 3,
    title: 'Call of Duty: Modern Warfare',
    image: './src/assets/images/newrelease/callofduty.jpg',
    developer: 'Activision',
    price: '$60.00',
    href: '/',
  },
  {
    id: 4,
    title: 'FIFA 20',
    image: './src/assets/images/newrelease/fifa.jpg',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
];

export const catalogTopSelling: ICatalog[] = [
  {
    id: 0,
    title: 'Grand Theft Auto 5',
    image: './src/assets/images/topselling/grandtheft5.jpg',
    developer: 'Rockstar Games',
    price: '$60.00',
    href: '/',
  },
  {
    id: 1,
    title: 'Need For Speed',
    image: './src/assets/images/topselling/nfs1.png',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
  {
    id: 2,
    title: 'Frostpunk',
    image: './src/assets/images/topselling/frostpunk.jpg',
    developer: '11 Bit studios',
    price: '$60.00',
    href: '/',
  },
  {
    id: 3,
    title: 'Borderlands 3',
    image: './src/assets/images/topselling/borderland3.png',
    developer: 'Gearbox Software',
    price: '$60.00',
    href: '/',
  },
  {
    id: 4,
    title: 'Battlefield 1',
    image: './src/assets/images/topselling/battlefield1.jpg',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
];

export const catalogAction: ICatalog[] = [
  {
    id: 0,
    title: 'Call of Duty: WW2',
    image: './src/assets/images/action/callofdutyww2.jpg',
    developer: 'Activision',
    price: '$60.00',
    href: '/',
  },
  {
    id: 1,
    title: 'Gears of War 4',
    image: './src/assets/images/action/gears.jpg',
    developer: 'Microsoft Studios',
    price: '$60.00',
    href: '/',
  },
  {
    id: 2,
    title: 'Rise of the Tomb Raider',
    image: './src/assets/images/action/tomb.png',
    developer: 'Microsoft Studios',
    price: '$60.00',
    href: '/',
  },
  {
    id: 3,
    title: 'Star Wars Battlefront',
    image: './src/assets/images/action/swbattlefront.jpg',
    developer: 'Electronic Arts',
    price: '$60.00',
    href: '/',
  },
  {
    id: 4,
    title: 'Prey',
    image: './src/assets/images/action/prey.jpg',
    developer: 'Bethesda Softworks',
    price: '$60.00',
    href: '/',
  },
];

export const catalogFamilyFriendly: ICatalog[] = [
  {
    id: 0,
    title: 'Minecraft',
    image: './src/assets/images/family/minecraft.png',
    developer: 'Mojang Studios',
    price: '$60.00',
    href: '/',
  },
  {
    id: 1,
    title: 'Lego Harry Potter: Years 1-4',
    image: './src/assets/images/family/harrypotter.jpg',
    developer: 'Warner Bros. Games',
    price: '$60.00',
    href: '/',
  },
  {
    id: 2,
    title: 'Lucky Tales',
    image: './src/assets/images/family/luckytale.png',
    developer: 'Playful Studios',
    price: '$60.00',
    href: '/',
  },
  {
    id: 3,
    title: 'Star Wars',
    image: './src/assets/images/family/swlego.jpg',
    developer: 'Warner Bros. Games',
    price: '$60.00',
    href: '/',
  },
  {
    id: 4,
    title: 'Just Dance',
    image: './src/assets/images/family/justdance.png',
    developer: 'Ubisoft',
    price: '$60.00',
    href: '/',
  },
];

export const heroItem1 = [
  {
    id: 0,
    title: 'Star Wars Jedi: Fallen Order',
    description:
      'An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
    image: './src/assets/images/hero/swfallenorder.jpg',
  },
];

export const heroItem2 = [
  {
    id: 1,
    title: 'Destiny 2',
    description:
      'Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.',
    image: './src/assets/images/hero/destiny.jpg',
  },
];

export const navigationLinks = [
  {
    id: 0,
    title: 'Home',
    href: '/',
  },
  {
    id: 1,
    title: 'Deals',
    href: '#',
  },
  {
    id: 2,
    title: 'Staff Picks',
    href: '#',
  },
  {
    id: 3,
    title: 'Reviews',
    href: '#',
  },
];

// export interface IGameProps {
//   id: number;
//   title: string;
//   image: string;
//   developer: string;
//   price?: string;
// }

// export interface GameCategory {
//   category: string;
//   games: IGameProps[];
// }

// export const mockNewReleases: GameCategory = {
//   category: 'New Releases',
//   games: [
//     {
//       id: 0,
//       title: 'Dirt Rally',
//       image: './src/assets/images/newrelease/dirtrally.jpg',
//       developer: 'Codemaster',
//       price: '$60.00',
//     },
//     {
//       id: 1,
//       title: 'Battlefield 5',
//       image: './src/assets/images/newrelease/battlefield.jpg',
//       developer: 'Electronic Arts',
//       price: '$60.00',
//     },
//     {
//       id: 2,
//       title: 'Need For Speed Heat',
//       image: './src/assets/images/newrelease/nfs.jpg',
//       developer: 'Electronic Arts',
//       price: '$60.00',
//     },
//     {
//       id: 3,
//       title: 'Call of Duty: Modern Warfare',
//       image: './src/assets/images/newrelease/callofduty.jpg',
//       developer: 'Activision',
//       price: '$60.00',
//     },
//     {
//       id: 4,
//       title: 'FIFA 20',
//       image: './src/assets/images/newrelease/fifa.jpg',
//       developer: 'Electronic Arts',
//       price: '$60.00',
//     },
//   ],
// };

// const gameCategory2: GameCategory = {
//   category: 'Game Category Two',
//   games: [
//     {
//       id: 0,
//       title: 'Grand Theft Auto 5',
//       image: './src/assets/images/topselling/grandtheft5.jpg',
//       developer: 'Rockstar Games',
//       price: '$60.00',
//     },
//     {
//       id: 1,
//       title: 'Need For Speed',
//       image: './src/assets/images/topselling/nfs1.png',
//       developer: 'Electronic Arts',
//       price: '$60.00',
//     },
//     {
//       id: 2,
//       title: 'Frostpunk',
//       image: './src/assets/images/topselling/frostpunk.jpg',
//       developer: '11 Bit studios',
//       price: '$60.00',
//     },
//     {
//       id: 3,
//       title: 'Borderlands 3',
//       image: './src/assets/images/topselling/borderland3.png',
//       developer: 'Gearbox Software',
//       price: '$60.00',
//     },
//     {
//       id: 4,
//       title: 'Battlefield 1',
//       image: './src/assets/images/topselling/battlefield1.jpg',
//       developer: 'Electronic Arts',
//       price: '$60.00',
//     },
//   ],
// };

// export interface GameCatalog {
//   gameCatalogNewReleases: GameCategory;
// }

// export const MyCatalog: GameCatalog = {
//   gameCatalogNewReleases: mockNewReleases,
// };
