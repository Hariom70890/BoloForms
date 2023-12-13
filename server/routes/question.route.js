const express = require("express");
const { ComprehensiveModel } = require("../models/comprehensive.model");
const { CategoryModel } = require("../models/categorize.model");
const { ClozeModel } = require("../models/cloze.model");

const questionRouter = express.Router();
// require("dotenv").config();

questionRouter.post("/comprehensive", async (req, res) => {
   const { para, questions, option, correctans } = req.body;
   try {
      const comprehensive = new ComprehensiveModel({
         para,
         questions,
         option,
         correctans,
      });
      await comprehensive.save();
      res.status(200).json({ msg: "New Question Has Added To Database" });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});

questionRouter.get("/", async (req, res) => {
   console.log("first");
   res.send("Hello");
});


questionRouter.post("/category", async (req, res) => {
   const { category, name } = req.body;
 
   try {
     // Save the category to the database using the Mongoose model
     const newCategory = new CategoryModel({ category, name });
     await newCategory.save();
 
     res.status(201).json({ message: "Category added successfully" });
   } catch (error) {
     console.error("Error adding category to the database", error);
     res.status(500).json({ error: "Internal server error" });
   }
 });

questionRouter.post("/category-and-items", async (req, res) => {
   const { category, items } = req.body;
 
   try {
     // Save category to the CategoryModel
     const newCategory = new CategoryModel({
       category: category,
     });
     await newCategory.save();
 
     // Save items to the ItemsModel
     const itemDocuments = items.map((item) => ({
       name: item.name,
       category: category,
     }));
     await ItemsModel.insertMany(itemDocuments);
 
     res.status(200).json({ msg: "Category and items added successfully" });
   } catch (error) {
     console.error("Error adding category and items to the database", error);
     res.status(400).json({ error: error.message });
   }
 });

questionRouter.post("/cloze", async (req, res) => {
   const { text, option, answer } = req.body;
   try {
      const cloze = new ClozeModel({
         text,
         option,
         answer,
      });
      await cloze.save();
      res.status(200).json({ msg: "New Question Has Added To Database" });
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
});
module.exports = { questionRouter };
