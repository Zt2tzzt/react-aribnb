import PictureBrowser from '@/base-ui/picture-browser/PictureBrowser'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import PicturesWrapper from './style'

const Pictures = memo(() => {
	const [showBrowser, setShowBroser] = useState(false)
	const [selectIndex, setSelectIndex] = useState(0);

	const { detailInfo } = useSelector(state => ({
		detailInfo: state.detail.detailInfo
	}))

	const onPicItemClick = index => {
		setSelectIndex(index)
		setShowBroser(true)
	}

	return (
		<PicturesWrapper>
			<div className="left">
				<div className="item" onClick={e => onPicItemClick(0)}>
					<img src={detailInfo?.picture_urls[0]} alt="" />
					<div className="cover"></div>
				</div>
			</div>
			<div className="right">
				{detailInfo?.picture_urls?.slice(1, 5).map((item, index) => (
					<div className="item" key={item} onClick={e => onPicItemClick(index + 1)}>
						<img src={item} alt="" />
						<div className="cover"></div>
					</div>
				))}
			</div>
			<div className="show-btn" onClick={e => setShowBroser(true)}>显示图片</div>
			{showBrowser && (
				<PictureBrowser
					pictureUrls={detailInfo.picture_urls}
					closeClick={e => setShowBroser(false)}
					selectIndex={selectIndex}
				/>
			)}
		</PicturesWrapper>
	)
})

export default Pictures
