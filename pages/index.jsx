import Head from 'next/head';
// import Image from 'next/image'
import Navigation from '../components/Navigation';
import Landing from '../components/Landing';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Godnon Dsilva | Portfolio</title>
				<meta name='description' content='Portfolio by Godnon Dsilva' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Toaster
				position='top-right'
				toastOptions={{
					style: {
						backgroundColor: '#333',
						color: '#eee',
						boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
					},
				}}
			/>
			<Navigation />
			<Landing />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
