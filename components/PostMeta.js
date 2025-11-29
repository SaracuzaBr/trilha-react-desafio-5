import Link from 'next/link';

export default function PostMeta({ post }) {
  const readingTime = Math.ceil((post?.content?.split(' ').length || 0) / 200);

  return (
    <div className="border-t border-b border-gray-300 dark:border-gray-700 py-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Metadados Principais */}
        <div>
          <h3 className="text-lg font-bold mb-4 dark:text-white">Informações do Post</h3>
          <ul className="space-y-3 text-sm">
            {post?.created_at && (
              <li className="flex justify-between">
                <span className="font-semibold dark:text-gray-300">Data de Publicação:</span>
                <span className="dark:text-gray-400">{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
              </li>
            )}
            {post?.updated_at && (
              <li className="flex justify-between">
                <span className="font-semibold dark:text-gray-300">Atualizado em:</span>
                <span className="dark:text-gray-400">{new Date(post.updated_at).toLocaleDateString('pt-BR')}</span>
              </li>
            )}
            {readingTime > 0 && (
              <li className="flex justify-between">
                <span className="font-semibold dark:text-gray-300">Tempo de Leitura:</span>
                <span className="dark:text-gray-400">{readingTime} min</span>
              </li>
            )}
            {post?.author && (
              <li className="flex justify-between">
                <span className="font-semibold dark:text-gray-300">Autor:</span>
                <span className="dark:text-gray-400">{post.author}</span>
              </li>
            )}
          </ul>
        </div>

        {/* Tags e Categorias */}
        <div>
          <h3 className="text-lg font-bold mb-4 dark:text-white">Categorias e Tags</h3>
          <div className="space-y-4">
            {post?.category && (
              <div>
                <p className="font-semibold text-sm mb-2 dark:text-gray-300">Categoria:</p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>
            )}
            {post?.tags && post.tags.length > 0 && (
              <div>
                <p className="font-semibold text-sm mb-2 dark:text-gray-300">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
