const Form = require("../models/Form");
const router = require("express").Router();

//CREATE
router.post("/", async (req, res) => {
  const newForm = new Form(req.body);
    console.log(newForm);
  try {
    const savedForm = await newForm.save();
    res.status(200).json(savedForm);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL
// router.get("/", async (req, res) => {
//   try {
//     const form = await form.find();
//     res.status(200).json(form);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
