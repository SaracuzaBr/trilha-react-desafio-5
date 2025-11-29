import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
  getPosts,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import PostMeta from '../../components/PostMeta';
import PostNavigation from '../../components/PostNavigation';
import CommentsSection from '../../components/CommentsSection';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  globalData,
  previousPost,
  nextPost,
}) {
  return (
    <Layout>
      <SEO
        title={`${posts.title} - ${globalData.name}`}
        description={posts.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {posts?.title}
          </h1>
          {posts?.description && (
            <p className="text-xl mb-4 text-center opacity-70">{posts?.description}</p>
          )}
        </header>
        
        {/* Seção de Metadados */}
        <PostMeta post={posts} />
        
        {/* Conteúdo Principal */}
        <main>
          <article className="prose dark:prose-dark">
            {posts.body}
          </article>
        </main>

        {/* Navegação entre Posts */}
        <PostNavigation previousPost={previousPost} nextPost={nextPost} />

        {/* Seção de Mais Informações */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 my-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Mais Informações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sobre o Post */}
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-white">Sobre Este Post</h3>
              <ul className="space-y-3 text-sm dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-3">📝</span>
                  <span>
                    <strong>Status:</strong> {posts?.published ? 'Publicado' : 'Rascunho'}
                  </span>
                </li>
                {posts?.author && (
                  <li className="flex items-start">
                    <span className="mr-3">✍️</span>
                    <span>
                      <strong>Autor:</strong> {posts.author}
                    </span>
                  </li>
                )}
                {posts?.category && (
                  <li className="flex items-start">
                    <span className="mr-3">📂</span>
                    <span>
                      <strong>Categoria:</strong> {posts.category}
                    </span>
                  </li>
                )}
                {posts?.created_at && (
                  <li className="flex items-start">
                    <span className="mr-3">📅</span>
                    <span>
                      <strong>Publicado em:</strong> {new Date(posts.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            {/* Recursos do Post */}
            <div>
              <h3 className="text-lg font-bold mb-4 dark:text-white">Recursos</h3>
              <ul className="space-y-3 text-sm dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-3">🏷️</span>
                  <span>
                    <strong>Tags:</strong>{' '}
                    {posts?.tags && posts.tags.length > 0
                      ? posts.tags.join(', ')
                      : 'Nenhuma tag adicionada'}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🔗</span>
                  <span>
                    <strong>Compartilhar:</strong>
                  </span>
                </li>
                <div className="flex gap-3 mt-2 ml-6">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(posts.title)}&url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition"
                    title="Compartilhar no Twitter"
                  >
                    𝕏
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                    title="Compartilhar no LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                    title="Compartilhar no Facebook"
                  >
                    f
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 border-t border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 dark:text-white">Gostou deste artigo?</h3>
          <p className="mb-6 opacity-70 dark:text-gray-300">Compartilhe com seus colegas ou continue explorando nosso blog.</p>
          <Link href="/">
            <a className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              ← Voltar ao Blog
            </a>
          </Link>
        </section>

        {/* Seção de Comentários */}
        <CommentsSection postId={posts?.id} />
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);
  const allPosts = await getPosts();

  // Encontrar índice do post atual
  const currentIndex = allPosts.findIndex((post) => post.id === params.id);

  // Definir posts anterior e próximo
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return {
    props: {
      globalData,
      posts,
      previousPost,
      nextPost,
    },
  };
};

