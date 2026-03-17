import AuthForm from '@/components/AuthForm';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up — AmalCB.com',
  description: 'Create your AmalCB banking account today.',
};

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <AuthForm mode="signup" />
    </>
  );
}
