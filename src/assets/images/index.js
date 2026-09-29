// Course Thumbnails
import course1 from './course-1.webp';
import course2 from './course-2.webp';
import course3 from './course-3.webp';
import course4 from './course-4.webp';
import course5 from './course-5.webp';
import course6 from './course-6.webp';

// Avatars
import avatar01 from './avatar-01.webp';
import avatar02 from './avatar-02.webp'; // Sarah M. (Testimonial)
import avatar03 from './avatar-03.webp'; // PurePearl Studio
import avatar04 from './avatar-04.webp';
import avatar05 from './avatar-05.webp';
import avatar06 from './avatar-06.webp';
import avatar07 from './avatar-07.webp';
import avatar08 from './avatar-08.webp';
import avatar09 from './avatar-09.webp';
import avatar10 from './avatar-10.webp';
import avatar11 from './avatar-11.webp'; // James L. (Testimonial)
import avatar12 from './avatar-12.webp'; // Alex B. (Testimonial)
import avatar13 from './avatar-13.webp'; // Reviewer 1
import avatar14 from './avatar-14.webp'; // Reviewer 2

// Cut-outs (Transparent PNGs)
import cutoutWomanTablet from './cutout-woman-tablet.png';
import cutoutHeroManLaptop from './cutout-hero-man-laptop.png';

// Course Detail & Author
import courseDetailHeroWoman from './course-detail-hero-woman.webp';
import courseDetailAuthorMan from './course-detail-author-man.webp';
import courseDetailGallery1 from './course-detail-gallery-1.webp';
import courseDetailGallery2 from './course-detail-gallery-2.webp';
import courseDetailGallery3 from './course-detail-gallery-3.webp';
import courseDetailGallery4 from './course-detail-gallery-4.webp';

// Pre-tinted 3D Shapes (Transparent PNGs matching Home design)
import shapeCylinderLime from './shape-cylinder-lime.png';
import shapeSpring2Lime from './shape-spring-2-lime.png';
import shapeConeLime from './shape-cone-lime.png';
import shapeTorusBlue from './shape-torus-blue.png';
import shapeSpring1Blue from './shape-spring-1-blue.png';
import shapePyramidWhite from './shape-pyramid-white.png';
import shapeSpring2White from './shape-spring-2-white.png';

// Base Neutral 3D Shapes
import shapeCone from './shape-cone.png';
import shapeCylinder from './shape-cylinder.png';
import shapeTorus from './shape-torus.png';
import shapeSpring1 from './shape-spring-1.png';
import shapePyramid from './shape-pyramid.png';
import shapeSpring2 from './shape-spring-2.png';

// Vector Logos (Figma SVGs)
import logoBytespace from './logo-bytespace.svg';
import logoPartners from './logo-partners.svg';

// Export named assets
export {
  // Course thumbnails
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,

  // Avatars
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07,
  avatar08,
  avatar09,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,

  // Cut-outs
  cutoutWomanTablet,
  cutoutHeroManLaptop,

  // Course Details
  courseDetailHeroWoman,
  courseDetailAuthorMan,
  courseDetailGallery1,
  courseDetailGallery2,
  courseDetailGallery3,
  courseDetailGallery4,

  // Pre-tinted 3D Shapes
  shapeCylinderLime,
  shapeSpring2Lime,
  shapeConeLime,
  shapeTorusBlue,
  shapeSpring1Blue,
  shapePyramidWhite,
  shapeSpring2White,

  // Base 3D Shapes
  shapeCone,
  shapeCylinder,
  shapeTorus,
  shapeSpring1,
  shapePyramid,
  shapeSpring2,

  // Logos
  logoBytespace,
  logoPartners,
};

// Grouped default export
const images = {
  courses: [course1, course2, course3, course4, course5, course6],
  avatars: [
    avatar01,
    avatar02,
    avatar03,
    avatar04,
    avatar05,
    avatar06,
    avatar07,
    avatar08,
    avatar09,
    avatar10,
    avatar11,
    avatar12,
    avatar13,
    avatar14,
  ],
  cutouts: {
    womanTablet: cutoutWomanTablet,
    heroManLaptop: cutoutHeroManLaptop,
  },
  courseDetails: {
    hero: courseDetailHeroWoman,
    author: courseDetailAuthorMan,
    gallery: [
      courseDetailGallery1,
      courseDetailGallery2,
      courseDetailGallery3,
      courseDetailGallery4,
    ],
  },
  tintedShapes: {
    cylinderLime: shapeCylinderLime,
    spring2Lime: shapeSpring2Lime,
    coneLime: shapeConeLime,
    torusBlue: shapeTorusBlue,
    spring1Blue: shapeSpring1Blue,
    pyramidWhite: shapePyramidWhite,
    spring2White: shapeSpring2White,
  },
  shapes: {
    cone: shapeCone,
    cylinder: shapeCylinder,
    torus: shapeTorus,
    spring1: shapeSpring1,
    pyramid: shapePyramid,
    spring2: shapeSpring2,
  },
  logos: {
    bytespace: logoBytespace,
    partners: logoPartners,
  },
};

export default images;
