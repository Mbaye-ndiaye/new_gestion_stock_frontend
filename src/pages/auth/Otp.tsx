import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function Otp() {
    const navigate = useNavigate()
    const [otpValues, setOtpValues] = useState(["", "", "", ""])
    const { userEmail, setShowOtp } = useAuth()

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return
        
        const newOtpValues = [...otpValues]
        newOtpValues[index] = value
        setOtpValues(newOtpValues)

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`)
            if (nextInput) {
                nextInput.focus()
            }
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        // Handle backspace to go to previous input
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`)
            if (prevInput) {
                prevInput.focus()
            }
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const otpCode = otpValues.join("")
        
        if (otpCode.length === 4) {
            // Navigate to dashboard after successful OTP verification
            navigate("/dashboard")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-6xl w-full h-[650px] bg-white shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-1/2 h-full relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${ImageLogin})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                        <div className="relative z-10 p-8 flex items-center justify-center h-full min-h-[500px]">
                            <div className="text-center text-white">
                                <div className="mb-8">
                                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <h1 className="text-4xl font-bold mb-4">LOGO</h1>
                                    <p className="text-lg opacity-90">Vérification de votre identité</p>
                                </div>
                                <div className="space-y-4 text-sm opacity-80">
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Sécurité renforcée</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Vérification instantanée</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Accès sécurisé</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="md:w-1/2 p-8 md:px-12 md:py-17">
                        <div className="mx-auto flex flex-col justify-center items-center text-center h-full">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#111827] mb-2">E-mail de vérification</h2>
                                <p className="text-[#020617]">Un code a été envoyé à votre adresse e-mail enregistrée.</p>
                            </div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-[#6B7280] mb-1">La mail d'authentification est le suivant</p>
                                <p className="font-medium text-[#111827]">{userEmail}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-[#111827] mb-4">
                                        Entrez le code ici:
                                    </label>
                                    <div className="flex space-x-3 justify-center">
                                        {otpValues.map((value, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                                className="w-16 h-16 text-center text-2xl font-bold border border-[#083344] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                maxLength={1}
                                                pattern="[0-9]"
                                                inputMode="numeric"
                                                autoComplete="one-time-code"
                                                required
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[#164E63] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-[1.02]"
                                >
                                    Continuer
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-[#6B7280]">
                                    Vous n'avez pas reçu le code?{" "}
                                    <button 
                                        type="button"
                                        className="cursor-pointer text-[#164E63] hover:underline font-medium"
                                        onClick={() => {
                                            // Handle resend logic here
                                            console.log("Resend OTP")
                                        }}
                                    >
                                        Renvoyer
                                    </button>
                                </p>
                            </div>

                            <div className="mt-4 text-center">
                                <button 
                                    type="button"
                                    className="cursor-pointer text-sm text-[#6B7280] hover:text-[#111827]"
                                    onClick={() => setShowOtp(false)}
                                >
                                    ← Retour à la connexion
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}