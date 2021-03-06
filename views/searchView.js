import { elements } from "../utils/utils";

export const searchView = () => {
    const markup = `
    <div class="hero">
    <div class="container container-input">
      <form  class="find-location" name="signup">
        <input type="text" class="search__field" name="text" placeholder="Find your location...">
        <input type="submit" name="submit" value="Find">
      </form>
    </div>
     `;

    elements.body.innerHTML = markup;
};

export const cityRender = res => {
    const markup = `
    <div class="city__woied" data-woeid="${res.woeid}">
        <h1 class="city__name">
        - ${res.name} -
        </h1>
        <p class="city__latlong">${res.lantLang.split(",").join(" ")}</p>
        </div>
`;

    document
        .querySelector(".container-input")
        .insertAdjacentHTML("afterend", markup);
};

export const renderError = res => {
    const markup = `
  <div class="error">
    <h1>Something went wrong. Please try again! 😎</h1>
  </div>
`;

    elements.body.innerHTML = markup;
};

export const getInput = () => {
    const queryValue = document.querySelector(".search__field").value;
    return queryValue;
};

export const clearInput = () =>
    (document.querySelector(".search__field").value = "");

// export const deleteItem = woeid => {
//     const city = document.querySelector(`[data-woeid="${woeid}"]`);
//     if (city) item.parentElement.removeChild(city);
// };
