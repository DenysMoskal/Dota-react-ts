import axios from "axios";

import { Match } from "@testing-library/react";

export const fetchMatch = async (id: string): Promise<Match | {}> => {
  const postResponse = await axios.post(
    `https://api.opendota.com/api/request/${id}`
  );
  const responce = postResponse;
  const jobData = responce.data.job.jobId;
  const getResponse = await axios.get(
    `https://api.opendota.com/api/request/${jobData}`
  );

  const responese = getResponse;

  return responese.data;
};
