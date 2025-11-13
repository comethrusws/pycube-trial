"use client"

import React from "react"
import { X, Mail, Lock } from "lucide-react"
import Link from "next/link"

interface TrialModalProps {
  isOpen: boolean
  onClose: () => void
  featureName?: string
}

export default function TrialModal({ isOpen, onClose, featureName = "this feature" }: TrialModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-in fade-in-0 duration-300">
        {/* Close button */}

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#001f3f]/20 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#001f3f]" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Trial Version - Feature Locked
          </h2>
          
          <p className="text-gray-600 mb-6">
            You're currently using the trial version of Pycube™. To unlock {featureName} and access all features, please contact our billing team.
          </p>

          {/* Contact info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-[#001f3f]">
              <Mail className="w-4 h-4" />
              <span className="font-medium">admin@pycube.com</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Our sales team will help you upgrade to unlock all features
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Link href="/dashboard">
            <button
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Continue with Trial
            </button>
            </Link>
            <a
              href="mailto:admin@pycube.com?subject=Pycube Trial Upgrade Request"
              className="flex-1 px-4 py-2 bg-[#003d5c] hover:bg-[#001a36] text-white rounded-lg transition-colors text-center"
            >
              Contact Billing
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}