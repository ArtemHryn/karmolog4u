import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

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
          const res = await fetch('http://localhost:4499/auth/login', {
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

          // Парсимо відповідь від сервера, яка містить дані користувача
          const user = await res.json();

          // Якщо користувача не знайдено, повертаємо помилку
          if (!user) {
            throw new Error('Invalid login response');
          }
          // console.log(user.user.userData);

          // Повертаємо об'єкт користувача для збереження в сесії
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
      // Якщо користувач успішно увійшов, додавати токени і роль до JWT

      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.userData.role;
        token.expiresAt = Date.now() + 15 * 60 * 1000;
      }

      if (Date.now() > token.expiresAt) {
        const refreshResponse = await fetch('http://localhost:4499/auth/refresh-token', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token.refreshToken}`,
          },
        });

        if (refreshResponse.ok) {
          const newTokens = await refreshResponse.json();
          token.accessToken = newTokens.accessToken;
          token.refreshToken = newTokens.refreshToken;
          token.expiresAt = Date.now() + 15 * 60 * 1000; // Оновлення часу закінчення дії
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
