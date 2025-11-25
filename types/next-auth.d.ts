import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role?: string;
      name?: string;
      lastName?: string;
      email?: string;
      mobPhone?: string;
      cover?: string;
    };
    accessToken: string;
    refreshToken: string;
  }

  interface User {
    accessToken: string;
    refreshToken: string;
    userData?: {
      id: string;
      role?: string;
      name?: string;
      lastName?: string;
      email?: string;
      mobPhone?: string;
      cover?: string;
    };
  }
}
