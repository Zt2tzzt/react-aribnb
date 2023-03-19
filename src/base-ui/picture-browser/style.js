import styled from 'styled-components'

const PictureBrowsderWrapper = styled.section`
	position: fixed;
	z-index: 999;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	background-color: #333;

	.top {
		position: relative;
		height: 86px;

		.close-btn {
			position: absolute;
			top: 15px;
			right: 25px;
			cursor: pointer;
		}
	}

	.slider {
		flex: 1;
		position: relative;
		display: flex;
		justify-content: center;

		.control {
			position: absolute;
			z-index: 1;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			color: #fff;

			.btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 83px;
				height: 100%;
				cursor: pointer;
			}
		}

		.picture {
			z-index: 9;
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100%;
			max-width: 105vh;

			img {
				user-select: none;
				object-fit: contain;
			}

			/* 动画的样式 */
			.pic-enter {
				transform: translateX(${props => (props.isNext ? '100%' : '-100%')});
				opacity: 0;
			}

			.pic-enter-active {
				transform: translateX(0);
				opacity: 1;
				transition: all 100ms ease;
			}

			.pic-exit {
				opacity: 1;
			}

			.pic-exit-action {
				opacity: 0;
				transform: all 100ms ease;
			}
		}
	}
	.preview {
		display: flex;
		justify-content: center;
		margin-top: 10px;
		width: 100%;
		height: 100px;

		.info {
			position: absolute;
			bottom: 10px;
			max-width: 105vh;
			color: #fff;

			.desc {
				display: flex;
				justify-content: space-between;

				.toggle {
					cursor: pointer;
				}
			}

			.list {
				margin-top: 3px;
				overflow: hidden;
				transition: height 300ms ease;
				height: ${props => props.showList ? '67px' : '0'};

				.item {
					margin-right: 15px;
					cursor: pointer;

					img {
						height: 67px;
						opacity: 0.5;
					}

					&.active {
						img {
							opacity: 1;
						}
					}
				}
			}
		}
	}

`

export default PictureBrowsderWrapper
