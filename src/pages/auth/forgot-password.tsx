import { useState } from "react"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { setShowForgotPassword } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    const handleBackToLogin = () => {
        setShowForgotPassword(false)
    }

    if (isSubmitted) {
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

                        {/* Form Section - Prend toute la largeur sur mobile */}
                        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
                            <div className="max-w-sm mx-auto">
                                {/* Logo pour mobile */}
                                <div className="md:hidden flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="text-center mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] mb-2">Email envoyé!</h2>
                                    <p className="text-[var(--color-muted-foreground)] mb-4 text-sm sm:text-base">
                                        Un email de réinitialisation a été envoyé à <span className="font-medium">{email}</span>
                                    </p>
                                    <p className="text-sm text-[var(--color-muted)]">
                                        Veuillez vérifier votre boîte de réception et suivre les instructions pour réinitialiser votre mot de passe.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={handleBackToLogin}
                                        className="cursor-pointer w-full bg-[var(--color-ring)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-[var(--color-ring)] focus:ring-opacity-50 transition-all transform hover:scale-[1.02] text-sm sm:text-base"
                                    >
                                        Retour à la connexion
                                    </button>
                                    
                                    <div className="text-center">
                                        <p className="text-sm text-[var(--color-muted)]">
                                            Vous n'avez pas reçu l'email?{" "}
                                            <button 
                                                type="button"
                                                className="cursor-pointer text-[var(--color-ring)] hover:underline font-medium"
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
                        <div className="relative z-10 p-8 flex items-center justify-center h-full w-full">
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

                    {/* Form Section - Prend toute la largeur sur mobile */}
                    <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 mt-20">
                        <div className="max-w-sm mx-auto">
                            {/* Logo pour mobile */}
                            <div className="md:hidden flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[var(--color-ring)] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] mb-2 text-center md:text-left">Réinitialiser le mot de passe</h2>
                                <p className="text-[var(--color-muted-foreground)] text-sm sm:text-base text-center md:text-left">
                                    Entrez votre adresse email et nous vous enverrons les instructions pour réinitialiser votre mot de passe.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">
                                        Adresse E-mail <b className="text-[var(--color-foreground-muted)]">*</b>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-3 sm:px-4 sm:py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-ring)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                        placeholder="exemple@email.com"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[var(--color-ring)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-[var(--color-ring)] focus:ring-opacity-50 transition-all transform hover:scale-[1.02] text-sm sm:text-base"
                                >
                                    Envoyer les instructions
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <button 
                                    type="button"
                                    className="cursor-pointer text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
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