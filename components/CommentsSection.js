import { useState } from 'react';

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      const newComment = {
        id: Date.now(),
        ...formData,
        date: new Date().toLocaleDateString('pt-BR'),
      };
      
      setComments((prev) => [newComment, ...prev]);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-12 border-t border-gray-300 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-8 dark:text-white">Comentários</h2>

      {/* Formulário */}
      <div className="mb-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold mb-4 dark:text-white">Deixe um Comentário</h3>
        
        {submitted && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
            ✓ Obrigado! Seu comentário foi enviado com sucesso.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 dark:text-gray-300">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 dark:text-gray-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2 dark:text-gray-300">
              Comentário *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu comentário aqui..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          >
            Enviar Comentário
          </button>
        </form>
      </div>

      {/* Lista de Comentários */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          <p className="font-semibold dark:text-white">{comments.length} Comentário{comments.length !== 1 ? 's' : ''}</p>
          {comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-blue-500 pl-4 py-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-bold dark:text-white">{comment.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{comment.date}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center py-8">
          Nenhum comentário ainda. Seja o primeiro a comentar!
        </p>
      )}
    </section>
  );
}
