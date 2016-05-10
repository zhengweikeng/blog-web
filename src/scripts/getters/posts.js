const posts = ({posts}) => {
  if (Object.keys(posts).length > 0) {
    return posts.catalogues
  }
  return []
}

const total = ({posts, year}) => {
  if (Object.keys(posts).length > 0) {
    return posts.total
  }
  return 0
}

const currPage = ({currPage}) => currPage

export {posts, total, currPage}