import { Flex, Image, Box } from '@chakra-ui/react';

interface IHeaderProps{
    hasBackButton?: boolean;
}

export function Header({ hasBackButton = false }: IHeaderProps){

    return(
        <Flex w="100%" h="5rem" align="center" justify="center">
            {
                hasBackButton && (
                    <Box position="absolute" left="5%" cursor="pointer">
                         <Image src='/icons/backIcon.svg'/> 
                    </Box>
                )
            }
            <Image src={'/logo.png'} alt="Logo World Trip"/>
        </Flex>
    )
}