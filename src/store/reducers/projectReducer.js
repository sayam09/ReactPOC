const initState = {
  projects: [
    {
      id: "1",
      title: "Eventfarm - SFDC",
      content: "Salesforce Integration"
    },
    {
      id: "2",
      title: "Eventfarm - Android Development",
      content: "Salesforce Integration"
    },
    {
      id: "3",
      title: "Eventfarm - IOS Development",
      content: "Salesforce Integration"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
