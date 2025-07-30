export const issuePieChart = [
  { id: 0, value: 254, label: "Open Issues", color: "#82B7CA" }, //#20236D
  { id: 1, value: 143, label: "Resolved", color: "#82ca9d" },
];

export const totalIssuePieChart = [
  { id: 0, value: 38, label: "Blocker", color: "#fecaca" },
  { id: 1, value: 571, label: "Critical", color: "#fef08a" },
  { id: 2, value: 736, label: "Major", color: "#fed7aa" },
  { id: 3, value: 464, label: "Normal", color: "#e9d5ff" },
  { id: 4, value: 65, label: "Minor", color: "#bae6fd" },
];

export const jioPcOpenIssuePieChart = [
  { id: 0, value: 5, label: "Blocker", color: "#fecaca" },
  { id: 1, value: 127, label: "Critical", color: "#fef08a" },
  { id: 2, value: 173, label: "Major", color: "#fed7aa" },
  { id: 3, value: 50, label: "Normal", color: "#e9d5ff" },
  { id: 4, value: 6, label: "Minor", color: "#bae6fd" },
];

export const launchBlockerIssuePieChart = [
  { id: 0, value: 2, label: "Blocker", color: "#fecaca" },
  { id: 1, value: 10, label: "Critical", color: "#fef08a" },
  { id: 2, value: 5, label: "Major", color: "#fed7aa" },
  { id: 3, value: 0, label: "Normal", color: "#e9d5ff" },
  { id: 4, value: 1, label: "Minor", color: "#bae6fd" },
];

export const jioPcWorkItems = [
  {
    title: "Launch Blocker",
    count: 18,
    color: "bg-red-200",
    text: "text-red-800",
    definition:
      "Launch blocker are the issues which are needed to be fixed before launching the product.",
  },
  {
    title: "Key Blocker/Critical",
    count: 71,
    color: "bg-orange-200",
    text: "text-orange-800",
    definition:
      "Key Blocker/Critical are the issues which are more product specific",
  },
  {
    title: "X2 & X4 Issues",
    count: 242,
    color: "bg-yellow-200",
    text: "text-yellow-800",
    definition: "Open Issues for both X2 & X4",
  },
  {
    title: "X2 Specific",
    count: 2,
    color: "bg-purple-200",
    text: "text-purple-800",
    definition: "Open issues for X2 Specific",
  },
  {
    title: "X4 Specific",
    count: 15,
    color: "bg-sky-200",
    text: "text-sky-800",
    definition: "Open issues for X4 Specific.",
  },
  {
    title: "Ready for test",
    count: 8,
    color: "bg-green-200",
    text: "text-green-800",
    definition: "Issues which are ready for testing",
  },
];

export const categoryObservations = [
  {
    title: "STB and remote",
    count: 1,
    color: "bg-red-200",
    text: "text-red-800",
    definition:
      "STB and remote issues are related to the hardware i.e. STB box and remote.",
  },
  {
    title: "Native Apps",
    count: 20,
    color: "bg-orange-200",
    text: "text-orange-800",
    definition:
      "Native Apps issue which are related to the Native apps of Accops.",
  },
  {
    title: "OS Issues",
    count: 38,
    color: "bg-yellow-200",
    text: "text-yellow-800",
    definition: "Issues related to the OS of the Accops.",
  },
  {
    title: "Peripherals Issues",
    count: 2,
    color: "bg-purple-200",
    text: "text-purple-800",
    definition: "Issues related to the peripherals such as USB and printers.",
  },
  {
    title: "Browser Issues",
    count: 5,
    color: "bg-sky-200",
    text: "text-sky-800",
    definition: "Issues which have been raised for Browser.",
  },
  {
    title: "Registration Flow",
    count: 22,
    color: "bg-green-200",
    text: "text-green-800",
    definition: "Issues which are related to the Registration flow journey.",
  },
  {
    title: "Video Streaming",
    count: 0,
    color: "bg-red-200",
    text: "text-red-800",
    definition: "Issues which are related to Video Streaming ",
  },
  {
    title: "Wifi and Internet",
    count: 1,
    color: "bg-yellow-200",
    text: "text-yellow-800",
    definition: "Issues which are related to wifi and internet.",
  },
  {
    title: "Keyboard and Mouse",
    count: 2,
    color: "bg-orange-200",
    text: "text-orange-800",
    definition: "Native Apps issue which are related to Keyboard and Mouse.",
  },
];

//Graph Dashboard
// export const jioPcAreaChartData = [
//   {
//     name: "Week 1", //10-14 March
//     Issues: 31,
//   },
//   {
//     name: "Week 2", //17-21 March
//     Issues: 46,
//   },
//   {
//     name: "Week 3", //24-28 March
//     Issues: 82,
//   },
//   {
//     name: "Week 4", //31 March - 8 April
//     Issues: 74,
//   },

export const jioPcAreaChartData = [
  {
    name: "April",
    Issues: 193,
  },
  {
    name: "May",
    Issues: 211,
  },
  {
    name: "June",
    Issues: 180,
  },
  {
    name: "July",
    Issues: 226,
  },
];
