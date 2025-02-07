import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const BlogList = ({ posts }) => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Latest Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[16/9] bg-gray-100">
                {/* Blog thumbnail would go here */}
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100" />
              </div>

              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">
                  {new Date(post.data.pubDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.data.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.data.description}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read article <ArrowRightIcon className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
