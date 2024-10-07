import React from 'react';

const MonthlySales = () => {
    return (
        <div className="col-12 col-lg-4 col-xxl-3 d-flex">
            <div className="card flex-fill w-100">
                <div className="card-header">
                    <h5 className="card-title mb-0">Monthly Saless</h5>
                </div>
                <div className="card-body d-flex w-100">
                    <div className="align-self-center chart chart-lg">
                        <canvas id="chartjs-dashboard-bar"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlySales;
