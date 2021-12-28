import { useRouter } from "next/router";

import { useEffect, useState } from "react";

import { PlaceBanner } from "../../components/PlaceBanner";
import { Header } from "../../components/Header";
import { Flex, Text, Image } from "@chakra-ui/react";
import Head from "next/head";
type IContinentData = {
    title: string,
    paragraph: string,
    image: string,
    totalPaises: number,
    totalCidades: number,
    cidades: {
        nome: string,
        pais: string,
    }
}

export default function(){
    const router = useRouter();
    const {id} = router.query;

    const continentsList = [
        {
          title: 'Europa',
          paragraph: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
          image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          totalPaises: 50,
          totalCidades: 92,
          totalLinguas: 24,
          cidades: [
              {
                nome: "Paris",
                pais: "França",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
              },
              {
                  nome: "Londres",
                  pais: "Reino Unido",
                  image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              },
              {
                  nome: "Lisboa",
                  pais: "Portugual",
                  image: "https://images.unsplash.com/photo-1585334954347-e50fe83cc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              }
          ]
        },
        {
          title: 'Asia',
          paragraph: 'A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.',
          image: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          totalPaises: 49,
          totalCidades: 163,
          totalLinguas: 2301,
          cidades: [
            {
              nome: "Tóquio",
              pais: "Japão",
              image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
            },
            {
                nome: "Seul",
                pais: "Coreia do Sul",
                image: "https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
            {
                nome: "Taipé",
                pais: "Taiwan",
                image: "https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            }
        ]
        },
        {
          title: 'América do Sul',
          paragraph: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
          image: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
          totalPaises: 13,
          totalCidades: 163,
          totalLinguas: 9,
          cidades: [
            {
              nome: "Rio De Janeiro",
              pais: "Brasil",
              image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            },
            {
                nome: "Buenos Aires",
                pais: "Argentina",
                image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                nome: "Bogotá",
                pais: "Colômbia",
                image: "https://images.unsplash.com/photo-1622433595283-e5912e217786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            }
        ]
        }
    ];

    const [continent, setContitnent] = useState("");
    const [continentData, setContinentData] = useState<IContinentData | any>();

    useEffect(() => {
        if(id){
            setContitnent(id.toString());
        }
        
    }, [id])

    useEffect(() => {
        setContinentData(continentsList.find(e => e.title === continent));
    }, [continent])

    

    return(
        <>
            <Head key="title">
                <title>{continentData?.title} - World Trip</title>
            </Head>
            <Flex flexDir="column" align="center">
                <Header hasBackButton />
                <PlaceBanner name={continentData?.title} image={continentData?.image} />
                <Flex w="70%" mt="3rem" flexDir="column">
                    <Flex w="100%" align="center" justify="space-between">
                        <Flex w="50%" textAlign="justify">
                        {continentData?.paragraph}
                        </Flex>
                        <Flex w="35%" align="center" justify="space-between">
                            <Flex align="center" flexDir="column">
                                <Text as="h1" fontSize="2rem" color="#FFBA08" fontWeight={600}>{continentData?.totalCidades}</Text>
                                <Text as="p" fontSize="1rem" color="#47585B" fontWeight={600}>países</Text>
                            </Flex>
                            <Flex align="center" flexDir="column">
                                <Text as="h1" fontSize="2rem" color="#FFBA08" fontWeight={600}>{continentData?.totalLinguas}</Text>
                                <Text as="p" fontSize="1rem" color="#47585B" fontWeight={600}>línguas</Text>
                            </Flex>
                            <Flex align="center" flexDir="column">
                                <Text as="h1" fontSize="2rem" color="#FFBA08" fontWeight={600}>{continentData?.totalPaises}</Text>
                                <Text as="p" fontSize="1rem" color="#47585B" fontWeight={600}>cidades</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" mt={16} color="#47585B" fontSize="24px" fontWeight="medium">
                        <Text as="h1">Cidades:</Text>
                        <Flex>
                            {
                                continentData?.cidades.map(e => {
                                    return <Flex key={e.nome} overflow="hidden" w="250px" h="280px">
                                                <Image src={e.image} />
                                                <Flex background="white" position="absolute" bottom="0" w="100%" h="30%">
                                                </Flex>
                                            </Flex>
                                })
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
        
    )
}