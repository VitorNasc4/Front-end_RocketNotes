import { FiArrowLeft, FiUser, FiMail, FiLock, FiMapPin } from "react-icons/fi"

import {useState} from "react";
import {useAuth} from "../../hooks/auth"

import {Link} from "react-router-dom"

import {Input} from "../../components/Input"
import {Buttons} from "../../components/Buttons"

import {Container, Form} from "./styles"

export function Profile() {
    const {user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [cep, setCep] = useState(user.cep)
    const [city, setCity] = useState(user.city)
    const [address, setAddress] = useState(user.address)

    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")

    const [avatar, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const user = {
            name, 
            cep,
            city,
            address,
            email,
            old_password: passwordOld,  
            password: passwordNew
        }

        await updateProfile({user})
    }

<<<<<<< HEAD:front/src/pages/Profile/index.jsx
    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
=======
    async function searchCep(value) {
        const endpoint = `http://viacep.com.br/ws/${value}/json`
        const data = await fetch(endpoint).then(data => data.json()).then(({localidade, logradouro}) => ({
            localidade, 
            logradouro 
            
        }))

        if (!data) {
            alert("Não foi possível localizar o cep")
        }

        setCity(data.localidade)
        setAddress(data.logradouro)

    }

    const handleSearchCep = async (value)  => {
        searchCep(value)
    }

>>>>>>> 6e0eedf0224c3ef24cc2d9e1594f10b8233628c1:src/pages/Profile/index.jsx

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
<<<<<<< HEAD:front/src/pages/Profile/index.jsx
                <Avatar>
                    <img 
                        src={avatar} 
                        alt="Foto de usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
=======
>>>>>>> 6e0eedf0224c3ef24cc2d9e1594f10b8233628c1:src/pages/Profile/index.jsx
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                
                <Input 
                    placeholder="CEP"
                    type="text"
                    icon={FiMapPin}
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    onBlur={e => handleSearchCep(e.target.value)}
                />
                
                <Input 
                    placeholder="Cidade"
                    type="text"
                    icon={FiMapPin}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                
                <Input 
                    placeholder="Endereço"
                    type="text"
                    icon={FiMapPin}
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Buttons title="Salvar" onClick={handleUpdate}/>

            </Form>
        </Container>
    )
}