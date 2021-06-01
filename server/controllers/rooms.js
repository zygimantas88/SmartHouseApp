const RoomModel = require('../models/roomModel')

const getRooms = async (req, res) => {
    try {
        const roomsFromDB = await RoomModel.find()
        res.status(200).json({ rooms: roomsFromDB })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

const postRoom = async (req, res) => {
    const { name } = req.body;
    try {
        const newRoom = await RoomModel.create({ name })
        res.status(200).json({ rooms: newRoom.name })
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
};

const updateRoom = (req, res) => {
    res.send('Atnaujinsiu kambari')
};

const deleteRoom = (req, res) => {
    res.send('Istrinsiu viena kambari')
};

module.exports = {
    getRooms,
    postRoom,
    updateRoom,
    deleteRoom
}