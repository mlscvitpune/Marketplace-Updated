import React from "react";
import { Box, Button, Container,Text,InputGroup,Input,InputRightAddon, Flex, SimpleGrid, Heading,Image} from "@chakra-ui/react";
const Dash=()=>{
    return(
        <>
        <Box h={['90vh','90vh']} bg='blue' w='100vw' display='flex' justifyContent='space-around' alignItems='center' flexDirection={['column-reverse','column-reverse','row']} >
            <Box w={['60vw','50vw','40vw']} h={['60%','40%','70%']} bg='blue' display='flex' justifyContent={['center','flex-start']} flexDirection='column'>
                <Text fontSize={['2xl','4xl','6xl']} color='white' m='0' p='0' textAlign={['center','center','start']}>My Hardware</Text>
                <Text fontSize={['2xl','4xl','6xl']} color='white' m='0' p='0' textAlign={['center','center','start']}>To Yours...</Text>
                <Text fontSize={['md','md','md','2xl']} color='white' m='0' p='0' textAlign={['center','center','start']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta fuga modi excepturi fugiat facere molestias inventore aspernatur, quasi voluptates! Consectetur sint obcaecati molestias modi dolore, et iure saepe. Non.</Text>
                <Box display='flex' justifyContent={['center','center','flex-start']} mt='15px'>
                    <Button colorScheme='gray' color='white' borderRadius='0' variant='outline' m='5px'>Explore</Button>
                    <Button colorScheme='gray' color='white' borderRadius='0' variant='outline' m='5px'>About</Button>
                </Box>

            </Box>
            <Box w={['60vw','50vw','40vw']} h={['50%','40%','70%']} bg='white' className="dashimg" display='flex' justifyContent='center' alignItems='center'>
                <Image src='logo512.png' className="img-fluid"></Image>
            </Box>


        </Box>
        
        
        
        </>
    );
}
export default Dash;