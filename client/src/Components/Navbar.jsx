import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Box, Link as ChakraLink, Text, Heading, Button } from "@chakra-ui/react";

const Navbar = () => {
   const navigate = useNavigate()
   return (
      <Flex
         justifyContent="center"
         gap="500px"
         bg="#FFAB91" // Background color
         p={4} // Padding
        
      >
      <Box onClick={()=>{navigate("/")}}>
         
      <Heading >BoloForms</Heading>
      </Box>
         <Box
          
         >
            <ChakraLink as={Link} to="/formgeneration">
               <Button
                  fontSize="xl"
                 
                  _hover={{ textDecoration: "underline" }}
               >
                  Generate Form
               </Button>
            </ChakraLink>
         </Box>
         {/* <Box
            box-shadow="gba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p={"5px"}
            background="radial-gradient(ellipse at top, #a78880, transparent)"
            borderRadius={"15px"}
         >
            <ChakraLink as={Link} to="/answer">
               <Text
                  fontSize="xl"
                  color="white"
                  _hover={{ textDecoration: "underline" }}
               >
                  Answering Screen
               </Text>
            </ChakraLink>
         </Box> */}
      </Flex>
   );
};

export default Navbar;
