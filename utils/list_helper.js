const dummy = (blog) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (!blogs.length) {
    return 0;
  } else if (blogs.length === 1) {
    return blogs[0].likes;
  } else {
    return blogs.map((blog) => blog.likes).reduce((acc, val) => acc + val);
  }
};

module.exports = {
  dummy,
  totalLikes,
};
