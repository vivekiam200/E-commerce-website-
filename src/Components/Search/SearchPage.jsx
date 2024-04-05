import { useSelector } from "react-redux";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import useUpdateLoadingState from "../../Hooks/App/useUpdateLoadingState";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import SkeletonCards from "../Shared/SkeletonLoaders/ProductCard/SkeletonCards";
import s from "./SearchPage.module.scss";
import SearchProducts from "./SearchProducts";

const SearchPage = () => {
  const { searchProducts, loadingSearchProducts } = useSelector(
    (state) => state.products
  );
  useUpdateLoadingState({
    loadingState: loadingSearchProducts,
    loadingKey: "loadingSearchProducts",
    delays: SIMPLE_DELAYS,
    dependencies: [searchProducts],
  });
  const isWebsiteOnline = useOnlineStatus();

  return (
    <div className="container">
      <main className={s.searchPage}>
        <PagesHistory history={["/", "Results"]} />

        <section className={s.products} id="search-page">
          {(loadingSearchProducts || !isWebsiteOnline) && <SkeletonCards />}
          {!loadingSearchProducts && isWebsiteOnline && <SearchProducts />}
        </section>
      </main>
    </div>
  );
};
export default SearchPage;
