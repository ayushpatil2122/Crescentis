"use client"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const canvasRef = useRef<any>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const starsRef = useRef<any>([])
  const meteorsRef = useRef<any>([])
  const floatingElementsRef = useRef<any>([])
  const lastMeteorTime = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const generateStars = () => {
      const starCount = Math.floor((width * height) / 800) // Increased star density
      starsRef.current = []

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.8, // Slightly larger stars
          opacity: Math.random(),
          blinking: Math.random() > 0.6, // More stars blink
          blinkRate: Math.random() * 0.02 + 0.005,
        })
      }
    }

    // Create floating elements
    const generateFloatingElements = () => {
      floatingElementsRef.current = []
      const numElements = 12

      for (let i = 0; i < numElements; i++) {
        floatingElementsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.2 + 0.1,
          shape: Math.random() > 0.5 ? "circle" : "square",
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          color: Math.random() > 0.5 ? "rgba(100, 149, 237, opacity)" : "rgba(138, 43, 226, opacity)",
        })
      }
    }

    generateStars()
    generateFloatingElements()
    meteorsRef.current = []

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      generateStars()
      generateFloatingElements()
    }

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })

      // Occasionally create a meteor near the mouse position
      if (Math.random() > 0.98 && time - lastMeteorTime.current > 30) {
        createMeteor(e.clientX, e.clientY)
        lastMeteorTime.current = time
      }
    }

    // Create meteor function
    const createMeteor = (originX?: number, originY?: number) => {
      const startX = originX || Math.random() * width
      const startY = originY ? originY - 50 - Math.random() * 100 : -50
      const angle = Math.PI / 4 + (Math.random() * Math.PI) / 4
      const length = 150 + Math.random() * 200
      const speed = 5 + Math.random() * 15

      meteorsRef.current.push({
        x: startX,
        y: startY,
        angle,
        length,
        speed,
        opacity: 0.7 + Math.random() * 0.3,
        width: 1 + Math.random() * 3,
        alive: true,
      })
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    const drawStars = () => {
      ctx.save()

      starsRef.current.forEach((star: any) => {
        let opacity = star.opacity

        if (star.blinking) {
          opacity = star.opacity * (0.5 + 0.5 * Math.sin(time * star.blinkRate))
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      })

      ctx.restore()
    }

    const drawMoon = () => {
      ctx.save()

      const moonRadius = Math.min(width, height) * 0.15
      const moonX = width * 0.85
      const moonY = height * 0.2

      const moonGradient = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonRadius)

      moonGradient.addColorStop(0, "rgba(240, 240, 240, 1)")
      moonGradient.addColorStop(0.5, "rgba(220, 220, 220, 1)")
      moonGradient.addColorStop(1, "rgba(180, 180, 200, 1)")

      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2)
      ctx.fillStyle = moonGradient
      ctx.fill()

      const craters = [
        { x: moonX - moonRadius * 0.3, y: moonY - moonRadius * 0.2, r: moonRadius * 0.1 },
        { x: moonX + moonRadius * 0.25, y: moonY + moonRadius * 0.3, r: moonRadius * 0.15 },
        { x: moonX - moonRadius * 0.1, y: moonY + moonRadius * 0.15, r: moonRadius * 0.08 },
      ]

      craters.forEach((crater) => {
        ctx.beginPath()
        ctx.arc(crater.x, crater.y, crater.r, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(150, 150, 170, 0.15)"
        ctx.fill()
      })

      ctx.beginPath()
      ctx.arc(moonX, moonY, moonRadius * 1.2, 0, Math.PI * 2)
      const glowGradient = ctx.createRadialGradient(moonX, moonY, moonRadius, moonX, moonY, moonRadius * 1.2)
      glowGradient.addColorStop(0, "rgba(210, 230, 255, 0.2)")
      glowGradient.addColorStop(1, "rgba(210, 230, 255, 0)")
      ctx.fillStyle = glowGradient
      ctx.fill()

      ctx.restore()
    }

    // Add subtle nebula effect
    const drawNebula = () => {
      ctx.save()

      // Create several nebula clouds
      const nebulaPoints = [
        { x: width * 0.2, y: height * 0.3, radius: Math.min(width, height) * 0.3, color: "rgba(66, 99, 235, 0.05)" },
        { x: width * 0.7, y: height * 0.6, radius: Math.min(width, height) * 0.25, color: "rgba(138, 43, 226, 0.04)" },
        { x: width * 0.4, y: height * 0.8, radius: Math.min(width, height) * 0.2, color: "rgba(30, 144, 255, 0.03)" },
      ]

      nebulaPoints.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.radius)

        gradient.addColorStop(0, nebula.color.replace(/[^,]+\)/, "0.1)"))
        gradient.addColorStop(0.5, nebula.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      ctx.restore()
    }

    // Draw meteors function
    const drawMeteors = () => {
      ctx.save()

      meteorsRef.current = meteorsRef.current.filter((meteor: any) => meteor.alive)

      meteorsRef.current.forEach((meteor: any) => {
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length

        // Create gradient for the meteor trail
        const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`)
        gradient.addColorStop(0.3, `rgba(100, 149, 237, ${meteor.opacity * 0.6})`)
        gradient.addColorStop(1, `rgba(100, 149, 237, 0)`)

        ctx.beginPath()
        ctx.moveTo(meteor.x, meteor.y)
        ctx.lineTo(tailX, tailY)
        ctx.lineWidth = meteor.width
        ctx.strokeStyle = gradient
        ctx.stroke()

        // Add a glowing head
        ctx.beginPath()
        ctx.arc(meteor.x, meteor.y, meteor.width + 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`
        ctx.fill()

        // Move the meteor
        meteor.x += Math.cos(meteor.angle) * meteor.speed
        meteor.y += Math.sin(meteor.angle) * meteor.speed

        // Check if meteor is out of bounds
        if (
          meteor.x > width + meteor.length ||
          meteor.x < -meteor.length ||
          meteor.y > height + meteor.length ||
          meteor.y < -meteor.length
        ) {
          meteor.alive = false
        }
      })

      ctx.restore()
    }

    // Draw floating elements
    const drawFloatingElements = () => {
      ctx.save()

      floatingElementsRef.current.forEach((element: any) => {
        ctx.save()

        // Update position
        element.x += element.speedX
        element.y += element.speedY
        element.rotation += element.rotationSpeed

        // Wrap around screen edges
        if (element.x < -element.size) element.x = width + element.size
        if (element.x > width + element.size) element.x = -element.size
        if (element.y < -element.size) element.y = height + element.size
        if (element.y > height + element.size) element.y = -element.size

        // Draw the element
        ctx.translate(element.x, element.y)
        ctx.rotate(element.rotation)

        const currentColor = element.color.replace("opacity", element.opacity)

        if (element.shape === "circle") {
          ctx.beginPath()
          ctx.arc(0, 0, element.size, 0, Math.PI * 2)
          ctx.fillStyle = currentColor
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.rect(-element.size / 2, -element.size / 2, element.size, element.size)
          ctx.fillStyle = currentColor
          ctx.fill()
        }

        ctx.restore()
      })

      ctx.restore()
    }

    // Occasionally create a meteor
    const checkCreateMeteor = () => {
      if (Math.random() > 0.992) {
        createMeteor()
      }
    }

    // Interactive particles when hovering over buttons
    const drawMouseInteraction = () => {
      if (mousePosition.x && mousePosition.y) {
        ctx.save()

        // Draw subtle glow around cursor
        const gradient = ctx.createRadialGradient(
          mousePosition.x,
          mousePosition.y,
          0,
          mousePosition.x,
          mousePosition.y,
          100,
        )

        gradient.addColorStop(0, "rgba(100, 149, 237, 0.05)")
        gradient.addColorStop(1, "rgba(100, 149, 237, 0)")

        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 100, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.restore()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const bgGradient = ctx.createLinearGradient(0, 0, 0, height)
      bgGradient.addColorStop(0, "#000814")
      bgGradient.addColorStop(0.5, "#001233")
      bgGradient.addColorStop(1, "#001440")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, width, height)

      drawNebula()
      drawStars()
      drawFloatingElements()
      drawMoon()
      drawMeteors()
      drawMouseInteraction()
      checkCreateMeteor()

      time += 1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Add hover effect to buttons
  const [demoButtonHovered, setDemoButtonHovered] = useState(false)
  const [startButtonHovered, setStartButtonHovered] = useState(false)

  // Animation for the stats counters
  const [stats, setStats] = useState({
    placementRate: 0,
    companies: 0,
    placementTime: 0,
  })

  useEffect(() => {
    // Animate the stats when component mounts
    const duration = 2000 // 2 seconds
    const interval = 20 // Update every 20ms
    const steps = duration / interval

    const placementRateIncrement = 98 / steps
    const companiesIncrement = 15000 / steps
    const placementTimeIncrement = 48 / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++

      setStats({
        placementRate: Math.min(98, Math.ceil(placementRateIncrement * currentStep)),
        companies: Math.min(15000, Math.ceil(companiesIncrement * currentStep)),
        placementTime: Math.min(48, Math.ceil(placementTimeIncrement * currentStep)),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <main className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-4">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-100 via-blue-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-xl">
          Crescentis
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-xl text-blue-100">
          The most powerful AI ever deployed in talent acquisition
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            className={`px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg ${startButtonHovered ? "shadow-blue-500/50" : "shadow-blue-500/20"} transition-all duration-300 flex items-center justify-center gap-2 group`}
            onMouseEnter={() => setStartButtonHovered(true)}
            onMouseLeave={() => setStartButtonHovered(false)}
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${startButtonHovered ? "translate-x-2" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className={`px-8 py-4 rounded-full border border-blue-300/30 bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 ${demoButtonHovered ? "shadow-lg shadow-blue-500/20" : ""}`}
            onMouseEnter={() => setDemoButtonHovered(true)}
            onMouseLeave={() => setDemoButtonHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform duration-300 ${demoButtonHovered ? "scale-125" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Watch Demo</span>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full px-4">
          <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-4xl font-bold text-blue-300">{stats.placementRate}%</h3>
            <p className="text-blue-100 mt-2">Placement Success Rate</p>
          </div>
          <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-4xl font-bold text-blue-300">{stats.companies.toLocaleString()}+</h3>
            <p className="text-blue-100 mt-2">Companies Trust Us</p>
          </div>
          <div className="bg-blue-900/20 backdrop-blur-md p-6 rounded-xl border border-blue-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <h3 className="text-4xl font-bold text-blue-300">{stats.placementTime}hrs</h3>
            <p className="text-blue-100 mt-2">Average Placement Time</p>
          </div>
        </div>
      </main>
    </div>
  )
}
