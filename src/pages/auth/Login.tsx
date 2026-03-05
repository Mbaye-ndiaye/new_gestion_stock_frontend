import { useState } from "react"
import ImageLogin from "../../assets/ImageLogin.png"
import { useAuth } from "./index"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setShowOtp, setUserEmail, setShowForgotPassword } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUserEmail(email)
        setShowOtp(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
            <div className="max-w-6xl w-full h-[650px] bg-white shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative overflow-hidden">
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

                    {/* Form Section */}
                    <div className="md:w-1/2">
                        <div className="max-w-sm mx-auto flex flex-col h-full justify-center">
                            <div className=" mb-8">
                                <h2 className="text-3xl font-bold text-[#111827] mb-2">Connectez-vous</h2>
                                <p className="text-[#020617]">Accédez à votre interface dédiée à la gestion des taxes sur l'ensemble du territoire national.</p>
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

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-[#111827] mb-2">
                                        Mot de passe <b className="text-[#E03137]">*</b>
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-2 py-2 border border-[#083344] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span className="ml-2 text-sm text-[#6B7280]">Se souvenir de moi</span>
                                    </label>
                                    <button
                                        className="cursor-pointer decoration-none border-none bg-transparent text-sm text-[#6B7280] hover:text-[#6B7280]"
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
                                    className="cursor-pointer w-full bg-[#164E63] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#164E63] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-[1.02]"
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