import React from "react";

const Demo = () => {
  return (
    <>
      <div className="study">
        <div className="container1">
          <h1>Study with us</h1>
          <div className="row">
            <div className="stat-row">
              <div className="percentage">90%</div>
              <p>Graduates who are working in the entertainment industry</p>
              <div className="enrollment">
                <h2>Enrollment</h2>
                <div className="period">
                  {/* <h3>
                    SUMMER 2021
                </h3> */}
                  <button className="btn">SUMMER 2021</button>
                </div>
                <div className="period">
                  {/* <h3>
                    SUMMER 2021
                </h3> */}
                  <button className="btn">AUTUM 2021</button>
                </div>
                <div className="period">
                  {/* <h3>
                    SUMMER 2021
                </h3> */}
                  <button className="btn">WINTER 2021</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-2">
          <div className="row">
            <div className="stat-row">
              <div className="percentage">80%</div>
              <p>The importance for your portfolio when job junting</p>
            </div>
            <div className="info">
              <p>Enrollment Deadline</p>
              <p className="date">05 August</p>
              <p>Commencement</p>
              <p className="date">03 October</p>
              <p>Completion Date</p>
              <p className="date">12 September</p>
            </div>
          </div>
        </div>

        <div className="choose">
          <h2>Why choose us?</h2>
          <ul className="benefits-list">
            <li>✓ Experienced mentors</li>
            <li>✓ Proven track record</li>
            <li>✓ Effective process</li>
            <li>✓ Strong industry network</li>
            <li>✓ Relevant courses</li>
          </ul>
          <button className="apply-btn">Apply Now</button>
        </div>
        {/* <div className='enrollment'>
        <h2>
            Enrollment
        </h2>
        <div className='periods'>
            <div className='period'>
                <h3>
                SUMMER 2021
            </h3>
            </div>

            <div className='period'>
            <h3>
                AUTUM 2021
            </h3>

            <div className="info">
              <p>Enrollment Deadline</p>
              <p className="date">05 August</p>
              <p>Commencement</p>
              <p className="date">03 October</p>
              <p>Completion Date</p>
              <p className="date">12 September</p>
            </div>
        </div>
        <div className='period'>
            <h3>
                Winter 2021
            </h3>
        </div>
            
        </div>
        
        


    </div> */}
      </div>
    </>
  );
};

export default Demo;
