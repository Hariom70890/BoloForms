import React from "react";
import { Route, Routes } from "react-router-dom";

import FormGenerationScreen from "./FormGenerationScreen";
import AnswerScreen from "./AnswerScreen";
import { Heading } from "@chakra-ui/react";

const AllRoutes = () => {
   return (
      <Routes>
         <Route path="/formgeneration" element={<FormGenerationScreen />} />
         <Route path="/answer" element={<AnswerScreen />} />
         <Route
            path="/"
            element={
               <div style={{ height: "100vh" }}>
                  <AnswerScreen/>
               </div>
            }
         />
      </Routes>
   );
};

export default AllRoutes;
