import express, { Express } from 'express'
import morgan from 'morgan'
import routes from './routes'

const router: Express = express()

/** logging */
router.use(morgan('dev'))

/** parsing */
router.use(express.urlencoded({ extended: false }))
router.use(express.json())

router.use((req, res, next) => {
    // CORS
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization')

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST')
        return res.status(200).json({})
    }
    next()
})

/** routes */
router.use('/', routes)

/** error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

export default router