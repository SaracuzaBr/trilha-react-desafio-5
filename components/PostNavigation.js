import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function PostNavigation({ previousPost, nextPost }) {
  return (
    <nav className="border-t border-gray-300 dark:border-gray-700 py-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Post Anterior */}
        {previousPost ? (
          <Link href={`/posts/${previousPost.id}`}>
            <a className="group block p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">← Post Anterior</p>
              <h3 className="text-lg font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {previousPost.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 truncate">
                {previousPost.description}
              </p>
            </a>
          </Link>
        ) : (
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 opacity-50">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">← Post Anterior</p>
            <p className="text-gray-500 dark:text-gray-600">Nenhum post anterior</p>
          </div>
        )}

        {/* Próximo Post */}
        {nextPost ? (
          <Link href={`/posts/${nextPost.id}`}>
            <a className="group block p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition text-right">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Próximo Post →</p>
              <h3 className="text-lg font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {nextPost.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 truncate">
                {nextPost.description}
              </p>
            </a>
          </Link>
        ) : (
          <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 opacity-50 text-right">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Próximo Post →</p>
            <p className="text-gray-500 dark:text-gray-600">Nenhum próximo post</p>
          </div>
        )}
      </div>
    </nav>
  );
}
