'use client'

import { useCurrentUser } from '@/hooks/useHook'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Transaction } from '../../../../../backend/db/schema'

const page = () => {

    const { email, isLoaded } = useCurrentUser()

    const [alltransactions, setalltransactions] = useState<Transaction[] | null>(null)

    const { acc_no } = useParams()
    useEffect(() => {
        if (isLoaded && email) {
            getAllTransaction()
        } else {
            return
        }
    }, [isLoaded, email])


    const getAllTransaction = async () => {
        const response = await axios.get(`http://localhost:8080/api/transactions/${acc_no}`)
        // console.log(response.data.transactions)
        setalltransactions(response.data.transactions)
    }
    return (
        <div>
            {alltransactions === null ? (
                <p>Loading transactions...</p>
            ) : alltransactions.length > 0 ? (
                alltransactions.map((transaction) => (
                    <div key={transaction.trans_id} className='border-2 border-gray-300 rounded-md p-4 mb-4'>
                        <p><strong>Amount:</strong> {transaction.amount}</p>
                        <p><strong>Date:</strong> {transaction.date}</p>
                        <p><strong>Description:</strong> {transaction.description}</p>
                        <p><strong>Category:</strong> {transaction.category}</p>
                    </div>
                ))
            ) : (
                <p>No transactions found.</p>
            )}
        </div>
    )
}

export default page