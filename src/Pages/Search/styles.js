import styled from 'styled-components'

export const Container = styled.View`
    flex:1;
    background-color: #8a038e;
`
export const ContainerSearch = styled.View.attrs({
    resizeMode: 'stretch'
})`
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`
export const Title = styled.Text`   
    text-align: center;
    margin-bottom: 25px;
    font-size: 20px;
    color: white;
    margin-top: 40px;
    letter-spacing: 2px;
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
    margin-top: 30px;
    background-color: white;
    height: 50px;
    width: 65%;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
`
export const TextInformations = styled.Text`
    font-size: 18px;
    color: white;
    text-align: center;
`
export const ViewInformations = styled.View`
    margin-top: 70px;
`