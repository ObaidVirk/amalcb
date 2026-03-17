'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { verifyAdminCredentials } from '@/app/actions/auth';
import { useTranslation } from '@/context/TranslationContext';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isLogin = mode === 'login';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLogin) return;

    setError('');
    setIsLoading(true);

    try {
      const valid = await verifyAdminCredentials(email, password);
      if (valid) {
        localStorage.setItem('adminLoggedIn', 'true');
        router.push('/admin');
      } else {
        setError('Invalid admin credentials');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center py-12 px-4 pt-24">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 to-red-600 px-8 py-8 text-white text-center">
            <Link href="/" className="flex items-center justify-center mb-4" aria-label="Amal Commercial Bank home">
              <Image
                src="/amalCB.png"
                alt="Amal Commercial Bank"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority={isLogin}
              />
            </Link>
            <h1 className="text-xl font-bold">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </h1>
            <p className="text-red-200 text-sm mt-1">
              {isLogin ? 'Welcome back! Please enter your details.' : 'Start banking smarter today.'}
            </p>
          </div>

          {/* Form body */}
          <div className="px-8 py-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth.name}</label>
                  <input
                    type="text"
                    placeholder="e.g. Amal Ahmed"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.auth.email}
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={isLogin ? email : undefined}
                  onChange={isLogin ? (e) => setEmail(e.target.value) : undefined}
                  required={isLogin}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-medium text-gray-700">{t.auth.password}</label>
                  {isLogin && (
                    <Link href="#" className="text-xs text-red-600 hover:underline font-medium">
                      {t.auth.forgotPassword}
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={isLogin ? password : undefined}
                    onChange={isLogin ? (e) => setPassword(e.target.value) : undefined}
                    required={isLogin}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.auth.confirmPassword}</label>
                  <div className="relative">
                    <input
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label="Toggle confirm password visibility"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-0.5 accent-red-600" />
                  <label htmlFor="terms" className="text-xs text-gray-500">
                    I agree to the{' '}
                    <a href="#" className="text-red-600 hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>
                  </label>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="accent-red-600" />
                  <label htmlFor="remember" className="text-sm text-gray-500">Remember me for 30 days</label>
                </div>
              )}

              {isLogin && error && (
                <p className="text-sm text-red-600 font-medium bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLogin && isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
              >
                {isLogin && isLoading ? 'Signing in…' : isLogin ? t.auth.login : t.auth.signup}
              </button>
            </form>

            {/* Security notice */}
            <div className="mt-5 flex items-center gap-2 bg-gray-50 rounded-lg p-3">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-gray-500">
                Your connection is secure and encrypted with 256-bit SSL.
              </p>
            </div>

            <p className="text-center text-sm text-gray-500 mt-5">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <Link
                href={isLogin ? '/signup' : '/login'}
                className="text-red-600 font-semibold hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} Amal Commercial Bank. Regulated by the Central Bank Authority.
        </p>
      </div>
    </div>
  );
}
