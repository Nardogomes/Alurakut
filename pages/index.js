import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileSideBar } from '../src/components/ProfileSideBar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

export default function Home() {
  const gitUser = 'Nardogomes';

  const pessoasFavoritas = [
    'Nardogomes',
    'cicerohen',
    'paulovictordev',
    'gustavoguanabara',
    'iurylemos',
    'imandrec'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar user={gitUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>  
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                  
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidade
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
