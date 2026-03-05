import { useState } from "react"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { setShowForgotPassword } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Logique d'envoi d'email de réinitialisation
        setIsSubmitted(true)
    }

    const handleBackToLogin = () => {
        setShowForgotPassword(false)
    }

    if (isSubmitted) {
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h1 className="text-4xl font-bold mb-4">Email Envoyé</h1>
                                        <p className="text-lg opacity-90">Instructions envoyées avec succès</p>
                                    </div>
                                    <div className="space-y-4 text-sm opacity-80">
                                        <div className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Email envoyé</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vérifiez votre boîte de réception</span>
                                        </div>
                                        <div className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>Suivez les instructions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="md:w-1/2 p-8 md:px-12 md:py-17">
                            <div className="max-w-sm mx-auto flex flex-col h-full justify-center">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#111827] mb-2">Email envoyé!</h2>
                                    <p className="text-[#020617] mb-4">
                                        Un email de réinitialisation a été envoyé à <span className="font-medium">{email}</span>
                                    </p>
                                    <p className="text-sm text-[#6B7280]">
                                        Veuillez vérifier votre boîte de réception et suivre les instructions pour réinitialiser votre mot de passe.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={handleBackToLogin}
                                        className="cursor-pointer w-full bg-[#164E63] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-[1.02]"
                                    >
                                        Retour à la connexion
                                    </button>
                                    
                                    <div className="text-center">
                                        <p className="text-sm text-[#6B7280]">
                                            Vous n'avez pas reçu l'email?{" "}
                                            <button 
                                                type="button"
                                                className="cursor-pointer text-[#164E63] hover:underline font-medium"
                                                onClick={() => setIsSubmitted(false)}
                                            >
                                                Renvoyer
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h1 className="text-4xl font-bold mb-4">Mot de Passe Oublié</h1>
                                    <p className="text-lg opacity-90">Réinitialisez votre mot de passe facilement</p>
                                </div>
                                <div className="space-y-4 text-sm opacity-80">
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Sécurité garantie</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Rapide et simple</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Assistance 24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="md:w-1/2 p-8 md:px-12 md:py-17">
                        <div className="max-w-sm mx-auto flex flex-col h-full justify-center">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-[#111827] mb-2">Réinitialiser le mot de passe</h2>
                                <p className="text-[#020617]">
                                    Entrez votre adresse email et nous vous enverrons les instructions pour réinitialiser votre mot de passe.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                                        Adresse E-mail <b className="text-[#E03137]">*</b>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-2 py-2 border border-[#083344] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[#164E63] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-[1.02]"
                                >
                                    Envoyer les instructions
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button 
                                    type="button"
                                    className="cursor-pointer text-sm text-[#6B7280] hover:text-[#111827]"
                                    onClick={handleBackToLogin}
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