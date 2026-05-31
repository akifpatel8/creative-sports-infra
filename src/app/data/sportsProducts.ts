export type SportSubcategory = {
  id: string;
  name: string;
  description: string;
  images: string[];
};

export type SportProduct = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  subcategories: SportSubcategory[];
};

export function getSportById(
  id: string | null | undefined,
): SportProduct | undefined {
  if (!id) return undefined;
  return SPORTS_PRODUCTS.find((sport) => sport.id === id);
}

export function isValidSportId(id: string | null | undefined): id is string {
  return !!id && SPORTS_PRODUCTS.some((sport) => sport.id === id);
}

export const SPORTS_PRODUCTS: SportProduct[] = [
  {
    id: "athletic-running-track",
    title: "Athletic running track",
    description:
      "IAAF-aligned running tracks with layered synthetic systems for schools, colleges, and professional athletics venues.",
    imageSrc: "../../../../Assets/sports/pur_rinning_track.jpeg",
    subcategories: [
      {
        id: "spray-coat",
        name: "Synthetic spray coat system",
        description:
          "Spray-applied synthetic surface for training tracks and school athletics facilities.",
        images: [
          "../../../../Assets/sports/running_track.jpeg",
          "https://images.unsplash.com/photo-1571902940002-4fd9d0b4f5b6?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "sandwich",
        name: "Synthetic sandwich track system",
        description:
          "Multi-layer sandwich construction for improved shock absorption and durability.",
        images: [
          "../../../../Assets/sports/synthetic_sandwitch_track.jpeg",
          "https://images.unsplash.com/photo-1461896830458-677821998977?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "full-pur",
        name: "Full PUR running track",
        description:
          "Full polyurethane systems for competition-grade tracks and elite training venues.",
        images: [
          "../../../../Assets/sports/pur_rinning_track.jpeg",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1461896830458-677821998977?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "basketball-court",
    title: "Basketball court",
    description:
      "Indoor and outdoor basketball courts with flooring options tuned for grip, shock absorption, and long-term durability.",
    imageSrc:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic synthetic sports flooring",
        description:
          "UV-stable acrylic coatings for outdoor courts with consistent ball bounce.",
        images: [
          "../../../../Assets/sports/basket_ball_synthetic.jpeg",
          "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pvc",
        name: "Indoor PVC flooring",
        description:
          "Resilient PVC sports flooring for indoor arenas and multi-purpose halls.",
        images: [
          "../../../../Assets/sports/indoor_pvc_flooring.jpeg",
          "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "wooden",
        name: "Wooden flooring",
        description:
          "Sprung hardwood systems for professional indoor basketball and training centers.",
        images: [
          "../../../../Assets/sports/mapple_wodden_flooring.jpeg",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pp-tiles",
        name: "PP tiles",
        description:
          "Interlocking polypropylene tiles for modular courts and quick installation.",
        images: [
          "../../../../Assets/sports/basket_ball_pp_tiles.jpeg",
          "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pu",
        name: "PU flooring",
        description:
          "Polyurethane cushioned surfaces for high-impact play and joint protection.",
        images: [
          "../../../../Assets/sports/basket_ball_pu.jpeg",
          "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "tennis-court",
    title: "Tennis court",
    description:
      "Hard and cushioned tennis court surfaces with line marking, fencing integration, and weather-resistant top coats.",
    imageSrc: "../../../../Assets/sports/tennis_court_synthetic.jpeg",
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic synthetic sports flooring",
        description:
          "Textured acrylic systems for hard courts with all-weather performance.",
        images: [
          "../../../../Assets/sports/tennis_court_synthetic.jpeg",
          "https://images.unsplash.com/photo-1622163642999-6b47a83c9d3f?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pu",
        name: "PU flooring",
        description:
          "Cushioned PU tennis surfaces for reduced fatigue and consistent pace.",
        images: [
          "../../../../Assets/sports/tennis_court_pu.jpeg",
          "https://images.unsplash.com/photo-1554068864-24f776c8782c?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pp-tiles",
        name: "PP tiles",
        description:
          "Modular tile systems for practice courts and temporary installations.",
        images: [
          "../../../../Assets/sports/tennis_court_pp_tiles.jpeg",
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "volleyball-court",
    title: "Volleyball court",
    description:
      "Indoor and outdoor volleyball courts with surfaces engineered for grip, shock absorption, and safe diving play.",
    imageSrc:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic synthetic sports flooring",
        description:
          "Durable acrylic coatings for outdoor volleyball courts and school facilities.",
        images: [
          "../../../../Assets/sports/volley_ball_synthetic.webp",
          "https://images.unsplash.com/photo-1479859546309-cd77fa21c8f6?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pvc",
        name: "Indoor PVC flooring",
        description:
          "Resilient PVC systems for indoor volleyball halls and training centers.",
        images: [
          "../../../../Assets/sports/volley_ball_indoor_pvc.webp",
          "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pu",
        name: "PU flooring",
        description:
          "Cushioned polyurethane flooring for competitive indoor volleyball.",
        images: [
          "../../../../Assets/sports/volley_ball_pu.jpg",
          "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "badminton-court",
    title: "Badminton court",
    description:
      "Professional badminton courts with flooring suited for quick footwork, consistent bounce, and indoor climate control.",
    imageSrc:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "pvc",
        name: "Indoor PVC flooring",
        description:
          "PVC sports flooring with optimal slip resistance for badminton academies.",
        images: [
          "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "wooden",
        name: "Wooden flooring",
        description:
          "Sprung wooden courts for tournament-grade indoor badminton facilities.",
        images: [
          "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pp-tiles",
        name: "PP tiles",
        description:
          "Interlocking PP tiles for modular badminton courts and multi-use halls.",
        images: [
          "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "pickleball-court",
    title: "Pickleball court",
    description:
      "Dedicated pickleball courts with surfaces tuned for traction, ball response, and year-round outdoor use.",
    imageSrc:
      "https://images.unsplash.com/photo-1554068864-24f776c8782c?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic synthetic sports flooring",
        description:
          "Textured acrylic surfaces for outdoor pickleball courts and community centers.",
        images: [
          "https://images.unsplash.com/photo-1554068864-24f776c8782c?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1622163642999-6b47a83c9d3f?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "pp-tiles",
        name: "PP tiles",
        description:
          "Modular PP tile systems for quick-install pickleball courts.",
        images: [
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1554068864-24f776c8782c?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "squash-court",
    title: "Squash court",
    description:
      "Enclosed squash courts with premium wooden flooring for consistent bounce and player safety.",
    imageSrc:
      "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "wooden",
        name: "Wooden flooring",
        description:
          "Hardwood squash court flooring with proper sealing and line integration.",
        images: [
          "https://images.unsplash.com/photo-1519861530983-9a6a9afee40e?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "artificial-football-turf",
    title: "Artificial football turf",
    description:
      "FIFA-quality artificial football turfs for clubs, schools, and municipal grounds with infill and non-infill options.",
    imageSrc:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "50mm-infill",
        name: "50mm infill",
        description:
          "Long-pile turf with sand and rubber infill for professional match play and training.",
        images: [
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1529900748604-07564a03e4a9?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "30mm-non-infill",
        name: "30mm non infill",
        description:
          "Shorter non-infill turf systems for high-usage community and school pitches.",
        images: [
          "https://images.unsplash.com/photo-1529900748604-07564a03e4a9?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "cricket-turf",
    title: "Cricket turf",
    description:
      "Synthetic and hybrid cricket turf solutions for nets, practice wickets, and multi-sport grounds.",
    imageSrc:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "multipurpose",
        name: "Multipurpose sports turf",
        description:
          "Versatile turf systems suited for cricket nets, practice pitches, and shared sports use.",
        images: [
          "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "hockey-turf",
    title: "Hockey turf",
    description:
      "Water-based and sand-dressed hockey turfs built for FIH standards, fast play, and long-term durability.",
    imageSrc:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "synthetic-hockey-turf",
        name: "Synthetic hockey turf",
        description:
          "Professional hockey turf systems with drainage, shock pads, and line marking.",
        images: [
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1529900748604-07564a03e4a9?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "gym-flooring",
    title: "Gym flooring",
    description:
      "Heavy-duty gym flooring for free-weight zones, cardio areas, and functional training spaces.",
    imageSrc:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "rubber-tile",
        name: "Rubber tile flooring",
        description:
          "Interlocking rubber tiles for impact absorption under equipment and free weights.",
        images: [
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=80",
        ],
      },
      {
        id: "epdm-rubber",
        name: "EPDM rubber flooring",
        description:
          "Seamless EPDM rubber surfaces for commercial gyms and high-traffic fitness studios.",
        images: [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
  {
    id: "childrens-play-arena",
    title: "Children's play arena",
    description:
      "Safe, colorful play surfaces for schools, parks, and residential play areas with fall-height compliance.",
    imageSrc:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
    subcategories: [
      {
        id: "epdm-rubber",
        name: "EPDM rubber flooring",
        description:
          "Soft, durable EPDM surfaces for playgrounds with custom colors and patterns.",
        images: [
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=900&auto=format&fit=crop&q=80",
        ],
      },
    ],
  },
];
