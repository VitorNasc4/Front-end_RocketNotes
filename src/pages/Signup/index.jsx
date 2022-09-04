import {api} from "../../services/api"
import { useState } from "react"

import { FiMail, FiLock, FiUser } from "react-icons/fi"

import {Link, useNavigate} from "react-router-dom"

import {Input} from "../../components/Input"
import {Buttons} from "../../components/Buttons"

import {Container, Form, Background} from "./styles"

export function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignup() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos")
        }

        api.post("/user", {name, email, password})
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar")
                }
            })
    }   

    return (
        <Container>
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>
                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Buttons title="Cadastrar" onClick={handleSignup}/>

                <Link to="/">
                    Voltar para login
                </Link>

            </Form>

        </Container>
    )
}