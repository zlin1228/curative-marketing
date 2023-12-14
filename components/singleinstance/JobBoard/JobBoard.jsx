import { useEffect } from 'react';
import { useState } from 'react';

import ComponentLink from 'components/link/link.component';
import {
  JobBoardLink,
  JobBoardWrapper,
  JobCol,
  JobList,
  JobSingle,
  TextCol,
} from 'components/singleinstance/JobBoard/JobBoard.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const JobBoard = ({ component }) => {
  const { body, heading } = component;
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const fullData = false; // set to true to add depts, office, etc extra data
      const apiUrl = `https://api.greenhouse.io/v1/boards/curativeinc/jobs?content=${fullData}`;

      const data = await fetch(apiUrl);
      const jobsRes = await data.json();

      const { jobs } = jobsRes;

      const newJobList = jobs
        .sort((x, y) => {
          const xTime = new Date(x.updated_at).getTime();
          const yTime = new Date(y.updated_at).getTime();
          switch (xTime >= yTime) {
            case true:
              return -1;
            default:
              return 1;
          }
        })
        .slice(0, 3);

      if (newJobList.length > 0) {
        setJobList(newJobList);
      } else {
        setJobList([]);
      }
    };

    getJobs().catch(console.error);
  }, []);

  return (
    <JobBoardWrapper>
      <div fluid className="wrapper">
        <TextCol className="grid-container">
          {heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} className="mb-4" />}
          {body && OptimizedRichText(body)}
          <div className="bg-color" />
        </TextCol>
        <JobCol className="grid-container">
          <h3>{jobList.length ? 'New Openings' : 'No New Openings'}</h3>
          {jobList.length > 0 && (
            <JobList>
              {jobList.map((job, index) => {
                const {
                  title,
                  location: { name },
                  absolute_url: url,
                } = job;

                return (
                  <JobSingle key={`${title}-${index}`}>
                    <div className="job-meta">
                      {title && <h5 className="job-title">{title}</h5>}
                      {name && <p className="job-location">{name}</p>}
                    </div>
                    {url && (
                      <div className="apply-btn-container">
                        <ComponentLink href={url}>
                          <JobBoardLink className="apply-btn">Apply</JobBoardLink>
                        </ComponentLink>
                      </div>
                    )}
                  </JobSingle>
                );
              })}
            </JobList>
          )}
        </JobCol>
      </div>
    </JobBoardWrapper>
  );
};

export default JobBoard;
