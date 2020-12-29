import axios from "axios";
import { Button } from "react-bootstrap";
import { Layout } from "../../components/Layout/Layout";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";

const fetchPortfolios = () => {
  const query = `query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite,
      jobTitle,
      description
    }
  }`;

  return axios.post("http://localhost:3000/graphql", {query})
    .then(({data}) => data.data)
    .then(data => data.portfolios)
}

const Portfolio = ({portfolios}) => (
  <Layout page="Portfolios">
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {
            portfolios.map(item => <PortfolioCard {...item} />)
          }
        </div>
      </section>
      <a href="" className="btn btn-main bg-blue ttu">
        See More Portfolios
      </a>
    </>
  </Layout>
);

Portfolio.getInitialProps = async () => {
  let portfolios = await fetchPortfolios();
  return {
    portfolios
  }
}

export default Portfolio;
