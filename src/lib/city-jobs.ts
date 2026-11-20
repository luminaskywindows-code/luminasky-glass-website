/**
 * Real LuminaSky jobs per city, from the Business Hub. Neighbourhood only: no names, no addresses.
 * tags decide which service pages show the job first.
 */
export type JobTag = "glass" | "foggy" | "crank" | "door" | "storm" | "skylight" | "patio" | "commercial";

export interface CityJob {
  where: string;
  text: string;
  tags: JobTag[];
}

export const CITY_JOBS: Record<string, CityJob[]> = {
  toronto: [
    { where: "Brockton Village", text: "Replaced several sealed glass units, the largest about 28 x 55 inches, in an older semi. The original frames stayed in place.", tags: ["glass", "foggy"] },
    { where: "Leaside", text: "Swapped a failed 29 x 48 inch sealed unit in a living room window. Same frame, same trim, one install visit.", tags: ["glass", "foggy"] },
    { where: "North Toronto", text: "Replaced two skylights, one large at about 50 x 73 inches and one smaller, and resealed both openings.", tags: ["skylight"] },
    { where: "Glen Park", text: "Replaced a foggy 24 x 66 inch unit and a smaller pane in a detached home.", tags: ["foggy", "glass"] },
  ],
  "north-york": [
    { where: "Don Valley Village", text: "Replaced the glass in a narrow front door sidelite, about 9 x 64 inches, without touching the door.", tags: ["door", "glass"] },
    { where: "Newtonbrook", text: "Replaced the glass in three windows, including a large 70 x 55 inch picture window.", tags: ["glass", "foggy"] },
    { where: "York Mills", text: "Installed new clear glass in a tall 13 x 65 inch window.", tags: ["glass"] },
  ],
  scarborough: [
    { where: "Wexford", text: "Put frosted privacy glass into a small bathroom window and replaced the lock.", tags: ["glass", "crank"] },
    { where: "Scarborough", text: "Replaced a large 54 x 57 inch sealed unit in a picture window.", tags: ["glass", "foggy"] },
    { where: "Scarborough", text: "Supplied and installed a new screen door.", tags: ["storm", "door"] },
  ],
  etobicoke: [
    { where: "Etobicoke", text: "Replaced a very large 60 x 80 inch sealed unit in a living room window.", tags: ["glass", "foggy"] },
    { where: "Rexdale", text: "Replaced worn hinges and a crank and repaired a damaged window frame.", tags: ["crank"] },
  ],
  mississauga: [
    { where: "Erindale", text: "Supplied and installed a new storm door, about 35 x 82 inches.", tags: ["storm", "door"] },
    { where: "Mississauga", text: "Replaced several crank operators on casement windows in one visit.", tags: ["crank"] },
    { where: "Mississauga", text: "Replaced a crank and a lock plate and fitted new glass in a 26 x 55 inch casement.", tags: ["crank", "glass"] },
  ],
  brampton: [
    { where: "Brampton", text: "Replaced a cracked 23 x 43 inch sealed glass unit in a casement window. Same frame, same grilles, one install visit.", tags: ["glass"] },
    { where: "Brampton", text: "Replaced three skylights of different sizes and a screen in one project.", tags: ["skylight"] },
    { where: "Heart Lake", text: "Replaced a 28 x 52 inch skylight and sealed it to the roof.", tags: ["skylight"] },
    { where: "Brampton", text: "Fitted new glass and clips in a small window and repaired a screen door.", tags: ["glass", "storm"] },
  ],
  markham: [
    { where: "Unionville", text: "Replaced a tall 14 x 63 inch sealed unit beside a front entrance.", tags: ["glass", "door", "foggy"] },
    { where: "Markham", text: "Installed decorative glass in a 70 x 10 inch transom above a front door.", tags: ["door", "glass"] },
    { where: "Markham", text: "Replaced a small 13 x 28 inch sealed unit.", tags: ["glass", "foggy"] },
  ],
  "richmond-hill": [
    { where: "Richmond Hill", text: "Replaced a 50 x 50 inch skylight and resealed the curb.", tags: ["skylight"] },
    { where: "Richmond Hill", text: "Replaced a tall 20 x 64 inch sealed glass unit.", tags: ["glass", "foggy"] },
    { where: "Richmond Hill", text: "Replaced glass in a 19 x 38 inch window and the crank on the same window.", tags: ["glass", "crank"] },
  ],
  thornhill: [
    { where: "Thornhill", text: "Replaced several sealed units, small and large, in one home.", tags: ["glass", "foggy"] },
    { where: "Thornhill", text: "Replaced a tall 19 x 65 inch glass unit.", tags: ["glass", "foggy"] },
  ],
  woodbridge: [
    { where: "Woodbridge", text: "Replaced several sealed units, about 22 x 41 inches each.", tags: ["glass", "foggy"] },
    { where: "Woodbridge", text: "Replaced a large 32 x 70 inch glass unit.", tags: ["glass", "foggy", "patio"] },
  ],
  maple: [
    { where: "Maple", text: "Replaced a casement crank and a front door handle in the same visit.", tags: ["crank", "door"] },
    { where: "Maple", text: "Replaced a worn crank operator.", tags: ["crank"] },
  ],
  vaughan: [
    { where: "Kleinburg", text: "Replaced worn window hinges so the sash closes square again.", tags: ["crank"] },
  ],
  milton: [
    { where: "Beaty", text: "Replaced glass in a 22 x 64 inch window and the transom units above it.", tags: ["glass", "foggy"] },
    { where: "Milton", text: "Replaced cranks and hinges on casement windows.", tags: ["crank"] },
  ],
  hamilton: [
    { where: "Stoney Creek", text: "Replaced a 19 x 54 inch sealed unit.", tags: ["glass", "foggy"] },
    { where: "Hamilton", text: "Replaced hinges and cranks on several windows.", tags: ["crank"] },
  ],
  whitby: [
    { where: "Whitby", text: "Replaced two sealed units, about 23 x 46 inches.", tags: ["glass", "foggy"] },
    { where: "Whitby", text: "Replaced glass in a 22 x 50 inch window plus a crank and rail.", tags: ["glass", "crank"] },
    { where: "Whitby", text: "Replaced cranks, a lock and a small sealed unit in one visit.", tags: ["crank", "glass"] },
  ],
  orangeville: [
    { where: "Orangeville", text: "Replaced a large 59 x 62 inch window unit.", tags: ["glass"] },
    { where: "Orangeville", text: "Replaced glass in a 21 x 28 inch window and new handles.", tags: ["glass", "crank"] },
  ],
  caledon: [
    { where: "Bolton", text: "Replaced cranks and two 25 x 67 inch sealed units.", tags: ["crank", "glass", "foggy"] },
  ],
  innisfil: [
    { where: "Alcona", text: "Replaced a 21 x 60 inch sealed glass unit.", tags: ["glass", "foggy"] },
    { where: "Innisfil", text: "Replaced a crank, hinges and handles.", tags: ["crank"] },
  ],
  ajax: [
    { where: "Ajax", text: "Replaced living room glass, about 23 x 59 inches, plus cranks and a lock.", tags: ["glass", "crank", "foggy"] },
  ],
  barrie: [
    { where: "Barrie", text: "Replaced a 19 x 47 inch sealed unit.", tags: ["glass", "foggy"] },
  ],
  bradford: [
    { where: "Bradford", text: "Replaced a tall 15 x 63 inch glass unit.", tags: ["glass", "foggy"] },
  ],
  "king-city": [
    { where: "King City", text: "Replaced a crank and hinges on a casement window.", tags: ["crank"] },
  ],
  pickering: [
    { where: "Pickering", text: "Repaired a storm door.", tags: ["storm", "door"] },
    { where: "Pickering", text: "Replaced a broken crank operator.", tags: ["crank"] },
  ],
  oshawa: [
    { where: "Oshawa", text: "Replaced a crank and a window screen.", tags: ["crank"] },
  ],
  clarington: [
    { where: "Clarington", text: "Replaced a worn crank operator.", tags: ["crank"] },
  ],
  "east-gwillimbury": [
    { where: "East Gwillimbury", text: "Replaced two sealed units, one small and one large.", tags: ["glass", "foggy"] },
    { where: "East Gwillimbury", text: "Replaced a crank operator.", tags: ["crank"] },
  ],
  "halton-hills": [
    { where: "Halton Hills", text: "Repaired a window so it opens, closes and locks properly.", tags: ["crank"] },
  ],
};

const SERVICE_TAGS: Record<string, JobTag[]> = {
  "window-repair": ["glass", "crank", "foggy"],
  foggy: ["foggy", "glass"],
  "front-door": ["door", "storm", "glass"],
  cranks: ["crank"],
  patio: ["patio", "glass", "storm"],
  skylight: ["skylight"],
  commercial: ["commercial", "glass", "door"],
  emergency: ["glass", "door"],
};

/** Up to 3 jobs for the city, the ones that match the service first */
export function cityJobsFor(slug: string, service: string): CityJob[] {
  const jobs = CITY_JOBS[slug] || [];
  const want = SERVICE_TAGS[service] || [];
  const score = (j: CityJob) => want.reduce((s, t, i) => s + (j.tags.includes(t) ? 10 - i : 0), 0);
  return [...jobs].sort((a, b) => score(b) - score(a)).slice(0, 3);
}
