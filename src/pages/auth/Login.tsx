import { useState } from "react"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const { setShowOtp, setUserEmail, setShowForgotPassword } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUserEmail(email)
        setShowOtp(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4 py-8">
            <div className="w-full max-w-6xl bg-[var(--color-small-foreground)] shadow-lg overflow-hidden rounded-2xl">
                <div className="flex flex-col md:flex-row h-auto md:h-[650px]">
                    {/* Image Section - Masquée sur mobile (sm et en dessous) */}
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
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <h1 className="text-4xl font-bold mb-4">Bienvenue</h1>
                                    <p className="text-lg opacity-90">Gérez votre stock efficacement avec notre système de gestion moderne</p>
                                </div>
                                <div className="space-y-4 text-sm opacity-80">
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Suivi en temps réel</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Rapports détaillés</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>Interface intuitive</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section - Prend toute la largeur sur mobile */}
                    <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 mt-10">
                        <div className="max-w-sm mx-auto">
                            {/* Logo pour mobile (optionnel) */}
                            <div className="md:hidden flex justify-center mb-6">
                                <div className="w-16 h-16 bg-[var(--color-ring)] rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-foreground)] mb-2 text-center md:text-left">Connectez-vous</h2>
                                <p className="text-[var(--color-muted-foreground)] text-sm sm:text-base text-center md:text-left">Accédez à votre interface dédiée à la gestion des taxes sur l'ensemble du territoire national.</p>
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

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">
                                        Mot de passe <b className="text-[var(--color-foreground-muted)]">*</b>
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-3 py-3 sm:px-4 sm:py-3 pr-12 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-ring)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                            placeholder="••••••••"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-muted)] hover:text-[var(--color-foreground)] focus:outline-none transition-colors"
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 accent-[var(--color-muted)] rounded "
                                        />
                                        <span className="ml-2 text-sm text-[var(--color-muted)]">Se souvenir de moi</span>
                                    </label>
                                    <button
                                        className="cursor-pointer decoration-none border-none bg-transparent text-sm text-[var(--color-muted)] hover:text-[var(--color-muted)]"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setShowForgotPassword(true)
                                        }}
                                    >
                                        Mot de passe oublié?
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-[var(--color-ring)] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-[var(--color-ring)] focus:ring-opacity-50 transition-all transform hover:scale-[1.02] text-sm sm:text-base"
                                >
                                    Se connecter
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}