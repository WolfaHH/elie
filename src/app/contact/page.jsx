import Image from 'next/image'
import styles from '@/style/home.module.scss'

const ContactPage = () => {
  // Définissez des états pour les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Gérez le changement des champs du formulaire
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Gérez la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données à un serveur
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-semibold">
            Message :
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
