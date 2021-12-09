import React from 'react'
import styles from "./Paginator.module.scss";

export const Paginator = ({currentPage, pageSize, totalUsersCount, onChangedPage}: PropsType) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let numberPages = []
  // for (let i = 1; i <= pagesCount; i++) {
  for (let i = 1; i <= 16; i++) {
    numberPages.push(i)
  }

  return (
      <div className={styles.paginator}>
        {numberPages.map(num => (
          <div
            key={num}
            className={currentPage === num ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}
            onClick={() => {
              onChangedPage(num)
            }}
          >
            {num}
          </div>
        ))}
      </div>
  )
}

type PropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  onChangedPage: (numberCurrentPage: number) => void
}