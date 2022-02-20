import styled from 'styled-components'

export const Container = styled.View`
    flex:1;
    background-color: #8a038e;
`
export const ContaineEspace = styled.View`
    width: 100%;
    height: 350px;
    background-color: white;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    justify-content: center;
    align-items: center;
`
export const Logo = styled.Image`
    margin-top: 86px;
    width: 120%;
    height: 120%;
`
export const ContainerSearch = styled.View.attrs({
    resizeMode: 'stretch'
})`
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`   
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    color: white;
    margin-top: 40px;
`
export const Input = styled.TextInput.attrs({
    resizeMode: 'stretch'
})`
    background-color: #520156;
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 30px;
    font-size: 20px;
    color: white;
`
export const ContainerArea = styled.View`
    align-items: center;
    justify-content: center;

`
export const ContainerRadius = styled.View`
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: #520156;
    justify-content: center;
    align-items: center;
`
export const Buscar = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #520156;
    margin-right: 80px;
    margin-bottom: 5px;
`
export const ContainerButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 55px;
    background-color: white;
    height: 50px;
    width: 65%;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
`
export const Slogan = styled.Text`
    text-align: center;
    font-size: 15px;
    color: white;
    margin-top: 60px;
    letter-spacing: 3px;
`