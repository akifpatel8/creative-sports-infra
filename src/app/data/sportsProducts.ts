import basketBallPpTiles from '../../../Assets/sports/basket_ball_pp_tiles.jpeg';
import basketBallPu from '../../../Assets/sports/basket_ball_pu.jpeg';
import basketBallSynthetic from '../../../Assets/sports/basket_ball_synthetic.jpeg';
import indoorPvc from '../../../Assets/sports/indoor_pvc_flooring.jpeg';
import woodenFlooring from '../../../Assets/sports/mapple_wodden_flooring.jpeg';
import purRunningTrack from '../../../Assets/sports/pur_rinning_track.jpeg';
import runningTrack from '../../../Assets/sports/running_track.jpeg';
import sandwichTrack from '../../../Assets/sports/synthetic_sandwitch_track.jpeg';
import tennisCourtPpTiles from '../../../Assets/sports/tennis_court_pp_tiles.jpeg';
import tennisCourtPu from '../../../Assets/sports/tennis_court_pu.jpeg';
import tennisCourtSynthetic from '../../../Assets/sports/tennis_court_synthetic.jpeg';
import volleyBallIndoorPvc from '../../../Assets/sports/volley_ball_indoor_pvc.webp';
import volleyBallPu from '../../../Assets/sports/volley_ball_pu.jpg';
import volleyBallSynthetic from '../../../Assets/sports/volley_ball_synthetic.webp';

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
    id: 'athletic-running-track',
    title: 'Athletic running track',
    description:
      'IAAF-aligned running tracks with layered synthetic systems for schools, colleges, and professional athletics venues.',
    imageSrc: purRunningTrack,
    subcategories: [
      {
        id: 'spray-coat',
        name: 'Synthetic spray coat system',
        description:
          'Spray-applied synthetic surface for training tracks and school athletics facilities.',
        images: [runningTrack, sandwichTrack, purRunningTrack],
      },
      {
        id: 'sandwich',
        name: 'Synthetic sandwich track system',
        description:
          'Multi-layer sandwich construction for improved shock absorption and durability.',
        images: [sandwichTrack, runningTrack],
      },
      {
        id: 'full-pur',
        name: 'Full PUR running track',
        description:
          'Full polyurethane systems for competition-grade tracks and elite training venues.',
        images: [purRunningTrack, runningTrack, sandwichTrack],
      },
    ],
  },
  {
    id: 'basketball-court',
    title: 'Basketball court',
    description:
      'Indoor and outdoor basketball courts with flooring options tuned for grip, shock absorption, and long-term durability.',
    imageSrc: basketBallSynthetic,
    subcategories: [
      {
        id: 'acrylic',
        name: 'Acrylic synthetic sports flooring',
        description:
          'UV-stable acrylic coatings for outdoor courts with consistent ball bounce.',
        images: [basketBallSynthetic, basketBallPu],
      },
      {
        id: 'pvc',
        name: 'Indoor PVC flooring',
        description:
          'Resilient PVC sports flooring for indoor arenas and multi-purpose halls.',
        images: [indoorPvc, volleyBallIndoorPvc],
      },
      {
        id: 'wooden',
        name: 'Wooden flooring',
        description:
          'Sprung hardwood systems for professional indoor basketball and training centers.',
        images: [woodenFlooring, basketBallSynthetic],
      },
      {
        id: 'pp-tiles',
        name: 'PP tiles',
        description:
          'Interlocking polypropylene tiles for modular courts and quick installation.',
        images: [basketBallPpTiles, tennisCourtPpTiles],
      },
      {
        id: 'pu',
        name: 'PU flooring',
        description:
          'Polyurethane cushioned surfaces for high-impact play and joint protection.',
        images: [basketBallPu, basketBallSynthetic, indoorPvc],
      },
    ],
  },
  {
    id: 'tennis-court',
    title: 'Tennis court',
    description:
      'Hard and cushioned tennis court surfaces with line marking, fencing integration, and weather-resistant top coats.',
    imageSrc: tennisCourtSynthetic,
    subcategories: [
      {
        id: 'acrylic',
        name: 'Acrylic synthetic sports flooring',
        description:
          'Textured acrylic systems for hard courts with all-weather performance.',
        images: [tennisCourtSynthetic, tennisCourtPu],
      },
      {
        id: 'pu',
        name: 'PU flooring',
        description:
          'Cushioned PU tennis surfaces for reduced fatigue and consistent pace.',
        images: [tennisCourtPu, tennisCourtSynthetic],
      },
      {
        id: 'pp-tiles',
        name: 'PP tiles',
        description:
          'Modular tile systems for practice courts and temporary installations.',
        images: [tennisCourtPpTiles, tennisCourtSynthetic],
      },
    ],
  },
  {
    id: 'volleyball-court',
    title: 'Volleyball court',
    description:
      'Indoor and outdoor volleyball courts with surfaces engineered for grip, shock absorption, and safe diving play.',
    imageSrc: volleyBallPu,
    subcategories: [
      {
        id: 'acrylic',
        name: 'Acrylic synthetic sports flooring',
        description:
          'Durable acrylic coatings for outdoor volleyball courts and school facilities.',
        images: [volleyBallSynthetic, basketBallSynthetic],
      },
      {
        id: 'pvc',
        name: 'Indoor PVC flooring',
        description:
          'Resilient PVC systems for indoor volleyball halls and training centers.',
        images: [volleyBallIndoorPvc, indoorPvc],
      },
      {
        id: 'pu',
        name: 'PU flooring',
        description:
          'Cushioned polyurethane flooring for competitive indoor volleyball.',
        images: [volleyBallPu, volleyBallIndoorPvc],
      },
    ],
  },
  {
    id: 'badminton-court',
    title: 'Badminton court',
    description:
      'Professional badminton courts with flooring suited for quick footwork, consistent bounce, and indoor climate control.',
    imageSrc: indoorPvc,
    subcategories: [
      {
        id: 'pvc',
        name: 'Indoor PVC flooring',
        description:
          'PVC sports flooring with optimal slip resistance for badminton academies.',
        images: [indoorPvc, volleyBallIndoorPvc],
      },
      {
        id: 'wooden',
        name: 'Wooden flooring',
        description:
          'Sprung wooden courts for tournament-grade indoor badminton facilities.',
        images: [woodenFlooring, indoorPvc],
      },
      {
        id: 'pp-tiles',
        name: 'PP tiles',
        description:
          'Interlocking PP tiles for modular badminton courts and multi-use halls.',
        images: [basketBallPpTiles, tennisCourtPpTiles],
      },
    ],
  },
  {
    id: 'pickleball-court',
    title: 'Pickleball court',
    description:
      'Dedicated pickleball courts with surfaces tuned for traction, ball response, and year-round outdoor use.',
    imageSrc: tennisCourtSynthetic,
    subcategories: [
      {
        id: 'acrylic',
        name: 'Acrylic synthetic sports flooring',
        description:
          'Textured acrylic surfaces for outdoor pickleball courts and community centers.',
        images: [tennisCourtSynthetic, basketBallSynthetic],
      },
      {
        id: 'pp-tiles',
        name: 'PP tiles',
        description:
          'Modular PP tile systems for quick-install pickleball courts.',
        images: [tennisCourtPpTiles, basketBallPpTiles],
      },
    ],
  },
  {
    id: 'squash-court',
    title: 'Squash court',
    description:
      'Enclosed squash courts with premium wooden flooring for consistent bounce and player safety.',
    imageSrc: woodenFlooring,
    subcategories: [
      {
        id: 'wooden',
        name: 'Wooden flooring',
        description:
          'Hardwood squash court flooring with proper sealing and line integration.',
        images: [woodenFlooring, indoorPvc],
      },
    ],
  },
  {
    id: 'artificial-football-turf',
    title: 'Artificial football turf',
    description:
      'FIFA-quality artificial football turfs for clubs, schools, and municipal grounds with infill and non-infill options.',
    imageSrc: runningTrack,
    subcategories: [
      {
        id: '50mm-infill',
        name: '50mm infill',
        description:
          'Long-pile turf with sand and rubber infill for professional match play and training.',
        images: [runningTrack, purRunningTrack],
      },
      {
        id: '30mm-non-infill',
        name: '30mm non infill',
        description:
          'Shorter non-infill turf systems for high-usage community and school pitches.',
        images: [purRunningTrack, runningTrack],
      },
    ],
  },
  {
    id: 'cricket-turf',
    title: 'Cricket turf',
    description:
      'Synthetic and hybrid cricket turf solutions for nets, practice wickets, and multi-sport grounds.',
    imageSrc: runningTrack,
    subcategories: [
      {
        id: 'multipurpose',
        name: 'Multipurpose sports turf',
        description:
          'Versatile turf systems suited for cricket nets, practice pitches, and shared sports use.',
        images: [runningTrack, sandwichTrack],
      },
    ],
  },
  {
    id: 'hockey-turf',
    title: 'Hockey turf',
    description:
      'Water-based and sand-dressed hockey turfs built for FIH standards, fast play, and long-term durability.',
    imageSrc: purRunningTrack,
    subcategories: [
      {
        id: 'synthetic-hockey-turf',
        name: 'Synthetic hockey turf',
        description:
          'Professional hockey turf systems with drainage, shock pads, and line marking.',
        images: [purRunningTrack, runningTrack],
      },
    ],
  },
  {
    id: 'gym-flooring',
    title: 'Gym flooring',
    description:
      'Heavy-duty gym flooring for free-weight zones, cardio areas, and functional training spaces.',
    imageSrc: indoorPvc,
    subcategories: [
      {
        id: 'rubber-tile',
        name: 'Rubber tile flooring',
        description:
          'Interlocking rubber tiles for impact absorption under equipment and free weights.',
        images: [indoorPvc, volleyBallPu],
      },
      {
        id: 'epdm-rubber',
        name: 'EPDM rubber flooring',
        description:
          'Seamless EPDM rubber surfaces for commercial gyms and high-traffic fitness studios.',
        images: [volleyBallPu, indoorPvc],
      },
    ],
  },
  {
    id: 'childrens-play-arena',
    title: "Children's play arena",
    description:
      'Safe, colorful play surfaces for schools, parks, and residential play areas with fall-height compliance.',
    imageSrc: volleyBallSynthetic,
    subcategories: [
      {
        id: 'epdm-rubber',
        name: 'EPDM rubber flooring',
        description:
          'Soft, durable EPDM surfaces for playgrounds with custom colors and patterns.',
        images: [volleyBallSynthetic, volleyBallPu],
      },
    ],
  },
];
