import { useEffect, useState } from 'react'

export default function CookieAlert() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Cookie management functions
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
      return ''
    }

    const setCookie = (name, value, days) => {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value}${expires}; path=/`
    }

    // Check if cookie already exists
    if (!getCookie('acceptCookies')) {
      // Show alert after a small delay
      setTimeout(() => {
        setShow(true)
      }, 500)
    }

  }, [])

  const handleAccept = () => {
    const setCookie = (name, value, days) => {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value}${expires}; path=/`
    }

    setCookie('acceptCookies', 'true', 365)
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookiealert shadow-lg show">
      <p className="mb-4">We use cookies for the best experience on our website, for social media features and to anal
        traffic. accepting
        you agree to our use of cookies. Read <a href="#" target="_blank"> Cookies Policy.</a></p>
      <button className="btn btn-primary btn-sm acceptcookies" type="button" aria-label="Close" onClick={handleAccept}>Accept</button>
    </div>
  )
}