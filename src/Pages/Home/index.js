import React from 'react'

import {
    Container,
    ContaineEspace,
    Logo,
    Title,
    ContainerArea,
    ContainerRadius,
    ContainerButton,
    Buscar,
    Slogan

} from './styles'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


import logo from '../../assets/Images/Logo.png'

/* import {View, Text} from 'react-native' */


function Home() {
    const navigation = useNavigation()


    return (
        <Container>
            <ContaineEspace>
                <Logo source={logo} />
            </ContaineEspace>

            <Title>BEM VINDO</Title>


            <ContainerArea >

                <ContainerButton
                        onPress={() => navigation.navigate('Search')}
                        activeOpacity={0.8}>
                        <ContainerRadius>
                            <AntDesign name="login" size={35} color="white" />
                        </ContainerRadius>
                        <Buscar>Entrar</Buscar>
                </ContainerButton>

            </ContainerArea>

            <Slogan>CEP HUNTER</Slogan>

                

        </Container>
    )
}
export default Home;