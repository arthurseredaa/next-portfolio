import { Layout } from "@/components/Layout/Layout";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "@/apollo/queries";
import withApollo from "@/hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';

const PortfolioDetail = ({ query }) => {
  const {data} = useQuery(GET_PORTFOLIO, {variables: {id: query.id}});

  const {
    title,
    jobTitle,
    companyWebsite,
    location,
    startDate,
    endDate,
    description
  } = data && data.portfolio || {};

  return (
    <Layout page="Portfolio">
      <div className="portfolio-detail">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">{title}</h1>
            <p className="lead">{jobTitle}</p>
            <p>
              <a
                className="btn btn-lg btn-success"
                href={companyWebsite}
                role="button"
              >
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
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => ({query})

export default withApollo(PortfolioDetail, {getDataFromTree});
