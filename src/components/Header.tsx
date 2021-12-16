import { Flex, Image } from '@chakra-ui/react';

export function Header(){
    return(
        <Flex w="100%" h="5rem" align="center" justify="center"> 
            <Image src={'/logo.png'} alt="Logo World Trip"/>
        </Flex>
    )
}