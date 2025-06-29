'use server'

import {Redis} from "ioredis"
import {randomUUID} from "crypto"
import { timeStamp } from "console"


const redis = new Redis("redis://localhost:6379" , {
    password: "password"
})

export const EnqueueJob = async (data : string) =>{
    const jobId = randomUUID()
    const job = {
        id : jobId,
        data,
        timeStamp : new Date().toISOString(),
        status : "pending"
    }
    await redis.hset(`job:${jobId}`, job)

    await redis.lpush("jobs" , JSON.stringify(job))
    return {
        jobId
    }
}