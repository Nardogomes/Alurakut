import { Box } from "../Box";
import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons";

export function ProfileSideBar(props) {  
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} alt="Foto perfil" style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`} target="_blank">
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}