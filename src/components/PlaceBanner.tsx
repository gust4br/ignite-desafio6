import { useBreakpointValue, Flex, Image, VStack, Heading, Box} from '@chakra-ui/react';

interface IPlaceBannerProps{
    name: string,
    image: string,
}

export function PlaceBanner({name, image} : IPlaceBannerProps){

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
      })
    
    return(
        <Flex
            w="100%"
            h={300}
            position="relative"
        >
           <Box overflow="hidden" h="100%" bg="black">
                <Image 
                    src={image} 
                    alt="Background Image"
                    w="100vw"
                    mt="-30%"
                    opacity="0.55"
                />
           </Box>
            <VStack
                position="absolute"
                h="100%"
                w={["70%","50%"]}
                justify="center"
                align="flex-start"
                ml={12}
            >
                <Heading as="h1" fontWeight="500" fontSize="36px" color="white">
                    { name }
                </Heading>
            </VStack>
        </Flex>
    )
}