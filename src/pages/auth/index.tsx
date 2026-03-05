import { createContext, useContext, useState, type ReactNode } from "react"
import Login from "./Login"
import Otp from "./Otp"
import ForgotPassword from "./forgot-password"

interface AuthContextType {
  showOtp: boolean
  setShowOtp: (show: boolean) => void
  showForgotPassword: boolean
  setShowForgotPassword: (show: boolean) => void
  userEmail: string
  setUserEmail: (email: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [showOtp, setShowOtp] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [userEmail, setUserEmail] = useState("")

  return (
    <AuthContext.Provider value={{ showOtp, setShowOtp, showForgotPassword, setShowForgotPassword, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function AuthPage() {
  const { showOtp, showForgotPassword } = useAuth()

  if (showForgotPassword) {
    return <ForgotPassword />
  }
  
  return showOtp ? <Otp /> : <Login />
}