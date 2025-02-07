import { motion } from "framer-motion";

const BlogList = ({ posts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{post.data.title}</h3>
            <p className="text-gray-600 mb-4">{post.data.description}</p>
            <p className="text-gray-500 text-sm">
              {new Date(post.data.pubDate).toLocaleDateString()}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogList;
