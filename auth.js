import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { base_url } from '@helper/consts';

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt', // Використовуємо JWT для зберігання сесії
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
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

          if (!user) {
            throw new Error('Invalid login response');
          }

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
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    async jwt({ token, user }) {
      const expiresAt = Date.now() + 60 * 60 * 1000;
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.userData.role;
        token.expiresAt = expiresAt;
      }

      if (Date.now() > token.expiresAt) {
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
          token.expiresAt = expiresAt; // Оновлення часу закінчення дії
        }
      }

      return token;
    },
    async session({ session, token }) {
      // Додаємо роль користувача та токени до сесії
      if (token) {
        session.user.role = token.role;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/cabinet/dashboard`; // Для інших користувачів
    },
  },
});
