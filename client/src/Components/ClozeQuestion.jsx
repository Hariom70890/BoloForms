import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const ClozeQuestion = () => {
  const [formData, setFormData] = useState({
    text: 'The capital of France is _____.',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    answer: 'Paris',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Create a New Question
      </Heading>
      <form>
        <FormControl mb={4}>
          <FormLabel htmlFor="questionText">Question Text</FormLabel>
          <Input
            type="text"
            id="questionText"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </FormControl>
        {formData.options.map((option, index) => (
          <FormControl key={index} mb={4}>
            <FormLabel htmlFor={`option${index + 1}`}>Option {index + 1}</FormLabel>
            <Input
              type="text"
              id={`option${index + 1}`}
              name={`options[${index}]`}
              value={formData.options[index]}
              onChange={handleInputChange}
            />
          </FormControl>
        ))}
        <FormControl mb={4}>
          <FormLabel htmlFor="answer">Correct Answer</FormLabel>
          <Input
            type="text"
            id="answer"
            name="answer"
            value={formData.answer}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="md">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ClozeQuestion;
