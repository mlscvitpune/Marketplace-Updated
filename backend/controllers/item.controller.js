import Item from "../models/item.model.js";

const createItem = async (req, res) => {
  // console.log(req.body);
  try {
    const item = new Item({
      username: req.body.username,
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      quantity: req.body.quantity,
      description: req.body.description,
      images: req.body.images,
    });
    const check = await item.save();
    console.log(check);
    if(check)
      return res.status(201).json({ item });
    else
      return res.status(400).json({ error: "Error adding item" });
  } catch (error) {
    if (error.code === 11000) {
      console.log("item already exists");
      return res.status(402).json({ error: "Item already exists!" });
    } else {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  }
};

const getAllItems = async (req, res) => {
  if (!req.body.userprofile) {
    try {
      const items = await Item.find({}).exec();
      res.status(200).json({ items });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    try {
      const items = await Item.find({
        username: req.body.username,
      });
      res.status(200).json({ items });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
};

const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json({ item });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ item });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Item.deleteOne({
      _id: id,
    });
    console.log(result);
    if (result.deletedCount === 1)
      res.status(200).json({ message: "Item deleted" });
    else res.status(404).json({ message: error.message });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { createItem, getAllItems, getItem, updateItem, deleteItem };
