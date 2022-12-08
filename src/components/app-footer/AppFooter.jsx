import React, { memo } from 'react'
import AppFooterWrapper from './style'
import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
	return (
		<AppFooterWrapper>
			<div className="wrapper">
				<div className="service">
					{footerData.map(item => (
						<div className="item" key={item.name}>
							<div className="name">{item.name}</div>
							<ul className="list">
								{item.list.map(iten => (
									<li className="iten" key={iten}>{iten}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="statement">© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
			</div>
		</AppFooterWrapper>
	)
})

export default AppFooter
