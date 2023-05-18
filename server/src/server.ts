/* eslint-disable prettier/prettier */
import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoute } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true
})

app.register(authRoute)
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('SERVER HTTP STARTED! http://localhost:3333')
  })
