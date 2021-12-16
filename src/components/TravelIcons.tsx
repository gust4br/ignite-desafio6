import { Flex, Image, HStack, Text} from '@chakra-ui/react';

export function TravelIcons(){
    return(
        <Flex w="80%" h="300px">
            <HStack w="100%" justify="space-between" align="center"> 
                <Flex justify="center" align="center" gap="10px" flexDirection="column">
                    <Image src="icons/cocktail.svg"/>
                    <Text as="p" color="#47585B" fontWeight="600">Vida noturna</Text>
                </Flex>
                <Flex justify="center" align="center" gap="10px" flexDirection="column">
                    <Image src="icons/surf.svg"/>
                    <Text as="p" color="#47585B" fontWeight="600">Praia</Text>
                </Flex>
                <Flex justify="center" align="center" gap="10px" flexDirection="column">
                    <Image src="icons/building.svg"/>
                    <Text as="p" color="#47585B" fontWeight="600">Moderno</Text>
                </Flex>
                <Flex justify="center" align="center" gap="10px" flexDirection="column">
                    <Image src="icons/museum.svg"/>
                    <Text as="p" color="#47585B" fontWeight="600">Clássico</Text>
                </Flex>
                <Flex justify="center" align="center" gap="10px" flexDirection="column">
                    <Image src="icons/earth.svg"/>
                    <Text as="p" color="#47585B" fontWeight="600">E mais...</Text>
                </Flex>
            </HStack>
        </Flex>
    )
}