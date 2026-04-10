export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f2744" />
        </linearGradient>
      </defs>
      {/* Casa principal */}
      <path 
        d="M24 6L6 20V42H18V30C18 28.9 18.9 28 20 28H28C29.1 28 30 28.9 30 30V42H42V20L24 6Z" 
        fill="url(#logoGradient)"
      />
      {/* Techo highlight */}
      <path 
        d="M24 6L6 20H12L24 10L36 20H42L24 6Z" 
        fill="#2a4a6f"
      />
      {/* Llave estilizada - simbolo de servicios */}
      <path 
        d="M24 16C21.8 16 20 17.8 20 20C20 21.5 20.8 22.8 22 23.5V26H26V23.5C27.2 22.8 28 21.5 28 20C28 17.8 26.2 16 24 16Z" 
        fill="#f97316"
      />
      <rect x="22" y="25" width="4" height="2" rx="0.5" fill="#f97316" />
    </svg>
  )
}

export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="markGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f2744" />
        </linearGradient>
        <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Fondo con esquinas redondeadas */}
      <rect width="40" height="40" rx="10" fill="url(#markGradient)" />
      {/* Efecto de brillo sutil en la parte superior */}
      <rect width="40" height="20" rx="10" fill="white" fillOpacity="0.08" />
      {/* Casa simplificada */}
      <path 
        d="M10 28V19L20 11L30 19V28C30 28.55 29.55 29 29 29H24V23C24 22.45 23.55 22 23 22H17C16.45 22 16 22.45 16 23V29H11C10.45 29 10 28.55 10 28Z" 
        fill="white"
      />
      {/* Punto naranja - representa servicio activo */}
      <circle cx="20" cy="17" r="2.5" fill="#f97316" />
      {/* Efecto de brillo en el punto */}
      <circle cx="19.2" cy="16.2" r="0.8" fill="white" fillOpacity="0.5" />
    </svg>
  )
}
