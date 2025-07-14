import mongoose from 'mongoose'

const userMessages = new mongoose.Schema({
    message: {type: String, required: true}
})

export default mongoose.model('Messages', userMessages)