import React, { useState } from 'react';
import { ChakraProvider, Box, Text, Center, Grid, GridItem, Flex } from "@chakra-ui/react";

const ClozeAnswer = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'The capital of France is _____.',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      answer: 'Paris',
    },
    {
      id: 2,
      text: 'The largest planet in our solar system is _____.',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 'Jupiter',
    },
  ]);

  const handleDragStart = (e, option) => {
    e.dataTransfer.setData('text/plain', option);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, questionId) => {
    e.preventDefault();
    const option = e.dataTransfer.getData('text/plain');
    const updatedQuestions = questions.map((q) => {

      console.log(q.id,questionId,option)
      if (q.id == questionId) {
        q.text = q.text.replace('_____', option);
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <ChakraProvider>
      <Center minH="100vh">
        <Box>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Fill in the Blanks</Text>
          <Grid templateColumns="1fr" gap={4}>
            {questions.map((question) => (
              <GridItem key={question.id} p={4} bg="white" borderRadius="md" boxShadow="md">
                <Text fontSize="lg">{question.text}</Text>
                <Box
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, question.id)}
                  p={2}
                  border="2px dashed gray"
                  borderRadius="md"
                  mt={2}
                >
                  Drag an option here to fill the blank.
                </Box>
                <Flex mt={2}>
                  {question.options.map((option, index) => (
                    <Box
                      key={index}
                      p={2}
                      border="1px solid gray"
                      borderRadius="md"
                      m={2}
                      cursor="grab"
                      draggable="true"
                      onDragStart={(e) => handleDragStart(e, option)}
                    >
                      {option}
                    </Box>
                  ))}
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Center>
    </ChakraProvider>
  );
};

export default ClozeAnswer;
