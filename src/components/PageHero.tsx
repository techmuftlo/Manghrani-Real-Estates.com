import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface PageHeroProps {
  title: string;
  breadcrumb?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageHero({
  title,
  breadcrumb,
  breadcrumbs,
  bgImage = "/assets/images/innerpage/bg/page-bg.jpeg",
}: PageHeroProps) {
  return (
    <section
      className="page-hero bg_cover p-r z-1"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="page-content text-center">
              <h1>{title}</h1>
              <ul className="breadcrumb-link">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {breadcrumbs ? (
                  breadcrumbs.map((item, index) =>
                    item.path ? (
                      <li key={index}>
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ) : (
                      <li key={index} className="active">
                        {item.label}
                      </li>
                    )
                  )
                ) : breadcrumb ? (
                  <li className="active">{breadcrumb}</li>
                ) : (
                  <li className="active">{title}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
