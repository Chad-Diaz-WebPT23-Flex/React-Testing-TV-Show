import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
const episodes = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
  },
  {
    id: 578663,
    url:
      "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
    name: "Chapter Two: The Weirdo on Maple Street",
    season: 1,
    number: 2,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
  },
  {
    id: 578664,
    url:
      "http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
    name: "Chapter Three: Holly, Jolly",
    season: 1,
    number: 3,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
  },
];

test("test that Episodes.js renders correctly", () => {
    const { rerender, queryByTestId, getAllByTestId } = render(<Episodes episodes={[]} />);

    expect(queryByTestId(/episodes/i)).toBeNull();

    rerender(<Episodes episodes={episodes}/>)
    expect(getAllByTestId(/episodes/i)).toHaveLength(3)
})