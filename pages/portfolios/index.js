import axios from "axios";
import { Layout } from "@/components/Layout/Layout";
import { PortfolioCard } from "@/components/portfolios/PortfolioCard";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const graphUpdatePortfolio = (id) => {
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

const graphCreatePortfolio = () => {
  const query = `
    mutation CreatePortfolio {
      createPortfolio(input: {
        title: "New Job"
        company: "New Company"
        companyWebsite: "New Website"
        location: "New Location"
        jobTitle: "New Job Title"
        description: "New Desc"
        startDate: "12/12/2012"
        endDate: "14/11/2013"
      }) {
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
    }`;
  return axios
    .post("http://localhost:3000/graphql", { query })
    .then(({ data: fromGraph }) => fromGraph.data)
    .then((data) => data.createPortfolio);
};

const fetchPortfolios = () => {
  const query = `query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite,
      jobTitle,
      description,
      startDate,
      endDate,
    }
  }`;

  return axios
    .post(
      "http://localhost:3000/graphql",
      { query },
      {
        Host: "arthurseredaa.vercel.app",
      }
    )
    .then(({ data: fromGraph }) => fromGraph.data)
    .then((data) => data.portfolios);
};

const Portfolio = ({ portfolios }) => {
  const [state, setState] = useState(portfolios);

  const createPortfolio = async () => {
    const newPortfolio = await graphCreatePortfolio();
    const newPortfolios = [...state, newPortfolio];
    setState(newPortfolios);
  };

  const updatePortfolio = async (id) => {
    const updatedPortfolio = await graphUpdatePortfolio(id);
    const index = state.findIndex(p => p._id === id);
    const newPortfolios = state.slice();
    newPortfolios[index] = updatedPortfolio;
    setState(newPortfolios);
  }

  return (
    <Layout page="Portfolios">
      <>
        <section className="section-title">
          <div className="px-2">
            <div className="pt-5 pb-4">
              <h1>Portfolios</h1>
            </div>
          </div>
          <Button onClick={createPortfolio}>Add portfolio</Button>
        </section>
        <section className="pb-5">
          <div className="row">
            {state.map((item) => {
              return (
                <React.Fragment key={item._id}>
                  <PortfolioCard {...item} />
                  <Button variant="warning" onClick={() => updatePortfolio(item._id)}>
                    Update
                  </Button>
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

Portfolio.getInitialProps = async () => {
  let portfolios = await fetchPortfolios();
  return {
    portfolios,
  };
};

export default Portfolio;
