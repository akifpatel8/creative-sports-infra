import basketBallPpTiles from '../../../Assets/sports/basket_ball_pp_tiles.jpeg';
import basketBallPu from '../../../Assets/sports/basket_ball_pu.jpeg';
import basketBallSynthetic from '../../../Assets/sports/basket_ball_synthetic.jpeg';
import indoorPvc from '../../../Assets/sports/indoor_pvc_flooring.jpeg';
import woodenFlooring from '../../../Assets/sports/mapple_wodden_flooring.jpeg';
import purRunningTrack from '../../../Assets/sports/pur_rinning_track.jpeg';
import runningTrack from '../../../Assets/sports/running_track.jpeg';
import sandwichTrack from '../../../Assets/sports/synthetic_sandwitch_track.jpeg';
import tennisSynthetic from '../../../Assets/sports/tennis_court_synthetic.jpeg';
import sitePhoto1 from '../../../Assets/sports/WhatsApp Image 2026-05-29 at 4.08.57 PM.jpeg';
import sitePhoto2 from '../../../Assets/sports/WhatsApp Image 2026-05-29 at 4.11.58 PM.jpeg';
import sitePhoto3 from '../../../Assets/sports/WhatsApp Image 2026-05-29 at 4.13.07 PM.jpeg';
import volleyBallPu from '../../../Assets/sports/volley_ball_pu.jpg';

export type GalleryImageItem = {
  id: string;
  type: 'image';
  title: string;
  caption?: string;
  src: string;
  featured?: boolean;
};

export type GalleryVideoItem = {
  id: string;
  type: 'video';
  title: string;
  caption?: string;
  poster: string;
  /** YouTube embed URL or path to an .mp4 in /public or Assets */
  videoSrc: string;
  featured?: boolean;
};

export type GalleryItem = GalleryImageItem | GalleryVideoItem;

export const OUR_WORK_GALLERY: GalleryItem[] = [
  {
    id: 'site-1',
    type: 'image',
    title: 'Sports facility project',
    caption: 'Completed installation at client site',
    src: sitePhoto1,
    featured: true,
  },
  {
    id: 'video-track',
    type: 'video',
    title: 'Running track showcase',
    caption: 'Synthetic track systems in action',
    poster: runningTrack,
    videoSrc: 'https://www.youtube.com/embed/Yy2ikI0lmPw?controls=1&rel=0',
    featured: true,
  },
  {
    id: 'running-track',
    type: 'image',
    title: 'Athletic running track',
    caption: 'Full PUR running track surface',
    src: purRunningTrack,
  },
  {
    id: 'sandwich-track',
    type: 'image',
    title: 'Sandwich track system',
    src: sandwichTrack,
  },
  {
    id: 'basketball-acrylic',
    type: 'image',
    title: 'Basketball court — acrylic',
    src: basketBallSynthetic,
  },
  {
    id: 'basketball-pp',
    type: 'image',
    title: 'Basketball court — PP tiles',
    src: basketBallPpTiles,
  },
  {
    id: 'basketball-pu',
    type: 'image',
    title: 'Basketball court — PU flooring',
    src: basketBallPu,
  },
  {
    id: 'site-2',
    type: 'image',
    title: 'On-site work',
    src: sitePhoto2,
  },
  {
    id: 'tennis',
    type: 'image',
    title: 'Tennis court surface',
    src: tennisSynthetic,
  },
  {
    id: 'volleyball',
    type: 'image',
    title: 'Volleyball court — PU',
    src: volleyBallPu,
  },
  {
    id: 'pvc-indoor',
    type: 'image',
    title: 'Indoor PVC sports flooring',
    src: indoorPvc,
  },
  {
    id: 'wooden',
    type: 'image',
    title: 'Wooden sports flooring',
    src: woodenFlooring,
  },
  {
    id: 'site-3',
    type: 'image',
    title: 'Project handover',
    src: sitePhoto3,
  },
  {
    id: 'video-site',
    type: 'video',
    title: 'Infrastructure overview',
    caption: 'Sports infra development highlights',
    poster: sitePhoto1,
    videoSrc: 'https://www.youtube.com/embed/Yy2ikI0lmPw?controls=1&rel=0&start=10',
  },
];
