import {RiShutDownLine} from "react-icons/ri"
import { Container, Profile, Logout } from "./styles"
import {useAuth} from "../../hooks/auth"

export function Header() {
  const {signOut} = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://www.github.com/VitorNasc4.png" alt="Foto de Perfil" />
        <div>
          <span>Bem vindo</span>
          <strong>Vitor Marciano</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}