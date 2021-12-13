import { Flex, Image, VStack, Heading, Text} from '@chakra-ui/react';

export function Banner(){
    return(
        <Flex
            w="100vw"
            h={300}
            overflow="hidden"
            position="relative"
        >
            <Image 
                src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80" 
                alt="Background Image"
                w="100vw"
                h={1350}
            />
            <VStack
                position="absolute"
                h="100%"
                w="50%"
                justify="center"
                align="flex-start"
                ml={12}
            >
                <Heading as="h1" fontWeight="500" fontSize="36px" color="white">
                    5 Continentes, infinitas possibilidades
                </Heading>
                <Text as="p" color="#DADADA">
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou
                </Text>
            </VStack>

        </Flex>
    )
}