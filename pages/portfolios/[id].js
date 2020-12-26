import { useRouter } from "next/router"

const PortfolioDetail = ({query}) => {
  const {id} = query;

  return <h1>
    Portfolio detail, id: {id}
  </h1>
}

PortfolioDetail.getInitialProps = ({query}) => {
  return {
    query
  }
}

export default PortfolioDetail
