import React, { useEffect, useContext, useState } from 'react'
import { CrowdFundingContext } from '@/context/CrowdFunding'
import { Hero, Card, PopUp } from '../components/index'

const index = () => {
	const {
		titleData,
		getCampaigns,
		creteCampaign,
		donate,
		getUserCampaigns,
		getDonations,
	} = useContext(CrowdFundingContext)

	useEffect(() => {
		const getCampaignsData = getCampaigns()
		const userCampaignsData = getUserCampaigns()

		const [allCampaign, setAllCampaign] = useState()
		const [userCampaign, setUserCampaign] = useState()

		return async () => {
			const allData = await getCampaignsData
			const userData = await userCampaignsData
			setAllCampaign(allData)
			setUserCampaign(userData)
		}
	}, [])

	const [openModel, setOpenModel] = useState(false)
	const [donateCampaign, setDonateCampaign] = useState()

	console.log(donateCampaign)

	return (
		<>
			<Hero titleData={titleData} creteCampaign={creteCampaign} />
			<Card
				title='All Listed Campaign'
				allCampaign={allCampaign}
				setOpenModel={setOpenModel}
				setDonate={setDonateCampaign}
			/>
			<Card
				title='Your Created Campaign'
				allCampaign={userCampaign}
				setOpenModel={setOpenModel}
				setDonate={setDonateCampaign}
			/>

			{openModel && (
				<PopUp
					setOpenModel={setOpenModel}
					getDonations={getDonations}
					donate={donateCampaign}
					donateFunction={donate}
				/>
			)}
		</>
	)
}

export default index
