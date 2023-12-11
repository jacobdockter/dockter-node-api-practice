import http from 'http'
import router from './router'
import { connectToDatabase } from "./services/database.service"

connectToDatabase().then(() => {
    const httpServer = http.createServer(router)
    const PORT: any = process.env.NODE_SERVER_PORT || 3000

    httpServer.listen(PORT, () => {
        console.log(`Server running on port ${PORT}...`)
    })
}).catch((error: Error) => {
    console.error("Database connection failed: ", error)
    process.exit()
})