import axios from "axios";
import {Layout} from "@/components/Layout/Layout";

const fetchPortfolioById = (id) => {
  const query = `query Portfolio($id: ID) {
    portfolio(id: $id) {
      _id,
      title,
      company,
      companyWebsite,
      jobTitle,
      description,
      startDate,
      endDate,
      location
    }
  }`;
  const variables = {id}

  return axios
    .post("http://localhost:3000/graphql", { query, variables })
    .then(({ data }) => data.data)
    .then((data) => data.portfolio)
};

const PortfolioDetail = ({portfolio}) => {

  const {title, jobTitle, location, company, companyWebsite, description, startDate, endDate} = portfolio;

  return (
    <Layout page="Portfolio">
      <div className="portfolio-detail">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">{title}</h1>
            <p className="lead">{jobTitle}</p>
            <p>
              <a className="btn btn-lg btn-success" href={companyWebsite} role="button">
                See Company
              </a>
            </p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4 className="title">Location</h4>
              <p className="text">{location}</p>

              <h4 className="title">Start Date</h4>
              <p className="text">{startDate}</p>
            </div>

            <div className="col-lg-6">
              {/* TODO: days later... */}
              <h4 className="title">Days</h4>
              <p className="text">44</p>

              <h4 className="title">End Date</h4>
              <p className="text">{endDate}</p>
            </div>
            <div className="col-md-12">
              <hr />
              <h4 className="title">Description</h4>
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  const portfolio = await fetchPortfolioById(query.id);

  return {
    portfolio,
  };
};

export default PortfolioDetail;
