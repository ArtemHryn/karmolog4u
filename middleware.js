import createMiddleware from 'next-intl/middleware';
import { auth } from '@/auth';

const intlMiddleware = createMiddleware({
  locales: ['uk', 'ru'],
  defaultLocale: 'uk',
});

export default auth(async req => {
  const { pathname } = req.nextUrl;
  const session = await auth();
  if (pathname.includes('/cabinet/login') && session?.accessToken) {
    // Redirect authenticated users to their dashboard or another page
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  if (session?.user?.role === 'ADMIN' && pathname.includes('dashboard/user')) {
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  if (session?.user?.role === 'USER' && pathname.includes('dashboard/admin')) {
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  const pages =
    pathname.includes('/cabinet/login') ||
    pathname.includes('/cabinet/registration') ||
    pathname.includes('/cabinet/reset-password');
  if (pathname.includes('/cabinet') && !pages) {
    // Виконуємо авторизаційну перевірку за допомогою функції `auth`

    // Якщо користувач не авторизований, перенаправляємо на сторінку логіну
    if (!req?.auth) {
      const loginUrl = new URL('/cabinet/login', req.url);
      return Response.redirect(loginUrl);
    }
  }

  // Якщо не потрібно авторизації, виконується стандартне локалізоване налаштування
  return intlMiddleware(req);
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|public|.*\\..*).*)'],
};
