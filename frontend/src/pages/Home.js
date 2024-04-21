import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

     
      <VerticalCardProduct category={"backpack"} heading={"backpack"}/>
      <VerticalCardProduct category={"sneakers"} heading={"Sneakers"}/>
      <VerticalCardProduct category={"Kimono"} heading={"Kimonos"}/>
      <VerticalCardProduct category={"insulated bottle"} heading={"insulated bottle"}/>
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
    </div>
  )
}

export default Home