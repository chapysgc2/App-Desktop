import React, { useRef } from 'react';

export default function Home() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current?.value ?? '';
    const enteredPassword = passwordRef.current?.value ?? '';

    // Simulación de autenticación básica (reemplaza con tu lógica real de autenticación)
    if (enteredUsername === 'admin' && enteredPassword === 'password') {
      console.log('Inicio de sesión exitoso!');
    } else {
      errorRef.current = 'Credenciales inválidas. Por favor, inténtalo de nuevo.';
      console.log(errorRef.current);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar Sesión</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input
            ref={usernameRef}
            type="text"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Usuario"
            required
          />
          <input
            ref={passwordRef}
            type="password"
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Contraseña"
            required
          />
          {errorRef.current && <p className="text-red-500 text-xs italic">{errorRef.current}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
