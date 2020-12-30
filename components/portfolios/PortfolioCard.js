import Link from "next/link";

export const PortfolioCard = ({
  title,
  company,
  companyWebsite,
  jobTitle,
  description,
  startDate,
  endDate,
  _id,
}) => (
  <Link href={`/portfolios/[id]`} as={`/portfolios/${_id}`}>
    <div className="col-md-4">
      <div className="card subtle-shadow no-border">
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
    </div>
  </Link>
);
