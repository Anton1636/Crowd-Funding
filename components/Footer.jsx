import React from 'react'

const footer = () => {
	const productList = ['Market', 'ERC20 Token', 'Donation']
	const contractList = ['support@mail.com', 'info@mail.com', 'Contact us']
	const usefulLink = ['Home', 'About Us', 'Company Bio']
	return (
		<footer className='text-center text-white backgroundMain lg:text-left'>
			<div className='mx-6 py-10 text-center md:text-left'>
				<div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div>
						<h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
							Company Name
						</h6>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
							itaque libero repellendus tempore id perferendis fugit dolorem
							sapiente. Maxime expedita provident magnam! Ipsum vel cumque saepe
							in porro voluptates veritatis!
						</p>
					</div>
					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Products
						</h6>
						{productList.map((el, i) => (
							<p className='mb-4' key={i + 1}>
								<a href='#!'>{el}</a>
							</p>
						))}
					</div>
					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Useful links
						</h6>
						{usefulLink.map((el, i) => (
							<p className='mb-4' key={i + 1}>
								<a href='#!'>{el}</a>
							</p>
						))}
					</div>
					<div>
						<h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
							Contract
						</h6>
						{contractList.map((el, i) => (
							<p className='mb-4' key={i + 1}>
								<a href='#!'>{el}</a>
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='backgroundMain p-6 text-center'>
				<span>2024 Copyright:</span>
				<a className='font-semibold' href='https://tailwind-elements.com/'>
					Company Name
				</a>
			</div>
		</footer>
	)
}

export default footer
