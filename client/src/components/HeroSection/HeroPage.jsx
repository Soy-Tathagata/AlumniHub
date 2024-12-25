import React, { useState } from 'react'
import Banner from './Banner.jsx'
import HomeBanner from './HomeBanner.jsx';
import AlumniFeature from './AlumniFeature.jsx'
import AlumniImagesCarousel from './AlumniList.jsx'
import { useGetMyProfileQuery } from '../../redux/api/authSlice.js';

const HeroPage = () => {
    const {isLoading, isError, data:userData} = useGetMyProfileQuery();
  
  return (
    <div>
      {userData?.success ? <HomeBanner/> :<Banner/>}
      <AlumniFeature/>
      <AlumniImagesCarousel/>
    </div>
  )
}

export default HeroPage