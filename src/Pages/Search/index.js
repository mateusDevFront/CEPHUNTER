import React, { useState, useRef } from 'react'

import {
    Container,
    Title,
    ContainerSearch,
    Input,
    ContainerArea,
    ContainerButton,
    ContainerRadius,
    Buscar,
    TextInformations,
    ViewInformations
} from './styles'

import api from '../../services/api'

import {Keyboard} from 'react-native'

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

function Search() {
    const [cep, setCep] = useState('')
    const inputRef = useRef(null)
    const [cepUser, setCepuser] = useState(null)



    function limpar() {
        setCep('')
        inputRef.current.focus()
    }

    async function buscar() {
        if (cep == '') {
            alert('digite um cep válido')
            setCep('')
            return;
        }

        try {
            const response = await api.get(`/${cep}/json`);
            console.log(response.data)
            setCepuser(response.data)

            Keyboard.dismiss() // FECHA O TECLADO APÓS A BUSCA
        } catch (error) {
            console.log('ERRO ' + error)
        }


    }

    return (
        <Container>
            <ContainerSearch>
                <Title>Digite o CEP desejado</Title>
                <Input
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    placeholder="EX: 00000000"
                    placeholderTextColor="#8a038e"
                    keyboardType="numeric"
                    ref={inputRef}
                />
            </ContainerSearch>

            <ContainerArea >

                <ContainerButton
                    onPress={buscar}
                    activeOpacity={0.8}>
                    <ContainerRadius>
                        <FontAwesome5 name="search" size={32} color="white" />
                    </ContainerRadius>
                    <Buscar>Buscar</Buscar>
                </ContainerButton>

                <ContainerButton
                    onPress={limpar}
                    activeOpacity={0.8}>
                    <ContainerRadius>
                        <FontAwesome name="trash" size={32} color="white" />
                    </ContainerRadius>
                    <Buscar>Limpar</Buscar>
                </ContainerButton>


            </ContainerArea>

            {cepUser && 
                <ViewInformations>
                <TextInformations>
                    CEP : {cepUser.cep}
                </TextInformations>
                <TextInformations>
                    Logradouro : {cepUser.logradouro}
                </TextInformations>
                <TextInformations>
                    Bairro : {cepUser.bairro}
                </TextInformations>
                <TextInformations>
                    Cidade : {cepUser.localidade}
                </TextInformations>
                <TextInformations>
                    Estado : {cepUser.uf}
                </TextInformations>
                <TextInformations>
                    DDD : {cepUser.ddd}
                </TextInformations>
            </ViewInformations>
            }
            

        </Container>
    )
}
export default Search;