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
    // Load categories from the backend when the component mounts
    axios
      .get("http://localhost:4500/question/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories from the database", error);
      });

    // Load items from the backend when the component mounts
    axios
      .get("http://localhost:4500/question/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items from the database", error);
      });
  }, []);

  const addCategory = () => {
    if (categoryName) {
       console.log("Adding category:", categoryName);
 
       axios
          .post("http://localhost:4500/question/category", {
             category: categoryName,
          })
          .then((response) => {
             console.log("Category added successfully:", response.data);
             setCategories([...categories, { category: categoryName }]);
             setCategoryName("");
             setSuccessMessage("Category added successfully");
          })
          .catch((error) => {
             console.error("Error adding category to the database", error);
             setErrorMessage("Error adding category");
          });
    }
 };
// Update the addItem function to include the category
const addItem = () => {
 
    console.log("Adding item:", itemName, selectedCategory);
    alert("YEs")
    axios
      .post("http://localhost:4500/question/category-and-items", {
        category: selectedCategory,
        name: [{ name: itemName }],
      })
      .then((response) => {
        console.log("Item added successfully:", response.data);
        alert(response.data)
        setItems([...items, { name: itemName, category: selectedCategory }]);
        setItemName("");
        setSelectedCategory("");
        setSuccessMessage("Item added successfully");
      })
      .catch((error) => {
        alert(error)
        console.error("Error adding item to the database", error);
        setErrorMessage("Error adding item");
      });
  
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

          <Button onClick={addCategory} mt={5} ml="2" colorScheme="teal">
            Add Category
          </Button>
          <UnorderedList mt="2">
            {categories.map((category, index) => (
              <ListItem key={index}>{category.category}</ListItem>
            ))}
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
            onChange={(e) => setSelectedCategory(e.target.value)}
            mb="2"
          >
            {categories.map((category, index) => (
              <option key={index} value={category.category}>
                {category.category}
              </option>
            ))}
          </Select>
          <Button onClick={()=>{addItem()}} ml="2" colorScheme="teal">
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
