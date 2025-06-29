import { getToken } from 'next-auth/jwt';
import createMiddleware from 'next-intl/middleware';
import { localeConfig } from './i18n/config';

const intlMiddleware = createMiddleware(localeConfig);

export default async function middleware(req) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  const { pathname } = req.nextUrl;

  // Отримуємо токен сесії з JWT
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  // Перенаправляємо аутентифікованих користувачів із логіну на dashboard
  if (pathname.includes('/cabinet/login') && token) {
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  // Ролі та доступи для адміністратора та користувача
  if (token?.role === 'ADMIN' && pathname.includes('dashboard/user')) {
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  if (token?.role === 'USER' && pathname.includes('dashboard/admin')) {
    return Response.redirect(new URL('/cabinet/dashboard', req.url));
  }

  // Доступ до сторінок /cabinet для неавторизованих користувачів
  const publicPages =
    pathname.includes('/cabinet/login') ||
    pathname.includes('/cabinet/registration') ||
    pathname.includes('/cabinet/reset-password');

  if (pathname.includes('/cabinet') && !publicPages) {
    // Якщо користувач не авторизований, перенаправляємо на логін
    if (!token) {
      const loginUrl = new URL('/cabinet/login', req.url);
      return Response.redirect(loginUrl);
    }
  }

  // Якщо авторизація не потрібна, виконуємо локалізаційний Middleware
  return intlMiddleware(req);
}

export const config = {
  // Пропускаємо шляхи, які не потрібно локалізувати
  matcher: ['/((?!api|_next|public|.*\\..*).*)'],
};
