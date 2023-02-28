export function selectTab(tabId) {
  return {
    type: "TAB_SELECTED",
    payload: tabId,
  };
}

//Vai juntar os paramentros e formar uma array
export function showTabs(...tabIds) {
  const tabsToShow = {};
  //forEach em cima da array
  tabIds.forEach((evento) => (tabsToShow[evento] = true));
  return {
    type: "TAB_SHOWED",
    payload: tabsToShow,
  };
}
