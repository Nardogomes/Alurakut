import { ProfileRelationsBoxWrapper } from '../ProfileRelations';

export function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((item) => {
          return (
            <li key={item.id}>
              <a href={`/users/${item.title}`}>
                <img src={item.image} />
                <span>{item.title}</span>
              </a>
            </li>
          );
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}
  