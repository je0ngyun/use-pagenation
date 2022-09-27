import React from 'react'
import usePagenation from '../hooks/usePagenation'
import PropTypes from 'prop-types'

const PagenationBar = ({ numOfPage, totalPage }) => {
  const {
    pagelist,
    goNextSection,
    goBeforeSection,
    goFirstSection,
    goLastSection,
    goNext,
    goBefore,
    setTotalPage,
    setPage,
    currentPage,
  } = usePagenation({ numOfPage, totalPage })

  return (
    <div className="App">
      <main className="container">
        <button onClick={() => goFirstSection()}>{'First'}</button>
        <button onClick={() => goBeforeSection()}>{'<<'}</button>
        <button onClick={() => goBefore()}>{'<'}</button>
        <ul className="pages" aria-labelledby="pages">
          {pagelist.map((page) => (
            <li
              onClick={() => setPage(page)}
              className={currentPage === page ? 'selected' : ''}
              data-testid={currentPage === page ? 'selected' : ''}
              key={page}
            >
              {page}
            </li>
          ))}
        </ul>
        <button onClick={() => goNext()}>{'>'}</button>
        <button onClick={() => goNextSection()}>{'>>'}</button>
        <button onClick={() => goLastSection()}>{'Last'}</button>
      </main>
    </div>
  )
}

PagenationBar.propsTypes = {
  numOfPage: PropTypes.number,
  totalPage: PropTypes.number,
}

export default PagenationBar
