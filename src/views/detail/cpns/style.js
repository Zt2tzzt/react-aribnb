import styled from "styled-components";

const PicturesWrapper = styled.div`
	display: flex;
	height: 506px;
	background-color: #000;

	&:hover {
		.cover {
			opacity: 1 !important;
		}

		/* 利用 css 的层叠性 */
		.item:hover {
			.cover {
				opacity: 0 !important;
			}
		}
	}

	.left, .right {
		width: 50%;
		height: 100%;

		.item {
			position: relative;
			height: 100%;
			overflow: hidden;
			cursor: pointer;
			
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.3s ease-in;
			}

			.cover {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background-color: rgba(0,0,0,.3);
				opacity: 0;
				transition: opacity 200ms ease;
			}

			&:hover {
				img {
					transform: scale(1.08);
				}
			}
		}
	}

	.right {
		display: flex;
		flex-wrap: wrap;

		.item {
			width: 50%;
			height: 50%;
			box-sizing: border-box;
			border: 1px #000 solid;
		}
	}
`

export default PicturesWrapper