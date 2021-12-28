import { Box, Flex, Heading } from '@chakra-ui/react';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelIcons } from "../components/TravelIcons";
import { SliderItem } from '../components/SliderItem';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from 'next/head';

export default function Home() {
  
  const continentsList = [
    {
      title: 'Europa',
      paragraph: 'O continente mais antigo.',
      image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Asia',
      paragraph: 'Berço da cultura oriental.',
      image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'América do Sul',
      paragraph: 'Clima Equatorial.',
      image: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
    }
  ]



  return (
    <>
    <Head key="title">
    <title>World Trip</title>
    </Head>
    <Header />
    <Banner />
    <Flex w="100%" justify="center" align="center" flexDir="column">
      <TravelIcons />
      <Box as="span" w="90px" borderBottom="2px solid #47585B"></Box>
      <Heading mt="3.25rem" fontWeight={500} color="#47585B">
        Vamos nessa?
      </Heading>      
      <Heading fontWeight={500} color="#47585B">
        Então escolha seu continente
      </Heading>

      <Flex w="80%" mb="3rem" mt="3.25rem">
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {continentsList.map(({title, paragraph, image,  }) => {
              return (
                <SwiperSlide key={title}>
                  <SliderItem title={title} paragraph={paragraph} image={image} link={`/places/${title}`} />
                </SwiperSlide>
              )
            })}
        </Swiper>
      </Flex>
    </Flex>
    </>
  )
}
