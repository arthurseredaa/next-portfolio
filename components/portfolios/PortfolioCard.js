import Link from "next/link";
import { Button } from "react-bootstrap";

export const PortfolioCard = ({
  title,
  company,
  companyWebsite,
  jobTitle,
  description,
  startDate,
  endDate,
  _id,
  updatePortfolio,
  deletePortfolio,
}) => (
  <div className="col-md-4" style={{margin: "20px 0"}}>
    <Link href={`/portfolios/${_id}`}>
      <div className="card subtle-shadow no-border" style={{minHeight: "20vh"}}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {jobTitle}, {company}
          </h6>
          <p className="card-text fs-2">{description}</p>
        </div>
        <div className="card-footer no-border">
          <small className="text-muted">
            {startDate} - {endDate}
          </small>
        </div>
      </div>
    </Link>
    <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
    <Button variant="warning" onClick={() => updatePortfolio({variables: {id: _id}})}>
      Update
    </Button>
    <Button variant="danger" onClick={() => deletePortfolio({variables: {id: _id}})}>
      Delete
    </Button>
    </div>
  </div>
);
