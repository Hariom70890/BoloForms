import React from "react";
import CategorizeQuestion from "./CategorizeQuestion";
import ComprehensiveForm from "./ComprehensiveFormQuestion";
import ClozeQuestion from "./ClozeQuestion";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const FormGenerationScreen = () => {
   return (
      <div style={{ maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
         <Tabs isFitted variant="enclosed">
            <TabList mb="1em" fontSize="lg" fontWeight="bold" borderBottom={"3px solid #FFAB91 "}>
               <Tab
                  _selected={{
                     fontWeight: "bold",
                     fontSize: "lg",
                     bg: "#FFAB91",
                  }}
               >
                  Category Form
               </Tab>
               <Tab
                  _selected={{
                     fontWeight: "bold",
                     fontSize: "lg",
                     bg: "#FFAB91",
                  }}
               >
                  Comprehensive Form
               </Tab>
               <Tab
                  _selected={{
                     fontWeight: "bold",
                     fontSize: "lg",
                     bg: "#FFAB91",
                  }}
               >
                  Cloze Form
               </Tab>
            </TabList>
            <TabPanels>
               <TabPanel>
                  <CategorizeQuestion />
               </TabPanel>
               <TabPanel>
                  <ComprehensiveForm />
               </TabPanel>
               <TabPanel>
                  <ClozeQuestion />
               </TabPanel>
            </TabPanels>
         </Tabs>
      </div>
   );
};

export default FormGenerationScreen;
