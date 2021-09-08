import { Container } from './styles'
import { useEffect } from 'react'
import { api } from '../../services/api'

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="deposit">R$5400,00</td>
            <td>Dev</td>
            <td>15/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1050.00</td>
            <td>Pagamento</td>
            <td>10/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}