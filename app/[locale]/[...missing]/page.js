import { notFound } from 'next/navigation';

export default function CatchAll() {
  notFound(); // це викличе твій глобальний not-found.js
}
