import { Box } from "../Box";

export function ProfileSideBar(props) {  
  return (
    <Box>
      <img src={`https://github.com/${props.user}.png`} alt="Foto perfil" style={{ borderRadius: '8px' }} />
    </Box>
  );
}