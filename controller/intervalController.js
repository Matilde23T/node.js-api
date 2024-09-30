import Interval from '../models/intervalModel.js'; 

// Creare un nuovo intervallo
export const createInterval = async (req, res) => {  
  const { startDate, endDate, user } = req.body;

  try {
    const newInterval = new Interval({  
      startDate,
      endDate,
      user
    });

    // Salva 
    await newInterval.save();
    res.status(201).json(newInterval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Aggiornare 
export const updateInterval = async (req, res) => { 
  const { id } = req.params;
  const { startDate, endDate, user } = req.body;

  try {
    const updatedInterval = await Interval.findByIdAndUpdate( 
      id,
      { startDate, endDate, user },
      { new: true } 
    );

    if (!updatedInterval) {
      return res.status(404).json({ message: 'Intervallo non trovato' });
    }

    res.status(200).json(updatedInterval);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancellare un intervallo
export const deleteInterval = async (req, res) => {  
  const { id } = req.params;

  try {
    const deletedInterval = await Interval.findByIdAndDelete(id);  

    if (!deletedInterval) {
      return res.status(404).json({ message: 'Interval not found' });
    }

    res.status(200).json({ message: 'interval succesfully deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filtraggio tramite i filtri 
export const getAllIntervals = async (req, res) => {  
    try {
      const { startDate, endDate, targetId } = req.query;
  
      const filter = {};
  
      // Filtrare per date di inizio e fine
      if (startDate) {
        filter.startDate = { $gte: new Date(startDate) };
      }
      if (endDate) {
        filter.endDate = { $lte: new Date(endDate) }; 
      }
  
      // Filtrare per obiettivi specifici
      if (targetId) {
        filter.targets = targetId; 
      }
  
      const intervals = await Interval.find(filter).populate('targets'); 
  
      res.status(200).json(intervals);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};



