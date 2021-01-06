import axios from "axios";
import { Layout } from "@/components/Layout/Layout";
import { PortfolioCard } from "@/components/portfolios/PortfolioCard";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLazyQuery, useMutation } from "@apollo/client";
import { CREATE_PORTFOLIO, GET_PORTFOLIOS, DELETE_PORTFOLIO, UPDATE_PORTFOLIO } from "../../apollo/queries";
import { Preloader } from "@/components/Preloader/Preloader";
import { showErrorMessage } from "../../helpers/notifications";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';

const graphDeletePortfolio = id => {
  const query = `
    mutation DeletePortfolio {
      deletePortfolio(id: "${id}")
    }
  `;

  return axios.post("http://localhost:3000/graphql", { query })
    .then(({data: fromGraph}) => fromGraph.data)
    .then(data => data.deletePortfolio)
}

const graphUpdatePortfolio = id => {
  const query = `
    mutation UpdatePortfolio {
      updatePortfolio(id: "${id}", input: {title: "Updated title", jobTitle: "Updated jobTitle"}) {
        _id,
        title,
        company,
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
      }
    }
  `;
  return axios
    .post("http://localhost:3000/graphql", { query })
    .then(({ data: fromGraph }) => fromGraph.data)
    .then((data) => data.updatePortfolio);
};

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [getPortfolios, {loading, data, error}] = useLazyQuery(GET_PORTFOLIOS);
  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {update: (cache) => {
    const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS});
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: {portfolios: [...portfolios, createPortfolio]}
    })
  }})

  useEffect(() => {
    let isMounted = true;

    if(isMounted) getPortfolios()

    return () => isMounted = false;
  }, [getPortfolios])

  if(data && data.portfolios.length > 0 && (portfolios.length === 0 || portfolios.length !== data.portfolios.length)) {
    setPortfolios(data.portfolios)
  }

  if(loading || !portfolios) return <Preloader />

  if(error) showErrorMessage(error.message)

  const updatePortfolio = async (id) => {
    const updatedPortfolio = await graphUpdatePortfolio(id);
    const index = state.findIndex((p) => p._id === id);
    const newPortfolios = state.slice();
    newPortfolios[index] = updatedPortfolio;
    setState(newPortfolios);
  };

  const deletePortfolio = async (id) => {
    const deletedId = await graphDeletePortfolio(id);
    const index = state.findIndex((p) => p._id === deletedId);
    const newPortfolios = state.slice();
    newPortfolios.splice(index, 1);
    setState(newPortfolios);
  };

  return (
    <Layout page="Portfolios">
      <>
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
          <Button onClick={createPortfolio} variant="outline-success">
            Add portfolio
          </Button>
        </section>
        <section className="pb-5">
          <div className="row">
            {portfolios.map((item) => {
              return (
                <React.Fragment key={item._id}>
                  <PortfolioCard
                    {...item}
                    updatePortfolio={updatePortfolio}
                    deletePortfolio={deletePortfolio}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <a href="" className="btn btn-main bg-blue ttu">
          See More Portfolios
        </a>
      </>
    </Layout>
  );
};

export default withApollo(Portfolio, {getDataFromTree});
