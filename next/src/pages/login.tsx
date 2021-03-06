import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { signIn, getSession, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

interface LoginProps {
  isLoggedIn: boolean;
}

import styles from 'styles/pages/Login.module.css';

export default function Login({ isLoggedIn }: LoginProps) {
  const { push } = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      push('/')
    }
  }, [isLoggedIn]);

  return (
    <div className={styles.container}>
      <img src="/simbolo.svg" alt="Simbolo" />

      <section>
        <img src="/logo-branco.svg" alt="Move.It" />

        <h2>Bem-vindo</h2>
        <div>
          <p>Faça login com seu Auth0 para começar</p>
        </div>

        <button onClick={() => signIn('auth0')}>Entrar</button>

      </section>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;

  const session = await getSession({ req });

  return {
    props: {
      isLoggedIn: !!session
    }
  }
};
