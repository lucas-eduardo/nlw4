import { useContext } from 'react';
import { useSession, signOut } from 'next-auth/client';

import { ChallengesContext } from 'contexts/ChallengesContext';

import { Container, Image, WrapperInfo, Name, Level } from './styles';

interface ProfileProps {
  image: string;
  name: string;
}

const Profile = ({ image, name }: ProfileProps) => {
  const { level } = useContext(ChallengesContext);
  const [, loading] = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: 'http://localhost:3000/login' });
  };

  return (
    <Container>
      {loading? <h2>Carregando...</h2> : (
        <>
          <Image src={image} alt={name} />

          <WrapperInfo>
            <Name>{name}</Name>
            <Level>
              <div>
                <img src="icons/level.svg" alt="Level"/>

                <p>Level {level}</p>
              </div>

              <button type="button" onClick={handleLogout}>Sair</button>
            </Level>
          </WrapperInfo>
        </>
      )}
    </Container>
  );
};

export { Profile };
