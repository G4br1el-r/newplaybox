export function handleViewsCommentsLikes() {
  const views = Math.floor(Math.random() * (5000 - 500 + 1)) + 500; // 500 a 3000
  const comments = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // 5 a 20
  const likes = Math.floor(Math.random() * (300 - 50 + 1)) + 50; // 50 a 300

  const formattedViews = views.toLocaleString("pt-BR");
  const formattedComments = comments.toLocaleString("pt-BR");
  const formattedLikes = likes.toLocaleString("pt-BR");
  return { formattedViews, formattedComments, formattedLikes };
}
