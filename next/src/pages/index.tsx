import { useEffect } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { useRouter } from 'next/router';

import { ChallengesProvider } from 'contexts/ChallengesContext';
import { CountdownProvider } from 'contexts/CountdownContext';

import { ExperienceBar } from 'components/ExperienceBar';
import { Profile } from 'components/Profile';
import { CompletedChallenges } from 'components/CompletedChallenges';
import { Countdown } from 'components/Countdown';
import { ChallengeBox } from 'components/ChallengeBox';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  isLoggedIn: boolean;
  user?: {
    name: string;
    image: string;
  }
}

import styles from 'styles/pages/Home.module.css';

export default function Home({
  level,
  currentExperience,
  challengesCompleted,
  isLoggedIn,
  user
}: HomeProps) {
  const { push } = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      push('/login');
    }
  }, [isLoggedIn])

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile name={user?.name} image={user?.image} />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
  } = ctx.req.cookies;

  const session = await getSession({ req: ctx.req })

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isLoggedIn: !!session,
      user: session?.user || {}
    }
  }
}
