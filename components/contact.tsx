'use client'

import React from "react"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ fullName: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-12 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-muted-foreground mb-8">Reach us for any enquiry</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
                >
                  Send
                </button>

              </div>
            </form>
          </div>

          {/* Illustration Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center relative">
              <img src="/contact.jpg" alt="Contact Illustration" className="w-78 h-78 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center relative"/>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-primary text-3xl">+</div>
              <div className="absolute bottom-4 right-8 text-primary text-2xl">+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
