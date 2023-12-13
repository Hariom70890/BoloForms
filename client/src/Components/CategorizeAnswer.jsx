import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Text,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const CategorizeAnswer = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [countriesD, setCountriesD] = useState([]);
  const [citiesD, setCitiesD] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Load questions from the backend when the component mounts
    axios
      .get("http://localhost:4500/answer/comprehensive")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions from the database", error);
      });
  }, []);

  const onDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const onDrop = (event, category) => {
    event.preventDefault();
    if (draggedItem && draggedItem.category === category) {
      if (category === "country") {
        setCountriesD([...countriesD, draggedItem]);
      } else if (category === "city") {
        setCitiesD([...citiesD, draggedItem]);
      }
      setDraggedItem(null);
      setSuccessMessage("Answer categorized successfully");
    } else {
      setErrorMessage("Incorrect categorization");
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Flex justifyContent="center" align="center" minHeight="100vh">
      <Flex
        w="80%"
        p="4"
        bgColor="white"
        boxShadow="lg"
        borderRadius="md"
        direction="column"
      >
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

        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Questions You Have to Answer
          </Text>
          <Divider mt="2" mb="4" />
          <Flex direction="row" justifyContent={"center"}>
            {questions.map((ele) => (
              <Box
                key={ele._id}
                p="3"
                borderWidth="2px"
                borderColor="gray.200"
                borderRadius="md"
                margin="2"
                bg={"green.200"}
                cursor="grab"
                onDragStart={(e) =>
                  onDragStart(e, { _id: ele._id, category: ele.category })
                }
                draggable="true"
              >
                {ele.questions}
              </Box>
            ))}
          </Flex>
        </Box>
        <Box>
          <Flex direction="row" align="center" justifyContent={"center"}>
            <Box
              className="drop-target country"
              onDrop={(e) => onDrop(e, "country")}
              onDragOver={onDragOver}
            >
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Drop Country Answer Here
              </Text>

              {countriesD.map((item, index) => (
                <Box
                  p="3"
                  bg={"blue.200"}
                  borderWidth="2px"
                  borderColor="gray.200"
                  borderRadius="md"
                  margin="2"
                  key={`country-${index}`}
                >
                  {item.category}
                </Box>
              ))}
            </Box>
            <Box
              className="drop-target city"
              onDrop={(e) => onDrop(e, "city")}
              onDragOver={onDragOver}
            >
              <Text fontSize="xl" fontWeight="bold" mb="2">
                Drop City Answer Here
              </Text>

              {citiesD.map((item, index) => (
                <Box
                  p="3"
                  bg={"blue.100"}
                  borderWidth="2px"
                  borderColor="gray.200"
                  borderRadius="md"
                  margin="2"
                  key={`city-${index}`}
                >
                  {item.category}
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CategorizeAnswer;
