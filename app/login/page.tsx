import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login — AmalCB.com',
  description: 'Sign in to your AmalCB digital banking account.',
};

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <AuthForm mode="login" />
    </>
  );
}
