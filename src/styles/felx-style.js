import styled from 'styled-components'

const Flex_col = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Flex_row = styled.div`
  display: flex;
`
const Flex_col_center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`
const Flex_row_center = styled.div`
  display: flex;
  justify-content: center;
`
const Flex_col_space_between = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Flex_row_space_between = styled.div`
  display: flex;
  justify-content: space-between;
`

export {
  Flex_col,
  Flex_row,
  Flex_col_center,
  Flex_row_center,
  Flex_col_space_between,
  Flex_row_space_between
}
