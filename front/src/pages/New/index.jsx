import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {NoteItem} from "../../components/NoteItem"
import {Section} from "../../components/Section"
import {Buttons} from "../../components/Buttons"
import { useState } from "react"

import {Link} from "react-router-dom"

import { Container, Form } from "./styles"

export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")
    
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }
   
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <Link to="/">
                            voltar
                        </Link>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => {
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => {}}
                                />
                            })
                        }
                        <NoteItem
                            isNew 
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    <Buttons title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}