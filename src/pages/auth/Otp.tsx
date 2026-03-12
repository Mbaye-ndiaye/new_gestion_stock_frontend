import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function Otp() {
    const navigate = useNavigate()
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]) // 6 champs maintenant
    const { userEmail, setShowOtp } = useAuth()

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return
        
        const newOtpValues = [...otpValues]
        newOtpValues[index] = value
        setOtpValues(newOtpValues)

        // Auto-focus next input
        if (value && index < 5) { // Changé de 3 à 5
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
        
        if (otpCode.length === 6) { 
            navigate("/dashboard")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4 py-8">
            <div className="w-full max-w-6xl bg-[var(--color-primary-foreground)] shadow-lg overflow-hidden rounded-2xl">
                <div className="flex flex-col md:flex-row h-auto md:h-[650px]">
                    {/* Image Section - Masquée sur mobile */}
                    <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${ImageLogin})` }}
                        >
                            <div className="absolute inset-0 bg-black/40"></div>
                        </div>
                        <div className="relative z-10 p-8 flex items-center justify-center h-full">
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

                    {/* Form Section - Prend toute la largeur sur mobile */}
                    <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
                        <div className="max-w-sm mx-auto flex flex-col justify-center items-center text-center h-full">
                            {/* Logo pour mobile */}
                            <div className="md:hidden flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[var(--color-ring)] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] mb-2">E-mail de vérification</h2>
                                <p className="text-[var(--color-muted-foreground)] text-sm sm:text-base">Un code a été envoyé à votre adresse e-mail enregistrée.</p>
                            </div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-lg w-full">
                                <p className="text-sm text-[var(--color-muted)] mb-1">La mail d'authentification est le suivant</p>
                                <p className="font-medium text-[var(--color-foreground)] text-sm sm:text-base break-words">{userEmail}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6 w-full">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-4">
                                        Entrez le code ici:
                                    </label>
                                    <div className="flex  gap-2 sm:gap-3 justify-center max-w-sm mx-auto">
                                        {otpValues.map((value, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                value={value}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                               className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-center text-[var(--color-primary)] text-base sm:text-lg md:text-xl
                                                font-bold border border-[var(--color-border)] rounded-lg focus:ring-1 focus:ring-[var(--color-ring)] 
                                                focus:border-transparent outline-none transition-all"
                                                maxLength={1}
                                                pattern="[0-9]"
                                                inputMode="numeric"
                                                autoComplete="one-time-code"
                                                required
                                                placeholder="0"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[var(--color-ring)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-[var(--color-ring)] focus:ring-opacity-50 transition-all transform hover:scale-[1.02] text-sm sm:text-base"
                                >
                                    Continuer
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-[var(--color-muted)]">
                                    Vous n'avez pas reçu le code?{" "}
                                    <button 
                                        type="button"
                                        className="cursor-pointer text-[var(--color-ring)] hover:underline font-medium"
                                        onClick={() => {
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
                                    className="cursor-pointer text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
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