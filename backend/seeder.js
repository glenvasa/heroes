import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import characters from './data/characters.js'

import Character from './models/characterModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // await b/c returns a promise
        // this completely wipes out db before we import data
        await Character.deleteMany()
    
        await Character.insertMany(characters)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // await b/c returns a promise
        // this completely wipes out db 
        await Character.deleteMany()
       
        console.log('Data Destroyed'.red)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}