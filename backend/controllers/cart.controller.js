import User from "../models/user.model.js";
import Item from "../models/item.model.js";

const addToCart = async (req, res) => {
  try {
    const id = req.body.data.id;
    const username = req.body.data.username;
    console.log(id, username);
    const user = await User.findOne({ name: username });

    if (!user) {
      return res.status(404).json({
        message: "Failed to add item from the cart, Please try again!",
      });
    }

    if (user.cart.includes(id)) {
      return res.status(404).json({ message: "Item already in cart" });
    }

    user.cart.push(id);

    await user.save();
    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ name: username });
    console.log(user);
    const cart = user.cart;
    const items = [];
    for (let i = 0; i < cart.length; i++) {
      const item = await Item.findOne({ _id: cart[i] });
      items.push(item);
    }
    res.status(200).json({ items: items });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const removeFromCart = async (req, res) => {
    try {
    // console.log(req.body);
    const id = req.body.id;
    const username = req.body.username;
    // console.log(id, username);
    const user = await User.findOne({ name: username });

    if (!user) {
      res
        .status(404)
        .json({
          message: "Failed to delete item from the cart, Please try again!",
        });
    }
    console.log("user = " + user);
    const index = user.cart.indexOf(id);
    if (index > -1) {
      user.cart.splice(index, 1);
    }
    console.log(user.cart);
    await user.save();
    res.status(200).json({ message: "Item deleted from cart" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export { addToCart, getCart, removeFromCart };