import React from 'react';
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileSideBar } from '../src/components/ProfileSideBar';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ProfileRelationsBox } from '../src/components/ProfileRelationsBox';

export default function Home() {
  const githubUser = 'Nardogomes';

  const [comunidades, setComunidades] = React.useState([{
    id: '789654789654',
    title: 'Tocava a campainha e corria',
    image: 'https://cdn.leroymerlin.com.br/products/conjunto_de_campainha_10a_220v_branco_gracia_alumbra_89846505_0ed6_600x600.jpg'
  }]);

  const pessoasFavoritas = [
    'Nardogomes',
    'cicerohen',
    'paulovictordev',
    'gustavoguanabara',
    'iurylemos',
    'imandrec'
  ]

  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function() {
    fetch('https://api.github.com/users/Nardogomes/followers')
    .then(function(result) {
      return result.json();
    })
    .then(function(resultFinal) {
      return setSeguidores(resultFinal);
    })
    .catch(function() {
      console.error(error);
    })
  }, [seguidores]);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>  
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O quê você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(event) {
              event.preventDefault();

              const dadosDoForm = new FormData(event.target);
              
              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              };

              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
              
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunindade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunindade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa."
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa."
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title="Seguidores" items={seguidores} />
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                  
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={`/users/${item.title}`}>
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                  
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
