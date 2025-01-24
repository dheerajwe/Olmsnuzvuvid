// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Dash.css';
import logo from '../../assets/news.jpeg';

const DashboardCards = () => {
  return (
    <div className="dashboard-cards-container" style={{ marginLeft: '310px' }}>
      <div className="row dashboard">
        {/* Outings Card */}
        <div className="col-xxl-6 col-md-6 mb-4"> {/* Add mb-4 for margin-bottom */}
          <div className="card info-card sales-card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Outings<span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-cart"></i>
                </div>
                <div className="ps-3">
                  <h6>1</h6>
                  <span className="text-success small pt-1 fw-bold">2</span> <span className="text-muted small pt-2 ps-1">Left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaves Card */}
        <div className="col-xxl-6 col-md-6 mb-4"> {/* Add mb-4 for margin-bottom */}
          <div className="card info-card revenue-card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Leaves<span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>0</h6>
                  <span className="text-success small pt-1 fw-bold">1</span> <span className="text-muted small pt-2 ps-1">Left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News & Updates (Below Outings) */}
        <div className="col-xxl-6 col-md-6 mb-4"> {/* Add mb-4 for margin-bottom */}
          <div className="card info-card news-card">
            <div className="card-body">
              <h5 className="card-title">News & Updates <span>| Today</span></h5>
              <div className="news">
                <div className="post-item clearfix">
                  <img src={logo} alt="News" />
                  <h4><a href="#">Dusserah Vacation from Oct-6</a></h4>
                  <p>Application of leaves will open on Oct5</p>
                </div>
                <div className="post-item clearfix">
                  <img src={logo} alt="News" />
                  <h4><a href="#">Devara Release Holiday from sept-27</a></h4>
                  <p>Go safe Enjoy and come</p>
                </div>
                <div className="post-item clearfix">
                  <img src={logo} alt="News" />
                  <h4><a href="#">Outings on next Sunday</a></h4>
                  <p>Cancelled due to Heavy Rains</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity (Below Leaves) */}
        <div className="col-xxl-6 col-md-6">
          <div className="card info-card activity-card">
            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>
              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">Outing Applied</div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                  <div className="activity-content">Outing under pending</div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">1 hour</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">Outing Application forwarded to Dean</div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">2 hours</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">Outing Approved</div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">2hr 25min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">Outing Biometry authenticated</div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                  <div className="activity-content">Student Went outside of college</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCards;
