import { Flex, Image, Box } from '@chakra-ui/react';
import Link from 'next/link';

interface IHeaderProps{
    hasBackButton?: boolean;
}

export function Header({ hasBackButton = false }: IHeaderProps){

    return(
        <Flex w="100%" h="5rem" align="center" justify="center">
            {
                hasBackButton && (
                    <Box position="absolute" left="5%" cursor="pointer">
                         <Link href="/"><Image src='/icons/backIcon.svg'/></Link>
                    </Box>
                )
            }
            <Image src={'/logo.png'} alt="Logo World Trip"/>
        </Flex>
    )
}