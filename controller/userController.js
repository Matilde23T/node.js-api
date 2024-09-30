import userModel from "../models/userModel.js"; 

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const newUser = new userModel({  
      firstName,
      lastName,
      email
    });

    // Salva le informazioni utente
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message:' the email entered already exists' });
    }
    res.status(500).json({ message: 'error in user creation', error });
  }
};

// Riporta le info utente
export const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);  
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'error reading user data', error });
  }
};

// Modifiche utente
export const UpdateUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(  
      req.params.id,
      { firstName, lastName, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'the email entered already exists' });
    }
    res.status(500).json({ message: 'error change user data' });
  }
};

// Elimina dati utente
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);  

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error in deleting user data' });
  }
};


