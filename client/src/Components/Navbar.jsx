import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Link as ChakraLink, Text } from "@chakra-ui/react";

const Navbar = () => {
   return (
      <Flex
         justifyContent="center"
         gap="50px"
         bg="#FFAB91" // Background color
         p={4} // Padding
        
      >
         <Box
            box-shadow="gba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            p={"5px"}
            background="radial-gradient(ellipse at top, #a78880, transparent)"
            borderRadius={"15px"}
         >
            <ChakraLink as={Link} to="/formgeneration">
               <Text
                  fontSize="xl"
                  color="white"
                  _hover={{ textDecoration: "underline" }}
               >
                  Generate Form
               </Text>
            </ChakraLink>
         </Box>
         <Box
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
         </Box>
      </Flex>
   );
};

export default Navbar;
