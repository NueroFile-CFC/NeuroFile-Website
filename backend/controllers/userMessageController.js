import Messages from '../models/userMessagesModel.js'
import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const ai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
export const postMessages = async (req, res, next) => {
    try {
        const { message } = req.body
        const userMessage = await Messages.create({ message })
        res.locals.userMessage = userMessage
        return next()
    } catch (error) {
        return next({
            log: `Error: ${error}`,
            status: 500,
            message: { err: 'Message post failed' }
        })
    }
}

export const AIresponse = async (req, res, next) => {
    try {
        const { userMessage } = res.locals
        const response = await ai.chat.completions.create({
            model: 'gpt-4o',
            messages: [{
                role: 'assistant',
                content: `You are an assistant for our vscode extension called NeuroFile. It is a vscode extension that allows users to get a summary of a file, function, folder, or entire codebase. It also generates psuedocode and time complexity for selected code. Give a response to this users question "${userMessage}`
            }]
        })
        console.log(response.choices[0].message)
        res.locals.airesponse = response.choices[0].message.content
        return next()
    } catch (error) {
        return next({
            log: `Error: ${error}`,
            status: 500,
            message: { err: 'AI response failed' }
        })
    }
}