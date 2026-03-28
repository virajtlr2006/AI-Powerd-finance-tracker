import express from "express"
import { Router } from "express"
import { AccountTable } from "../db/schema.ts"
import { db } from "../index.ts"
import type { Request, Response } from 'express';
import z  from "zod";


const router:Router = express.Router()


router.get("/accounts",async(req: Request,res: Response)=>{
    // 📧 Define email validation schema
    const emailSchema = z.object({
        email: z.string(),
    })
    
    // ✔️ Parse and validate email from request body
    const parseEmail = emailSchema.safeParse(req.body)
    if (!parseEmail.success) {
        // ❌ Return error if validation fails
        res.status(400).json({ error: "Invalid email format" })
        return
    }

    // 🔓 Extract email from validated data
    const {email} = parseEmail.data

    // 📋 Fetch all accounts from database
    const allAccounts = await db.select().from(AccountTable)
    // console.log(allAccounts)
    // 🔍 Filter accounts matching the provided email
    const UserAccounts = allAccounts.filter((account) => account.email === email)
    // console.log(UserAccounts)
    // ✅ Return matching accounts with success status
    res.status(200).json(
        {"allAccounts":UserAccounts}
    )
})

export default router