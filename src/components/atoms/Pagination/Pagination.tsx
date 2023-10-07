import PaginationLeftIcon from "@/src/assets/svg/PaginationLeftIcon";
import PaginationRightIcon from "@/src/assets/svg/PaginationRightIcon";
import { createModuleStyleExtractor } from "@/src/utils/css";
import styles from "./Pagination.module.scss";
const cx = createModuleStyleExtractor(styles);

const Pagination = () => {
  return (
    <div className={cx("pagination")}>
      <div className={cx("pagination__inside")}>
        <div className={cx("pagination__inside__previous")}>
          <span>
            <PaginationLeftIcon />
          </span>
        </div>
        <div className={cx("pagination__inside__links")}>
          <a className="pagination-a" href="#">
            1
          </a>

          <a href="#" className="pagination-a">
            2
          </a>

          <a className="pagination-a" href="#">
            3
          </a>
          <a href="#" className="pagination-a">
            4
          </a>
          <a href="#" className="pagination-a">
            5
          </a>
          <a href="#" className="pagination-a">
            6
          </a>
          <a href="#" className="pagination-a">
            7
          </a>
          <a href="#" className="pagination-a">
            8
          </a>
          <a href="#" className="pagination-a">
            9
          </a>

          <span className="dots">...</span>

          <a href="#" className="pagination-a">
            100
          </a>
        </div>
        <div className={cx("pagination__inside__next")}>
          <span>
            <PaginationRightIcon />
          </span>
          <div className={cx("pagination__inside__next_last")}>
            <div className={cx("pagination__inside__next_last_top")}>
              <p>Go to Page</p>
            </div>
            <p>99</p>
            <span>
              <PaginationRightIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
