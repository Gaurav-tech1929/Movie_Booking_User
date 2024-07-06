// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// import Image from 'next/image';

// const width = window.innerWidth;
// const height = window.innerHeight;
// const HomeSlider = () => {

//     const [banners, setBanners] = useState([
//         {
//             imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg'
//         },
//         {
//             imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg'
//         }
//     ])



//     return (
//         <Swiper
//             cssMode={true}
//             navigation={true}
//             pagination={true}
//             mousewheel={true}
//             keyboard={true}
//             modules={[Navigation, Pagination, Mousewheel, Keyboard]}
//             className="mySwiper"
//         >
//             {
//                 banners.map((banner, index) => {
//                     return (
//                         <SwiperSlide key={index}>
//                             <Image src={banner.imgUrl} alt="" width={width} height={height / 2}
//                                 style={{
//                                     objectFit: "cover"
//                                 }} />
//                         </SwiperSlide>
//                     )
//                 })
//             }
//         </Swiper>
//     )
// }

// export default HomeSlider



import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const HomeSlider = () => {
  const [banners, setBanners] = useState([
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg',
    },
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg',
    },
  ]);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  if (dimensions.width === 0 || dimensions.height === 0) {
    return null; // Or return a loading spinner, or some placeholder
  }

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Image
            src={banner.imgUrl}
            alt=""
            width={dimensions.width}
            height={dimensions.height / 2}
            style={{
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
