import React, { useState } from 'react';
import styles from './OutingList.module.css'; // Import CSS module

const OutingList = () => {
  // Sample data
  const data = [
    { id: 1, date: '1-1-2000', reason: 'Personal', status: 'Approved' },
    { id: 2, date: '3-3-2000', reason: 'Medical', status: 'Pending' },
    { id: 3, date: '12-12-2000', reason: 'Family Event', status: 'Rejected' },
    { id: 4, date: '15-5-2001', reason: 'Vacation', status: 'Approved' },
    { id: 5, date: '20-7-2002', reason: 'Conference', status: 'Pending' },
    { id: 6, date: '10-10-2003', reason: 'Emergency', status: 'Rejected' },
    { id: 7, date: '22-11-2004', reason: 'Training', status: 'Approved' },
    { id: 8, date: '5-5-2005', reason: 'Workshop', status: 'Pending' },
    { id: 9, date: '8-8-2006', reason: 'Meeting', status: 'Rejected' },
    { id: 10, date: '1-1-2000', reason: 'Personal', status: 'Approved' },
    { id:11, date: '3-3-2000', reason: 'Medical', status: 'Pending' },
    { id: 12, date: '12-12-2000', reason: 'Family Event', status: 'Rejected' },
    { id: 13, date: '15-5-2001', reason: 'Vacation', status: 'Approved' },
    { id: 14, date: '20-7-2002', reason: 'Conference', status: 'Pending' },
    { id: 15, date: '10-10-2003', reason: 'Emergency', status: 'Rejected' },
    { id: 16, date: '22-11-2004', reason: 'Training', status: 'Approved' },
    { id: 17, date: '1-1-2000', reason: 'Personal', status: 'Approved' },
    { id: 18, date: '3-3-2000', reason: 'Medical', status: 'Pending' },
    { id: 19, date: '12-12-2000', reason: 'Family Event', status: 'Rejected' },
    { id: 20, date: '15-5-2001', reason: 'Vacation', status: 'Approved' },
    { id: 21, date: '20-7-2002', reason: 'Conference', status: 'Pending' },
    { id: 22, date: '10-10-2003', reason: 'Emergency', status: 'Rejected' },
    { id: 23, date: '22-11-2004', reason: 'Training', status: 'Approved' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  // Filter data based on search query
  const filteredData = data.filter(
    (item) =>
      item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle entries per page change
  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing entries per page
  };

  // Helper function to get visible pages
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    if (currentPage === 1) {
      return [1, 2, 3];
    }
    if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div className={styles.outingListWrapper}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <div
            className={`${styles.dataTableWrapper} dataTable-loading no-footer sortable searchable fixed-columns`}
          >
            <div className={styles.dataTableTop}>
              <div className={styles.dataTableDropdown}>
                <label>
                  <select
                    className={styles.dataTableSelector}
                    value={entriesPerPage}
                    onChange={handleEntriesChange}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>
                  entries per page
                </label>
              </div>
              <div className={styles.dataTableSearch}>
                <input
                  className={styles.dataTableInput}
                  placeholder="Search..."
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className={styles.dataTableContainer}>
              <table
                className={`${styles.table} ${styles.tableBorderless} dataTable-table`}
              >
                <thead>
                  <tr>
                    <th>S.NO</th>
                    <th>DATE</th>
                    <th>REASON</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{(currentPage - 1) * entriesPerPage + index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.reason}</td>
                      <td>
                        <span
                          className={`${styles.badge} ${
                            item.status === 'Approved'
                              ? styles.bgSuccess
                              : item.status === 'Pending'
                              ? styles.bgWarning
                              : styles.bgDanger
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
            <div className={styles.dataTableBottom}>
              <div className={styles.dataTableInfo}>
                Showing {paginatedData.length} of {filteredData.length} entries
              </div>
              <nav className={styles.dataTablePagination}>
                <ul className={styles.dataTablePaginationList}>
                  {/* Previous Arrow */}
                  <li
                    className={`${
                      currentPage === 1 ? styles.disabled : ''
                    } ${styles.pageArrow}`}
                    onClick={() =>
                      currentPage > 1 && setCurrentPage(currentPage - 1)
                    }
                  >
                    &lt;
                  </li>

                  {/* Visible Pagination Numbers */}
                  {getVisiblePages().map((page) => (
                    <li
                      key={page}
                      className={`${
                        currentPage === page ? styles.active : ''
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </li>
                  ))}

                  {/* Next Arrow */}
                  <li
                    className={`${
                      currentPage === totalPages ? styles.disabled : ''
                    } ${styles.pageArrow}`}
                    onClick={() =>
                      currentPage < totalPages && setCurrentPage(currentPage + 1)
                    }
                  >
                    &gt;
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

export default OutingList;
