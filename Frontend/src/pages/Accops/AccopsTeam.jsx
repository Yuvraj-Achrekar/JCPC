import { useEffect, useState } from "react";
import TeamData from "../../db/TeamData.json";

import {
  getTodaysBirthdays,
  getUpcomingBirthdaysThisMonth,
} from "../../hooks/birthday";

import TeamSection from "../../components/TeamSection";
import SortControls from "../../components/SortControl";
import BirthdaySection from "../../components/BirthdaySection";
import { useSelector } from "react-redux";

const AccopsTeam = () => {
  const sortByNameAscending = (array) =>
    [...array].sort((a, b) => a.name.localeCompare(b.name));

  const sortByScore = (array, order = "asc") => {
    return [...array].sort((a, b) => {
      if (a.score.current === b.score.current) {
        // If scores are equal, sort by Name
        return a.name.localeCompare(b.name);
      }
      // Otherwise, sort by score
      return order === "asc"
        ? a.score.current - b.score.current
        : b.score.current - a.score.current;
    });
  };
  const profiles = useSelector((state) => state.profile.profiles);
  const [data, setData] = useState(sortByScore(profiles, "desc"));
  const [activeSort, setActiveSort] = useState("High");
  const todayBirthday = getTodaysBirthdays(TeamData);
  const upcomingBirthday = getUpcomingBirthdaysThisMonth(TeamData);

  useEffect(() => {
    if (profiles) {
      setData(sortByScore(profiles, "desc"));
      // setIsLoading(false);
    }
  }, [profiles]);
  const handleSortByName = () => {
    setData(sortByNameAscending(profiles));
    setActiveSort("Name");
  };

  const handleSortByScoreAsc = () => {
    setData(sortByScore(profiles, "asc"));
    setActiveSort("Low");
  };

  const handleSortByScoreDesc = () => {
    setData(sortByScore(profiles, "desc"));
    setActiveSort("High");
  };

  return (
    <div className="flex h-screen w-full flex-1 bg-gray-100">
      <TeamSection data={data} />
      <section className="w-1/4 bg-contain shadow-lg">
        <SortControls
          activeSort={activeSort}
          handleSortByName={handleSortByName}
          handleSortByScoreAsc={handleSortByScoreAsc}
          handleSortByScoreDesc={handleSortByScoreDesc}
        />
        <BirthdaySection
          profiles={profiles}
          todayBirthday={todayBirthday}
          upcomingBirthday={upcomingBirthday}
        />
      </section>
    </div>
  );
};

export default AccopsTeam;
