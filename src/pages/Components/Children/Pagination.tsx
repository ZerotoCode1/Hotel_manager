import { CommonStyles } from "@/components/commonStyles";
import cachedKeys from "@/consts/cachedKeys";
import useGetListCats from "@/hooks/cats/useGetListCats";
import useFiltersHandler from "@/hooks/useFilters";

const PaginationDemo = () => {
  const { filters, handleChangePage } = useFiltersHandler({ page: 1, page_size: 10 });
  const { data } = useGetListCats(filters, { refetchKey: cachedKeys.listCats });
  console.log(data, "data");

  return (
    <div>
      <div className="" style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((item) => {
          return (
            <div className="">
              <img src={item.url} alt="" style={{}} />
            </div>
          );
        })}
      </div>
      <CommonStyles.Pagination totalPage={10} currentPage={1} handleChangePage={handleChangePage} />
    </div>
  );
};

export default PaginationDemo;
