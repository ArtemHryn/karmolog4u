import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { base_url } from '@helper/consts';

const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${base_url}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            console.log('not ok');
            return null;
          }

          const user = await res.json();
          if (!user) throw new Error('Invalid login response');

          return user.user;
        } catch (error) {
          console.error('Authorization error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/cabinet/login',
    signOut: '/cabinet/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      const expiresAt = Date.now() + 50 * 60 * 1000;
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.userData.role;
        token.expiresAt = expiresAt;
      }

      if (Date.now() > token.expiresAt) {
        try {
          const refreshResponse = await fetch(`${base_url}/auth/refresh-token`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token.refreshToken}`,
            },
          });

          if (refreshResponse.ok) {
            const newTokens = await refreshResponse.json();
            token.accessToken = newTokens.accessToken;
            token.refreshToken = newTokens.refreshToken;
            token.expiresAt = expiresAt;
            console.log('refreshed: ', new Date());
          }
        } catch (error) {
          console.error('Token refresh error:', error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/cabinet/dashboard`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET, authOptions };
