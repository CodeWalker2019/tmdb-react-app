import {useDispatch, useSelector} from "react-redux";
import style from "./Pages.module.css"
import { AnimateSharedLayout, motion } from "framer-motion"
import {changePage} from "../../../redux/actions/movies";

export default function Pages({pages}) {
  const currentPage = useSelector(state => state.movies.currentPage);
  const dispatch = useDispatch();

  return (
    <div className={style.pageNumbers}>
      <AnimateSharedLayout>
        {pages.map(pageNum => (
          <PageButton
            key={pageNum}
            pageNumber={pageNum}
            isActive={currentPage === pageNum}
            clickHandler={() => dispatch(changePage((pageNum)))}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
}

function PageButton({pageNumber, isActive, clickHandler}) {
  return (
    <div onClick={ clickHandler } className={style.link}>
      {pageNumber}
      {isActive && (
        <motion.div
          layoutId="selectedLink"
          className={style.selectedPage}
          transition={spring}
        />
      )}
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 50
};
