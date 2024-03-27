import '@/styles/globals.css'
import { Footer, Navbar } from '../components'
import { CrowdFundingProvider } from '../context/CrowdFunding'

export default function App({ Component, pageProps }) {
	return (
		<>
			<CrowdFundingProvider>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</CrowdFundingProvider>
		</>
	)
}
