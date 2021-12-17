import { useBreakpointValue, Flex, Image, HStack, Text, Box, Icon} from '@chakra-ui/react';

export function TravelIcons(){
    const IconsData = [
        {
            title: 'Vida noturna',
            icon: 'icons/cocktail.svg'
        },
        {
            title: 'Praia',
            icon: 'icons/surf.svg'
        },
        {
            title: 'Moderno',
            icon: 'icons/building.svg'
        },
        {
            title: 'Clássico',
            icon: 'icons/museum.svg'
        },
        {
            title: 'E mais...',
            icon: 'icons/earth.svg'
        }
    ];


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
      });

    const setFlexDirection = () => {
        if(isWideVersion)
            return 'column';
        else
            return 'row'
    };

    return(
        <Flex w="80%" h="300px">
            <HStack w="100%" justify="space-between" align="center" flexWrap="wrap"> 
                {
                    IconsData.map((item) => {
                        return(
                            <Flex
                                key={item.title}
                                justify="center" 
                                align="center" 
                                gap="10px" 
                                flexDirection={setFlexDirection()}
                            >
                                {
                                isWideVersion ? 
                                <Image src={item.icon}/> 
                                :
                                <Box 
                                bg="#FFBA08" 
                                w="8px" 
                                h="8px" 
                                borderRadius={'full'}></Box>
                                }
                                <Text as="p" color="#47585B" fontWeight="600">
                                    {item.title}
                                </Text>
                            </Flex>
                        )
                    })
                }
            </HStack>
        </Flex>
    )
}