import { Layout } from "@/components/Layout/Layout";
import { PortfolioCard } from "@/components/portfolios/PortfolioCard";
import React from "react";
import { Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { Preloader } from "../../components/Preloader/Preloader";
import {useGetPortfolios, useDeletePortfolio, useUpdatePortfolio, useCreatePortfolio} from "@/apollo/actions";

const Portfolio = () => {
  const { data, loading } = useGetPortfolios();
  const [updatePortfolio] = useUpdatePortfolio();
  const [createPortfolio] = useCreatePortfolio();
  const [deletePortfolio, {loading: deleting, error: deleteError}] = useDeletePortfolio();

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
