import React, { useState, useEffect } from "react";
import axios from "axios";
import {
   Flex,
   Box,
   Button,
   Input,
   Text,
   UnorderedList,
   ListItem,
   Select,
   Alert,
   AlertIcon,
} from "@chakra-ui/react";

const CategorizeQuestion = () => {
   const [categories, setCategories] = useState([]);
   const [categoryName, setCategoryName] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("");
   const [items, setItems] = useState([]);
   const [itemName, setItemName] = useState("");
   const [successMessage, setSuccessMessage] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   useEffect(() => {
      // Load categories from local storage when the component mounts
      const storedCategories =
         JSON.parse(localStorage.getItem("categories")) || [];

      // If there are no stored categories, add default categories
      if (storedCategories.length === 0) {
         const defaultCategories = [
            { category: "city" },
            { category: "country" },
         ];

         localStorage.setItem("categories", JSON.stringify(defaultCategories));
         setCategories(defaultCategories);
      } else {
         setCategories(storedCategories);
      }
   }, []);

   //  const addCategory = () => {
   //     if (categoryName) {
   //        const newCategory = { category: categoryName };
   //        // Add category to local state and local storage
   //        setCategories([...categories, newCategory]);
   //        localStorage.setItem(
   //           "categories",
   //           JSON.stringify([...categories, newCategory])
   //        );

   //        setCategoryName("");
   //        setSuccessMessage("Category added successfully");
   //     }
   //  };

   const addItem = () => {
      console.log(itemName, selectedCategory);
      if (itemName && selectedCategory) {
         const newItem = { name: itemName, category: selectedCategory };
         // Add item to backend
         axios
            .post("http://localhost:4500/question/category-and-items", {
               category: selectedCategory,
               items: [newItem],
            })
            .then((response) => {
               console.log("Item added successfully:", response.data);
               // Add item to local state
               setItems([...items, newItem]);
               setItemName("");
               setSelectedCategory("");
               setSuccessMessage("Item added successfully");
            })
            .catch((error) => {
               console.error("Error adding item to the database", error);
               setErrorMessage("Error adding item");
            });
      }
   };

   return (
      <Flex justifyContent="center" p={4} bg="gray.100">
         <Box w="400px" p={4} bg="white" shadow="md" rounded="md">
            {successMessage && (
               <Alert status="success" mb="4">
                  <AlertIcon />
                  {successMessage}
               </Alert>
            )}

            {errorMessage && (
               <Alert status="error" mb="4">
                  <AlertIcon />
                  {errorMessage}
               </Alert>
            )}

            <Box mb="4">
               <Text fontSize="xl" fontWeight="bold" mb="2">
                  Categories:
               </Text>
               <Input
                  type="text"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
               />

               <Button
                  // onClick={addCategory}
                  mt={5}
                  ml="2"
                  colorScheme="teal"
               >
                  Add Category
               </Button>
               <UnorderedList mt="2">
                  {categories?.map((category, index) => {
                     return (
                        <ListItem key={index}>{category.category}</ListItem>
                     );
                  })}
               </UnorderedList>
            </Box>
            <Box>
               <Text fontSize="xl" fontWeight="bold" mb="2">
                  Items:
               </Text>
               <Input
                  type="text"
                  placeholder="Item Name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
               />
               <Select
                  value={selectedCategory}
                  onChange={(e) => {
                     console.log(e.target.value);
                     setSelectedCategory(e.target.value);
                  }}
                  mb="2"
               >
                  {categories?.map((category, index) => (
                     <option key={index} value={category.category}>
                        {category.category}
                     </option>
                  ))}
               </Select>
               <Button
                  onClick={() => {
                     addItem();
                  }}
                  ml="2"
                  colorScheme="teal"
               >
                  Add Item
               </Button>
               <UnorderedList mt="2">
                  {items.map((item, index) => (
                     <ListItem key={index}>
                        {item.name} - {item.category}
                     </ListItem>
                  ))}
               </UnorderedList>
            </Box>
         </Box>
      </Flex>
   );
};

export default CategorizeQuestion;
