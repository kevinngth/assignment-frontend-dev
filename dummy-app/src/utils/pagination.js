export function paginator(currentPage, totalPages) {
  let pages = [];
  // your code here, have fun!
  let page = currentPage - 2;
  if (currentPage <= 3 || totalPages <= 5) {
    page = 1
  } else if (totalPages - currentPage < 3) {
    page = totalPages - 4
  }
  for ( let i = 0 ; i < 5 ; i++ ) {
    pages.push(page)
    if ( page == totalPages ) {
      break
    } else {
      page++
    }
  }
  return pages;
}
