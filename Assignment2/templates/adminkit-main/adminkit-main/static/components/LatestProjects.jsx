import React from 'react';

const LatestProjects = () => {
    return (
        <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-fill">
                <div className="card-header">
                    <h5 className="card-title mb-0">Latest Projects</h5>
                </div>
                <table className="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="d-none d-xl-table-cell">Start Date</th>
                            <th className="d-none d-xl-table-cell">End Date</th>
                            <th>Status</th>
                            <th className="d-none d-md-table-cell">Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample Data */}
                        <tr>
                            <td>Project Apollo</td>
                            <td className="d-none d-xl-table-cell">01/01/2023</td>
                            <td className="d-none d-xl-table-cell">31/06/2023</td>
                            <td><span className="badge bg-success">Done</span></td>
                            <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                        </tr>
                        <tr>
                            <td>Project Fireball</td>
                            <td className="d-none d-xl-table-cell">01/01/2023</td>
                            <td className="d-none d-xl-table-cell">31/06/2023</td>
                            <td><span className="badge bg-danger">Cancelled</span></td>
                            <td className="d-none d-md-table-cell">William Harriss</td>
                        </tr>
                        {/* More projects can be added here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LatestProjects;
