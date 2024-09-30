import Target from "../models/targetModel.js";
import Interval from "../models/intervalModel.js";

// Creare un nuovo obiettivo
export const createTarget = async (req, res) => {
    try {
        const { description } = req.body;
        const { intervalId } = req.params;

        const foundInterval = await Interval.findById(intervalId);
        if (!foundInterval) {
            return res.status(404).json({ message: 'Interval not found' });
        }

        const newTarget = new Target({
            description,
            interval: intervalId
        });

        const savedTarget = await newTarget.save();

        foundInterval.targets.push(savedTarget._id);
        await foundInterval.save();

        return res.status(201).json(savedTarget);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating target' });
    }
};

// Aggiornare un obiettivo
export const updateTarget = async (req, res) => {
    try {
        const { targetId } = req.params;
        const { description } = req.body;

        const updatedTarget = await Target.findByIdAndUpdate(
            targetId,
            { description },
            { new: true }
        );

        if (!updatedTarget) {
            return res.status(404).json({ message: 'Target not found' });
        }

        return res.status(200).json(updatedTarget);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating target' });
    }
};

// Eliminare un obiettivo
export const deleteTarget = async (req, res) => {
    try {
        const { targetId, intervalId } = req.params;

        const deletedTarget = await Target.findByIdAndDelete(targetId);

        if (!deletedTarget) {
            return res.status(404).json({ message: 'Target not found' });
        }

        const foundInterval = await Interval.findById(intervalId);
        if (foundInterval) {
            foundInterval.targets.pull(targetId);
            await foundInterval.save();
        }

        return res.status(200).json({ message: 'Target successfully deleted' });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting target' });
    }
};
