import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export function ProfileRelationsBox(props) {
  const seguidores = props.items;

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {seguidores.map((item) => {
          return (
            <li key={item.id}>
              <a href={`/users/${item.login}`}>
                <img src={`https://github.com/${item.login}.png`} />
                <span>{item.login}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}
  