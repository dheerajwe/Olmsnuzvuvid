import './Profile.css';
import dj from '../../assets/dj.jpeg';
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="col-xl-4 col-md-12">
        <div className="card profile-card">
          <div className="card-body d-flex flex-column align-items-center">
           <img src={dj} alt="Profile" className="rounded-circle" />
            <h2 className="profile-name">Mande Dheeraj</h2>
            <h3 className="profile-id">N200800 | E-3</h3>
          </div>
        </div>
      </div>

      <div className="col-xl-8 col-md-12">
        <div className="card">
          <div className="card-body pt-3">
            <ul className="nav nav-tabs nav-tabs-bordered" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-overview"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  View Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-edit"
                  aria-selected="true"
                  role="tab"
                >
                  Edit Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-change-password"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  Change Password
                </button>
              </li>
            </ul>
            <div className="tab-content pt-2">
              <div className="tab-pane fade" id="profile-overview" role="tabpanel">
                <h5 className="card-title">Student Details</h5>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Full Name</div>
                  <div className="col-lg-9 col-md-8">Mande Dheeraj</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">I.D Number</div>
                  <div className="col-lg-9 col-md-8">N200800</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Email</div>
                  <div className="col-lg-9 col-md-8">n200800@rguktn.ac.in</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Class Room</div>
                  <div className="col-lg-9 col-md-8">CS-06</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Academic Block</div>
                  <div className="col-lg-9 col-md-8">AB-3</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Hostel Room</div>
                  <div className="col-lg-9 col-md-8">FF-25</div>
                </div>
                <h5 className="card-title">Parent Details</h5>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Father</div>
                  <div className="col-lg-9 col-md-8">Babu Rao</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Mother</div>
                  <div className="col-lg-9 col-md-8">Kanya Kumari</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Guardian</div>
                  <div className="col-lg-9 col-md-8">Raveendra</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Mother Mobile</div>
                  <div className="col-lg-9 col-md-8">63037 38847</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Father Mobile</div>
                  <div className="col-lg-9 col-md-8">63037 38847</div>
                </div>
                <h5 className="card-title">Address</h5>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Village/Town</div>
                  <div className="col-lg-9 col-md-8">Nuzvid</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">District</div>
                  <div className="col-lg-9 col-md-8">Vijayawada</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">State</div>
                  <div className="col-lg-9 col-md-8">Andhra Pradesh</div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-4 label">Pin Code</div>
                  <div className="col-lg-9 col-md-8">534406</div>
                </div>
              </div>

              <div className="tab-pane fade active show" id="profile-edit" role="tabpanel">
                <form>
                  <div className="row mb-3">
                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="fullName" type="text" className="form-control" id="fullName" value="Mande Dheeraj" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="className" className="col-md-4 col-lg-3 col-form-label">Class</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="className" type="text" className="form-control" id="className" value="CSE-06" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="academicYear" className="col-md-4 col-lg-3 col-form-label">Academic Year</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="academicYear" type="text" className="form-control" id="academicYear" value="E3" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="academicBlock" className="col-md-4 col-lg-3 col-form-label">Academic Block</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="academicBlock" type="text" className="form-control" id="academicBlock" value="AB-1" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="hostelBlock" className="col-md-4 col-lg-3 col-form-label">Hostel Block</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="hostelBLock" type="text" className="form-control" id="hostelBLock" value="FF-25" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="studentEmail" className="col-md-4 col-lg-3 col-form-label">Email</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="studentEmail" type="text" className="form-control" id="studentEmail" value="n200800@rguktn.ac.in" />
                    </div>
                  </div>
                </form>
              </div>

              <div className="tab-pane fade pt-3" id="profile-change-password" role="tabpanel">
                <form>
                  <div className="row mb-3">
                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="currentPassword" type="password" className="form-control" id="currentPassword" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="newPassword" type="password" className="form-control" id="newPassword" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-md-4 col-lg-3 col-form-label">Confirm Password</label>
                    <div className="col-md-8 col-lg-9">
                      <input name="confirmPassword" type="password" className="form-control" id="confirmPassword" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Change Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;