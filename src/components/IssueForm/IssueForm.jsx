import React, { useState } from 'react';
import './IssueForm.css'; // Import CSS for styling

const IssueForm = () => {
  const entriesPerPageOptions = [5, 10, 15, 20, 25];
  const [entriesPerPage, setEntriesPerPage] = useState(5); // Default entries per page
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for table
  const data = [
    { id: 1, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 2, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 3, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 4, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 5, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 6, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 7, from: '1-5-2000', to: '2-6-2002', type: 'Casual Leave', status: 'Approved' },
    { id: 8, from: '3-6-2000', to: '21-9-2002', type: 'Casual Leave', status: 'Pending' },
    { id: 9, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 10, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 11, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 12, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 13, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 14, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 15, from: '1-5-2000', to: '2-6-2002', type: 'Casual Leave', status: 'Approved' },
    { id: 16, from: '3-6-2000', to: '21-9-2002', type: 'Casual Leave', status: 'Pending' },
    { id: 17, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 18, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 19, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 20, from: '1-1-2000', to: '2-2-2002', type: 'Sick Leave', status: 'Approved' },
    { id: 21, from: '3-3-2000', to: '21-21-2002', type: 'Sick Leave', status: 'Pending' },
    { id: 22, from: '121-1-2000', to: '2-32-2002', type: 'Function', status: 'Rejected' },
    { id: 23, from: '1-5-2000', to: '2-6-2002', type: 'Casual Leave', status: 'Approved' },
    { id: 24, from: '3-6-2000', to: '21-9-2002', type: 'Casual Leave', status: 'Pending' },
  ];

  // Filter and paginate data
  const filteredData = data.filter(item =>
    item.from.includes(searchQuery) ||
    item.to.includes(searchQuery) ||
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  // Ensure we always show 3 pages max
  const pageRange = Math.min(totalPages, 3);
  const pageNumbers = [];

  if (totalPages > 3) {
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + 2, totalPages);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
  }

  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handlers
  const handleEntriesChange = e => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleSearch = e => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className="issue-form-wrapper">
      <div className="card">
        <div className="card-body">
          <div className="dataTable-wrapper">
            <div className="dataTable-top">
              <div className="dataTable-dropdown">
                <label>
                  <select
                    className="dataTable-selector"
                    value={entriesPerPage}
                    onChange={handleEntriesChange}
                  >
                    {entriesPerPageOptions.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>{' '}
                  entries
                </label>
              </div>
              <div className="dataTable-search">
                <input
                  className="dataTable-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="dataTable-container">
              <table className="table table-borderless dataTable-table">
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>LEAVE TYPE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                      <td>{item.from}</td>
                      <td>{item.to}</td>
                      <td>{item.type}</td>
                      <td>
                        <span
                          className={`badge ${
                            item.status === 'Approved'
                              ? 'bg-success'
                              : item.status === 'Pending'
                              ? 'bg-warning'
                              : 'bg-danger'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="dataTable-bottom">
              <div className="dataTable-info">
                Showing {filteredData.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1} to{' '}
                {Math.min(currentPage * entriesPerPage, filteredData.length)} of {filteredData.length}{' '}
                entries
              </div>
              <nav className="dataTable-pagination">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      &lt;
                    </button>
                  </li>
                  {pageNumbers.map(page => (
                    <li
                      key={page}
                      className={`page-item ${currentPage === page ? 'active' : ''}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      &gt;
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueForm;
