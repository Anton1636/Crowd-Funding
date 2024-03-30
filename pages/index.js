import React, { useEffect, useContext, useState } from 'react'
import { CrowdFundingContext } from '@/context/CrowdFunding'
import { Hero, Card, PopUp } from '../components/index'

const index = () => {
	const {
		titleData,
		getCampaigns,
		createCampaign,
		donate,
		getUserCampaigns,
		getDonations,
	} = useContext(CrowdFundingContext)

	const [allCampaign, setAllCampaign] = useState()
	const [userCampaign, setUserCampaign] = useState()

	useEffect(() => {
		const getCampaignsData = getCampaigns()
		const userCampaignsData = getUserCampaigns()

		return async () => {
			const allData = await getCampaignsData
			const userData = await userCampaignsData
			setAllCampaign(allData)
			setUserCampaign(userData)
		}
	}, [])

	const [openModel, setOpenModel] = useState(false)
	const [donateCampaign, setDonateCampaign] = useState()

	return (
		<>
			<Hero titleData={titleData} createCampaign={createCampaign} />
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
