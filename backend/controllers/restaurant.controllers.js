import Restaurant from '../models/restaurant.model.js';

export const createRestaurant = async (req, res) => {
    try {
        const { name, description, address, minOrderValue, deliveryTime, cuisine, image } = req.body;
        const ownerId = req.user._id;

        const existingRestaurant = await Restaurant.findOne({ owner: ownerId });
        if (existingRestaurant) {
            return res.status(400).json({ error: "You already have a restaurant registered" });
        }

        const newRestaurant = new Restaurant({
            owner: ownerId,
            name,
            description,
            address,
            cuisine,
            image, // Assuming URL handling or Cloudinary logic is handled before or passed as URL
            deliveryTime
        });

        await newRestaurant.save();
        res.status(201).json(newRestaurant);

    } catch (error) {
        console.log("Error in createRestaurant", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ isOpen: true });
        res.status(200).json(restaurants);
    } catch (error) {
        console.log("Error in getRestaurants", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });
        res.status(200).json(restaurant);
    } catch (error) {
        console.log("Error in getRestaurantById", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const addMenuItem = async (req, res) => {
    try {
        const { restaurantId, name, description, price, image, category, isAvailable } = req.body;

        // Ensure the user owns this restaurant
        const restaurant = await Restaurant.findOne({ _id: restaurantId, owner: req.user._id });
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant not found or unauthorized" });
        }

        const newItem = {
            name,
            description,
            price,
            image,
            category,
            isAvailable: isAvailable !== undefined ? isAvailable : true
        };

        restaurant.menu.push(newItem);
        await restaurant.save();

        res.status(201).json(restaurant);

    } catch (error) {
        console.log("Error in addMenuItem", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
