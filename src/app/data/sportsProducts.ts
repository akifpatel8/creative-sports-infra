// Assets from sports directory
import basketBallPpTiles from "../../../Assets/sports/basket_ball_pp_tiles.jpeg";
import basketBallPu from "../../../Assets/sports/basket_ball_pu.jpeg";
import basketBallSynthetic from "../../../Assets/sports/basket_ball_synthetic.jpeg";
import footballTurfPhoto from "../../../Assets/sports/football.jpeg";
import indoorPvc from "../../../Assets/sports/indoor_pvc_flooring.jpeg";
import mappleWoodenFlooring from "../../../Assets/sports/mapple_wodden_flooring.jpeg";
import newBasketBall from "../../../Assets/sports/new_basket_ball.jpeg";
import woodenFlooring from "../../../Assets/sports/new_mapple_wooden.jpeg";
import purRunningTrack from "../../../Assets/sports/new_running_track.jpeg";
import runningTrack from "../../../Assets/sports/running_track.jpeg";
import sandwichTrack from "../../../Assets/sports/synthetic_sandwitch_track.jpeg";
import tennisCourtPpTiles from "../../../Assets/sports/tennis_court_pp_tiles.jpeg";
import tennisCourtPu from "../../../Assets/sports/tennis_court_pu.jpeg";
import tennisCourtSynthetic from "../../../Assets/sports/tennis_court_synthetic.jpeg";
import volleyBallIndoorPvc from "../../../Assets/sports/volley_ball_indoor_pvc.webp";
import volleyBallPu from "../../../Assets/sports/volley_ball_pu.jpg";
import volleyBallSynthetic from "../../../Assets/sports/volley_ball_synthetic.webp";
import volleyballCourt from "../../../Assets/sports/volleyball.jpeg";

// Genuine Proof-of-Work Assets from Whatsapp_images
import imgVolleyballOutdoor from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.10.20 PM (1).jpeg";
import imgTennisAcrylicOutdoor from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.10.20 PM.jpeg";
import imgBasketballAcrylicOutdoor from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.11.04 PM.jpeg";
import imgBasketballSynthetic from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.11.44 PM.jpeg";
import imgBasketballWoodenStadium from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.12.32 PM.jpeg";
import imgBoxTurfCageField from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.04 PM (1).jpeg";
import imgBadmintonOutdoorCourt from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.04 PM (2).jpeg";
import imgPickleballCoveredArena from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.04 PM (3).jpeg";
import imgPickleballCoveredArena2 from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.04 PM.jpeg";
import imgBoxTurfFieldWide from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.04 PM 2.jpeg";
import imgPadelOutdoorCage from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (1).jpeg";
import imgBadmintonSprungWoodHall from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (10).jpeg";
import imgBadmintonBwfGreenHallWide from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (11).jpeg";
import imgBadmintonBwfGreenHallAngle from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (12).jpeg";
import imgPadelIndoorPanoramic from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (13).jpeg";
import imgPadelGlassSideWall from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (14).jpeg";
import imgPadelIndoorConstruction from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (15).jpeg";
import imgPickleballBasketballEstate from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (16).jpeg";
import imgBadmintonWoodenArenaLit from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (3).jpeg";
import imgAthleticRunningTrackPur from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (4).jpeg";
import imgParkJoggingTrack from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (5).jpeg";
import imgBadmintonTeakHardwoodClose from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (6).jpeg";
import imgBadmintonTeakHardwoodVertical from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (7).jpeg";
import imgBadmintonGreenSyntheticHall from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (8).jpeg";
import imgFootballGrassTurf from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM (9).jpeg";
import imgPadelOutdoorVertical from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.15 PM.jpeg";
import imgTennisBlueOutdoorCourt from "../../../Assets/Whatsapp_images/WhatsApp Image 2026-09-02 at 5.29.16 PM.jpeg";
import imgBoxCricketFullArena from "../../../Assets/Whatsapp_images/ssdfs.jpeg";

export type ProductSportCategory =
  | "all"
  | "racquet"
  | "court"
  | "turf"
  | "track";

export type ProductCategoryTab = {
  id: ProductSportCategory;
  label: string;
};

export const PRODUCT_CATEGORIES: ProductCategoryTab[] = [
  { id: "all", label: "All Solutions" },
  { id: "racquet", label: "Racquet Sports" },
  { id: "court", label: "Court Sports" },
  { id: "turf", label: "Turf & Box Arenas" },
  { id: "track", label: "Tracks & Safety" },
];

export type SportSubcategorySpecs = {
  thickness?: string;
  surfaceType?: string;
  standards?: string;
  features?: string[];
};

export type SportSubcategory = {
  id: string;
  name: string;
  description: string;
  images: string[];
  specs?: SportSubcategorySpecs;
};

export type SportProduct = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: "racquet" | "court" | "turf" | "track";
  badge: string;
  subcategories: SportSubcategory[];
};

export function getSportById(
  id: string | null | undefined,
): SportProduct | undefined {
  if (!id) return undefined;
  if (id === "box-cricket") return SPORTS_PRODUCTS.find((s) => s.id === "cricket-turf");
  return SPORTS_PRODUCTS.find((sport) => sport.id === id);
}

export function isValidSportId(id: string | null | undefined): id is string {
  if (!id) return false;
  if (id === "box-cricket") return true;
  return SPORTS_PRODUCTS.some((sport) => sport.id === id);
}

export const SPORTS_PRODUCTS: SportProduct[] = [
  {
    id: "athletic-running-track",
    title: "Athletic Running Track",
    category: "track",
    badge: "World Athletics Certified",
    description:
      "World Athletics & IAAF-aligned running tracks with layered synthetic systems for schools, universities, and professional athletics stadiums.",
    imageSrc: purRunningTrack,
    subcategories: [
      {
        id: "spray-coat",
        name: "Synthetic Spray Coat System",
        description:
          "Cost-effective spray-applied polyurethane surface delivering high friction and consistent drainage for training tracks and school facilities.",
        images: [runningTrack, purRunningTrack],
        specs: {
          thickness: "13 mm standard",
          surfaceType: "Spray coat polyurethane with EPDM rubber granules",
          standards: "IAAF & World Athletics Aligned",
          features: [
            "Seamless in-situ spray application",
            "Superior spike resistance and all-weather grip",
            "Quick-draining textured non-slip finish",
          ],
        },
      },
      {
        id: "sandwich",
        name: "Synthetic Sandwich Track System",
        description:
          "Multi-layer construction with a prefabricated rubber shock base bonded to an in-situ polyurethane wear layer for maximum energy return.",
        images: [sandwichTrack, imgAthleticRunningTrackPur],
        specs: {
          thickness: "13 mm – 16 mm",
          surfaceType: "Prefabricated SBR rubber base + Cast PU top coat",
          standards: "IAAF / World Athletics Certified",
          features: [
            "Balanced force reduction and stride propulsion",
            "Factory-controlled base layer density",
            "High UV resistance and thermal stability",
          ],
        },
      },
      {
        id: "full-pur",
        name: "Full PUR Running Track",
        description:
          "Pinnacle 100% solid polyurethane poured-in-place monolithic system engineered for Olympic venues, national stadiums, and elite competition.",
        images: [purRunningTrack, imgAthleticRunningTrackPur],
        specs: {
          thickness: "13 mm – 16 mm",
          surfaceType: "100% Solid cast polyurethane in-situ monolithic system",
          standards: "World Athletics Class 1 & 2 Standard",
          features: [
            "Zero delamination risk with 100% PUR construction",
            "Maximum energy restitution for elite sprint times",
            "Extreme durability lasting 15+ years under heavy spikes",
          ],
        },
      },
      {
        id: "jogging-track",
        name: "Park & School Jogging Track",
        description:
          "Resilient cushioned EPDM and PU jogging tracks engineered for community parks, residential townships, and fitness walking loops.",
        images: [imgParkJoggingTrack, sandwichTrack],
        specs: {
          thickness: "10 mm – 15 mm",
          surfaceType: "Poured EPDM rubber granules bound with flexible PU",
          standards: "Community Fitness & Ergonomic Safety",
          features: [
            "Joint-friendly cushioning for all age groups",
            "Monsoon-safe porous drainage design",
            "Vibrant non-fading custom colour options",
          ],
        },
      },
    ],
  },
  {
    id: "basketball-court",
    title: "Basketball Court",
    category: "court",
    badge: "FIBA Standard Approved",
    description:
      "Indoor and outdoor basketball courts engineered for FIBA-standard ball rebound, slip resistance, and optimal player joint protection.",
    imageSrc: newBasketBall,
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic Synthetic Sports Flooring",
        description:
          "Multi-layer water-based acrylic coating with silica sand texture for outdoor courts, delivering predictable ball bounce and UV stability.",
        images: [imgBasketballAcrylicOutdoor, basketBallSynthetic],
        specs: {
          thickness: "4 – 6 Layer System (2.5 mm – 3.5 mm)",
          surfaceType: "100% Pure acrylic resins with round-grain silica sand",
          standards: "FIBA Approved Ball Rebound & Slip Resistance",
          features: [
            "True and predictable ball bounce across the court",
            "All-weather quick-drying textured surface",
            "Vibrant dual-tone color schemes with crisp court lines",
          ],
        },
      },
      {
        id: "wooden",
        name: "Maple Hardwood Flooring",
        description:
          "Kiln-dried select-grade Hard Maple floor mounted on sprung sub-battens, the worldwide gold standard for championship basketball arenas.",
        images: [imgBasketballWoodenStadium, woodenFlooring],
        specs: {
          thickness: "20 mm – 22 mm select Hard Maple",
          surfaceType: "Select North American Hard Maple on sprung rubber sleepers",
          standards: "NBA, FIBA Level 1 & Olympic Games Benchmark",
          features: [
            "Exceptional natural spring and energy return underfoot",
            "Janka hardness of 1,450 lbf resisting equipment dents",
            "25–40 year service life with periodic refinishing",
          ],
        },
      },
      {
        id: "pvc",
        name: "Indoor PVC Flooring",
        description:
          "Resilient vinyl sports surface with closed-cell foam backing for high shock absorption, ideal for multi-purpose school and institutional gyms.",
        images: [indoorPvc, volleyBallIndoorPvc],
        specs: {
          thickness: "4.5 mm – 8.0 mm",
          surfaceType: "Multi-layer PVC with PUR/UV stain-resistant wear layer",
          standards: "FIBA Rebound & EN 14904 Sports Standard",
          features: [
            "High-impact landing force reduction protecting knees",
            "100% humidity and moisture resistant, no warping",
            "Factory-printed court markings sealed under wear coat",
          ],
        },
      },
      {
        id: "pp-tiles",
        name: "PP Interlocking Modular Tiles",
        description:
          "Impact-modified virgin polypropylene suspended grid tiles that click together without glue, delivering rapid self-draining performance.",
        images: [basketBallPpTiles, imgPickleballBasketballEstate],
        specs: {
          thickness: "14 mm – 18 mm suspended grid",
          surfaceType: "Virgin polypropylene (PP) click-lock modular tiles",
          standards: "FIBA Rebound Compliant & All-Weather",
          features: [
            "Self-draining grid eliminates rainwater puddling immediately",
            "Tool-free rapid 1-day assembly and relocatability",
            "Zero maintenance with individual snap-out tile replacement",
          ],
        },
      },
      {
        id: "pu",
        name: "Polyurethane (PU) Cushioned Flooring",
        description:
          "Seamless poured-in-place polyurethane surface with an elastomeric cushion mat, combining indoor wood-like spring with rubber durability.",
        images: [basketBallPu, imgBasketballSynthetic],
        specs: {
          thickness: "7 mm – 14 mm",
          surfaceType: "Poured liquid polyurethane over rubber cushion base",
          standards: "FIBA Point-Elastic Force Reduction",
          features: [
            "Seamless joint-free surface prevents trip hazards",
            "Anti-glare matte finish with high friction coefficient",
            "Multi-sport layout capability on a single court",
          ],
        },
      },
    ],
  },
  {
    id: "padel-court",
    title: "Padel Tennis Court",
    category: "racquet",
    badge: "FIP Regulation Standard",
    description:
      "Turnkey panoramic and caged Padel courts featuring 12mm toughened glass walls, electro-welded steel cages, and texturized monofilament padel turf.",
    imageSrc: imgPadelIndoorPanoramic,
    subcategories: [
      {
        id: "panoramic-padel",
        name: "Indoor Panoramic Padel Court",
        description:
          "Frameless panoramic rear glass architecture offering 100% unobstructed 360° viewing angles for spectators and broadcast tournaments.",
        images: [imgPadelIndoorPanoramic, imgPadelGlassSideWall],
        specs: {
          thickness: "12 mm Toughened safety glass + 12 mm texturized turf",
          surfaceType: "Frameless tempered safety glass & monofilament padel turf",
          standards: "International Padel Federation (FIP) Compliant",
          features: [
            "Unobstructed panoramic rear wall for elite stadium view",
            "Precision silica sand infill for uniform ball slide and spin",
            "Integrated 8x 200W LED anti-glare floodlighting brackets",
          ],
        },
      },
      {
        id: "outdoor-caged-padel",
        name: "Tournament Caged Padel Court",
        description:
          "Robust galvanized steel mesh framework with anti-vibration glass fittings built for heavy outdoor winds, sun, and high-frequency club play.",
        images: [imgPadelOutdoorCage, imgPadelOutdoorVertical],
        specs: {
          thickness: "10 mm – 12 mm safety glass + 2.0 mm structural steel cage",
          surfaceType: "Electro-welded galvanized anti-injury mesh & turf",
          standards: "FIP 10m x 20m Standard Arena Dimensions",
          features: [
            "Hot-dip galvanized & electrostatic powder-coated steel posts",
            "Anti-injury flush-fitting glass gaskets and stainless bolts",
            "High-density texturized blue/green synthetic padel grass",
          ],
        },
      },
      {
        id: "turnkey-structure",
        name: "Turnkey Steel & Glass Infrastructure",
        description:
          "Complete engineering package from ring-beam foundation, sub-base laser leveling, glass lifting, to lighting and turnkey arena commissioning.",
        images: [imgPadelIndoorConstruction, imgPadelIndoorPanoramic],
        specs: {
          thickness: "Eurocode certified structural framing",
          surfaceType: "Complete structural arena build and commissioning",
          standards: "Structural Wind Load & Glass Impact Certified",
          features: [
            "Laser-leveled sub-base preparation with moisture sealing",
            "Turnkey arena supply, installation, and certification",
            "Custom club branding, corner guards, and entry arches",
          ],
        },
      },
    ],
  },
  {
    id: "badminton-court",
    title: "Badminton Court",
    category: "racquet",
    badge: "BWF Approved Standard",
    description:
      "Professional tournament-grade badminton courts with BWF-certified PVC mats, sprung teakwood, and maple timber for lightning-fast footwork.",
    imageSrc: imgBadmintonBwfGreenHallWide,
    subcategories: [
      {
        id: "pvc",
        name: "BWF Approved PVC Synthetic Mats",
        description:
          "Specialized badminton mats featuring embossed snake/sand texture for optimal traction during deep lunges, sharp cuts, and rapid stops.",
        images: [
          imgBadmintonBwfGreenHallWide,
          imgBadmintonBwfGreenHallAngle,
          imgBadmintonGreenSyntheticHall,
        ],
        specs: {
          thickness: "4.5 mm – 7.0 mm",
          surfaceType: "High-density multi-layer PVC with non-slip PUR wear coating",
          standards: "Badminton World Federation (BWF) Certified",
          features: [
            "Calibrated friction coefficient prevents footwear catching or slipping",
            "High-density cellular foam backing protects knees and ankles",
            "Permanent factory-printed BWF court lines with zero glare",
          ],
        },
      },
      {
        id: "teakwood",
        name: "Sprung Teak Hardwood Flooring",
        description:
          "Solid Indian Teak (Tectona grandis) tongue-and-groove boards on sprung sleeper battens, naturally resistant to India's high monsoon humidity.",
        images: [
          imgBadmintonTeakHardwoodClose,
          imgBadmintonTeakHardwoodVertical,
          imgBadmintonWoodenArenaLit,
        ],
        specs: {
          thickness: "19 mm – 22 mm solid Teak",
          surfaceType: "Kiln-dried select Indian Teak on sprung rubber sleeper pads",
          standards: "BWF & Badminton Association of India (BAI) Approved",
          features: [
            "Natural silica and oil content protects against warping and swelling",
            "Sprung sleeper batten system absorbs extreme lunge landing forces",
            "Warm, prestigious timber finish with 25–35 year lifespan",
          ],
        },
      },
      {
        id: "maple-wooden",
        name: "Maple Hardwood Flooring",
        description:
          "Select North American Hard Maple with sports-grade anti-slip polyurethane lacquer for international stadium and university badminton arenas.",
        images: [imgBadmintonSprungWoodHall, woodenFlooring, mappleWoodenFlooring],
        specs: {
          thickness: "20 mm – 22 mm Hard Maple",
          surfaceType: "Kiln-dried Hard Maple (Acer saccharum) on resilient pads",
          standards: "BWF Level 1 & WSF Multi-Sport Standard",
          features: [
            "Tight uniform grain provides true consistent shuttle response",
            "Multiple coats of sports-grade PU lacquer for controlled grip",
            "Fully sandable and refinishable every 8–10 years",
          ],
        },
      },
      {
        id: "outdoor-acrylic",
        name: "All-Weather Outdoor Badminton Court",
        description:
          "Cushioned acrylic coating system designed for outdoor recreational courts in schools, colleges, and residential societies.",
        images: [imgBadmintonOutdoorCourt],
        specs: {
          thickness: "4 – 6 Layer UV Coating",
          surfaceType: "Silica-fortified all-weather acrylic on concrete/asphalt",
          standards: "Recreational BWF Dimensions Standard",
          features: [
            "UV-resistant pigments that will not fade in intense sunlight",
            "Rapid rainwater drainage with non-skid textured grip",
            "Low-maintenance durable surface easily cleaned with water",
          ],
        },
      },
    ],
  },
  {
    id: "tennis-court",
    title: "Tennis Court",
    category: "racquet",
    badge: "ITF Classified (Class 2-4)",
    description:
      "Championship hard and cushioned tennis court surfaces with line marking, fencing integration, and weather-resistant ITF top coats.",
    imageSrc: imgTennisAcrylicOutdoor,
    subcategories: [
      {
        id: "acrylic",
        name: "Acrylic Synthetic Sports Flooring",
        description:
          "Multi-coat acrylic surface with silica texture calibrated for ITF Pace Class 3 (Medium), identical to US Open tournament hard courts.",
        images: [imgTennisAcrylicOutdoor, tennisCourtSynthetic],
        specs: {
          thickness: "4 – 7 Coat System (approx. 2.5 mm – 4.0 mm)",
          surfaceType: "Pure acrylic resin with calibrated silica sand texture",
          standards: "ITF Classified Pace Class 3 & AITA Approved",
          features: [
            "True and predictable ball bounce across every point on the court",
            "Customizable pace rating from Class 2 (Slow) to Class 4 (Fast)",
            "All-weather fast-draining surface playable shortly after rainfall",
          ],
        },
      },
      {
        id: "us-open-blue",
        name: "US Open Blue Tournament Acrylic",
        description:
          "High-contrast dual-blue tournament coating engineered for sharp ball visibility, maximum player focus, and televised match play.",
        images: [imgTennisBlueOutdoorCourt, tennisCourtSynthetic],
        specs: {
          thickness: "5 – 8 Layer Multi-Layer Hardcourt",
          surfaceType: "US Open Sky Blue inner court & Navy Blue surround",
          standards: "Grand Slam ITF Specification",
          features: [
            "Exceptional optical ball-to-court contrast for high-speed rallies",
            "UV-stabilized pigments prevent fading under severe tropical heat",
            "Precision laser line markings sealed under clear topcoat",
          ],
        },
      },
      {
        id: "pu-cushion",
        name: "Polyurethane (PU) Cushioned Court",
        description:
          "Poured elastomeric cushion base beneath a textured wear coat, reducing joint landing impact by up to 35% compared to raw asphalt.",
        images: [tennisCourtPu, imgTennisBlueOutdoorCourt],
        specs: {
          thickness: "8 mm – 15 mm Poured Cushion",
          surfaceType: "Poured-in-place PU cushion mat + acrylic wear coat",
          standards: "ITF Pace Approved with Joint Force Reduction",
          features: [
            "Substantially reduces knee, ankle, and lower back fatigue",
            "Recommended for high-performance academies and daily training",
            "High tensile elasticity prevents crack propagation from sub-base",
          ],
        },
      },
      {
        id: "pp-tiles",
        name: "PP Interlocking Modular Tiles",
        description:
          "Suspended polypropylene modular tiles designed for rapid dry court availability, club practice, and temporary exhibition matches.",
        images: [tennisCourtPpTiles, tennisCourtSynthetic],
        specs: {
          thickness: "14 mm – 18 mm Suspended Grid",
          surfaceType: "Virgin polypropylene self-draining click-lock tiles",
          standards: "ITF Rebound Standard for Club Facilities",
          features: [
            "Raised base allows water to flow through without puddles",
            "Tool-free assembly on existing concrete or asphalt bases",
            "Individual tile replacement dramatically cuts maintenance cost",
          ],
        },
      },
    ],
  },
  {
    id: "pickleball-court",
    title: "Pickleball Court",
    category: "racquet",
    badge: "USA Pickleball Standard",
    description:
      "Dedicated covered and outdoor pickleball courts engineered with micro-texture acrylic and modular surfaces for precision paddle play.",
    imageSrc: imgPickleballCoveredArena,
    subcategories: [
      {
        id: "covered-arena",
        name: "Tournament Covered Arena Acrylic",
        description:
          "High-traction resilient acrylic system for covered and indoor pickleball stadiums, offering tournament-accurate ball bounce and non-slip play.",
        images: [imgPickleballCoveredArena, imgPickleballCoveredArena2],
        specs: {
          thickness: "5 – 8 Coat Cushioned System",
          surfaceType: "Textured acrylic with fine silica grain for paddle ball bite",
          standards: "USA Pickleball Compliant Bounce & Line Specs",
          features: [
            "Specially calibrated friction prevents plastic wiffle ball skidding",
            "Precision Non-Volley Kitchen Zone regulation markings",
            "Comfort cushion underlayment reduces fatigue during extended rallies",
          ],
        },
      },
      {
        id: "outdoor-acrylic",
        name: "All-Weather Outdoor Pickleball",
        description:
          "All-weather UV-fortified acrylic courts for sports clubs, housing societies, and multi-sport complexes with rapid drainage.",
        images: [imgPickleballBasketballEstate, tennisCourtSynthetic],
        specs: {
          thickness: "4 – 6 Layer Outdoor Coating",
          surfaceType: "Water-based 100% acrylic polymer with silica texture",
          standards: "Official 20ft x 44ft Court Dimensions",
          features: [
            "UV and thermal shock resistant in high temperature environments",
            "Monsoon-ready fast-drain texture for maximum playable hours",
            "Eye-catching contemporary color pairings (Blue/Green/Terracotta)",
          ],
        },
      },
      {
        id: "pp-tiles",
        name: "PP Interlocking Modular Tiles",
        description:
          "Fast-installing suspended polypropylene tiles for rooftop courts, school playgrounds, and quick-turnaround pickleball clubs.",
        images: [tennisCourtPpTiles, basketBallPpTiles],
        specs: {
          thickness: "14 mm – 16 mm Suspended Grid",
          surfaceType: "High-impact copolymer polypropylene click tiles",
          standards: "Recreational & Tournament Modular Standard",
          features: [
            "Installed in under 8 hours with zero adhesives or wait time",
            "Suspended base provides natural shock absorption on hard slabs",
            "Integrated contrasting line tiles eliminate line repainting",
          ],
        },
      },
    ],
  },
  {
    id: "volleyball-court",
    title: "Volleyball Court",
    category: "court",
    badge: "FIVB Compliant Surface",
    description:
      "Indoor and outdoor volleyball courts engineered for high vertical jump landings, safe sliding dives, and FIVB-regulation dimensions.",
    imageSrc: volleyballCourt,
    subcategories: [
      {
        id: "acrylic",
        name: "All-Weather Acrylic Synthetic Court",
        description:
          "Calibrated silica sand texture that provides firm grip for explosive takeoffs while remaining smooth enough for safe sliding digs without skin burns.",
        images: [volleyballCourt, volleyBallSynthetic],
        specs: {
          thickness: "4 – 6 Layers (approx. 2.5 mm – 3.5 mm)",
          surfaceType: "Silica-fortified pure acrylic on asphalt or concrete",
          standards: "FIVB Regulation 18m x 9m + Free Zone",
          features: [
            "Dive-safe non-abrasive surface protects players during sliding digs",
            "Consistent ball bounce from attack line to back boundary",
            "Fast drainage keeps outdoor courts playable throughout the year",
          ],
        },
      },
      {
        id: "pvc",
        name: "Indoor PVC Volleyball Flooring",
        description:
          "Foam-backed multi-layer vinyl flooring that absorbs high-impact landing forces (3–5x body weight) from spikes and blocks.",
        images: [volleyBallIndoorPvc, indoorPvc],
        specs: {
          thickness: "4.5 mm – 8.0 mm",
          surfaceType: "Multi-layer PVC with PUR protective wear surface",
          standards: "FIVB Approved Force Reduction & Ball Rebound",
          features: [
            "Cushioned cellular base absorbs spike jump landings",
            "Resists humidity and sweating without slickness or moisture warping",
            "Factory-sealed attack line and service zone boundary markings",
          ],
        },
      },
      {
        id: "pu",
        name: "Polyurethane (PU) Seamless Court",
        description:
          "Seamless poured-in-place polyurethane surface offering point-elastic cushioning, ideal for national volleyball arenas and sports complexes.",
        images: [volleyBallPu, imgVolleyballOutdoor],
        specs: {
          thickness: "7 mm – 14 mm",
          surfaceType: "Poured liquid PU over prefabricated rubber mat",
          standards: "FIVB Point-Elastic Impact Standard",
          features: [
            "Monolithic joint-free court prevents foot catches during rapid dives",
            "Matte non-glare finish under powerful indoor arena floodlights",
            "Multi-decade service life with easy single-day topcoat renewal",
          ],
        },
      },
    ],
  },
  {
    id: "artificial-football-turf",
    title: "Artificial Football Turf",
    category: "turf",
    badge: "FIFA Quality Pro Standard",
    description:
      "FIFA-quality 3G artificial football turf systems with calibrated silica sand and cryogenic rubber infill for professional clubs, academies, and schools.",
    imageSrc: footballTurfPhoto,
    subcategories: [
      {
        id: "50mm-infill",
        name: "50mm Sand & Rubber Infill System (3G)",
        description:
          "Third-generation (3G) synthetic turf with 50mm monofilament yarn, kiln-dried silica sand, and resilient rubber granules replicating natural grass.",
        images: [footballTurfPhoto, imgFootballGrassTurf],
        specs: {
          thickness: "50 mm Pile Height",
          surfaceType: "UV-stabilized PE monofilament + Sand & SBR/EPDM infill",
          standards: "FIFA Quality & FIFA Quality Pro Certified",
          features: [
            "Natural ball roll, true rebound, and authentic boot stud slide",
            "Heavy-duty latex/PU dual backing with high water permeability",
            "Engineered for 11-a-side, 7-a-side, and 5-a-side match play",
          ],
        },
      },
      {
        id: "30mm-non-infill",
        name: "30mm – 40mm Non-Infill Multi-Use Turf",
        description:
          "High-density curled and monofilament thatch grass for high-traffic school pitches, community parks, and rooftop 5-a-side football arenas.",
        images: [imgBoxTurfFieldWide, footballTurfPhoto],
        specs: {
          thickness: "30 mm – 40 mm High-Density Thatch",
          surfaceType: "Dense curly thatch PE monofilament (no infill required)",
          standards: "Community & Institutional Heavy-Usage Standard",
          features: [
            "Zero infill splash or rubber migration into shoes and eyes",
            "Ultra-low maintenance — no regular brushing or infill topping required",
            "Excellent tear resistance under continuous daily usage",
          ],
        },
      },
    ],
  },
  {
    id: "cricket-turf",
    title: "Box Cricket & Multi-Sport Turf",
    category: "turf",
    badge: "Heavy-Duty Turnkey Arena",
    description:
      "Turnkey commercial box cricket arenas with tournament-grade turf, pitch bounce pads, high-tensile peripheral netting, and floodlighting.",
    imageSrc: imgBoxCricketFullArena,
    subcategories: [
      {
        id: "box-cricket-arena",
        name: "Turnkey Commercial Box Cricket Arena",
        description:
          "Complete turnkey box cricket arena setup including concrete pitch sub-base, shock-absorbing cricket turf, high-tensile nylon cage netting, and lighting.",
        images: [imgBoxCricketFullArena, imgBoxTurfCageField],
        specs: {
          thickness: "15 mm – 25 mm High-Density Grass",
          surfaceType: "Dense curled PE yarn + peripheral steel cage & nylon net",
          standards: "Commercial Pay-and-Play Box Cricket Standard",
          features: [
            "Consistent pitch bounce and seam traction for rubber & tennis balls",
            "UV-treated heavy duty 380D/450D nylon netting with roof net",
            "High revenue commercial setup designed for 24/7 continuous play",
          ],
        },
      },
      {
        id: "multipurpose-turf",
        name: "Multipurpose Sports Turf",
        description:
          "Versatile synthetic turf engineered for practice wickets, cricket nets, football drills, and multi-sport school playgrounds.",
        images: [imgBoxTurfFieldWide, imgBoxCricketFullArena],
        specs: {
          thickness: "20 mm – 35 mm",
          surfaceType: "UV-treated polyethylene multi-sport turf",
          standards: "Multi-Sport School & Academy Standard",
          features: [
            "Dual-tone natural grass look with long-term UV resistance",
            "Perforated backing allows instant rainwater drainage",
            "Resistant to high shoe abrasion, spikes, and turf tears",
          ],
        },
      },
    ],
  },
  {
    id: "squash-court",
    title: "Squash Court",
    category: "court",
    badge: "WSF Certified Standard",
    description:
      "Enclosed squash courts built with World Squash Federation (WSF) compliant sprung Hard Maple timber flooring and impact-tested play walls.",
    imageSrc: imgBadmintonSprungWoodHall,
    subcategories: [
      {
        id: "wooden",
        name: "Maplewood Sprung Hardwood Flooring",
        description:
          "North American Hard Maple boards on engineered sprung batten pads, absorbing extreme multi-directional impact and ghost movement loads.",
        images: [imgBadmintonSprungWoodHall, woodenFlooring, mappleWoodenFlooring],
        specs: {
          thickness: "20 mm – 22 mm select Hard Maple",
          surfaceType: "Sprung batten floating substructure + WSF-compliant PU lacquer",
          standards: "World Squash Federation (WSF) & PSA World Tour Standard",
          features: [
            "Janka hardness of 1,450 lbf resists high-frequency squash lunges",
            "Controlled friction lacquer prevents shoe slippage and burn marks",
            "Complete WSF regulation line markings sealed permanently",
          ],
        },
      },
    ],
  },
  {
    id: "hockey-turf",
    title: "Hockey Turf",
    category: "turf",
    badge: "FIH Certified Performance",
    description:
      "Water-based and sand-dressed synthetic hockey turfs engineered to International Hockey Federation (FIH) standards for elite stick work and fast ball roll.",
    imageSrc: imgFootballGrassTurf,
    subcategories: [
      {
        id: "synthetic-hockey-turf",
        name: "FIH Certified Synthetic Hockey Turf",
        description:
          "Dense non-directional texturized monofilament grass on an elastic shock pad, ensuring true ball roll without deviation or bounce irregularities.",
        images: [imgFootballGrassTurf, imgBoxTurfFieldWide],
        specs: {
          thickness: "12 mm – 18 mm pile on 15 mm in-situ shockpad",
          surfaceType: "Texturized PE monofilament (Wet or Sand-Dressed System)",
          standards: "FIH National & Global Performance Standard",
          features: [
            "Non-directional texturized yarn for 360° true stick handling",
            "In-situ elastic shock pad protects players from fall injuries",
            "Advanced drainage slope and sprinkler irrigation compatibility",
          ],
        },
      },
    ],
  },
  {
    id: "gym-flooring",
    title: "Gym & Fitness Flooring",
    category: "track",
    badge: "Heavy Duty Shock Absorption",
    description:
      "Heavy-duty acoustic rubber tiles and seamless poured EPDM flooring engineered for Olympic weightlifting drops, functional training, and cardio zones.",
    imageSrc: imgParkJoggingTrack,
    subcategories: [
      {
        id: "epdm-rubber",
        name: "Seamless EPDM Rubber Flooring",
        description:
          "Seamless poured-in-place EPDM rubber bound with polyurethane, providing an acoustic, joint-free, and sweat-resistant floor for fitness studios.",
        images: [imgParkJoggingTrack, purRunningTrack],
        specs: {
          thickness: "10 mm – 25 mm Poured In-Situ",
          surfaceType: "UV-stable virgin EPDM granules bound with flexible PU",
          standards: "Commercial Fitness & Acoustic Vibration Standard",
          features: [
            "100% seamless and joint-free — no lifting edges or dirt traps",
            "Superior noise dampening and equipment impact absorption",
            "Non-porous, sweat-resistant, and odor-free formulation",
          ],
        },
      },
      {
        id: "rubber-tile",
        name: "High-Density Rubber Tile Flooring",
        description:
          "Heavy-duty vulcanized rubber tiles designed for free-weight zones, dumbbell racks, and power racks to protect the underlying concrete slab.",
        images: [indoorPvc, imgParkJoggingTrack],
        specs: {
          thickness: "15 mm – 50 mm Interlocking / Beveled",
          surfaceType: "High-density vulcanized recycled rubber and EPDM top",
          standards: "Heavy Weight Drop & Sub-Floor Protection Standard",
          features: [
            "Absorbs heavy barbell drops without denting or floor cracks",
            "Textured anti-slip diamond/matte surface for sure footing",
            "Interlocking or beveled design for rapid installation and swapping",
          ],
        },
      },
    ],
  },
  {
    id: "childrens-play-arena",
    title: "Children's Play Arena",
    category: "track",
    badge: "EN 1177 Certified Fall Safety",
    description:
      "Vibrant, impact-attenuating seamless EPDM rubber surfaces engineered to protect children from fall injuries in schools, parks, and residential play areas.",
    imageSrc: imgParkJoggingTrack,
    subcategories: [
      {
        id: "epdm-rubber",
        name: "EPDM Rubber Safety Flooring",
        description:
          "Dual-layer poured-in-place safety system consisting of an energy-absorbing SBR cushion base topped with a colorful, non-toxic EPDM wear layer.",
        images: [imgParkJoggingTrack, sandwichTrack],
        specs: {
          thickness: "25 mm – 100 mm (Critical Fall Height up to 3.0 m)",
          surfaceType: "Dual Layer: SBR Cushion Base + UV EPDM Wear Top (EN 1177)",
          standards: "EN 1177 & IS 15567 Certified Fall Height Compliance",
          features: [
            "Certified protection against critical fall injuries up to 3 meters",
            "Porous fast-draining surface prevents water puddles after rainfall",
            "Custom game graphics: hopscotch, alphabet tracks, animal characters",
          ],
        },
      },
    ],
  },
];
