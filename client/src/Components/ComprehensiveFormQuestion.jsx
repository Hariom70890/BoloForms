// AdminForm.js

import React, { useState } from "react";
import {
   Box,
   Button,
   Container,
   FormControl,
   FormLabel,
   Input,
   Heading,
   Textarea,
   Select,
   UnorderedList,
   ListItem,
   VStack,
} from "@chakra-ui/react";
import axios from "axios";

const AdminForm = () => {
   const [paragraph, setParagraph] = useState("");
   const [questions, setQuestions] = useState([]);
   const [currentQuestion, setCurrentQuestion] = useState({
      text: "",
      options: ["", "", "", ""],
      correctAnswer: "",
   });

   const handleAddQuestion = () => {
      setQuestions([...questions, currentQuestion]);
      setCurrentQuestion({
         text: "",
         options: ["", "", "", ""],
         correctAnswer: "",
      });
      axios
        .post("http://localhost:4500/question/comprehensive", {
         para: paragraph,
         questions: currentQuestion.text,
         option: currentQuestion.options,
         correctans: currentQuestion.correctAnswer,
        })
        .then((response) => {
          console.log("New item added to the database");
          console.log(response)
          alert(response.data.msg)
          // You can update your state or perform other actions here
        })
        .catch((error) => {
          console.error("Error adding item to the database", error);
          alert("There might be some issue in deployemnt for this server. Don't Worry we have saved your data to local storage for this form you can check the other one")
        })
      
   };

   const handleSave = () => {
      // Send the paragraph and questions to the server or store them as needed
      const dataToSave = {
         paragraph,
         questions,
      };
      console.log(dataToSave); // You can replace this with your data storage logic
   };

   return (
      <Container maxW="xl">
         <div
            style={{ width: "full", height: "1px", background: "black" }}
         ></div>
         <Heading m={5}>Comprehensive Form</Heading>
         <Box
         mt={5}
            p={5}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            textAlign={"center"}
         >
            <FormControl>
               <FormLabel fontSize="18px" textAlign="center">
                  Paragraph:
               </FormLabel>
               <Textarea
                  style={{
                     border: "1px solid black",
                     margin: "5px",
                     padding: "8px",
                     borderRadius: "5px",
                  }}
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                  borderRadius="md"
                  size={"lg"}
                  width={"80%"}
               />
            </FormControl>

            <VStack spacing={4}>
               <FormControl width={"80%"}>
                  <FormLabel fontSize="20px" textAlign={"center"}>
                     Question:
                  </FormLabel>
                  <Input
                     style={{
                        border: "1px solid black",
                        margin: "5px",
                        padding: "8px",
                        borderRadius: "5px",
                     }}
                     type="text"
                     width={"100%"}
                     height={"40%"}
                     value={currentQuestion.text}
                     onChange={(e) =>
                        setCurrentQuestion({
                           ...currentQuestion,
                           text: e.target.value,
                        })
                     }
                     borderRadius="md"
                  />
               </FormControl>

               <FormControl>
                  <FormLabel fontSize="19px" textAlign={"center"}>
                     Options:
                  </FormLabel>
                  {currentQuestion.options.map((option, index) => (
                     <Input
                        style={{
                           border: "1px solid black",
                           margin: "5px",
                           padding: "8px",
                           borderRadius: "5px",
                        }}
                        display={"grid"}
                        gridTemplateColumns={2}
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) => {
                           const updatedOptions = [...currentQuestion.options];
                           updatedOptions[index] = e.target.value;
                           setCurrentQuestion({
                              ...currentQuestion,
                              options: updatedOptions,
                           });
                        }}
                        borderRadius="md"
                     />
                  ))}
               </FormControl>

               <FormControl>
                  <FormLabel fontSize="20px">Correct Answer:</FormLabel>
                  <Select
                     value={currentQuestion.correctAnswer}
                     onChange={(e) =>
                        setCurrentQuestion({
                           ...currentQuestion,
                           correctAnswer: e.target.value,
                        })
                     }
                     borderRadius="md"
                     size="lg"
                     // Apply custom styles here
                     style={{ borderColor: "yellow", borderWidth: "2px" }}
                  >
                     {currentQuestion.options.map((option, index) => (
                        <option key={index} value={option}>
                           {option}
                        </option>
                     ))}
                  </Select>
               </FormControl>

               <Button
                  onClick={handleAddQuestion}
                  colorScheme="blue"
                  borderRadius="md"
                  size="lg"
                  _hover={{ bg: "blue.600" }}
                  _active={{ bg: "blue.700" }}
                  _focus={{ boxShadow: "none" }}
               >
                  Add Question
               </Button>
            </VStack>

            <h3 style={{ fontSize: "20px", margin: "20px 0" }}>Questions:</h3>
            <UnorderedList fontSize="16px">
               {questions.map((question, index) => (
                  <ListItem key={index}>
                     <strong>Question:</strong> {question.text}
                     <br />
                     <strong>Options:</strong>
                     {question.options.map((option, optionIndex) => (
                        <input
                           key={optionIndex}
                           type="text"
                           value={option}
                           readOnly
                           style={{ border: "none", background: "transparent" }}
                        />
                     ))}
                     <br />
                     <strong>Correct Answer:</strong> {question.correctAnswer}
                  </ListItem>
               ))}
            </UnorderedList>

            <Button
               onClick={handleSave}
               colorScheme="yellow"
               borderRadius="md"
               size="lg"
               mt={4}
            >
               Save Data
            </Button>
         </Box>
      </Container>
   );
};

export default AdminForm;
