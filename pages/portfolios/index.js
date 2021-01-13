import { Layout } from "@/components/Layout/Layout";
import { PortfolioCard } from "@/components/portfolios/PortfolioCard";
import React from "react";
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import {
  CREATE_PORTFOLIO,
  GET_PORTFOLIOS,
  DELETE_PORTFOLIO,
  UPDATE_PORTFOLIO,
} from "../../apollo/queries";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { Preloader } from "../../components/Preloader/Preloader";

const Portfolio = () => {
  const { data, loading } = useQuery(GET_PORTFOLIOS);
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO);

  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update: (cache) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio] },
      });
    },
  });

  const [deletePortfolio, {loading: deleting, error: deleteError}] = useMutation(DELETE_PORTFOLIO, {
    update: (cache, {data: {deletePortfolio}}) => {
      const { portfolios } = cache.readQuery({ query: GET_PORTFOLIOS });
      const newPortfolios = portfolios.filter(item => item._id !== deletePortfolio);
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: {portfolios: newPortfolios},
      })
    }
  })

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
            {data &&
              data.portfolios.map((item) => {
                return (
                  <PortfolioCard
                    {...item}
                    key={item._id}
                    updatePortfolio={updatePortfolio}
                    deletePortfolio={deletePortfolio}
                  />
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

export default withApollo(Portfolio, { getDataFromTree });
