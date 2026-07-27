const comparators = {
  stars: (a, b) => a.stargazers_count - b.stargazers_count,
  name: (a, b) => a.name.localeCompare(b.name),
  updated: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
}

export const sortRepos = (repos, field, direction) => {
  const compare = comparators[field] || comparators.stars
  const sorted = [...repos].sort(compare)
  return direction === 'desc' ? sorted.reverse() : sorted
}
