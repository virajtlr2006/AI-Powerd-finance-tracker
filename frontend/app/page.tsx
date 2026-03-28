'use client'

import React from 'react'
import { useUser } from '@clerk/nextjs'

const Page = () => {
  const { isSignedIn, user } = useUser()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to AI Powered Personal Finance Tracker
        </h1>
        
        {isSignedIn ? (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-xl text-green-800">
              Hello, {user.firstName || user.emailAddresses[0].emailAddress}! 👋
            </p>
            <p className="text-gray-600 mt-2">
              You're successfully signed in. Ready to track your finances!
            </p>
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-xl text-gray-600 mb-6">
              Sign up or sign in to start tracking your finances with AI-powered insights
            </p>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Track Expenses</h3>
            <p className="text-gray-600">Monitor your spending across multiple accounts</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
            <p className="text-gray-600">Get smart recommendations powered by AI</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Budget Goals</h3>
            <p className="text-gray-600">Set and achieve your financial goals</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page