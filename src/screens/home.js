import AllMatchs from '../config/matchs.json'
import { Flex_row_space_between } from '../styles/flex-style'

import styled from 'styled-components'
import { BasicTable } from '../components/BasicTable'

const Home = () => {
 
  return (
    <GameStyle>
    <Flex_row_space_between width='50vw'>
   <BasicTable></BasicTable>

   
        </Flex_row_space_between>
        </GameStyle>
  )
}

const GameStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
margin-bottom: 15px;
margin: 15px 0;

@media (max-width: 900px) {
  justify-content: space-between;
}

@media (max-width: 768px) {
  justify-content: center;
}
`

export default Home