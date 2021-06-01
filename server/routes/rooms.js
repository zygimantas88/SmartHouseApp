const { Router } = require('express');
const {
    getRooms,
    postRoom,
    updateRoom,
    deleteRoom
} =require('../controllers/rooms')

const router = Router();

router.get('/', getRooms);

router.post('/', postRoom);

router.put('/:id', updateRoom);

router.delete('/:id', deleteRoom)

module.exports = router;

