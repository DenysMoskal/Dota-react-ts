import React from "react";

import InputMatch from "@/components/Match/InputMatch";
import InfoMatch from "@/components/Match/InfoMatch";

import { fetchMatchData } from "@/store/Hero/matchSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const Match = () => {
  const [id, setId] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchMatchData(id));
    }
  }, [id]);

  return (
    <div>
      <h1 className="text-center mt-2 text-slate-200 text-[36px]">
        Match info
      </h1>
      <InputMatch setId={setId} />
      <InfoMatch />
    </div>
  );
};

export default Match;
