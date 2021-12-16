import { Flex, Image, Text, Heading, Box, VStack } from '@chakra-ui/react';

interface ISliderItem{
    title: string,
    paragraph: string,
    image: string,
}

export function SliderItem({title, paragraph, image}: ISliderItem){

    return(
        <Flex justify="center" align="center" position="relative" flexDir="column" bg="black" h="450px">
            <Box overflow="hidden" h="100%">
                <Image src={image} alt={title}  w="100%" opacity="0.4" />
            </Box>
            <VStack
                position="absolute"
                h="100%"
                w="100%"
                justify="center"
                align="center"
            >
                <Heading as="h1" color="white" fontWeight="700">
                    {title}
                </Heading>
                <Text as="p" color="#DADADA" fontWeight="700" mt="1rem">
                    {paragraph}
                </Text>
            </VStack>
            
        </Flex>
    );
}