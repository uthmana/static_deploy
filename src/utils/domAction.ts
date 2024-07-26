export const setFilterCounter = (): void => {
  const cards: any = document.querySelectorAll(".js-card");
  const selectedFilter: any = document.getElementById("selectedFilter");
  const selectedRegion: any = document.getElementById("selectedRegion");
  const searchResult: any = document.getElementById("searchResult");
  const totalItem: any = document.getElementById("totalItem");
  const continentFilter = selectedFilter.dataset?.filter;
  selectedRegion.textContent = continentFilter;
  totalItem.textContent = [...cards].length;
  searchResult.textContent = [...cards].filter(
    (item) => !item.classList.contains("hidden")
  )?.length;
};
