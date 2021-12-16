import React, {useState} from 'react'
import styles from "./Paginator.module.scss";

export const Paginator = ({currentPage, pageSize, totalItemsCount, onChangedPage, portionSize = 20}: PropsType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let numberPages = []
  for (let i = 1; i <= pagesCount; i++) {
  // for (let i = 1; i <= 16; i++) {
    numberPages.push(i)
  }

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 &&
      <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}

      {numberPages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span
              // className={ cn({
              //   [styles.selectedPage] : currentPage === p
              // }, styles.pageNumber)}
              className={currentPage === p ? styles.selectedPage : styles.pageNumber}
              // className={currentPage === p ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}

              key={p}
              onClick={(e ) => onChangedPage(p)}
            >{p}</span>
          )
        })}

      {portionCount > portionNumber &&
      <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

      {/*{numberPages.map(num => (*/}
      {/*  <div*/}
      {/*    key={num}*/}
      {/*    className={currentPage === num ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}*/}
      {/*    onClick={() => {*/}
      {/*      onChangedPage(num)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {num}*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  )
}

type PropsType = {
  currentPage: number
  pageSize: number
  totalItemsCount: number
  onChangedPage: (numberCurrentPage: number) => void
  portionSize?: number
}